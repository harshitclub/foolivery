import React, { useContext, useState } from "react";
import "./style.css";
import logo from "../../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <header className="flex alignCenter">
      <nav className="flex alignCenter">
        <div className="logo flex alignCenter">
          <Link to="/">
            <img src={logo} alt="Foolivery Logo" />
          </Link>
        </div>
        <div className={`menu ${!toggleMenu ? "" : "showMenu"}`}>
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/recipe-generator">Recipe</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {currentUser ? (
              <>
                <li>
                  <Link to="/profile">{currentUser.fullName}</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
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
  );
};

export default Navbar;
