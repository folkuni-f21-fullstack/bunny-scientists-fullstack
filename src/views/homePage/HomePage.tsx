import Hero from '../../components/Hero/Hero';
import MenuCard from '../../components/MenuCard/MenuCard';
import MenuNav from '../../components/MenuNav/MenuNav';
import Data from '../../data/data.json';
import { MenuItem } from '../../models/data';
import './HomePage.scss';

const HomePage = () => {
  const itemsByCategory = Data.array.menu;
  const escargots = itemsByCategory[0].menuItems;
  const kids = itemsByCategory[1].menuItems;
  const drinks = itemsByCategory[2].menuItems;
  const desserts = itemsByCategory[3].menuItems;

  /**
   *const fetchMenu = async () => {
		const response = await fetch('/api/menu')
		const data: Menu[] = await response.json()
		setMaybeMenu(data) //behövs validering?
	}
  */

  return (
    <main className='home-page'>
      <Hero />
      <MenuNav />
      <div className='main-wrapper'>
        <h2>Sniglar</h2>
        <section className='cards-container'>
          {escargots.map((menuItem, i: number) => {
            return <MenuCard menuItem={menuItem} key={i}/>;
          })}
        </section>
        <h2>Barn</h2>
        <section className='cards-container'>
          {kids.map((menuItem, i: number) => {
            return <MenuCard menuItem={menuItem} key={i}/>;
          })}
        </section>
        <h2>Dryck</h2>
        <section className='cards-container'>
          {drinks.map((menuItem, i: number) => {
            return <MenuCard menuItem={menuItem} key={i}/>;
          })}
        </section>
        <h2>Efterätter</h2>
        <section className='cards-container'>
          {desserts.map((menuItem, i: number) => {
            return <MenuCard menuItem={menuItem} key={i} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default HomePage;
