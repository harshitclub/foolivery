import React from "react";
import "./style.css";
import { LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main className="signup">
      <section className="signupContainer">
        <div className="signupHeader">
          <h1>Login to Foolivery</h1>
        </div>

        <form>
          <div className="signupInput">
            <Mail size={22} strokeWidth={1.5} />
            <input type="email" placeholder="Enter your mail" />
          </div>

          <div className="signupInput">
            <LockKeyhole size={22} strokeWidth={1.5} />
            <input type="password" placeholder="Enter password" />
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
