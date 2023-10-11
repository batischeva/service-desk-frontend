import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBarItem.module.css';

export default function NavBarItem({name, link, icon}) {
  return (
    <li className={classes.navBarItem}>
      <Link to={link} className={classes.navBarItemLink}>
        {icon}
        {name}
      </Link>
    </li>
  )
}
