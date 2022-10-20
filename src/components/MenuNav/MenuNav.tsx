import { useState } from "react";
import "./MenuNav.scss";
const MenuNav = () => {
  const [foodSelected, setfoodSelected] = useState("");
  const [kidsSelected, setkidsSelected] = useState("");
  const [beveragesSelected, setbeveragesSelected] = useState("");
  const [dessertSelected, setdessertSelected] = useState("");
  window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset > 320 && window.pageYOffset < 1441){
      setbeveragesSelected("");
      setkidsSelected("");
      setdessertSelected("");
      setfoodSelected("active");
    } else if (window.pageYOffset > 1442 && window.pageYOffset < 2030){
      setbeveragesSelected("");
      setkidsSelected("active");
      setdessertSelected("");
      setfoodSelected("");
    } else if (window.pageYOffset > 2031 && window.pageYOffset < 2900){
      setbeveragesSelected("active");
      setkidsSelected("");
      setdessertSelected("");
      setfoodSelected("");
    } else if (window.pageYOffset > 2901){
      setbeveragesSelected("");
      setkidsSelected("");
      setdessertSelected("active");
      setfoodSelected("");
    }
  })
  return (
    <nav className="menu-nav">
      <ul>
        <li>
          <a
            className={foodSelected}
            onClick={()=>window.scrollTo(0,322)}
          >
            Sniglar
          </a>
        </li>
        <span className="vertical-line"></span>
        <li>
          <a
            className={kidsSelected}
            onClick={()=>window.scrollTo(0,1443)}
          >
            Barn
          </a>
        </li>
        <span className="vertical-line"></span>
        <li>
          <a
            className={beveragesSelected}
            onClick={()=>window.scrollTo(0,2032)}
          >
            Dryck
          </a>
        </li>
        <span className="vertical-line"></span>
        <li>
          <a
            className={dessertSelected}
            onClick={()=>window.scrollTo(0,2902)}
          >
            Efterrätt
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default MenuNav;