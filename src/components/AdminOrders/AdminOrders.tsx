import { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import Data from "../../data/data.json";
import { MenuCategory, Order, MenuItem } from "../../models/data";
import "./AdminOrders.scss";
import { useSelector } from "react-redux";
import { RootState } from "./../../store";

const AdminOrders = () => {
  const menu = useSelector((state: RootState) => state.menu);
  const menuByCategory = menu.menu
  const [allOrders, setAllOrders] = useState<Order[]>([
    {
      orderNumber: 231354,
      orderItems: [
        {
          menuItem: {
            id: "200",
            name: "Tradition",
            price: 149,
            description:
              "Autentiskt franskt lantrecept på escargots med persilja, vitlök och smör",
            image:
              "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/img_7379-snails.jpg",
          },
          amount: 2,
        },
      ],
      customerComment: "HEY ",
      customer: "Jesus",
      phoneNumber: 57357357,
    },
  ]);
  const [selectedOrder, setSelectedOrder] = useState<Order>({
    orderNumber: 1,
    orderItems: [],
    customerComment: "",
    customer: "",
    phoneNumber: 0,
  });

  const [isSelected, setIsSelected] = useState<number>(1);




  useEffect(() => { // Sätter första ordern i listan som selected när sidan startas och när allOrders ändras.
    setSelectedOrder(allOrders[0]);
    setIsSelected(allOrders[0].orderNumber);
  }, [allOrders]);

  // function decrease(order){
  //   console.log(order.orderItems)
  //   order.amount = order.amount -1
  //   console.log(order.amount) //Skriv över objektet i databasen med nya värdet
  // }

  // function increase(order){
  //   console.log(order.orderItems)
  //   order.amount = order.amount +1
  //   console.log(order.amount) //Skriv över objektet i databasen med nya värdet
  // }
  console.log(menu);

  return (
    <div className="admin-wrapper">
      <div className="orders-list-container">
        <section className="orders-list">
          <ul>
            {allOrders.map((order: Order, i: number) => {
              return (
                <li
                  key={i}
                  className={order.orderNumber === isSelected ? "selected" : ""}
                  onClick={() => {
                    setIsSelected(order.orderNumber);
                    setSelectedOrder(order);
                  }}
                >
                  {order.orderNumber}
                </li>
              );
            })}
          </ul>

        </section>
        <div className="line"></div>
      </div>
      <section className="order-details-container">
        {selectedOrder.orderItems.map((order, i: number) => {
          return (
            <article key={i} className="order-detail-item">
              <p>{order.menuItem.name}</p>
              <div className="quantity-container">
                <button className="decrease">
                  {" "}
                  <IoIosRemove />
                </button>
                <p className="quantity">{order.amount}</p>
                <button className="increase">
                  {" "}
                  <IoIosAdd />
                </button>
              </div>
            </article>
          );
        })}
      </section>
      <div className="customer-container">
        <h3 className="subheading">Kundinformation</h3>
        <section className="customer-info">
          <p>
            Meddelande från beställare:
            <span className="message">{selectedOrder.customerComment}</span>
          </p>
          <p>
            Kund: <span>{selectedOrder.customer}</span>
          </p>
          <p>
            Telefon: <span>{selectedOrder.phoneNumber}</span>
          </p>
        </section>
      </div>
      <div className="add-to-order-container">
        <h3 className="subheading">Lägg till maträtt</h3>
        <section className="add-to-order-list">
          {menu.loading === "idle" || menu.loading === "pending" && <div>loading...</div>}
          {menu.loading === "failed" && menu.error ? <div>Error: {menu.error}</div> : null}

          {menu.loading === "succeeded" && menu.menu.length ? (
            <>
              {menuByCategory.map((category:MenuCategory, i: number) => {
                <>
                  {category.menuItems.map((item:MenuItem, j: number) => {
                    return(
<div key={j}>
                      <p>{item.name}</p>
                      <button>
                        {" "}
                        <IoIosAdd />
                      </button>
                    </div>

                    )
                    
                  })}
                </>
              })} 
          </>
          ) : null}
        </section>
      </div>
      <div className="message-to-chef-container">
        <h3 className="subheading">Meddelande till kocken</h3>
        <section className="message-to-chef">
          <textarea name="" id="" cols={20} rows={5}></textarea>
        </section>
      </div>

      <div className="confirm-container">
        <button className="confirm-btn">Bekräfta</button>
      </div>
    </div>
  );
};

export default AdminOrders;
