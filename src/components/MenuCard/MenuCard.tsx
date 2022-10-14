import "./MenuCard.scss";
import { MenuItem } from '../../models/data'
import bild from '../../assets/menu/menu-item-1.jpg'

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";


export default function MenuCard(menuItem:MenuItem) {
    console.log(menuItem.menuItem.image)
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
            <div className="menucard-image-container">
                <figure className="menucard-figure"  >
                    <img className="menucard-image" src={menuItem.menuItem.image} alt="" />
                    </figure>
            </div>

            <div className="menucard-dropdown">
            <header className="menucard-header"><h3 className="menucard-title">{menuItem.menuItem.name}</h3><h3 className="menucard-price">{menuItem.menuItem.price} kr</h3></header>
            <div className="menucard-info">
                <span className="menucard-desc">{menuItem.menuItem.description}</span> 
                <div className="white-fade"></div>
            </div>  
            

            </div>
           
          <IoMdArrowDropdown className="menucard-drop"/>
        </article>
    )
}
