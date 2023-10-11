import React from 'react';
import '../style/Header.css';
import headerArrow from '../icon/header-arrow.svg';

const Header = () => {
  return (
    <header className='header-container auth-header-container'>
      <span>
        <a href='#' className='header-company-link'>
          ООО &laquo;Ленпромарматура&raquo;
          <img src={headerArrow} />
        </a>
      </span>
    </header>
  );
};

export default Header;