import "../adminPage/AdminPage.scss";
import { useState } from 'react';

import { OrderType } from "../../models/data";
// import Order from "../../components/Order/Order";
 
const allOrders = [{id: 1, ordernr: 4525, order: [{type: "Vitlökssniglar", quantity: 2}]}, {id: 2, ordernr: 4526}, {id: 3, ordernr: 4527}, {id: 4, ordernr: 4528}, {id: 5, ordernr: 4529}, {id: 6, ordernr: 4530}, {id: 7, ordernr: 4531}, {id: 8, ordernr: 4532}]



const AdminPage = () => {
  const [isOrderPageActive, setIsOrderPageActive] = useState<boolean>(true);

  const fiveOldestOrders = allOrders.slice(0, 5)

  const [isSelected, setIsSelected] = useState<any>({id: allOrders[0].id});

  const selectedOrderArr:any = allOrders[isSelected.id-1].order;
   

  
  return (
    <main className="admin-page">
      {isOrderPageActive ? 
      <header>
        <h2 className="active" >Beställningar</h2>
        <h2 onClick={()=>{setIsOrderPageActive(!isOrderPageActive)}}>Arkiv</h2>
      </header>
      : 
      <header>
        <h2 onClick={()=>{setIsOrderPageActive(!isOrderPageActive)}}>Beställningar</h2>
        <h2 className="active">Arkiv</h2>
      </header>}
      <div className="line"></div>
    {isOrderPageActive ? 
      <div className="admin-wrapper">
        <section className="orders-list">
          <ul>
            {fiveOldestOrders.map((order:OrderType, i:number)=>{
              return ( <li key={i} className={order.id === isSelected.id ? "selected": ""} onClick={()=>{
              setIsSelected({id:order.id})
              }}>{order.ordernr}</li>)
            })}
         </ul>
        </section>
        <div className="line"></div>
        <section className="order-details">
          <article className="order-detail-item">
            {selectedOrderArr.map((order:any, i:number)=>{
              <p>{order.type}</p>
            })}
            {/* {console.log(allOrders[isSelected.id-1].order[0].type)} */}
            {/* <p>Vitlöksnigel</p> */}
            <div className="quantity-container">
              <button className="decrease">-</button>
              <p className="quantity">1</p>
              <button className="decrease">+</button>
            </div>
          </article>
        </section>
      </div> 
      :
      <div className="admin-wrapper">

      </div> 
    }
      
    </main>
  )
};

export default AdminPage;
