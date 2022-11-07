import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { MenuItem } from '../../models/data';
import { addToCart } from '../../reducers/cartReducer';
import "./MenuCard.scss";

export default function MenuCard(props: any) {
  const [menuCardContainer, setMenuCardContainer] = useState<string>("menucard-container");
  const [menuCardContainerOpen, setMenuCardContainerOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const menuItem: MenuItem = props.menuItem
  let id: string = props.id

  const toggleDrop = () => {

    if (window.innerWidth < 730) {
      if (!menuCardContainerOpen) {
        setMenuCardContainer("menucard-container-open");
        setMenuCardContainerOpen(true);
      } else {
        setMenuCardContainer("menucard-container");
        setMenuCardContainerOpen(false);
      }
    }
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 730) {
      setMenuCardContainer("menucard-container");
      setMenuCardContainerOpen(false);
    }
  })

  return (
    <article id={id} className={menuCardContainer}>
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
      <div className="btn-container"><button onClick={() => dispatch(addToCart(menuItem))} className="add-btn">Lägg till</button></div>
    </article>
  )
}
