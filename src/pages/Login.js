import React, { useContext, useState } from 'react';
import '../style/Login.css';
import { login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import {Context} from '../index.js';
import { useHistory } from 'react-router-dom';
import { REQUESTS_ROUTE } from '../utils/consts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = observer(() => {
  const history = useHistory();

  const {user} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const data = await login(email, password);
      user.setUser(data);
      user.setIsAuth(true);
      history.push(REQUESTS_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div>
      <Header />
      <main className='container' style={{height: window.innerHeight - 124}}>
        <div className='login-block'>
          <h1 className='login-header'>
            Вход в систему
          </h1>
          <div className='login-form'>
            <input
                className='login-form-input'
                type='text'
                placeholder='E-mail'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            <input
              className='login-form-input'
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className='login-form-btn' onClick={signIn}>
              Войти
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
});

export default Login;
