import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import CreateCategory from '../components/modals/CreateCategory';
import '../style/Admin.css';
import { REGISTRATION_ROUTE } from '../utils/consts';

const Admin = () => {
  const [categoryActive, setCategoryActive] = useState();
  const history = useHistory();
  return (
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
      <CreateCategory modalActive={categoryActive} setModalActive={setCategoryActive} />
    </main>
  );
};

export default Admin;