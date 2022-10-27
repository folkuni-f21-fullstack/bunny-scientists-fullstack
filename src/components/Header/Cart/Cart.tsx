import { IoMdTrash } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  decrementQuantity,
  incrementQuantity,
  removeAll,
  removeItem
} from '../../../reducers/cartReducer';
import { RootState } from '../../../store';
import './Cart.scss';
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
          <h3 className="product-h2">PRODUKTER</h3>
          <ul className="products">
            {cart.map((item, id) => {
              return (
                <li key={id} className="product-in-cart">
                  <h3 className="menu-item-name">{item.menuItem.name}</h3>
                  <p className="menu-item-price">{item.menuItem.price} kr</p>
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
            <h3 className="empty-cart">TÖM VARUKORG</h3>
            <IoMdTrash className="trash-icon" />
          </div>
          <div className="total-container">
            <h3>TOTALT (INKL. MOMS)</h3>
            <h3 className="price">
              {cart.reduce(
                (total, currentItem) =>
                  (total =
                    total + currentItem.menuItem.price * currentItem.amount),
                0
              )}{" "}
              kr
            </h3>
          </div>
          <button className="checkout">TILL KASSAN</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
