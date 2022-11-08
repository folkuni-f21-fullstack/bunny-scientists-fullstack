import { useState, useEffect } from 'react';
import AdminOrders from '../../components/AdminOrders/AdminOrders';
import AdminArchive from '../../components/AdminArchive/AdminArchive';
import { useNavigate } from 'react-router-dom';
import "../adminPage/AdminPage.scss";

type Props = {
  isAdminView: boolean;
  setIsAdminView: (isAdminView: boolean) => void;
}

const AdminPage = ({ setIsAdminView, isAdminView }: Props) => {
  const [isOrderPageActive, setIsOrderPageActive] = useState<boolean>(true);
  const navigate = useNavigate();

  //säkerställer att adminView är true även om man refreshar, används då det måste finnas en "logga ut" knapp annars
  //så kan admin aldrig logga ut, är man inte redan inloggad så skickas man till /login där man kan logga in.
  //gör alltså så att du inte kan komma åt /admin utan att vara inloggad.
  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/admin')
      setIsAdminView(true)
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <main className="admin-page">
      {isOrderPageActive ?
        <header>
          <h2>Beställningar</h2>
          <h2 onClick={() => { setIsOrderPageActive(!isOrderPageActive) }} className="active">Arkiv</h2>
        </header>
        :
        <header>
          <h2 onClick={() => { setIsOrderPageActive(!isOrderPageActive) }} className="active">Beställningar</h2>
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
