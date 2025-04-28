import React, { useState } from "react";
import "./style.css";
import { LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="signupInput">
            <LockKeyhole size={22} strokeWidth={1.5} />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
