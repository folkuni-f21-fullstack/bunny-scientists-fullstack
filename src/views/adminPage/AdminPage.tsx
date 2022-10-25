import { useState } from 'react';
import "../adminPage/AdminPage.scss";
import AdminOrders from '../../components/AdminOrders/AdminOrders';
import AdminArchive from '../../components/AdminArchive/AdminArchive';

const AdminPage = () => {
  const [isOrderPageActive, setIsOrderPageActive] = useState<boolean>(true);

  return (
    <main className="admin-page">
      {isOrderPageActive ? 
      <header>
        <h2>Beställningar</h2>
        <h2 onClick={()=>{setIsOrderPageActive(!isOrderPageActive)}}className="active">Arkiv</h2>
      </header>
      : 
      <header>
        <h2 onClick={()=>{setIsOrderPageActive(!isOrderPageActive)}}className="active">Beställningar</h2>
        <h2>Arkiv</h2>
      </header>}
      <div className="line"></div>
      {isOrderPageActive ? 
        <AdminOrders />
        :
        <AdminArchive />
      }
      
    </main>
  )
};

export default AdminPage;
