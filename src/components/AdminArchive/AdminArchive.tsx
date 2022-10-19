import "./AdminArchive.scss";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Data from '../../data/data.json';

const archivedOrders = [
  {id: 9, time: "20:39:16", ordernr: 4524, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Currysnigel", quantity: 4}]}, 
  
  {id: 10, time: "20:39:16", ordernr: 4523, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Grässnigel", quantity: 1}]}, 

  {id: 11, time: "20:39:16", ordernr: 4522, order: [{type: "Snigel deluxe", quantity: 1}, {type: "Currysnigel", quantity: 3}]}, 
  
  {id: 12, time: "20:39:16", ordernr: 4521, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Snigel almond", quantity: 2}]}, 
  
  {id: 13, time: "20:39:16", ordernr: 4520, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Currysnigel", quantity: 2}]}, 
  
  {id: 14, time: "20:39:16", ordernr: 4519, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Currysnigel", quantity: 2}]}, 
  
  {id: 15, time: "20:39:16", ordernr: 4518, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Currysnigel", quantity: 2}]}, 
  
  {id: 16, time: "20:39:16", ordernr: 4517, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Currysnigel", quantity: 2}]
}]

const AdminArchive = () => {

  return (
    <div className="admin-wrapper">
      <section className="archive-list">
        {archivedOrders.map((order, i) =>{
          return (
            <div className="archive-list-item">
              <p>kl {order.time}</p>
              <h2>{order.ordernr}</h2>
              <figure className="archive-list-drop">
                <IoMdArrowDropdown />
              </figure>
            </div>
          )
        })}
      </section>
    </div> 
  )
}
export default AdminArchive;