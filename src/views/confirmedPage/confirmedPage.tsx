import '../confirmedPage/confirmedPage.scss'
import snail from '../../assets/moving-snail.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const ConfirmedPage = () => {
  const navigate = useNavigate();
  // const [orderNumber, setOrderNumber] = useState();

function navigateHome(){
  navigate('/');
}
// HÄMTA DATA FRÅN ORDER HÄR
// useEffect(() => {
//   const data = async () => {
//       const response = await fetch('')
//       const data = await response.json();
//       setOrderNumber()
      
//   }
//   return (data)
// }, []);



  return (
    <main className='confirmed-container'>
      <h1 className='confirmed-header'>Vi har tagit emot din order</h1>
      <figure className='confirmed-img-container'><img className='confirmed-img' src={snail} alt="" /></figure> 

      <section className='confirmed-text-container'>
        <p className='confirmed-text'>Ordern är redo om ca <span className='confirmed-bold'>4h 35min</span></p>
        <p className='confirmed-text'>Ordernummer: <span className='confirmed-bold'>5</span></p>
        <p className='confirmed-text'>Klicka <span className='confirmed-bold'>här</span> för att ändra ordern</p>
      </section>

        <div className='confirmed-btn-container'> 
          <button className='confirmed-btn' onClick={navigateHome}>STARTSIDA</button>
        </div>

     



    </main>
  )
};

export default ConfirmedPage;
