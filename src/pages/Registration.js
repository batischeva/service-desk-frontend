import React, { useState } from 'react';
import '../style/Registration.css';
import { ADMIN_ROUTE } from '../utils/consts';
import { registration } from '../http/userAPI';
import { useHistory } from 'react-router-dom';

const Registration = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const register = async () => {
    try {
      const data = await registration(email, password, role);
      history.push(ADMIN_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <main className='main'>
      <div className='internal-page-control-panel'>
        <a href={ADMIN_ROUTE} className='internal-page-link-back'> </a>
        <h1>
          Регистрация пользователя
        </h1>
      </div>
      <div className='registration-form'>
        <label className='registration-form-label'>
          E-mail:
          <input
            className='registration-form-input'
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className='registration-form-label'>
          Пароль:
          <input
            className='registration-form-input'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <label className='registration-form-label'>
          Роль пользователя:
          <select
            className='registration-form-input'
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option>Выберите роль</option>
            <option value='USER'>
              Пользователь
            </option>
            <option value='ADMIN'>
              Администратор
            </option>
          </select>
        </label>
        <button className='registration-form-btn' onClick={register}>
          Зарегистрировать
        </button>
      </div>
    </main>
  );
};

export default Registration;
