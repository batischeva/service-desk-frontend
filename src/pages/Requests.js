import React, { useContext, useEffect } from 'react';
import ControlPanel from '../components/ControlPanel';
import RequestList from '../components/RequestList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchRequests } from '../http/requestAPI';

const Requests = observer(() => {
  const {request} = useContext(Context);

  useEffect(() => {
    fetchRequests().then(data => request.setRequests(data.rows));
  }, []);

  return (
    <main className='main'>
      <h1>
        Обращения
      </h1>
      <ControlPanel />
      <RequestList/>
    </main>
  );
});

export default Requests;