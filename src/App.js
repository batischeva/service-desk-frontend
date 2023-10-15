import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './style/App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Context } from '.';

const App = () => {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
      {user.isAuth ?
        <div className='workspace'>
          <NavBar />
          <div className='main-content' style={{width: window.innerWidth}}>
            <Header />
            <AppRouter />
          </div>
        </div>
      :
        <div>
          <Header />
          <AppRouter />
        </div>
      }
      <Footer />
    </BrowserRouter>
  );
};

export default App;
