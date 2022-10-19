import "./MenuCard.scss";
import { MenuItem } from '../../models/data'

import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";


export default function MenuCard(menuItem:MenuItem) {
    // console.log(menuItem.menuItem.image)
    const [menuCardContainer, setMenuCardContainer] = useState<string>("menucard-container");
    const [menuCardContainerOpen, setMenuCardContainerOpen] = useState<boolean>(false);

    const toggleDrop = () => {
       if (window.innerWidth < 730){ if (!menuCardContainerOpen) {
            setMenuCardContainer("menucard-container-open");
            setMenuCardContainerOpen(true);
          } else {
            setMenuCardContainer("menucard-container");
            setMenuCardContainerOpen(false);
          } 
        }       
      }

      window.addEventListener('resize', () => {
        if (window.innerWidth > 730){
          setMenuCardContainer("menucard-container");
          setMenuCardContainerOpen(false);
        }
      })

    return (
        <article className={menuCardContainer}>
          <div onClick={toggleDrop} className="menucard">
                <div className="title-container">
                  <h3 className="title">{menuItem.menuItem.name}</h3>
                  <p className="price">{menuItem.menuItem.price} kr</p>
                </div>

                <p className="desc">{menuItem.menuItem.description}</p>
                <figure className="image-container"><img className="image" src={menuItem.menuItem.image} alt="" /></figure>
                <div className="dropdown-fig"><IoMdArrowDropdown /></div>
          </div>
                <div className="btn-container"><button className="add-btn">Lägg till</button></div>
        </article>
    )
}
