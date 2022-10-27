import { userInfo } from 'os';
import { useState } from 'react';
import { useSelector } from "react-redux";
import Hero from '../../components/Hero/Hero';
import MenuCard from '../../components/MenuCard/MenuCard';
import MenuNav from '../../components/MenuNav/MenuNav';
import { MenuItem } from '../../models/data';
import { RootState } from "./../../store";
import './HomePage.scss';

const HomePage = () => {
  const menu = useSelector((state: RootState) => state.menu);
  // console.log(menu)
  // const fetchMenu = async () => {
	// 	const response = await fetch('/api/menu', {
	// 		mode: 'cors',
	// 	});
	// 	const data: MenuCategory[] = await response.json();
	// 	setmenu.menu(data);
	// };

	// useEffect(() => {
	// 	fetchMenu();
	// }, []);
  
  return (
    <main className='home-page'>
      <Hero />
      <MenuNav />
      {/* {menu.menu.loading && <div>loading...</div>}
      {!menu.loading && menu.error ? <div>Error: {menu.error}</div>: null}
      {!menu.loading && menu.menu.length ? (
        <div className='main-wrapper'>
          <h2>{menu.menu[0].name}</h2>
          <section className='cards-container'>
            {menu.menu[0].menuItems.map((menuItem: MenuItem[], i: number) => {
              return <MenuCard menuItem={menuItem} key={i}/>;
            })}
          </section>
          <h2>{menu.menu[1].name}</h2>
          <section className='cards-container'>
            {menu.menu[1].menuItems.map((menuItem: MenuItem[], i: number) => {
              return <MenuCard menuItem={menuItem} key={i}/>;
            })}
          </section>
          <h2>{menu.menu[2].name}</h2>
          <section className='cards-container'>
            {menu.menu[2].menuItems.map((menuItem: MenuItem[], i: number) => {
              return <MenuCard menuItem={menuItem} key={i}/>;
            })}
          </section>
          <h2>{menu.menu[3].name}</h2>
          <section className='cards-container'>
            {menu.menu[3].menuItems.map((menuItem: MenuItem[], i: number) => {
              return <MenuCard menuItem={menuItem} key={i} />;
            })}
          </section>
        </div>
      ): null} */}
      
    </main>
  );
};

export default HomePage;
