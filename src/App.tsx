import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./views/homePage/HomePage";
import AboutPage from "./views/aboutPage/AboutPage";
import CartPage from "./views/cartPage/CartPage";
import LoginPage from "./views/loginPage/LoginPage";
import AdminPage from "./views/adminPage/AdminPage";
import OrdersPage from "./views/ordersPage/OrdersPage";
import "./App.scss";

//funktion för att komma till toppen av sidan vid route navigering
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export { App, scrollToTop };
