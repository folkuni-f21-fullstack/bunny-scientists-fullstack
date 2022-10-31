import { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useSelector } from "react-redux";
import { MenuCategory, MenuItem, Order, OrderItem } from "../../../models/data";
import "../AdminOrders.scss";
import { RootState } from "./../../../store";
import "./SelectedOrder.scss";


type ID = [
  string
]

type Props = {
  selectedOrder: Order
}
const SelectedOrder = ({ selectedOrder }: Props) => {
  const menu = useSelector((state: RootState) => state.menu);
  const menuByCategory: MenuCategory[] = menu.menu
  const [selectedOrderItem, setSelectedOrderItem] = useState<OrderItem[]>(selectedOrder.orderItems)
  const [filteredMenu, setFilteredMenu] = useState<MenuItem[]>([])
  const [newOrder, setNewOrder] = useState<OrderItem>()

  useEffect(() => {
    let selectedOrderItemsCopy = [...selectedOrderItem]
    let menuCopy = [...menuByCategory]
    let menuList: MenuItem[] = []

    menuCopy.map((category: MenuCategory, i: number) => {
      category.menuItems.map((menuItem, p) => {
        menuList.push(menuItem)
      })
    })

    let selectedOrderItemsbajs:MenuItem[] = []
    selectedOrderItemsCopy.map((majs)=> {
      selectedOrderItemsbajs.push(majs.menuItem)
    })

    let bajs:MenuItem[] = menuList.filter((dish) => {
      const result = selectedOrderItemsbajs.find((compare) => dish.id === compare.id);
      return !result;
    });

    setFilteredMenu(bajs)
    setSelectedOrderItem(selectedOrder.orderItems)
  }, [selectedOrder])

  function increaseAmount(order: OrderItem) {
    let dishCopy = [...selectedOrderItem]
    dishCopy.map((dish) => {
      if (dish.menuItem.name === order.menuItem.name) {
        dish.amount++
      }
    })
    setSelectedOrderItem(dishCopy)
  }
  function decreaseAmount(order: OrderItem) {
    let index = 0;
    let dishCopy = [...selectedOrderItem]
    dishCopy.map((dish, i) => {
      if (dish.menuItem.name === order.menuItem.name) {
        dish.amount--
      }
      index += i
      if (dish.amount < 1) {
        dishCopy.splice(i, index)
      }
      if (i === 0 && dish.amount < 1) {
        dishCopy.splice(0, 1)
      }
    })
    setSelectedOrderItem(dishCopy)
  }


  function addToOrder(item: MenuItem) {
    let selectedOrderItemsCopy = [...selectedOrderItem]
    let newOrderItem = item
    let newOrder: OrderItem = { menuItem: { ...newOrderItem }, amount: 1 }

    //Lägg till i databasen tack

    //Kolla igenom menyn. Finns selected order Items ID där? Då ska den bort

    //Filtrera "lägg till maträtt till det som inte finns i ordern redan typ"

    let bajs:MenuItem[] = filteredMenu.filter((dish) => {
      if(dish.id !== item.id) {
        return dish;
      }
      
    });


    selectedOrderItemsCopy.push(newOrder)
    setSelectedOrderItem(selectedOrderItemsCopy)
    setFilteredMenu(bajs)
  }

  return (
    <article>
      <section className="order-details-container">
        {selectedOrderItem.map((order, i: number) => {
          return (
            <article key={i} className="order-detail-item">
              <p>{order.menuItem.name}</p>
              <div className="quantity-container">
                <button onClick={(e) => { decreaseAmount(order) }} className="decrease">
                  {" "}
                  <IoIosRemove />
                </button>
                <p className="quantity">{order.amount}</p>
                <button onClick={() => { increaseAmount(order) }} className="increase">
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
              {filteredMenu.map((item: MenuItem, j: number) => {
                return (
                  <div key={j}>
                    <p>{item.name}</p>
                    <button onClick={() => { addToOrder(item) }}>
                      {" "}
                      <IoIosAdd />
                    </button>
                  </div>
                )
              })}
            </>
          ) : null}
        </section>
      </div>
      <div className="message-to-chef-container">
        <h3 className="subheading">Meddelande till kocken</h3>
        <section className="message-to-chef">
          <textarea name="" id=""></textarea>
        </section>
      </div>
    </article>
  )
}

export default SelectedOrder