import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/global/navbar/Navbar";
import Footer from "./components/global/footer/Footer";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
