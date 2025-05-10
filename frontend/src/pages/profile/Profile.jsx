import React, { useContext } from "react";
import "./style.css"; // New CSS file for profile
import {
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Gift,
  Edit,
  Key,
  LogOut,
} from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { currentUser, loading, error } = useContext(AuthContext);

  if (loading) {
    return (
      <main className="profile loading">
        <div className="spinner"></div>
        <p>Loading profile...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="profile error">
        <p>{error}</p>
      </main>
    );
  }

  // If currentUser is null (not logged in), redirect to login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="profile">
      <section className="profileContainer">
        <div className="profileHeader">
          <div className="avatar-container">
            <img
              src={
                currentUser.profilePicture ||
                "https://placehold.co/100x100?text=Foolivery&bgColor=%23fbf3cc&textColor=%23333"
              }
              alt={currentUser.fullName}
              className="avatar"
            />
          </div>
          <h1>{currentUser.fullName}</h1>
          {currentUser.bio && <p className="user-bio">{currentUser.bio}</p>}
        </div>

        <div className="profileActions">
          <Link to="/update-profile" className="actionLink">
            <Edit size={20} strokeWidth={1.5} className="icon" />
            <span>Update Profile</span>
          </Link>
          <Link to="/change-password" className="actionLink">
            <Key size={20} strokeWidth={1.5} className="icon" />
            <span>Change Password</span>
          </Link>
          <button className="actionLink">
            <LogOut size={20} strokeWidth={1.5} className="icon" />
            <span>Logout</span>
          </button>
        </div>

        <div className="profileDetails">
          <section className="detailSection">
            <h2>Personal Information</h2>
            <div className="detailItem">
              <Mail size={20} strokeWidth={1.5} className="icon" />
              <span>{currentUser.email}</span>
            </div>
            <div className="detailItem">
              <Phone size={20} strokeWidth={1.5} className="icon" />
              <span>{currentUser.phone}</span>
            </div>
            {currentUser.address && (
              <div className="detailItem">
                <MapPin size={20} strokeWidth={1.5} className="icon" />
                <span>{currentUser.address}</span>
              </div>
            )}
          </section>

          {currentUser.deliveryAddresses &&
            currentUser.deliveryAddresses.length > 0 && (
              <section className="detailSection">
                <h2>Delivery Addresses</h2>
                <ul className="addressList">
                  {currentUser.deliveryAddresses.map((address) => (
                    <li key={address._id} className="addressItem">
                      {address.label && (
                        <strong className="addressLabel">
                          {address.label}:
                        </strong>
                      )}{" "}
                      {address.street}, {address.city}, {address.state} -{" "}
                      {address.postalCode}, {address.country}
                      {address.isDefault && (
                        <span className="defaultBadge">Default</span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}

          {currentUser.preferences && (
            <section className="detailSection">
              <h2>Preferences</h2>
              {currentUser.preferences.dietaryRestrictions &&
                currentUser.preferences.dietaryRestrictions.length > 0 && (
                  <div className="preferenceGroup">
                    <h3 className="preferenceTitle">Dietary Restrictions</h3>
                    <ul className="preferenceList">
                      {currentUser.preferences.dietaryRestrictions.map(
                        (pref, index) => (
                          <li key={index}>{pref}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {currentUser.preferences.cuisinePreferences &&
                currentUser.preferences.cuisinePreferences.length > 0 && (
                  <div className="preferenceGroup">
                    <h3 className="preferenceTitle">Cuisine Preferences</h3>
                    <ul className="preferenceList">
                      {currentUser.preferences.cuisinePreferences.map(
                        (pref, index) => (
                          <li key={index}>{pref}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {currentUser.preferences.allergies &&
                currentUser.preferences.allergies.length > 0 && (
                  <div className="preferenceGroup">
                    <h3 className="preferenceTitle">Allergies</h3>
                    <ul className="preferenceList">
                      {currentUser.preferences.allergies.map(
                        (allergy, index) => (
                          <li key={index}>{allergy}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
            </section>
          )}

          {currentUser.paymentMethods &&
            currentUser.paymentMethods.length > 0 && (
              <section className="detailSection">
                <h2>Payment Methods</h2>
                <ul className="paymentMethodsList">
                  {currentUser.paymentMethods.map((payment) => (
                    <li key={payment.type} className="paymentMethodItem">
                      <CreditCard
                        size={20}
                        strokeWidth={1.5}
                        className="icon"
                      />
                      <span>{payment.type}</span>
                      {payment.isDefault && (
                        <span className="defaultBadge">Default</span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}

          {currentUser.loyaltyPoints !== undefined && (
            <section className="detailSection">
              <h2>Loyalty Points</h2>
              <div className="loyaltyPointsContainer">
                <Gift size={20} strokeWidth={1.5} className="icon" />
                <span className="loyaltyPoints">
                  {currentUser.loyaltyPoints} Points
                </span>
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
};

export default Profile;
