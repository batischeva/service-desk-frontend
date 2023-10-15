import React from 'react';
import ControlPanel from '../components/ControlPanel';
import RequestList from '../components/RequestList';

const Requests = () => {
  return (
    <main className='main'>
      <h1>
        Обращения
      </h1>
      <ControlPanel />
      <RequestList/>
    </main>
  );
};

export default Requests;