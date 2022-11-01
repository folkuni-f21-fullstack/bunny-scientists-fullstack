import { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useSelector } from "react-redux";
import { MenuCategory, MenuItem, Order, OrderItem } from "../../../models/data";
import "../AdminOrders.scss";
import { RootState } from "./../../../store";
import "./SelectedOrder.scss";

type Props = {
  selectedOrder: Order,
}

const SelectedOrder = ({ selectedOrder }: Props) => {
  const menu = useSelector((state: RootState) => state.menu);
  const menuByCategory: MenuCategory[] = menu.menu
  const [messageToChef, setMessageToChef] = useState<string>("")
  const [selectedOrderItem, setSelectedOrderItem] = useState<OrderItem[]>(selectedOrder.orderItems)
  const [filteredMenu, setFilteredMenu] = useState<MenuItem[]>([])

  useEffect(() => {
    let selectedOrderItemsCopy = [...selectedOrderItem]
    let menuCopy = [...menuByCategory]
    let menuList: MenuItem[] = []

    menuCopy.map((category: MenuCategory, i: number) => {
      category.menuItems.map((menuItem, p) => {
        menuList.push(menuItem)
      })
    })

    let selectedOrderItems: MenuItem[] = []
    selectedOrderItemsCopy.map((order) => {
      selectedOrderItems.push(order.menuItem)
    })

    let newFilteredMenu: MenuItem[] = menuList.filter((dish) => {
      const result = selectedOrderItems.find((compare) => dish.id === compare.id);
      return !result;
    });
    setMessageToChef("")
    setFilteredMenu(newFilteredMenu)
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
    let dishCopy = [...selectedOrderItem]
    let newFilteredMenu: MenuItem[] = []

    dishCopy.map((dish) => {
      if (dish.menuItem.name === order.menuItem.name) {
        dish.amount--
      }

      if (dish.amount < 1 && dish.menuItem.id === order.menuItem.id) {
        dishCopy = removeDish(dishCopy, order.menuItem.id)
        // * EN ny lista med alla items i ordern förutom den som har amount 0
        let selectedOrderItemsCopy = [...dishCopy] // ? selectedOrderItemsCopy är en lista av allt mat man beställt förutom den mat som har amount 0

        let menuCopy = [...menuByCategory] // * kopia på hela menyn.

        let menuList: MenuItem[] = [] // * En lista med alla maträtter istället för kategorier

        menuCopy.map((category: MenuCategory, i: number) => {
          category.menuItems.map((menuItem, p) => {
            menuList.push(menuItem)
          })
        })

        let menuItemArray: MenuItem[] = [] // * En lista med alla maträtter som beställaren har lagt till ::: förutom den som vi tagit bort ::: Vi tar bort AMOUNT, så vi bara har alla maträtter

        selectedOrderItemsCopy.map((order) => {
          menuItemArray.push(order.menuItem)
        })

        newFilteredMenu = menuList.filter((dish) => {
          const result = menuItemArray.find((compare) => dish.id === compare.id);
          return !result;
        });
        setFilteredMenu(newFilteredMenu)
      }
    })
    setSelectedOrderItem(dishCopy)
  }

  function removeDish(array: OrderItem[], id: string) {
    return array.filter(item => item.menuItem.id !== id)
  }

  function addToOrder(item: MenuItem) {
    let selectedOrderItemsCopy = [...selectedOrderItem]
    let newOrderItem = item
    let newOrder: OrderItem = { menuItem: { ...newOrderItem }, amount: 1 }

    // * newFilteredMenu Kollar igenom menyn. Finns selected order Items ID där? Då ska den bort

    let newFilteredMenu: MenuItem[] = filteredMenu.filter((dish) => {
      if (dish.id !== item.id) {
        return dish;
      }

    });
    selectedOrderItemsCopy.push(newOrder)
    setSelectedOrderItem(selectedOrderItemsCopy)
    setFilteredMenu(newFilteredMenu)
  }

  const handleChange = (value:string) => { 
    setMessageToChef(value)
  }

  async function addToArchive() {
    let d = new Date()
    let archiveObj = {
      time: d.getTime(),
      orderNumber: selectedOrder.orderNumber,
      customer: selectedOrder.customer,
      phoneNumber: selectedOrder.phoneNumber,
      customerComment: selectedOrder.customerComment,
      orderItems: selectedOrderItem,
      messageToChef: messageToChef
    }
    await fetch('http://localhost:5174/api/archive', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(archiveObj)
    })
    await fetch(`http://localhost:5174/api/orders/${archiveObj.orderNumber}`, {
      method: 'DELETE'
    })
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
          <textarea onChange={(e)=> handleChange(e.target.value)} value={messageToChef} name="" id=""></textarea>
        </section>
       
      </div>
      <div className="confirm-container">
        <button onClick={() => addToArchive()} className="confirm-btn">Bekräfta</button>
      </div>
    </article>
  )
}

export default SelectedOrder