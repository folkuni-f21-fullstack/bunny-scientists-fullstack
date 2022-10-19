import "./OrderItem.scss";
import { IoMdArrowDropdown } from "react-icons/io";

import { useState } from "react";


type Props = {
    order: any;
    index: number;
}

const OrderItem = ({order, index}: Props) => {
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
        <div onClick={toggleDrop} key={index}className="archive-list-item">
              <section className="list-item-details">
                <p>kl {order.time}</p>
                <h2>{order.ordernr}</h2>
                <figure  className="archive-list-drop">
                  <IoMdArrowDropdown />
                </figure>
              </section>
              <section className={className}>
                <div>
                  <h2>Order</h2>
                  {order.order.map((order:any, i:number)=> {
                    return (
                    <p key={i}>{order.type}</p>
                    )
                  })}
                </div>
                <div>
                  <h2>Beställare</h2>
                  {order.customer.map((order:any, i:number)=> {
                    return (
                    <div key={i}>
                      <p>{order.name}</p>
                      <p>{order.phone}</p>
                    </div>
                    )
                  })}
                </div>
              </section>
            </div>
    )
}

export default OrderItem