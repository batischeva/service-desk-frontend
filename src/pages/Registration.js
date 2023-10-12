import React from 'react';
import '../style/Auth.css';
import HeaderAuth from '../components/HeaderAuth';

const Registration = () => {
  return (
    <div>
      <HeaderAuth />
      <main className='container' style={{height: window.innerHeight - 124}}>
        <div className='auth-block'>
          <h1 className='auth-header'>
            Регистрация пользователя
          </h1>
          <form className='auth-form'>
            <fieldset className='auth-form-fieldset'>
              <input type='text' placeholder='Email' className='auth-form-input'/>
              <input type='text' placeholder='Пароль' className='auth-form-input'/>
              <select name='role' className='auth-form-input'>
                <option value='USER'>
                  Пользователь
                </option>
                <option value='ADMIN'>
                  Администратор
                </option>
              </select>
            </fieldset>
            <button className='form-btn'>
              Зарегистрировать
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Registration;
