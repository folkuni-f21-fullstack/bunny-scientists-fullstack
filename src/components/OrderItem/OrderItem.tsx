import "./OrderItem.scss";
import { IoMdArrowDropdown } from "react-icons/io";

import { useState } from "react";

type Props = {
  order: any;
  index: number;
}

const OrderItem = ({ order, index }: Props) => {
  const [className, setClassName] = useState<string>('accordion')
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

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
    <div onClick={toggleDrop} key={index} className="archive-list-item">
      <section className="list-item-details">
        <p>kl {order.time}</p>
        <h3>{order.ordernr}</h3>
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
          {order.order.map((order: any, i: number) => {
            return (
              <p className="order-items" key={i}> <span> {order.quantity} st </span>{order.type}</p>
            )
          })}
        </div>
        <div className="customer">
          <h3>Beställare</h3>
          <p>{order.customer.name}</p>
          <p>{order.customer.phone}</p>
        </div>
        <div className="order-comment">
          <h3>Kommentar</h3>
          <p>{order.comment}</p>
        </div>
      </section>
    </div>
  )
}

export default OrderItem