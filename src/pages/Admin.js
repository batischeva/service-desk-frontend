import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import CreateCategory from '../components/modals/CreateCategory';
import '../style/Admin.css';
import { REGISTRATION_ROUTE } from '../utils/consts';

const Admin = () => {
  const [categoryActive, setCategoryActive] = useState();
  const history = useHistory();
  return (
    <div className='workspace'>
      <NavBar />
      <div className='main-content' style={{width: window.innerWidth}}>
        <Header />
        <main className='main'>
          <h1>
            Администрирование
          </h1>
          <h2>
            Пользователи
          </h2>
          <button className='admin-btn' onClick={() => history.push(REGISTRATION_ROUTE)}>
            Зарегистрировать пользователя
          </button>
          <h2>
            Настройки учетной системы
          </h2>
          <button className='admin-btn' onClick={() => setCategoryActive(true)}>
            Добавить категорию обращений
          </button>
        </main>
      </div>
      <CreateCategory modalActive={categoryActive} setModalActive={setCategoryActive} />
    </div>
  );
};

export default Admin;