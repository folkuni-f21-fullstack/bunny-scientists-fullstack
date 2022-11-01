import { useEffect, useState } from "react";
import { ArchiveItem, Order } from "../../models/data";
import OrderListItem from "../OrderItem/OrderItem";
import "./AdminArchive.scss";


const AdminArchive = () => {
  const [archivedOrders, setArchivedOrders] = useState<ArchiveItem[]>([])

  useEffect(() => {
    async function getAllOrders() {
      const reponse = await fetch('/api/archive', {
        method: 'GET'
      })
      const data: ArchiveItem[] = await reponse.json()
      if(data.length < 1) {
        setArchivedOrders([])
      } else {
        data.reverse();
        setArchivedOrders(data)
      }
    }
    getAllOrders()
  }, []);
  
  return (
    <div className="admin-wrapper">
      <section className="archive-list">
        {archivedOrders.map((order, i) => {
          return <OrderListItem key={i} order={order} />;
        })}
      </section>
    </div>
  );
};
export default AdminArchive;
