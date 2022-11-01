import { IoMdArrowDropdown } from "react-icons/io";
import "./OrderItem.scss";

import { useState } from "react";
import { ArchiveItem, OrderItem } from "../../models/data";

type Props = {
  order: ArchiveItem;
}

const OrderListItem = ({ order }: Props) => {
  const [className, setClassName] = useState<string>('accordion')
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  console.log(order)

  const toggleDrop = () => {
    if (!accordionOpen) {
      setClassName("accordion-open");
      setAccordionOpen(true);
    } else {
      setClassName("accordion");
      setAccordionOpen(false);
    }
  }
  return (
    <div onClick={toggleDrop} className="archive-list-item">
      <section className="list-item-details">
        <p>kl {order.time}</p>
        <h3>{order.orderNumber}</h3>
        {accordionOpen ?
          <figure className="archive-list-drop-up">
            <IoMdArrowDropdown />
          </figure> :
          <figure className="archive-list-drop">
            <IoMdArrowDropdown />
          </figure>
        }
      </section>
      <section className={className}>
        <div>
          <h3>Order</h3>
          {order.orderItems.map((order: OrderItem, i: number) => {
            return (
              <p className="order-items" key={i}> <span> {order.amount} st </span>{order.menuItem.name}</p>
            )
          })}
        </div>
        <div className="customer">
          <h3>Beställare</h3>
          <p>{order.customer}</p>
          <p>{order.phoneNumber}</p>
        </div>
        <div className="order-comment">
          <h3>Kommentar</h3>
          <p>{order.customerComment}</p>
        </div>
      </section>
    </div>
  )
}

export default OrderListItem