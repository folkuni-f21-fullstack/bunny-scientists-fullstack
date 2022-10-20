import { MenuItem } from '../../models/data';
import "./MenuCard.scss";

import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducers/cartReducer';


export default function MenuCard(props:any) {
    const menuItem: MenuItem = props.menuItem
    const [menuCardContainer, setMenuCardContainer] = useState<string>("menucard-container");
    const [menuCardContainerOpen, setMenuCardContainerOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

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
        <article  className={menuCardContainer}>
          <div onClick={toggleDrop} className="menucard">
            <div className="title-container">
              <h3 className="title">{menuItem.name}</h3>
              <p className="price">{menuItem.price} kr</p>
            </div>
              <p className="desc">{menuItem.description}</p>
              <figure className="image-container">
                <img className="image" src={menuItem.image} alt="" />
              </figure>
              <div className="dropdown-fig"><IoMdArrowDropdown /></div>
          </div>
          <div className="btn-container"><button onClick={()=> dispatch(addToCart(menuItem))} className="add-btn">Lägg till</button></div>
        </article>
    )
}
