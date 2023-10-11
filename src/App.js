import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './style/App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
