import React from "react";
import "./style.css"; // New CSS file
import logo from "../../assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <main className="contact">
      <section className="contactContainer">
        <div className="contactHeader">
          <div className="logoContainer">
            <img src={logo} alt="Foolivery Logo" className="logo" />
          </div>
          <h1>Contact Foolivery</h1>
          <p className="subheader">
            We'd love to hear from you! Reach out with any questions, feedback,
            or support inquiries.
          </p>
        </div>

        <div className="contactDetails">
          <section className="detailSection">
            <h2>Contact Information</h2>
            <div className="detailItem">
              <MapPin size={20} strokeWidth={1.5} className="icon" />
              <p>
                <strong>Address:</strong>
                <span>
                  Foolivery Headquarters, Sector 16, Noida, UP, India
                </span>{" "}
                {/* Replace with your actual address */}
              </p>
            </div>
            <div className="detailItem">
              <Phone size={20} strokeWidth={1.5} className="icon" />
              <p>
                <strong>Phone:</strong>
                <span>+91-8800-FOOLIVRY (8800-3665483)</span>{" "}
                {/* Replace with your actual phone number */}
              </p>
            </div>
            <div className="detailItem">
              <Mail size={20} strokeWidth={1.5} className="icon" />
              <p>
                <strong>Email:</strong>
                <span>support@foolivery.com</span>{" "}
                {/* Replace with your actual email address */}
              </p>
            </div>
          </section>

          <section className="detailSection">
            <h2>Send Us a Message</h2>
            <form className="contactForm">
              <div className="formGroup">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="inputField"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="inputField"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  className="inputField"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  className="inputField"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submitButton">
                Send Message
              </button>
            </form>
          </section>
        </div>

        <div className="contactFooter">
          <p>
            &copy; {new Date().getFullYear()} Foolivery. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
