import { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useSelector } from "react-redux";
import Data from "../../data/data.json";
import { MenuCategory, MenuItem, Order } from "../../models/data";
import { RootState } from "./../../store";
import "./AdminOrders.scss";
import SelectedOrder from "./SelectedOrder/SelectedOrder";

const AdminOrders = () => {
  const menu = useSelector((state: RootState) => state.menu);
  const menuByCategory = menu.menu
  
  const [allOrders, setAllOrders] = useState<Order[]>([]);

  const [selectedOrder, setSelectedOrder] = useState<Order>({
    orderNumber: 1,
    orderItems: [],
    customerComment: "",
    customer: "",
    phoneNumber: 0,
  });


  useEffect(() => {// Sätter första ordern i listan som selected när sidan startas och när allOrders ändras.
    async function getAllOrders() {
      const reponse = await fetch('/api/orders')
      const data: Order[] = await reponse.json()
      setAllOrders(data)
      setSelectedOrder(data[0]);
    } 
    getAllOrders()
  }, []);
  
  

  function decrease(dishName){//Skriv över objektet i databasen med nya värdet
    
  }

  function increase(){//Skriv över objektet i databasen med nya värdet
    
    
    // let newOrders = allOrders.map((order) => {
    //   if(order.orderNumber === e.target.parentElement.attributes[0]) {
    //     order.orderItems.map((ting) => {
    //       if(ting.menuItem.name === e.target.parentElement.attributes[1]){
    //         ting.amount ++
            
    //       }
    //     })
    //   }
    // })
    // setAllOrders(newOrders)
  }
  //plocka fram en order gärna som ett objekt dårå
  //ska nåt ändras? Kul! Gör en ny moj av den
  //Ersätt gammalt objekt med den nya mojen.
  //Skicka in i där man hämtade det från första gången.typ  

  return (
    <div className="admin-wrapper">
      <div className="orders-list-container">
        <section className="orders-list">
          {allOrders.length === 0 && <div>loading...</div>}
          {allOrders.length > 1 ? (
            <ul>
              {allOrders.map((order: Order, i: number) => {
                return (
                  <li
                    key={i}
                    className={order.orderNumber === selectedOrder.orderNumber ? "selected" : ""}
                    onClick={() => {
                      setSelectedOrder(order);
                    }}
                  >
                    {order.orderNumber}
                  </li>
                );
              })}
            </ul>
          ): null}
        </section>
        <div className="line"></div>
      </div>
      <SelectedOrder selectedOrder={selectedOrder} />
      <div className="confirm-container">
        <button className="confirm-btn">Bekräfta</button>
      </div>
    </div>
  );
};

export default AdminOrders;
