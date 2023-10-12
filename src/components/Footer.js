import React, { useContext } from 'react';
import { Context } from '../index';
import '../style/Footer.css';

const Footer = () => {
  const {user} = useContext(Context);
  return (
    <footer>
      <span>
        &copy; 2023 Service Desk
      </span>
      <span>
        <a href="#" className='footer-link'>
          Техподдержка
        </a>
      </span>
    </footer>
  );
};

export default Footer;