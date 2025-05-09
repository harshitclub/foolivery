import React, { useState } from "react";
import "./style.css";
import { LockKeyhole, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log(data);

    alert("Signup Success");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <main className="signup">
      <section className="signupContainer">
        <div className="signupHeader">
          <h1>Signup to Foolivery</h1>
        </div>

        <form onSubmit={handleSignUp}>
          <div className="signupInput">
            <User size={22} strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Enter your full name"
              name="fullName"
              onChange={handleChange}
              value={user.fullName}
            />
          </div>
          <div className="signupInput">
            <Mail size={22} strokeWidth={1.5} />
            <input
              type="email"
              placeholder="Enter your mail"
              name="email"
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div className="signupInput">
            <Phone size={22} strokeWidth={1.5} />
            <input
              type="number"
              placeholder="Enter your phone"
              name="phone"
              onChange={handleChange}
              value={user.phone}
            />
          </div>
          <div className="signupInput">
            <LockKeyhole size={22} strokeWidth={1.5} />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
              value={user.password}
            />
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
