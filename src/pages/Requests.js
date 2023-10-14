import React from 'react';
import '../style/Requests.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ControlPanel from '../components/ControlPanel';
import RequestList from '../components/RequestList';

const Requests = () => {
  return (
    <div className='workspace'>
      <NavBar />
      <div className='main-content' style={{width: window.innerWidth}}>
        <Header />
        <main className='main'>
          <h1 className='requests-title'>
            Обращения
          </h1>
          <ControlPanel />
          <RequestList/>
        </main>
      </div>
    </div>
  );
};

export default Requests;