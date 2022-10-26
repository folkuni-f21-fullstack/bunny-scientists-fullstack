import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutPage from "./views/aboutPage/AboutPage";
import AdminPage from "./views/adminPage/AdminPage";
import CartPage from "./views/cartPage/CartPage";
import HomePage from "./views/homePage/HomePage";
import LoginPage from "./views/loginPage/LoginPage";
import OrdersPage from "./views/ordersPage/OrdersPage";
import ConfirmedPage from "./views/confirmedPage/confirmedPage";

//funktion för att komma till toppen av sidan vid route navigering
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
function App() {
  const [isAdminView, setIsAdminView] = useState<boolean>(false);

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
