import React from 'react';
import '../style/Auth.css';
import HeaderAuth from '../components/HeaderAuth';

const Auth = () => {
  return (
    <div>
      <HeaderAuth />
      <main className='container' style={{height: window.innerHeight - 124}}>
        <div className='auth-block'>
          <h1 className='auth-header'>
            Вход в систему
          </h1>
          <form className='auth-form'>
            <fieldset className='auth-form-fieldset'>
              <input type='text' placeholder='Email' className='auth-form-input'/>
              <input type='text' placeholder='Пароль' className='auth-form-input'/>
            </fieldset>
            <button className='form-btn'>
              Войти
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Auth;
