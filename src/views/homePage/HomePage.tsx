import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Hero from '../../components/Hero/Hero';
import MenuCard from '../../components/MenuCard/MenuCard';
import MenuNav from '../../components/MenuNav/MenuNav';
import { MenuCategory } from '../../models/data';
import { FetchMenu, fetchMenuThunk } from '../../reducers/menuReducer';
import { RootState, AppDispatch } from "./../../store";
import './HomePage.scss';

const HomePage = () => {
  const [itemsByCategory, setItemsByCategory]= useState<MenuCategory[]>([])
  const menu: FetchMenu = useSelector((state: RootState) => state.menu);
  const dispatch: AppDispatch = useDispatch();

  async function fetchProducts (): Promise<MenuCategory[]>{
    return await fetch('/api/menu')
      .then(res => res.json())
      .then(json=> {
        console.log(json)
        dispatch(fetchMenuThunk())
        return json;
      })
      .catch(error => console.log(error))
  }

  useEffect(() => { //asyncront.
    async function f() {
      let menuCategoryArray: MenuCategory[] = await fetchProducts()
      setItemsByCategory(menuCategoryArray)
    }
    f()
  }, []);

  if (itemsByCategory.length === 0) {
    return null
  }
  return (
    <main className='home-page'>
      <Hero />
      <MenuNav />
      <div className='main-wrapper'>
        <h2>Escargots</h2>
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
