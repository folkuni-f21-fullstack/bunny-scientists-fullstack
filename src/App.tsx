import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { fetchMenuSuccess } from './reducers/menuReducer';
import AboutPage from "./views/aboutPage/AboutPage";
import AdminPage from "./views/adminPage/AdminPage";
import CartPage from "./views/cartPage/CartPage";
import ConfirmedPage from "./views/confirmedPage/confirmedPage";
import HomePage from "./views/homePage/HomePage";
import LoginPage from "./views/loginPage/LoginPage";
import OrdersPage from "./views/ordersPage/OrdersPage";

//funktion för att komma till toppen av sidan vid route navigering
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
function App() {
  const [isAdminView, setIsAdminView] = useState<boolean>(false);
  const dispatch = useDispatch();
  async function fetchProducts (){
    return await fetch('/api/menu')
      .then(res => res.json())
      .then(json=> {
        console.log(json)
        dispatch(fetchMenuSuccess(json))
        return json.products;
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchProducts()
  }, []);
  return (
    <div className="App">
      <Header setIsAdminView={setIsAdminView} isAdminView={isAdminView} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/confirmed" element={<ConfirmedPage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              isAdminView={isAdminView}
              setIsAdminView={setIsAdminView}
            />
          }
        />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export { App, scrollToTop };

