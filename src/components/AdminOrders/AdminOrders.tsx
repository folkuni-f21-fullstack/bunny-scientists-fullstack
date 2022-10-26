import { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import Data from "../../data/data.json";
import { Order } from "../../models/data";
import "./AdminOrders.scss";

const AdminOrders = () => {
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

  const allEscargotsInMenu = Data.array.menu[0].menuItems;
  const allKidsInMenu = Data.array.menu[1].menuItems;
  const allDrinksInMenu = Data.array.menu[2].menuItems;
  const allDessertsInMenu = Data.array.menu[3].menuItems;

  const fetchOrders = async () => { //hämtar ordrar från databas
    const response = await fetch("/api/orders", {
      mode: "cors",
    });
    const data: Order[] = await response.json();
    setAllOrders(data);
  };

  useEffect(() => { //hämtar alla ordrar i databasen när sidan startar
    fetchOrders();
  }, []);



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

  return (
    <div className="admin-wrapper">
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
      <section className="order-details">
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
      <h2 className="subheading">Kundinformation</h2>
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
      <h2 className="subheading">Lägg till maträtt</h2>
      <section className="add-to-order-container">
        {allEscargotsInMenu.map((order: any, i: number) => {
          return (
            <div key={i}>
              <p>{order.name}</p>
              <button>
                {" "}
                <IoIosAdd />
              </button>
            </div>
          );
        })}
        {allKidsInMenu.map((order: any, i: number) => {
          return (
            <div key={i}>
              <p>{order.name}</p>
              <button>
                <IoIosAdd />{" "}
              </button>
            </div>
          );
        })}
        {allDrinksInMenu.map((order: any, i: number) => {
          return (
            <div key={i}>
              <p>{order.name}</p>
              <button>
                {" "}
                <IoIosAdd />
              </button>
            </div>
          );
        })}
        {allDessertsInMenu.map((order: any, i: number) => {
          return (
            <div key={i}>
              <p>{order.name}</p>
              <button>
                {" "}
                <IoIosAdd />
              </button>
            </div>
          );
        })}
      </section>
      <h2 className="subheading">Meddelande till kocken</h2>
      <section className="message-to-chef">
        <form action="">
          <textarea name="" id="" cols={40} rows={5}></textarea>
        </form>
      </section>

      <button className="confirm-btn">Bekräfta</button>
    </div>
  );
};

export default AdminOrders;
