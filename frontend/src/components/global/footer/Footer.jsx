import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Footer = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <footer className="flex alignCenter">
      <div className="fContainer flex">
        <div className="fTab">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {currentUser ? (
                <Link to="/profile">Profile</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <div className="fTab">
          <h3>CATEGORIES</h3>
          <ul>
            <li>
              <Link to="/">Top Categories</Link>
            </li>
            <li>
              <Link to="/">Best Rated</Link>
            </li>
            <li>
              <Link to="/">Best Price</Link>
            </li>
            <li>
              <Link to="/">Latest Submissions</Link>
            </li>
          </ul>
        </div>
        <div className="fTab">
          <h3>CONTACTS</h3>
          <ul>
            <li>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                97845 Baker st. 567
                <br />
                Los Angeles - US
              </a>
            </li>
            <li>
              <a href="tel:+918800FOOLIVRY">+91 8800-FOOLIVRY</a>{" "}
              {/* Example Phone */}
            </li>
            <li>
              <a href="/">Support</a> {/* Example Link */}
            </li>
            <li>
              <a href="mailto:support@foolivery.com">support@foolivery.com</a>{" "}
              {/* Example Email */}
            </li>
          </ul>
        </div>
        <div className="fTab">
          <h3>KEEP IN TOUCH</h3>
          <input placeholder="Your Email" />
          {currentUser && (
            <p className="loggedInAs">
              Logged in as: {currentUser.fullName || currentUser.email}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
