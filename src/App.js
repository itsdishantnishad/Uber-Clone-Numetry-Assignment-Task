import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Safety from "./components/Safety";
import Product from './components/Product';
import Ride from "./components/Ride";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Help from './components/Help';
import DriverPage from './components/DriverPage';
import "./App.css";
import "./components/responsive.css";

function App() {
  const showLanguages = () => {
    let languages = document.getElementById('showLanguage');
    languages.classList.toggle("showLang");
  };
  
  const showCompany = () => {
    let company = document.querySelector('.show-horizontal');
    company.classList.toggle('show');
  };
  
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar showLanguages={showLanguages} showCompany={showCompany} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home showLanguages={showLanguages} showCompany={showCompany} />} />
            <Route path="/Safety" element={<Safety />} />
            <Route path="/Help" element={<Help/>} />
            <Route path="/ride" element={<Ride />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/DriverPage" element={<DriverPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
