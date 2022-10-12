import { useState } from "react";
import "./MenuNav.scss";

const MenuNav = () => {
  const [foodSelected, setfoodSelected] = useState("");
  const [kidsSelected, setkidsSelected] = useState("");
  const [beveragesSelected, setbeveragesSelected] = useState("");
  const [dessertSelected, setdessertSelected] = useState("");

  function toggleActive(e: any): void {
    if (e.target.innerHTML === "Dryck") {
      setbeveragesSelected("active");
      setkidsSelected("");
      setdessertSelected("");
      setfoodSelected("");
    } else if (e.target.innerHTML === "Barn") {
      setbeveragesSelected("");
      setkidsSelected("active");
      setdessertSelected("");
      setfoodSelected("");
    } else if (e.target.innerHTML === "Mat") {
      setbeveragesSelected("");
      setkidsSelected("");
      setdessertSelected("");
      setfoodSelected("active");
    } else if (e.target.innerHTML === "Efterrätt") {
      setbeveragesSelected("");
      setkidsSelected("");
      setdessertSelected("active");
      setfoodSelected("");
    }
    console.log(e);
  }
  return (
    <nav className="menu-nav">
      <ul>
        <li>
          <a className={foodSelected} onClick={(e) => toggleActive(e)} href="#food"> Mat </a>
        </li>
        <span className="vertical-line"></span>
        <li>
          <a className={kidsSelected}
            onClick={(e) => toggleActive(e)}
            href="#kids">
            Barn
          </a>
        </li>
        <span className="vertical-line"></span>
        <li>
          <a className={beveragesSelected}
            onClick={(e) => toggleActive(e)}
            href="#beverages">
            Dryck
          </a>
        </li>
        <span className="vertical-line"></span>
        <li>
          <a className={dessertSelected}
            onClick={(e) => toggleActive(e)}
            href="#desserts" >
            Efterrätt
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default MenuNav;
