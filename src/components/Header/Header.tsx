import "./Header.scss";
import Logo from "../../assets/logo.svg";
import Cart from "./Cart/Cart";
import { IoIosCart } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../App";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [burgerMenuClass, setBurgerMenuClass] = useState<string>("burger");
  const [navOpenClass, setNavOpenClass] = useState<string>("nav-accordion");
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartMenuClass, setCartMenuClass] = useState<string>("cart-overlay");
  const [cartOpenClass, setCartOpenClass] = useState<string>("");

  const toggleNav = () => {
    if (!navOpen) {
      setBurgerMenuClass("burger open");
      setNavOpenClass("nav-accordion-open");
      setNavOpen(true);
      console.log("accordion öppnas");
    } else {
      setBurgerMenuClass("burger");
      setNavOpen(false);
      setNavOpenClass("nav-accordion");
      console.log("accordion stängs");
    }
  };
  const toggleCart = () => {
    if (!cartOpen) {
      setCartMenuClass("cart-overlay-open");
      setCartOpen(true);
      console.log("cart öppnas");
    } else {
      setCartMenuClass("cart-overlay");
      setCartOpen(false);
      console.log("Cart stängs");
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-desktop">
          <Link to="/">
            <div className="logo-container-desktop">
              <img className="logo" src={Logo} alt="" />
            </div>
          </Link>
          <nav className="desktop-nav">
            <Link className="desktop-nav-link" to="/" onClick={scrollToTop}>
              Hem
            </Link>
            <Link
              className="desktop-nav-link"
              to="/about"
              onClick={scrollToTop}
            >
              Om oss
            </Link>
            <Link
              className="desktop-nav-link"
              to="/orders"
              onClick={scrollToTop}
            >
              Beställningar
            </Link>
          </nav>
          <div className="cart-container">
            <IoIosCart className="cart" onClick={() => toggleCart()} />
            <Cart cartMenuClass={cartMenuClass} cartOpenClass={cartOpenClass} />
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
        <Link to="/">
          <div className="logo-container">
            <img className="logo" src={Logo} alt="" />
          </div>
        </Link>
        <div className="cart-container">
          <IoIosCart className="cart" onClick={() => toggleCart()} />
          <Cart cartMenuClass={cartMenuClass} cartOpenClass={cartOpenClass} />
        </div>
      </div>
      <div className={navOpenClass}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                toggleNav();
              }}
            >
              Hem
            </Link>
          </li>
          <div className="line"></div>
          <li>
            <Link
              to="/about"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                toggleNav();
              }}
            >
              Om oss
            </Link>
          </li>
          <div className="line"></div>
          <li>
            <Link
              to="/orders"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                toggleNav();
              }}
            >
              Beställningar
            </Link>
          </li>
          <div className="line"></div>
        </ul>
        <div className="login-container">
          <Link
            to="/login"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              toggleNav();
            }}
          >
            <BiLogIn className="login-icon" />
            Log in Admin
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
