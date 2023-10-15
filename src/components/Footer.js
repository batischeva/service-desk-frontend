import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer>
      <span>
        &copy; 2023 Service Desk
      </span>
      <span>
        <a href='/' className='footer-link'>
          Техподдержка
        </a>
      </span>
    </footer>
  );
};

export default Footer;