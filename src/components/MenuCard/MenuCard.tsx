import { MenuItem } from '../../models/data';
import "./MenuCard.scss";

import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";


export default function MenuCard(props:any) {
    const menuItem: MenuItem = props.menuItem
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
        <article  className={menuCardClass}>
          <div className="title-container">
            <h3 className="title">{menuItem.name}</h3>
            <p className="price">{menuItem.price} kr</p>
          </div>
            
            
            <p className="desc">{menuItem.description}</p>
            <figure className="image-container">
              <img className="image" src={menuItem.image} alt="" />
            </figure>
            
            <div className="btn">
              <button className="add-btn">Lägg till</button>
            </div>
            <div onClick={toggleDrop} className="menucard-drop"><IoMdArrowDropdown /></div>
          
        </article>
    )
}
