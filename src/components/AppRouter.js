import React, { Component, useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import {REQUESTS_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import {Context} from '../index';

const AppRouter = () => {
  const {user} = useContext(Context);
  return (
    <Switch>
      {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} component={Component} exact/>
      )};
      {publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} component={Component} exact/>
      )};
      <Redirect to={LOGIN_ROUTE}/>
    </Switch>
  );
};

export default AppRouter;