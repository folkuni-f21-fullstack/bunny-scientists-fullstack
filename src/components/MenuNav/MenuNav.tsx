import { useState } from "react";
import "./MenuNav.scss";

const MenuNav = () => {
  const [foodSelected, setfoodSelected] = useState("");
  const [kidsSelected, setkidsSelected] = useState("");
  const [beveragesSelected, setbeveragesSelected] = useState("");
  const [dessertSelected, setdessertSelected] = useState("");

  window.addEventListener('scroll', () => {
    if (window.innerWidth < 730) {
      if (window.pageYOffset > 240 && window.pageYOffset < 1470) {
        setbeveragesSelected("");
        setkidsSelected("");
        setdessertSelected("");
        setfoodSelected("active");
      } else if (window.pageYOffset > 1471 && window.pageYOffset < 2120) {
        setbeveragesSelected("");
        setkidsSelected("active");
        setdessertSelected("");
        setfoodSelected("");
      } else if (window.pageYOffset > 2121 && window.pageYOffset < 2920) {
        setbeveragesSelected("active");
        setkidsSelected("");
        setdessertSelected("");
        setfoodSelected("");
      } else if (window.pageYOffset > 2921) {
        setbeveragesSelected("");
        setkidsSelected("");
        setdessertSelected("active");
        setfoodSelected("");
      }
    } else if (window.innerWidth > 730) {
      if (window.pageYOffset > 320 && window.pageYOffset < 1441) {
        setbeveragesSelected("");
        setkidsSelected("");
        setdessertSelected("");
        setfoodSelected("active");
      } else if (window.pageYOffset > 1442 && window.pageYOffset < 2030) {
        setbeveragesSelected("");
        setkidsSelected("active");
        setdessertSelected("");
        setfoodSelected("");
      } else if (window.pageYOffset > 2031 && window.pageYOffset < 2900) {
        setbeveragesSelected("active");
        setkidsSelected("");
        setdessertSelected("");
        setfoodSelected("");
      } else if (window.pageYOffset > 2901) {
        setbeveragesSelected("");
        setkidsSelected("");
        setdessertSelected("active");
        setfoodSelected("");
      }
    }
  })

  function scrollToFood() {
    if (window.innerWidth < 730) {
      window.scrollTo(0, 240)
    } else if (window.innerWidth > 730) {
      window.scrollTo(0, 323)
    }
  }
  function scrollToKid() {
    if (window.innerWidth < 730) {
      window.scrollTo(0, 1472)
    } else if (window.innerWidth > 730) {
      window.scrollTo(0, 1444)
    }
  }
  function scrollToBeverage() {
    if (window.innerWidth < 730) {
      window.scrollTo(0, 2122)
    } else if (window.innerWidth > 730) {
      window.scrollTo(0, 2033)
    }
  }
  function scrollToDessert() {
    if (window.innerWidth < 730) {
      window.scrollTo(0, 2922)
    } else if (window.innerWidth > 730) {
      window.scrollTo(0, 2904)
    }
  }

  return (
    <nav className="menu-nav">
      <ul>
        <li>
          <a
            className={foodSelected}
            onClick={scrollToFood}
          >
            Sniglar
          </a>
        </li>
        <span className="vertical-line"></span>
        <li>
          <a
            className={kidsSelected}
            onClick={scrollToKid}>
            Barn
          </a>
        </li>
        <span className="vertical-line"></span>
        <li>
          <a
            className={beveragesSelected}
            onClick={scrollToBeverage}
          >
            Dryck
          </a>
        </li>
        <span className="vertical-line"></span>
        <li>
          <a
            className={dessertSelected}
            onClick={scrollToDessert}
          >
            Efterrätt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
