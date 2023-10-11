import React from 'react';
import classes from './NavBarLogo.module.css';
import logo from '../../../icon/navbar-logo.svg';

export default function NavBarLogo() {
  return (
    <div className={classes.navBarLogoBlock}>
      <a className={classes.navBarLogoLink} href='/'>
        <img src={logo} alt='Логотип Service Desk' />
      </a>
    </div>
  )
}
