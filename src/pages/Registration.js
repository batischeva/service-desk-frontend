import React from 'react';
import '../style/Registration.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import backArrow from '../icon/back-request-arrow.svg';
import { ADMIN_ROUTE } from '../utils/consts';

const Registration = () => {
  return (
    <div className='workspace'>
      <NavBar />
      <div className='main-content' style={{width: window.innerWidth}}>
        <Header />
        <main className='main'>
          <div className='internal-page-control-panel'>
            <a href={ADMIN_ROUTE}>
              <img src={backArrow}/>
            </a>
            <h1>
              Регистрация пользователя
            </h1>
          </div>
          <form className='registration-form'>
            <fieldset className='registration-form-fieldset'>
              <label className='registration-form-label'>
                E-mail:
                <input type='text' className='registration-form-input'/>
              </label>
              <label className='registration-form-label'>
                Пароль:
                <input type='text' className='registration-form-input'/>
              </label>
              <label className='registration-form-label'>
                Роль пользователя:
                <select name='role' className='registration-form-input'>
                  <option value='USER'>
                    Пользователь
                  </option>
                  <option value='ADMIN'>
                    Администратор
                  </option>
                </select>
              </label>
            </fieldset>
            <button className='registration-form-btn'>
              Зарегистрировать
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Registration;
