import { JSXElementConstructor, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import snail from '../../assets/moving-snail.png';
import { ArchiveItem, Order } from '../../models/data';
import { restoreCart } from '../../reducers/cartReducer';
import '../confirmedPage/confirmedPage.scss';


const ConfirmedPage = () => {
  const navigate = useNavigate();
  const [latestOrder, setLatestOrder] = useState<ArchiveItem>();
  const [isItems, setIsItems] = useState<boolean>(false)
  const [checkIfOrderExist, setCheckIfOrderExist] = useState<boolean>(false)
  const dispatch = useDispatch();

  function navigateHome() {
    navigate('/');
  }
  useEffect(()=> {
    const order: ArchiveItem = JSON.parse(localStorage.getItem('order') || "{}");
    async function getAllOrders() {
      const reponse = await fetch('/api/orders')
      const data: Order[] = await reponse.json()
      const check = data.filter((order)=> {
        if(order.orderNumber === order.orderNumber) {
          return order
        }
      })
      if(check.length > 0) {
        setCheckIfOrderExist(true)
      }
    }
    getAllOrders()
    if (Object.entries(order).length !== 0) {
      setIsItems(true)
      setLatestOrder(order)
    }
  }, []);
  async function restoreOrder(){
    let lastOrder = JSON.parse(localStorage.getItem('order') || "{}")
    let lastCart = lastOrder.orderItems
    dispatch(restoreCart(lastCart))
    await fetch(`/api/orders/${lastOrder.orderNumber}`, {
      method: 'DELETE'
    })
    localStorage.setItem("order", JSON.stringify([]));
    navigate('/');
  }
  const TimeRemaining = () => {
    if(latestOrder?.time) {
      let timeToFinishDish = 20
      let time = new Date();
      let hourOrder = parseInt(latestOrder.time.slice(0,2))
      hourOrder =Math.floor(hourOrder * 60 * 60);
      let minuteOrder = parseInt(latestOrder.time.slice(3,5))
      minuteOrder =Math.floor(minuteOrder * 60);
      let secondsOrder = parseInt(latestOrder.time.slice(6,8))
      let total = secondsOrder + minuteOrder + hourOrder;
      total = total * 1000
      var diff = time.getTime() - total
      let msec = diff;
      let hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      let mm = Math.floor(msec / 1000 / 60);
      msec -= mm * 1000 * 60;
      timeToFinishDish = timeToFinishDish - mm
      if(timeToFinishDish < 0) {
        return (<>Ordern är redo om ca <span className='confirmed-bold'>Your food is Ready</span></>)
      } else {
        return (<>Ordern är redo om ca <span className='confirmed-bold'>{timeToFinishDish} minuter</span></>)
      }
    }
    return (<>kunde inte räkna ut</>)
  }
  return (
    <div>
      {
        isItems ? (
          <main className='confirmed-container' >
            <h1 className='confirmed-header'>Vi har tagit emot din order</h1>
            <figure className='confirmed-img-container'><img className='confirmed-img' src={snail} alt="" /></figure>

            <section className='confirmed-text-container'>
              <p className='confirmed-text'><TimeRemaining /></p>
              <p className='confirmed-text'>Ordernummer: <span className='confirmed-bold'>{latestOrder?.orderNumber}</span></p>
              {
                checkIfOrderExist ? (
                  <>
                  <p className='confirmed-text'>Klicka <span onClick={()=> {restoreOrder()}} className='confirmed-bold cursor'>här</span> för att ändra ordern</p>
                  </>
                ):(
                  <>
                  <p className='confirmed-text'>Din order är <strong>Bekräftad</strong> och Tilllagas</p>
                  </>
                )
              }
              
            </section>

            <div className='confirmed-btn-container'>
              <button className='confirmed-btn' onClick={navigateHome}>STARTSIDA</button>
            </div>

          </main >
        ) : (

          <main className='confirmed-container' >
            <h1 className='confirmed-header'>Vi hittar inga tidigare ordrar</h1>
            <div className="confirmed-btn-container">
              <button className='confirmed-btn' onClick={navigateHome}> Till Menyn</button>
            </div>
          </main>
        )}
    </div>
  )
};

export default ConfirmedPage;
