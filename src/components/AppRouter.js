import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import {NOT_FOUND_ROUTE} from '../utils/consts';
import {Context} from '../index';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  const {user} = useContext(Context);
  return (
    <Switch>
      {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} component={Component} exact/>
      )};
      {!user.isAuth && publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} component={Component} exact/>
      )};
      <Route path='*' component={NotFound} exact/>
    </Switch>
  );
};

export default AppRouter;
