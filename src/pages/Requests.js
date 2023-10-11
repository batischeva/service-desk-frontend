import React from 'react';
import '../style/Requests.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const Requests = () => {
  return (
    <div className='workspace'>
      <NavBar />
      <div className='main-content' style={{width: window.innerWidth}}>
        <Header />
        <main className='container'>
          REQUESTS
        </main>
      </div>
    </div>
  );
};

export default Requests;