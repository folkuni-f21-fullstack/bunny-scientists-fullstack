import Hero from '../../components/Hero/Hero';
import MenuCard from '../../components/MenuCard/MenuCard';
import MenuNav from '../../components/MenuNav/MenuNav';
import Data from '../../data/data.json';
import { MenuItem, MenuCategory } from '../../models/data';
import { useEffect, useState } from 'react';
import './HomePage.scss';
import { RootState } from "./../../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from '../../reducers/menuReducer';

const HomePage = () => {
  const [itemsByCategory, setItemsByCategory] = useState(Data.array.menu);
  const menu = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();
// console.log(menu)
  // const fetchMenu = async () => {
	// 	const response = await fetch('/api/menu', {
	// 		mode: 'cors',
	// 	});
	// 	const data: MenuCategory[] = await response.json();
	// 	setItemsByCategory(data);
	// };

	// useEffect(() => {
	// 	fetchMenu();
	// }, []);
  useEffect(() => {
     let bla = dispatch(fetchMenu())
    //  console.log(bla);
     
  }, []);
  return (
    <main className='home-page'>
      <Hero />
      <MenuNav />
      <div className='main-wrapper'>
        <h2>{itemsByCategory[0].name}</h2>
        <section className='cards-container'>
          {itemsByCategory[0].menuItems.map((menuItem, i: number) => {
            return <MenuCard menuItem={menuItem} key={i}/>;
          })}
        </section>
        <h2>{itemsByCategory[1].name}</h2>
        <section className='cards-container'>
          {itemsByCategory[1].menuItems.map((menuItem, i: number) => {
            return <MenuCard menuItem={menuItem} key={i}/>;
          })}
        </section>
        <h2>{itemsByCategory[2].name}</h2>
        <section className='cards-container'>
          {itemsByCategory[2].menuItems.map((menuItem, i: number) => {
            return <MenuCard menuItem={menuItem} key={i}/>;
          })}
        </section>
        <h2>{itemsByCategory[3].name}</h2>
        <section className='cards-container'>
          {itemsByCategory[3].menuItems.map((menuItem, i: number) => {
            return <MenuCard menuItem={menuItem} key={i} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default HomePage;
