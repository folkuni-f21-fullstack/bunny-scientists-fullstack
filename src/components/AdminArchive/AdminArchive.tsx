import "./AdminArchive.scss";
import OrderItem from "../OrderItem/OrderItem";

const archivedOrders = [
  { id: 9, time: "20:39:16", ordernr: 4524, comment: "Hälften av brödet ska vara blött tack", order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Currysnigel", quantity: 4 }], customer: { name: "Linus Pellesson", phone: "074-21 23 124" } },

  { id: 10, time: "20:39:16", ordernr: 4523, comment: "Hälften av brödet ska vara blött tack", order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Grässnigel", quantity: 1 }], customer: { name: "Linus Pellesson", phone: "074-21 23 124" } },

  { id: 11, time: "20:39:16", ordernr: 4522, order: [{ type: "Snigel deluxe", quantity: 1 }, { type: "Currysnigel", quantity: 3 }], customer: { name: "Linus Pellesson", phone: "074-21 23 124" } },

  { id: 12, time: "20:39:16", ordernr: 4521, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Snigel almond", quantity: 2 }], customer: { name: "Linus Pellesson", phone: "074-21 23 124" } },

  { id: 13, time: "20:39:16", ordernr: 4520, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Currysnigel", quantity: 2 }], customer: { name: "Linus Pellesson", phone: "074-21 23 124" } },

  { id: 14, time: "20:39:16", ordernr: 4519, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Currysnigel", quantity: 2 }], customer: { name: "Linus Pellesson", phone: "074-21 23 124" } },
  {
    id: 15,
    time: "20:39:16",
    ordernr: 4518,
    order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Currysnigel", quantity: 2 }], customer: { name: "Linus Pellesson", phone: "074-21 23 124" }
  },

  {
    id: 16, time: "20:39:16", ordernr: 4517, order: [{ type: "Vitlökssnigel", quantity: 2 }, { type: "Currysnigel", quantity: 2 }], customer: { name: "Linus Pellesson" , phone: "074-21 23 124" }
  }]

const AdminArchive = () => {

  return (
    <div className="admin-wrapper">
      <section className="archive-list">
        {archivedOrders.map((order, i) => {
          return (
            <OrderItem key={i} order={order} index={i} />
          )
        })}
      </section>
    </div>

  )
}
export default AdminArchive;