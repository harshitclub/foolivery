import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/profile", {
        withCredentials: true,
      });
      if (res.data?.data) {
        setCurrentUser(res.data.data);
        localStorage.setItem("user", JSON.stringify(res.data.data));
      } else {
        setCurrentUser(null);
        localStorage.removeItem("user");
      }
    } catch (err) {
      setCurrentUser(null);
      localStorage.removeItem("user");
      setError(err.response?.data?.message || "Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error parsing stored user data", e);
        localStorage.removeItem("user");
      }
    }

    fetchProfile();
  }, []);

  const login = async (inputs) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post("http://localhost:5000/login", inputs, {
        withCredentials: true,
      });
      if (res.data?.data) {
        setCurrentUser(res.data.data);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setLoading(false);
        return true;
      } else {
        setError("Login failed.  Invalid Credentials");
        setLoading(false);
        return false;
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed!";
      setError(errorMessage);
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, loading, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
