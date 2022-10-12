import "./Header.scss";
import Logo from "../../assets/logo.svg";
import { IoIosCart } from "react-icons/io";
import { useState } from "react";
const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [burgerMenuClass, setBurgerMenuClass] = useState<string>("burger");

  const toggleNav = () => {
    if (!navOpen) {
      setBurgerMenuClass("burger open");
      setNavOpen(true);
    } else {
      setBurgerMenuClass("burger");
      setNavOpen(false);
    }
  };
  return (
    <header>
      <nav className="nav-container">
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
    </header>
  );
};

export default Header;
