import React, { useContext } from 'react';
import classes from './NavBarUser.module.css';
import userPic from '../../../img/avatar.png';
import { useHistory } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../utils/consts';
import { Context } from '../../../index';
import { observer } from 'mobx-react-lite';

const NavBarUser = observer(() => {
  const {user} = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    try {
      user.setUser({});
      user.setIsAuth(false);
      history.push(LOGIN_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
};

  return (
    <div className={classes.navBarUserBlock}>
      <div className={classes.navBarUserInfo}>
        <img className={classes.navBarUserPic} src={userPic} alt='Изображение пользователя' />
        И. А. Батищева
      </div>
      <button className={classes.navBarUserBtn} onClick={() => logOut()}/>
    </div>
  )
});

export default NavBarUser;
