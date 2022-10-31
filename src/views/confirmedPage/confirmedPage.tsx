import '../confirmedPage/confirmedPage.scss'
import snail from '../../assets/moving-snail.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { OrderType } from '../../models/data';


const ConfirmedPage = () => {
  const navigate = useNavigate();
  const [latestOrder, setLatestOrder] = useState<OrderType[]>();
  const [isItems, setIsItems] = useState<boolean>(false)

  function navigateHome() {
    navigate('/');
  }


  // HÄMTA DATA FRÅN ORDER HÄR
  // const fetchOrder = async () => {
  //   const response = await fetch('/api/orders', {
  //     mode: 'cors',
  //   });
  //   const data: OrderType[] = await response.json();
  //   // console.log(data)


  //   setLatestOrder(data);
  // };

  useEffect(() => {
    // fetchOrder();
    
      const items= JSON.parse(localStorage.getItem('orders')||"[]");
      if (items) {
        setIsItems(true)
        setLatestOrder(items[items.length - 1])
      }
    


  }, []);

  console.log(latestOrder)

  return (
    <div>
      {
        isItems ? (
          <main className='confirmed-container' >
            <h1 className='confirmed-header'>Vi har tagit emot din order</h1>
            <figure className='confirmed-img-container'><img className='confirmed-img' src={snail} alt="" /></figure>

            <section className='confirmed-text-container'>
              <p className='confirmed-text'>Ordern är redo om ca <span className='confirmed-bold'>4h 35min</span></p>
              <p className='confirmed-text'>Ordernummer: <span className='confirmed-bold'>{latestOrder.game}</span></p>
              <p className='confirmed-text'>Klicka <span className='confirmed-bold'>här</span> för att ändra ordern</p>
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
