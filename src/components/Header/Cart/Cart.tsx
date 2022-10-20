import { useEffect, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { useSelector } from "react-redux";
import { CartItem } from "../../../models/data";
import { RootState } from "../../../store";
import "./Cart.scss";

interface Props {
  cartMenuClass: string;
}

const Cart = ({ cartMenuClass }: Props) => {
  const cart = useSelector((state: RootState) => state.cart)
  
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
                  <h3>{item.menuItem.name}</h3>
                  <p>{item.menuItem.price} kr</p>
                  <div className="add-remove-container">
                    <button className="decrease">-</button>
                    <p>{item.amount}</p>
                    <button className="increase">+</button>
                  </div>
                </li>
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
            <h1>523 kr</h1>
          </div>
          <button className="checkout">TILL KASSAN</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
