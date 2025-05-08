import "./style.css";
import logo from "../../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <header className="flex alignCenter">
        <nav className="flex alignCenter">
          <div className="logo flex alignCenter">
            <img src={logo} />
          </div>
          <div className="menu">
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
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
