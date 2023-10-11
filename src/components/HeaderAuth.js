import React from 'react';
import '../style/Header.css';
import logo from '../icon/header-logo.svg';
import headerArrow from '../icon/header-arrow.svg';

const HeaderAuth = () => {
  return (
    <header>
      <div className='header-container'>
        <span className='header-logo'>
          <a href='#'>
            <img src={logo} alt='Логотип Service Desk' />
          </a>
        </span>
        <span>
          <a href='#' className='header-company-link'>
            ООО &laquo;Ленпромарматура&raquo;
            <img src={headerArrow} />
          </a>
        </span>
      </div>
    </header>
  );
};

export default HeaderAuth;