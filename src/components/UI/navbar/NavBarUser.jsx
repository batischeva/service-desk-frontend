import React, { useContext } from 'react';
import classes from './NavBarUser.module.css';
import logout from '../../../img/user.png';
import { useHistory } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../utils/consts';
import { Context } from '../../../index';
import { observer } from 'mobx-react-lite';

const NavBarUser = observer(() => {
  const {user} = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    history.push(LOGIN_ROUTE);
  }

  return (
    <div className={classes.navBarUserBlock}>
      <div className={classes.navBarUserInfo}>
        <img src={logout} alt='Изображение пользователя' />
        И. И. Иванов
      </div>
      <button className={classes.navBarUserBtn} onClick={() => logOut()}/>
    </div>
  )
});

export default NavBarUser;
