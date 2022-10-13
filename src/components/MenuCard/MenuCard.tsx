import "./MenuCard.scss";
import { Menu } from '../../models/data'
import bild from '../../assets/menu/menu-item-1.jpg'

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";

// interface MenuCardProps {
//     menu: Menu;
    
// };

export default function MenuCard() {
    
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
                <figure className="menucard-figure">
                    <img className="menucard-image" src={bild} alt="" />
                    </figure>
            </div>

            <div className="menucard-dropdown">
            <header className="menucard-header"><h3 className="menucard-title">Escargots</h3><h3 className="menucard-price">119kr</h3></header>
            <div className="menucard-info">
                <span className="menucard-desc">Escargots with mushroom, artichoke bottom, spinach, Béchamel sauce. Topped with melted cheese</span> 
                <div className="white-fade"></div>
            </div>  
            

            </div>
           
          <IoMdArrowDropdown className="menucard-drop"/>
        </article>
    )
}
