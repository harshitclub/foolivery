import React, { useState, useContext } from "react";
import "./style.css";
import { LockKeyhole, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Toaster, toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email) {
      setError("Email is required");
      setLoading(false);
      return;
    }
    if (!password) {
      setError("Password is required");
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setError("Password should be at least 8 characters");
      setLoading(false);
      return;
    }

    try {
      console.log("Calling login function from context with:", {
        email,
        password,
      }); // Add this
      const success = await login({ email, password });
      console.log("Login function returned:", success); // and this

      if (success) {
        toast.success("Login successful!");
        setEmail("");
        setPassword("");
        navigate("/profile");
      } else {
        setError("Login failed (check credentials)"); // Explicit error
        toast.error("Login failed. Please check your email and password.");
      }
    } catch (err) {
      const errorMessage = err.message || "Login Failed";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Login error:", err); // Log the full error
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="signup">
      <Toaster richColors />
      <section className="signupContainer">
        <div className="signupHeader">
          <h1>Login to Foolivery</h1>
        </div>

        <form onSubmit={handleLogin}>
          <div className="signupInput">
            <Mail size={22} strokeWidth={1.5} />
            <input
              type="email"
              placeholder="Enter your mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="signupInput">
            <LockKeyhole size={22} strokeWidth={1.5} />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p>
          Don&apos;t have an account? <Link to="/signup">Signup</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
