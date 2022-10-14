import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./views/homePage/HomePage";
import AboutPage from "./views/aboutPage/AboutPage";
import CartPage from "./views/cartPage/CartPage";
import LoginPage from "./views/loginPage/LoginPage";
import OrdersPage from "./views/ordersPage/OrdersPage";
import ArchivePage from "./views/archivePage/ArchivePage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/orders" element={<OrdersPage />} />
        <Route path="/admin/archive" element={<ArchivePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
