import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./views/homePage/HomePage";
import AboutPage from "./views/aboutPage/AboutPage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
