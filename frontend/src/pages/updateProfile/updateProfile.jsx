import React, { useState } from "react";
import "./style.css"; // New CSS file
import axios from "axios";
import { User as UserIcon, Phone, MapPin, Check } from "lucide-react";

const UpdateProfile = () => {
  const [updatedUser, setUpdatedUser] = useState({
    fullName: "",
    phone: "",
    address: "",
    preferences: {
      dietaryRestrictions: [],
      cuisinePreferences: [],
      allergies: [],
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handlePreferenceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUpdatedUser((prevUser) => {
      const preferences = { ...prevUser.preferences };
      if (type === "checkbox") {
        preferences[name] = preferences[name]
          ? checked
            ? [...preferences[name], value]
            : preferences[name].filter((item) => item !== value)
          : checked
          ? [value]
          : [];
      } else {
        preferences[name] = value;
      }
      return { ...prevUser, preferences };
    });
  };

  const handleUpdate = async () => {
    setLoading(true);
    setError(null);
    setMessage("");
    setSuccess(false);
    try {
      const response = await axios.patch(
        "http://localhost:5000/update",
        updatedUser,
        {
          withCredentials: true,
        }
      );
      setMessage(response.data.message);
      setSuccess(response.data.success);
      setLoading(false);
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    } catch (err) {
      console.error("Error updating profile:", err);
      setError(err.response?.data?.message || "Failed to update profile.");
      setLoading(false);
    }
  };
  return (
    <main className="update-profile">
      <section className="update-profileContainer">
        <div className="update-profileHeader">
          <h1>Update Your Profile</h1>
        </div>

        {message && (
          <div className={success ? "successMessage" : "errorMessage"}>
            {message}
          </div>
        )}
        {error && <div className="errorMessage">{error}</div>}

        <div className="update-profileDetails">
          <section className="detailSection">
            <h2>Personal Information</h2>
            <div className="detailItem">
              <UserIcon size={20} strokeWidth={1.5} className="icon" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={updatedUser.fullName}
                onChange={handleChange}
                className="inputField"
                placeholder="Full Name"
              />
            </div>
            <div className="detailItem">
              <Phone size={20} strokeWidth={1.5} className="icon" />
              <input
                type="text"
                id="phone"
                name="phone"
                value={updatedUser.phone}
                onChange={handleChange}
                className="inputField"
                placeholder="Phone Number"
              />
            </div>
            <div className="detailItem">
              <MapPin size={20} strokeWidth={1.5} className="icon" />
              <input
                type="text"
                id="address"
                name="address"
                value={updatedUser.address}
                onChange={handleChange}
                className="inputField"
                placeholder="Address"
              />
            </div>
          </section>

          <section className="detailSection">
            <h2>Preferences</h2>
            <div className="preferenceGroup">
              <h3 className="preferenceTitle">Dietary Restrictions</h3>
              <ul className="preferenceList">
                {["Vegetarian", "Vegan", "Gluten-Free", "Non-Vegetarian"].map(
                  (option) => (
                    <li key={option}>
                      <label className="checkboxLabel">
                        <input
                          type="checkbox"
                          name="dietaryRestrictions"
                          value={option}
                          checked={
                            updatedUser.preferences?.dietaryRestrictions?.includes(
                              option
                            ) || false
                          }
                          onChange={handlePreferenceChange}
                        />
                        {option}
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="preferenceGroup">
              <h3 className="preferenceTitle">Cuisine Preferences</h3>
              <ul className="preferenceList">
                {["Indian", "Italian", "Chinese", "Mexican", "American"].map(
                  (option) => (
                    <li key={option}>
                      <label className="checkboxLabel">
                        <input
                          type="checkbox"
                          name="cuisinePreferences"
                          value={option}
                          checked={
                            updatedUser.preferences?.cuisinePreferences?.includes(
                              option
                            ) || false
                          }
                          onChange={handlePreferenceChange}
                        />
                        {option}
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="preferenceGroup">
              <h3 className="preferenceTitle">Allergies</h3>
              <div className="allergyInput">
                <input
                  type="text"
                  id="allergies"
                  name="allergies"
                  value={updatedUser.preferences?.allergies?.join(", ") || ""}
                  onChange={(e) =>
                    handlePreferenceChange({
                      target: {
                        name: "allergies",
                        value: e.target.value
                          .split(",")
                          .map((item) => item.trim()),
                      },
                    })
                  }
                  className="inputField"
                  placeholder="e.g., Peanuts, Dairy, Gluten"
                />
              </div>
            </div>
          </section>

          <button
            onClick={handleUpdate}
            className="updateButton"
            disabled={loading}
          >
            {loading ? <div className="loader small"></div> : "Update Profile"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default UpdateProfile;
