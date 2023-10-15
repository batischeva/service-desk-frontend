import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './style/App.css';
import './style/NotFound.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { check } from './http/userAPI';

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <span className='not-found-block'>Загрузка...</span>;
  }

  return (
    <BrowserRouter>
      {user.isAuth ?
        <div>
          <div className='workspace'>
            <NavBar />
            <div className='main-content' style={{width: window.innerWidth}}>
              <Header />
              <AppRouter />
            </div>
          </div>
          <Footer />
        </div>
      :
        <AppRouter />
      }
    </BrowserRouter>
  );
});

export default App;
