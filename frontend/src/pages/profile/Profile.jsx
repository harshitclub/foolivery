import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const getProfile = async () => {
    const profile = await axios.get("http://localhost:5000/profile", {
      withCredentials: true,
    });
    setUser(profile.data.data);
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <main>
      <h1>{user ? user.fullName : null}</h1>
    </main>
  );
};

export default Profile;
