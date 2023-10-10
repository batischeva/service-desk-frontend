import React, { useContext } from 'react';
import { Context } from '../index';
import '../style/Header.css';
import logo from '../icon/header-logo.png';

const Header = () => {
  const {user} = useContext(Context);
  return (
    <header className='header'>
      <div className='container'>
        <a href="#" class="logo">
          <img class="logo-img" src={logo} alt="Логотип Service Desk"/>
        </a>
      </div>
    </header>
  );
};

export default Header;