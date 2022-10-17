import "./Header.scss";
import Logo from "../../assets/logo.svg";
import { IoIosCart } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../App";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [burgerMenuClass, setBurgerMenuClass] = useState<string>("burger");
  const [navOpenClass, setNavOpenClass] = useState<string>("nav-accordion");


  const toggleNav = () => {
    if (!navOpen) {
      setBurgerMenuClass("burger open");
      setNavOpenClass("nav-accordion-open");
      setNavOpen(true);
      console.log("accordion öppnas")
    } else {
      setBurgerMenuClass("burger");
      setNavOpen(false);
      setNavOpenClass("nav-accordion");
      console.log("accordion stängs")
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-desktop">
          <div className="logo-container-desktop">
            <img className="logo" src={Logo} alt="" />
          </div>
          <nav className="desktop-nav">
            <Link className="desktop-nav-link" to="/" onClick={scrollToTop}>
              Hem
            </Link>
            <Link className="desktop-nav-link" to="/about" onClick={scrollToTop}>
              Om oss
            </Link>
            <Link className="desktop-nav-link" to="/orders" onClick={scrollToTop}>
              Beställningar
            </Link>
          </nav>
          <div className="cart-container">
            <IoIosCart className="cart" />
          </div>
        </div>
        <nav className="nav-button-container">
          <div className={burgerMenuClass} onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <div className="logo-container">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="cart-container">
          <IoIosCart className="cart" />
        </div>
      </div>
      <div className={navOpenClass}>
        <ul>
          <li>
            <Link to="/" onClick={() => toggleNav()}>
              Hem
            </Link>
          </li>
          <div className="line"></div>
          <li>
            <Link to="/about" onClick={() => toggleNav()}>
              Om oss
            </Link>
          </li>
          <div className="line"></div>
          <li>
            <Link to="/orders" onClick={() => toggleNav()}>
              Beställningar
            </Link>
          </li>
          <div className="line"></div>
        </ul>
        <div className="login-container">
          <Link to="/login" onClick={() => toggleNav()}>
            <BiLogIn className="login-icon" />
            Log in Admin
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
