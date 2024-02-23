import "./Navbar.css";
import contact from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* <img src={logo} alt="logo" className="logo"></img> */}
      <span className="logo-name">Mamta Poojary</span>
      <div className="desktop-menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          className="desktop-menu-item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          className="desktop-menu-item"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          className="desktop-menu-item"
        >
          Work
        </Link>
      </div>
      <button
        className="desktop-menu-button btn "
        onClick={() => {
          document
            .querySelector("#contact-page")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact} alt="" className="btn-image "></img>
        Contact Me
      </button>

      <img
        src={menu}
        alt="menu"
        className="mob-menu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      ></img>
      <div className="nav-menu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          className="menu-item"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          className="menu-item"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          className="menu-item"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Work
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          className="menu-item"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
