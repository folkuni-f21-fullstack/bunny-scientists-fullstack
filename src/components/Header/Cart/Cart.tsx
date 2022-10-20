<<<<<<< HEAD
import { iteratorSymbol } from "immer/dist/internal";
import { useEffect, useState } from "react";
import { IoMdTrash, IoMdTrash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../../models/data";
import { decrementQuantity, incrementQuantity, removeItem } from "../../../reducers/cartReducer";
import { RootState } from "../../../store";
import "./Cart.scss";
=======
import { useEffect, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { useSelector } from "react-redux";
import { CartItem } from "../../../models/data";
import { RootState } from "../../../store";
import "./Cart.scss";

>>>>>>> dev
interface Props {
  cartMenuClass: string;
}

const Cart = ({ cartMenuClass }: Props) => {
  const cart = useSelector((state: RootState) => state.cart)
<<<<<<< HEAD
  const dispatch = useDispatch();
=======
>>>>>>> dev
  
  return (
    <div>
      <div className={cartMenuClass}>
        <div>
          <h2>PRODUKT</h2>
          <ul className="products">
            {
              cart.map((item) => {
                return (
                  <li className="product-in-cart">
<<<<<<< HEAD
                    <div onClick={()=> dispatch(removeItem(item))} className="empty-cart-container">
                      <IoMdTrash className="trash-icon" />
                    </div>
                    <h3>{item.menuItem.name}</h3>
                    <p>{item.menuItem.price} kr</p>
                    <div className="add-remove-container">
                      <button className="decrease" onClick={()=> dispatch(decrementQuantity(item))}>-</button>
                      <p>{item.amount}</p>
                      <button className="increase" onClick={()=> dispatch(incrementQuantity(item))}>+</button>
                    </div>
                  </li>
=======
                  <h3>{item.menuItem.name}</h3>
                  <p>{item.menuItem.price} kr</p>
                  <div className="add-remove-container">
                    <button className="decrease">-</button>
                    <p>{item.amount}</p>
                    <button className="increase">+</button>
                  </div>
                </li>
>>>>>>> dev
                )
              })
            }
          </ul>
          <div className="empty-cart-container">
            <h1>TÖM VARUKORG</h1>
            <IoMdTrash className="trash-icon" />
          </div>
          <div className="total-container">
            <h2>TOTALT (INKL. MOMS)</h2>
            <h1>{cart.reduce((total, currentItem) => total = total + (currentItem.menuItem.price * currentItem.amount), 0)}</h1>
          </div>
          <button className="checkout">TILL KASSAN</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
