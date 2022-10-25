import { IoMdTrash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeAll,
  removeItem,
} from "../../../reducers/cartReducer";
import { RootState } from "../../../store";
import "./Cart.scss";
type Props = {
  cartMenuClass: string;
};

const Cart = ({ cartMenuClass }: Props) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={cartMenuClass}>
        <div>
          <h2 className="product-h2">PRODUKT</h2>
          <ul className="products">
            {cart.map((item, id) => {
              return (
                <li key={id} className="product-in-cart">
                  <div
                    onClick={() => dispatch(removeItem(item))}
                    className="empty-cart-container"
                  >
                    <IoMdTrash className="trash-icon" />
                  </div>
                  <h3>{item.menuItem.name}</h3>
                  <p>{item.menuItem.price} kr</p>
                  <div className="add-remove-container">
                    <button
                      className="decrease"
                      onClick={() => dispatch(decrementQuantity(item))}
                    >
                      -
                    </button>
                    <p>{item.amount}</p>
                    <button
                      className="increase"
                      onClick={() => dispatch(incrementQuantity(item))}
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div
            className="empty-cart-container"
            onClick={() => dispatch(removeAll())}
          >
            <h1 className="empty-cart">TÖM VARUKORG</h1>
            <IoMdTrash className="trash-icon" />
          </div>
          <div className="total-container">
            <h2>TOTALT (INKL. MOMS)</h2>
            <h1>
              {cart.reduce(
                (total, currentItem) =>
                  (total =
                    total + currentItem.menuItem.price * currentItem.amount),
                0
              )}
              kr
            </h1>
          </div>
          <button className="checkout">TILL KASSAN</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
