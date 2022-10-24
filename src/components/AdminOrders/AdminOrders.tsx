import "./AdminOrders.scss";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

import Data from '../../data/data.json';

const allOrders = [
  { id: 1, ordernr: 4525, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Currysnigel", quantity: 2 }] },

  { id: 2, ordernr: 4526, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Grässnigel", quantity: 1 }] },

  { id: 3, ordernr: 4527, order: [{ type: "Snigel deluxe", quantity: 1 }, { type: "Currysnigel", quantity: 3 }] },

  { id: 4, ordernr: 4528, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Snigel almond", quantity: 2 }] },

  { id: 5, ordernr: 4529, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Currysnigel", quantity: 2 }] },

  { id: 6, ordernr: 4530, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Currysnigel", quantity: 2 }] },

  { id: 7, ordernr: 4531, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Currysnigel", quantity: 2 }] },

  {
    id: 8, ordernr: 4532, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Currysnigel", quantity: 2 }]
  }]

const AdminOrders = () => {
  const [isSelected, setIsSelected] = useState<any>({ id: allOrders[0].id });

  const selectedOrderArr: any = allOrders[isSelected.id - 1].order;

  const allEscargotsInMenu = Data.array.menu[0].menuItems
  const allKidsInMenu = Data.array.menu[1].menuItems
  const allDrinksInMenu = Data.array.menu[2].menuItems
  const allDessertsInMenu = Data.array.menu[3].menuItems

  return (
    <div className="admin-wrapper">
      <section className="orders-list">
        <ul>
          {allOrders.map((order: any, i: number) => {
            return (
              <li key={i} className={order.id === isSelected.id ? "selected" : ""} onClick={() => { setIsSelected({ id: order.id }) }}>{order.ordernr}</li>
            )
          })}
        </ul>
      </section>
      <div className="line"></div>
      <button className="confirm-btn">Bekräfta</button>
      <section className="order-details">
        {selectedOrderArr.map((order: any, i: number) => {
          return (
            <article key={i} className="order-detail-item">
              <p>{order.type}</p>
              <div className="quantity-container">
                <button className="decrease"> < IoIosRemove /></button>
                <p className="quantity">{order.quantity}</p>
                <button className="decrease"> < IoIosAdd /></button>
              </div>
            </article>)
        })}
      </section>
      <h2 className='subheading'>Kundinformation</h2>
      <section className="customer-info">
        <p>Meddelande från beställare:
          <span className="message">"Ingen senap tack, hälften av brödet ska vara blött"</span>
        </p>
        <p>Kund: <span>Linus Pellesson</span></p>
        <p>Telefon: <span>070-177 14 32</span></p>
      </section>
      <h2 className='subheading'>Lägg till maträtt</h2>
      <section className="add-to-order-container">
        {allEscargotsInMenu.map((order: any, i: number) => {
          return (
            <div key={i}>
              <p>{order.name}</p>
              <button> < IoIosAdd /></button>
            </div>)
        })}
        {allKidsInMenu.map((order: any, i: number) => {
          return (
            <div key={i}>
              <p>{order.name}</p>
              <button>< IoIosAdd /> </button>
            </div>)
        })}
        {allDrinksInMenu.map((order: any, i: number) => {
          return (
            <div key={i}>
              <p>{order.name}</p>
              <button> < IoIosAdd /></button>
            </div>)
        })}
        {allDessertsInMenu.map((order: any, i: number) => {
          return (
            <div key={i}>
              <p>{order.name}</p>
              <button > < IoIosAdd /></button>
            </div>)
        })}
      </section>
      <h2 className='subheading'>Meddelande till kocken</h2>
      <section className='message-to-chef'>
        <form action="">
          <textarea name="" id="" cols="40" rows="5"></textarea>
        </form>
      </section>
    </div>
  )
}
export default AdminOrders;