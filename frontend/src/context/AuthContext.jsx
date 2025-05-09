import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("http://localhost:5000/profile", {
        withCredentials: true,
      });
      setCurrentUser(res.data.data);
      setLoading(false);
    } catch (err) {
      setCurrentUser(null); // Profile fetch failed, user is not logged in
      setLoading(false);
      // Optionally log the error for debugging:
      console.error(
        "Error fetching profile on app load:",
        err.response?.data?.message || err.message
      );
    }
  };

  useEffect(() => {
    fetchProfile(); // Fetch profile on component mount
  }, []);

  const login = async (inputs) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post("http://localhost:5000/login", inputs, {
        withCredentials: true,
      });
      setCurrentUser(res.data.data); // Assuming your login response returns user data
      setLoading(false);
      return true; // Indicate successful login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
      setLoading(false);
      return false; // Indicate failed login
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, error, login }}>
      {children}
    </AuthContext.Provider>
  );
};
