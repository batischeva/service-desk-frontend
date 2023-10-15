import React, { useContext } from 'react';
import '../style/Header.css';
import logo from '../icon/header-logo.svg';
import headerArrow from '../icon/header-arrow.svg';
import { Context } from '..';

const Header = () => {
  const {user} = useContext(Context);
  return (
    <header>
      {user.isAuth ?
        <div className='header-container auth-header-container'>
          <a href='#' className='header-company-link'>
            ООО &laquo;Ленпромарматура&raquo;
            <img src={headerArrow} />
          </a>
        </div>
        :
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
      }
    </header>
  );
};

export default Header;