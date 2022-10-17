import "../adminPage/AdminPage.scss";
import { useState } from 'react';

import { OrderType } from "../../models/data";
// import Order from "../../components/Order/Order";
 
const allOrders = [
  {id: 1, ordernr: 4525, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Currysnigel", quantity: 2}]}, 
  
  {id: 2, ordernr: 4526, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Grässnigel", quantity: 1}]}, 

  {id: 3, ordernr: 4527, order: [{type: "Snigel deluxe", quantity: 1}, {type: "Currysnigel", quantity: 3}]}, 
  
  {id: 4, ordernr: 4528, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Snigel almond", quantity: 2}]}, 
  
  {id: 5, ordernr: 4529, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Currysnigel", quantity: 2}]}, 
  
  {id: 6, ordernr: 4530, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Currysnigel", quantity: 2}]}, 
  
  {id: 7, ordernr: 4531, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Currysnigel", quantity: 2}]}, 
  
  {id: 8, ordernr: 4532, order: [{type: "Vitlökssnigel", quantity: 2}, {type: "Currysnigel", quantity: 2}]
}]



const AdminPage = () => {
  const [isOrderPageActive, setIsOrderPageActive] = useState<boolean>(true);

  const fiveOldestOrders = allOrders.slice(0, 5)

  const [isSelected, setIsSelected] = useState<any>({id: allOrders[0].id});

  const selectedOrderArr:any = allOrders[isSelected.id-1].order;
   
  
  return (
    <main className="admin-page">
      {isOrderPageActive ? 
      <header>
        <h2  >Beställningar</h2>
        <h2 onClick={()=>{setIsOrderPageActive(!isOrderPageActive)}}className="active">Arkiv</h2>
      </header>
      : 
      <header>
        <h2 onClick={()=>{setIsOrderPageActive(!isOrderPageActive)}}className="active">Beställningar</h2>
        <h2>Arkiv</h2>
      </header>}
      <div className="line"></div>
    {isOrderPageActive ? 
      <div className="admin-wrapper">
        <section className="orders-list">
          <ul>
            {fiveOldestOrders.map((order:any, i:number)=>{ return ( 
            <li key={i} className={order.id === isSelected.id ? "selected": ""} onClick={()=>{ setIsSelected({id:order.id})}}>{order.ordernr}</li>
            )
            })}
         </ul>
        </section>
        <div className="line"></div>
        <section className="order-details">
          {selectedOrderArr.map((order:any, i:number)=>{
            return (
              <article key={i} className="order-detail-item">
                <p>{order.type}</p> 
                <div className="quantity-container">
                  <button className="decrease">-</button>
                  <p className="quantity">{order.quantity}</p>
                  <button className="decrease">+</button>
                </div>
              </article>)
          })}
        </section>
        <section className="customer-info">
          <h2>Kundinformation</h2>
          <p>Kund: <span>Linus Pellesson</span></p>
          <p>Telefon: <span>070-177 14 32</span></p>
          <p>Meddelande från beställare: <span>Ingen senap tack, hälften av brödet ska vara blött</span></p>
        </section>
        <button className="confirm-btn">Bekräfta</button>
      </div> 
      :
      <div className="admin-wrapper">

      </div> 
    }
      
    </main>
  )
};

export default AdminPage;
