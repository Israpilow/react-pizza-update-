import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + '/cart'} element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
