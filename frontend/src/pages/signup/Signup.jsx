import React from "react";
import "./style.css";
import { LockKeyhole, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <main className="signup">
      <section className="signupContainer">
        <div className="signupHeader">
          <h1>Signup to Foolivery</h1>
        </div>

        <form>
          <div className="signupInput">
            <User size={22} strokeWidth={1.5} />
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="signupInput">
            <Mail size={22} strokeWidth={1.5} />
            <input type="email" placeholder="Enter your mail" />
          </div>
          <div className="signupInput">
            <Phone size={22} strokeWidth={1.5} />
            <input type="number" placeholder="Enter your phone" />
          </div>
          <div className="signupInput">
            <LockKeyhole size={22} strokeWidth={1.5} />
            <input type="password" placeholder="Enter password" />
          </div>

          <button type="submit">Signup</button>
        </form>
        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
};

export default Signup;
