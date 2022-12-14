import { useSelector } from "react-redux";
import { MenuItem } from "../../models/data";
import { RootState } from "./../../store";
import Hero from "../../components/Hero/Hero";
import MenuCard from "../../components/MenuCard/MenuCard";
import MenuNav from "../../components/MenuNav/MenuNav";
import "./HomePage.scss";

const HomePage = () => {
  const menu = useSelector((state: RootState) => state.menu);

  return (
    <main className="home-page">
      <Hero />
      <MenuNav />
      {menu.loading === "idle" ||
        (menu.loading === "pending" && <div>loading...</div>)}
      {menu.loading === "failed" && menu.error ? (
        <div>Error: {menu.error}</div>
      ) : null}
      {menu.loading === "succeeded" && menu.menu.length ? (
        <div className="main-wrapper">
          <h2>{menu.menu[0].name}</h2>
          <section className="cards-container">
            {menu.menu[0].menuItems.map((menuItem: MenuItem, i: number) => {
              return <MenuCard menuItem={menuItem} key={i} />;
            })}
          </section>
          <h2>{menu.menu[1].name}</h2>
          <section className="cards-container">
            {menu.menu[1].menuItems.map((menuItem: MenuItem) => {
              return <MenuCard menuItem={menuItem} key={menuItem.id} />;
            })}
          </section>
          <h2>{menu.menu[2].name}</h2>
          <section className="cards-container">
            {menu.menu[2].menuItems.map((menuItem: MenuItem) => {
              return <MenuCard menuItem={menuItem} key={menuItem.id} />;
            })}
          </section>
          <h2>{menu.menu[3].name}</h2>
          <section className="cards-container">
            {menu.menu[3].menuItems.map((menuItem: MenuItem) => {
              return <MenuCard menuItem={menuItem} key={menuItem.id} />;
            })}
          </section>
        </div>
      ) : null}
    </main>
  );
};

export default HomePage;
