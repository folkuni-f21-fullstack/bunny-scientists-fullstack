import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import decrease from "../../assets/icons/decrease-icon.svg";
import increase from "../../assets/icons/increase-icon.svg";
import trash from "../../assets/icons/trash-icon.svg";
import {
  decrementQuantity,
  incrementQuantity,
  removeAll,
  removeItem,
} from "../../reducers/cartReducer";
import { RootState } from "../../store";
import "./CartPage.scss";

const CartPage = () => {
  const [customer, setCustomer] = useState<string>("");
  const [customerComment, setCustomerComment] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // diplay amount of articles in cart
  const productList = useSelector((state: RootState) => state.cart);
  console.log(productList);

  //detta är vad vi skickar
  let localTime = new Date().toLocaleTimeString();

  const postOrder = {
    orderItems: productList,
    customerComment: customerComment,
    customer: customer,
    phoneNumber: phoneNumber,
    time: localTime,
  };

  // skickar ordern till backend db
  async function postData() {
    let orderNumberResponse = await fetch("/api/ordernumber");
    let orderNumber = await orderNumberResponse.json();
    console.log(orderNumber);

    await fetch("/api/orders", {
      method: "PUT",
    });

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postOrder),
    });

    return await response.json();
  }

  const sendOrder: (e: any) => void = (e: any) => {
    e.preventDefault();
    if (productList.length > 0) {
      navigate("/orders");
      postData();
      localStorage.setItem("order", JSON.stringify(postOrder));
      dispatch(removeAll());
    } else {
      console.log("empty shit");
    }
  };

  return (
    <div className="cart-wrapper">
      <section className="cart-header">
        <h1>Kassa</h1>
        <p>
          <b>varukorg - kassa</b> - bekräftat
        </p>
      </section>
      <div className="line"></div>
      <main>
        <ul className="selected-products">
          {productList.map((item, id) => {
            return (
              <li key={id} className="product-in-cart">
                <div className="product">
                  <figure
                    onClick={() => dispatch(removeItem(item))}
                    className="trash"
                  >
                    <img src={trash} alt="" />
                  </figure>
                  <div className="product-item">
                    <h3>{item.menuItem.name}</h3>
                    <p>{item.menuItem.price} kr</p>
                  </div>
                </div>
                <div className="amount">
                  <div className="add-remove-container">
                    <figure
                      onClick={() => dispatch(decrementQuantity(item))}
                      className="amount-button"
                    >
                      <img src={decrease} alt="" />
                    </figure>
                    <p>{item.amount}</p>
                    <figure
                      onClick={() => dispatch(incrementQuantity(item))}
                      className="amount-button"
                    >
                      <img src={increase} alt="" />
                    </figure>
                  </div>
                  <p>{item.amount * item.menuItem.price} kr</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="line"></div>
        <section className="form">
          <form onSubmit={sendOrder} className="contact-form">
            <label htmlFor="name">namn</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setCustomer(e.target.value)}
            />
            <label htmlFor="number">telefonnummer</label>
            <input
              type="text"
              id="number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label htmlFor="message">meddelande</label>
            <textarea
              id="message"
              placeholder="Lämna meddelande till resturangen"
              cols={20}
              rows={6}
              onChange={(e) => setCustomerComment(e.target.value)}
            ></textarea>
            <input
              className="submit-button"
              type="submit"
              value="Slutför köp"
            />
          </form>
          <div>
            <h2>
              summa:
              {productList.reduce(
                (total, currentItem) =>
                  (total =
                    total + currentItem.menuItem.price * currentItem.amount),
                0
              )}
              .00 kr
            </h2>
            <p onClick={() => dispatch(removeAll())}>Töm varukorgen</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CartPage;
