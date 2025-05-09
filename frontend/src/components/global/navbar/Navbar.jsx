import "./style.css";
import logo from "../../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState(null);
  const getProfile = async () => {
    const profile = await axios.get("http://localhost:5000/profile", {
      withCredentials: true,
    });
    setUser(profile.data.data);
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <header className="flex alignCenter">
        <nav className="flex alignCenter">
          <div className="logo flex alignCenter">
            <img src={logo} />
          </div>
          <div className={`menu ${!toggleMenu ? "" : "showMenu"}`}>
            <ul className="flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href={`/${user ? "profile" : "login"}`}>
                  {user ? user.fullName : "Login"}
                </a>
              </li>
            </ul>
          </div>
          <div className="menuIcon">
            {toggleMenu ? (
              <X
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
            ) : (
              <Menu
                onClick={() => {
                  setToggleMenu(true);
                }}
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
