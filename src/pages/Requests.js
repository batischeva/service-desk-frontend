import React, { useContext, useEffect } from 'react';
import ControlPanel from '../components/ControlPanel';
import RequestList from '../components/RequestList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchAgents, fetchCategories, fetchClients, fetchPriorities, fetchRequests, fetchStatuses } from '../http/requestAPI';

const Requests = observer(() => {
  const {request} = useContext(Context);

  useEffect(() => {
    fetchAgents().then(data => request.setAgents(data));
    fetchClients().then(data => request.setClients(data));
    fetchStatuses().then(data => request.setStatuses(data));
    fetchCategories().then(data => request.setCategories(data));
    fetchPriorities().then(data => request.setPriorities(data));
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