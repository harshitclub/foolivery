import React, { useState } from "react";
import "./style.css";
import { LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <main className="signup">
      <section className="signupContainer">
        <div className="signupHeader">
          <h1>Login to Foolivery</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="signupInput">
            <Mail size={22} strokeWidth={1.5} />
            <input
              type="email"
              placeholder="Enter your mail"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="signupInput">
            <LockKeyhole size={22} strokeWidth={1.5} />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <p>
          Don&apos;t have account? <Link to="/signup">Signup</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
