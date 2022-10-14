import "./MenuCard.scss";
import { MenuItem } from '../../models/data'

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";


export default function MenuCard(menuItem:MenuItem) {
    // console.log(menuItem.menuItem.image)
    const [menuCardClass, setMenuCardClass] = useState<string>("menucard-container");
    const [menuCardOpen, setMenuCardOpen] = useState<boolean>(false);

    const toggleDrop = () => {
        if (!menuCardOpen) {
            setMenuCardClass("menucard-container-open");
            setMenuCardOpen(true);
          } else {
            setMenuCardClass("menucard-container");
            setMenuCardOpen(false);
          }        
    }

    return (
        <article onClick={toggleDrop} className={menuCardClass}>
            <h3 className="title">{menuItem.menuItem.name}</h3>
            <p className="price">{menuItem.menuItem.price} kr</p>
            <p className="desc">{menuItem.menuItem.description}</p>
            <img className="image" src={menuItem.menuItem.image} alt="" />
            
          {/* <IoMdArrowDropdown className="menucard-drop"/> */}
        </article>
    )
}
