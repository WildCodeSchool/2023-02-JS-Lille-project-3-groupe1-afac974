import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import Account from "./page/Account/Account";
import Authors from "./page/Author/Author";
import LoginRegisterForm from "./components/LoginForm/LoginRegisterForm";
import GaleriePG from "./page/Galerie/Galeriepg";
import FormLogin from "./page/FormLogin/FormLogin";
import FormInscription from "./page/FormInscription/FormInscription";
import About from "./components/About/About";
import "./App.scss";

export default function App() {
  const [activeTab, setActiveTab] = useState("favoris");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="appcontainer">
      <div className="navapp">
        <Navbar />
        <div className="containerapp">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galerie" element={<GaleriePG />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/login" element={<FormLogin />} />
            <Route path="/register" element={<FormInscription />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/login2" element={<LoginRegisterForm />} />
            <Route
              path="/account/favoris"
              element={
                <Account activeTab={activeTab} onTabChange={handleTabChange} />
              }
            />
            <Route
              path="/account/news"
              element={
                <Account activeTab={activeTab} onTabChange={handleTabChange} />
              }
            />
          </Routes>
        </div>
        <div className="footerapp">
          <Footer />
        </div>
      </div>
    </div>
  );
}
