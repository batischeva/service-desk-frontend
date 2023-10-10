import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './style/App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Footer />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
