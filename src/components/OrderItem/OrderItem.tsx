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
        <h2>{order.ordernr}</h2>
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
          <h2>Order</h2>
          {order.order.map((order: any, i: number) => {
            return (
              <p className="order-items" key={i}> <span> {order.quantity} st </span>{order.type}</p>
            )
          })}
        </div>
        <div className="customer">
          <h2>Beställare</h2>
          <p>{order.customer.name}</p>
          <p>{order.customer.phone}</p>
        </div>
        <div className="order-comment">
          <h2>Kommentar</h2>
          <p>{order.comment}</p>
        </div>
      </section>
    </div>
  )
}

export default OrderItem