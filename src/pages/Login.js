import React from 'react';
import '../style/Login.css';
import HeaderAuth from '../components/HeaderAuth';

const Login = () => {
  return (
    <div>
      <HeaderAuth />
      <main className='container' style={{height: window.innerHeight - 124}}>
        <div className='login-block'>
          <h1 className='login-header'>
            Вход в систему
          </h1>
          <form className='login-form'>
            <fieldset className='login-form-fieldset'>
              <input type='text' placeholder='E-mail' className='login-form-input'/>
              <input type='text' placeholder='Пароль' className='login-form-input'/>
            </fieldset>
            <button className='login-form-btn'>
              Войти
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
