import { useEffect, useState } from "react";
import { Order } from "../../models/data";
import SelectedOrder from "./SelectedOrder/SelectedOrder";
import "./AdminOrders.scss";

const AdminOrders = () => {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [originalAllOrders, setOriginalAllOrders] = useState<Order[]>([]);

  const [selectedOrder, setSelectedOrder] = useState<Order>({
    time: "",
    orderNumber: 1,
    orderItems: [],
    customerComment: "",
    customer: "",
    phoneNumber: "",
  });

  // Sätter första ordern i listan som selected när sidan startas och när allOrders ändras.
  useEffect(() => {
    async function getAllOrders() {
      const reponse = await fetch('/api/orders')
      const data: Order[] = await reponse.json()
      if (data.length < 1) {
        setAllOrders([])
      } else {
        setAllOrders(data)
        let newOrder = JSON.parse(JSON.stringify(data[0]));
        setSelectedOrder(newOrder);
      }
    }
    getAllOrders()
  }, []);

  useEffect(() => {
    setAllOrders(originalAllOrders)
  }, [originalAllOrders]);

  function changeSelectedOrder(order: Order) {
    let newOrder = JSON.parse(JSON.stringify(order));
    setSelectedOrder(newOrder)
  }

  return (
    <div className="admin-wrapper">
      <div className="orders-list-container">
        <section className="orders-list">
          {allOrders.length === 0 && <div><h3>Inga ordrar att hämta...</h3></div>}
          {allOrders.length > 0 ? (
            <ul>
              {allOrders.map((order: Order, i: number) => {
                return (
                  <li
                    key={i}
                    className={order.orderNumber === selectedOrder.orderNumber ? "selected" : ""}
                    onClick={() => {
                      changeSelectedOrder(order)
                    }}
                  >
                    {order.orderNumber}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </section>
        <div className="line"></div>
      </div>
      <SelectedOrder setOriginalAllOrders={setOriginalAllOrders} allOrders={allOrders} selectedOrder={selectedOrder} />
    </div>
  );
};

export default AdminOrders;
