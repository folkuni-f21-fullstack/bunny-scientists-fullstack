import "./Cart.scss";

interface Props {
  cartMenuClass: string;
  cartOpenClass: string;
}

const Cart = ({ cartMenuClass, cartOpenClass }: Props) => {
  return (
    <div>
      <div className={cartMenuClass}>
        <h2>PRODUKT</h2>
        <ul className="products">
          <li className="product-in-cart"></li>
          <li className="product-in-cart"></li>
          <li className="product-in-cart"></li>
          <li className="product-in-cart"></li>
          <li className="product-in-cart"></li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
