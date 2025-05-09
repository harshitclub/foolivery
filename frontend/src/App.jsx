import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/global/navbar/Navbar";
import Footer from "./components/global/footer/Footer";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/updateProfile/updateProfile";
import ChangePassword from "./pages/change-password/ChangePassword";
import { AuthContextProvider, AuthContext } from "./context/AuthContext"; // Import both
import { useContext } from "react";

function App() {
  return (
    <AuthContextProvider>
      <AppContent /> {/* Render a child component that uses the context */}
    </AuthContextProvider>
  );
}

function AppContent() {
  const { currentUser, loading } = useContext(AuthContext);

  // Initial loading screen
  if (loading) {
    return (
      <div>
        <Navbar />
        <main className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const AuthRedirect = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            <AuthRedirect>
              <Login />
            </AuthRedirect>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRedirect>
              <Signup />
            </AuthRedirect>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-profile"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
