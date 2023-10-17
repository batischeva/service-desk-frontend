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
      await registration(email, password, role);
      alert('Пользователь успешно зарегистрирован!');
      history.push(ADMIN_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  }

  return (
    <main className='main'>
      <div className='internal-page-control-panel'>
        <button className='internal-page-link-back' onClick={() => history.push(ADMIN_ROUTE)}/>
        <h1>
          Регистрация пользователя
        </h1>
      </div>
      <form className='registration-form' onSubmit={handleSubmit}>
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
        <button className='registration-form-btn' type='submit'>
          Зарегистрировать
        </button>
      </form>
    </main>
  );
};

export default Registration;
