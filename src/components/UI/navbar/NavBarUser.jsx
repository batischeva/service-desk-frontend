import React from 'react';
import classes from './NavBarUser.module.css';
import logout from '../../../img/user.png';
import { useHistory } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../utils/consts';

export default function NavBarUser() {
  const history = useHistory();
  return (
    <div className={classes.navBarUserBlock}>
      <div className={classes.navBarUserInfo}>
        <img src={logout} alt='Изображение пользователя' />
        И. И. Иванов
      </div>
      <a className={classes.navBarUserLink} href='/' onClick={() => history.push(LOGIN_ROUTE)}></a>
    </div>
  )
}
