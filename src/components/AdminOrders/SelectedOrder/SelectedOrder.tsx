import { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useSelector } from "react-redux";
import { MenuCategory, MenuItem, Order } from "../../../models/data";
import "../AdminOrders.scss";
import { RootState } from "./../../../store";
import "./SelectedOrder.scss";
type Props = {
  selectedOrder: Order
}
const SelectedOrder = ({selectedOrder}: Props) => {
  const menu = useSelector((state: RootState) => state.menu);
  const menuByCategory = menu.menu



  return (
    <article>
      <section className="order-details-container">
        {selectedOrder.orderItems.map((order, i: number) => {
          return (
            <article key={i} className="order-detail-item">
              <p>{order.menuItem.name}</p>
              <div className="quantity-container">
                <button data-order={selectedOrder.orderNumber} data-meal={order.menuItem.name} onClick={(e)=>{decrease(e.target.parentElement.attributes[1])}} className="decrease">
                  {" "}
                  <IoIosRemove />
                </button>
                <p className="quantity">{order.amount}</p>
                <button data-order={selectedOrder.orderNumber} data-meal={order.menuItem.name} onClick={()=>{increase()}} className="increase">
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
              {menuByCategory.map((category: MenuCategory, i: number) => {
                return (
                  <div key={i}>
                    {category.menuItems.map((item: MenuItem, j: number) => {
                      return (
                        <div key={j}>
                          <p>{item.name}</p>
                          <button>
                            {" "}
                            <IoIosAdd />
                          </button>
                        </div>
                      )
                    })}
                  </div>)
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
    </article>
  )
}

export default SelectedOrder