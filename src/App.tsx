import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./views/homePage/HomePage";
import AboutPage from "./views/aboutPage/AboutPage";
import CartPage from "./views/cartPage/CartPage";
import LoginPage from "./views/loginPage/LoginPage";
import AdminPage from "./views/adminPage/AdminPage";
import OrderPage from "./views/orderPage/OrderPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
