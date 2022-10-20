import "./Cart.scss";
import { IoMdTrash } from "react-icons/io";
interface Props {
  cartMenuClass: string;
  cartOpenClass: string;
}

const Cart = ({ cartMenuClass, cartOpenClass }: Props) => {
  return (
    <div>
      <div className={cartMenuClass}>
        <div>
          <h2>PRODUKT</h2>
          <ul className="products">
            <li className="product-in-cart">
              <h3>Tradition</h3>
              <p>249 kr</p>
              <div className="add-remove-container">
                <button className="decrease">-</button>
                <p>2</p>
                <button className="increase">+</button>
              </div>
            </li>
            <li className="product-in-cart">
              <h3>Tradition</h3>
              <p>249 kr</p>
              <div className="add-remove-container">
                <button className="decrease">-</button>
                <p>2</p>
                <button className="increase">+</button>
              </div>
            </li>
            <li className="product-in-cart">
              <h3>Tradition</h3>
              <p>249 kr</p>
              <div className="add-remove-container">
                <button className="decrease">-</button>
                <p>2</p>
                <button className="increase">+</button>
              </div>
            </li>
            <li className="product-in-cart">
              <h3>Tradition</h3>
              <p>249 kr</p>
              <div className="add-remove-container">
                <button className="decrease">-</button>
                <p>2</p>
                <button className="increase">+</button>
              </div>
            </li>
            <li className="product-in-cart">
              <h3>Tradition</h3>
              <p>249 kr</p>
              <div className="add-remove-container">
                <button className="decrease">-</button>
                <p>2</p>
                <button className="increase">+</button>
              </div>
            </li>
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
