import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Tendencias from './components/Tendencias';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Cart from './components/cart'; 
import { CartProvider } from './context/CartContext.jsx'; 

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-content">
      <NavBar />
      {isHomePage && <Banner />}
      <Routes>
        <Route exact path="/" element={<Tendencias />} />
        <Route path="/products" element={<ItemListContainer message="Bienvenido al catálogo" />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app-wrapper">
          <AppContent />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
