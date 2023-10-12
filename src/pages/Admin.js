import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const Admin = () => {
  return (
    <div className='workspace'>
      <NavBar />
      <div className='main-content' style={{width: window.innerWidth}}>
        <Header />
        <main className='main'>
          <h1 className='requests-title'>
            Администрирование
          </h1>
        </main>
      </div>
    </div>
  );
};

export default Admin;