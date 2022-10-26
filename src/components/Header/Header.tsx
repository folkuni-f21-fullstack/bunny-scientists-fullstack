import "./Header.scss";
import Logo from "../../assets/logo.svg";
import Cart from "./Cart/Cart";
import { IoIosCart, IoIosLogOut } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../App";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { CartItem } from "../../models/data";
import { BiLogOut } from "react-icons/bi";

type Props = {
  isAdminView: boolean;
  setIsAdminView: (isAdminView: boolean) => void;
};

const Header = ({ setIsAdminView, isAdminView }: Props) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [burgerMenuClass, setBurgerMenuClass] = useState<string>("burger");
  const [navOpenClass, setNavOpenClass] = useState<string>("nav-accordion");
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartMenuClass, setCartMenuClass] = useState<string>("cart-overlay");
  // const [cartOpenClass, setCartOpenClass] = useState<string>("");
  const dispatch = useDispatch();
  // diplay amount of articles in cart
  const productList = useSelector((state: RootState) => state.cart);
  let newList = productList.map((f) => f.amount);
  let displayAmount = [...newList].reduce((a, b) => a + b, 0);

  const toggleNav = () => {
    if (!navOpen) {
      setBurgerMenuClass("burger open");
      setNavOpenClass("nav-accordion-open");
      setNavOpen(true);
      setCartMenuClass("cart-overlay");
      setCartOpen(false);
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
      setBurgerMenuClass("burger");
      setNavOpen(false);
      setNavOpenClass("nav-accordion");
      console.log("cart öppnas");
    } else {
      setCartMenuClass("cart-overlay");
      setCartOpen(false);
      console.log("Cart stängs");
    }
  };

  return (
    <>
      {/* kollar ifall admin finns i URL */}
      {window.location.href.includes("admin") || isAdminView ? (
        <header className="header">
          <div className="header-container">
            <div className="header-desktop">
              <div className="logo-container-desktop">
                <img className="logo" src={Logo} alt="" />
              </div>

              <div
                className="logout-container"
                onClick={() => {
                  setIsAdminView(false);
                }}
              >
                <Link className="logout" to="/">
                  <h1 className="logout-text">LOGGA UT</h1>
                  <BiLogOut className="logout-icon" />
                </Link>
              </div>
            </div>
            <div className="logo-container">
              <img className="logo" src={Logo} alt="" />
            </div>

            <div
              className="logout-container"
              onClick={() => {
                setIsAdminView(false);
              }}
            >
              <Link className="logout" to="/">
                <h1 className="logout-text">LOGGA UT</h1>
                <BiLogOut className="logout-icon" />
              </Link>
            </div>
          </div>
        </header>
      ) : (
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
                {displayAmount > 0 && (
                  <p className="cart-counter">{displayAmount}</p>
                )}
                <IoIosCart className="cart" onClick={() => toggleCart()} />
                <Cart cartMenuClass={cartMenuClass} />
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
              {displayAmount > 0 && (
                <p className="cart-counter">{displayAmount}</p>
              )}
              <IoIosCart className="cart" onClick={() => toggleCart()} />
              <Cart cartMenuClass={cartMenuClass} />
            </div>
          </div>
          <div className={navOpenClass}>
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    scrollToTop();
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
                    scrollToTop();
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
                    scrollToTop();
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
                  scrollToTop();
                  toggleNav();
                }}
              >
                <BiLogIn className="login-icon" />
                Log in Admin
              </Link>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
