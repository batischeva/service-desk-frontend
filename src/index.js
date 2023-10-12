import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import RequestStore from './store/RequestStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    request: new RequestStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
