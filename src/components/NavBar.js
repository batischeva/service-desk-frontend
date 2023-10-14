import React, { useContext, useState } from 'react';
import '../style/NavBar.css';
import classes from '../style/NavBar.module.css';
import NavBarLogo from './UI/navbar/NavBarLogo';
import NavBarItem from './UI/navbar/NavBarItem';
import { observer } from 'mobx-react-lite';
import {Context} from '../index';

import { REQUESTS_ROUTE, ADMIN_ROUTE } from "../utils/consts";

import {ReactComponent as NavBarRequests} from "../icon/requests.svg";
import {ReactComponent as NavBarClients} from "../icon/clients.svg";
import {ReactComponent as NavBarAgents} from "../icon/agents.svg";
import {ReactComponent as NavBarCases} from "../icon/cases.svg";
import {ReactComponent as NavBarAnalitics} from "../icon/analitics.svg";
import {ReactComponent as NavBarAdmin} from "../icon/admin.svg";

const NavBar = observer(() => {
  const {} = useContext(Context);

  const initNavItems = [
    {id: 1, name: 'Обращения', link: REQUESTS_ROUTE, icon: <NavBarRequests className={classes.navBarItemIcon} />},
    {id: 2, name: 'Пользователи', icon: <NavBarClients className={classes.navBarItemIcon} />},
    {id: 3, name: 'Сотрудники', icon: <NavBarAgents className={classes.navBarItemIcon} />},
    {id: 4, name: 'База знаний', icon: <NavBarCases className={classes.navBarItemIcon} />},
    {id: 5, name: 'Аналитика', icon: <NavBarAnalitics className={classes.navBarItemIcon} />},
    {id: 6, name: 'Администрирование', link: ADMIN_ROUTE, icon: <NavBarAdmin className={classes.navBarItemIcon} />}
  ];

  const [navItems, setNavItems] = useState(initNavItems);

  const navList = navItems.map(navItem => {
		return <NavBarItem
      key={navItem.id}
      name={navItem.name}
      link={navItem.link}
      icon={navItem.icon}
    />;
	});

  return (
    <div className={classes.navBar} style={{minHeight: window.innerHeight - 62}}>
      <NavBarLogo/>
      <nav>
        <ul>
          {navList}
        </ul>
      </nav>
    </div>
  );
});

export default NavBar;