import React, { useState } from "react";
import "./style.css"; // New CSS file
import axios from "axios";
import { LockKeyhole } from "lucide-react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async () => {
    setError("");
    setMessage("");
    setSuccess(false);
    setLoading(true);

    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.patch(
        "http://localhost:5000/change-password", // Replace with your actual API endpoint
        { oldPassword, newPassword },
        { withCredentials: true }
      );
      setMessage(response.data.message);
      setSuccess(response.data.success);
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setLoading(false);
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    } catch (err) {
      console.error("Error changing password:", err);
      setError(err.response?.data?.message || "Failed to change password.");
      setLoading(false);
    }
  };

  return (
    <main className="change-password">
      <section className="change-passwordContainer">
        <div className="change-passwordHeader">
          <h1>Change Password</h1>
        </div>

        {message && (
          <div className={success ? "successMessage" : "errorMessage"}>
            {message}
          </div>
        )}
        {error && <div className="errorMessage">{error}</div>}

        <div className="change-passwordDetails">
          <section className="detailSection">
            <h2>Update Your Password</h2>
            <div className="detailItem">
              <LockKeyhole size={20} strokeWidth={1.5} className="icon" />
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="inputField"
                placeholder="Current Password"
                required
              />
            </div>
            <div className="detailItem">
              <LockKeyhole size={20} strokeWidth={1.5} className="icon" />
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="inputField"
                placeholder="New Password"
                required
              />
            </div>
            <div className="detailItem">
              <LockKeyhole size={20} strokeWidth={1.5} className="icon" />
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="inputField"
                placeholder="Confirm New Password"
                required
              />
            </div>
          </section>

          <button
            onClick={handleChangePassword}
            className="changePasswordButton"
            disabled={loading}
          >
            {loading ? <div className="loader small"></div> : "Change Password"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default ChangePassword;
