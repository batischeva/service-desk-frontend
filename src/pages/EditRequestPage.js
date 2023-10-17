import React, { useContext, useEffect, useState } from 'react';
import '../style/AddRequestPage.css';
import { REQUESTS_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { createRequest, fetchAgents, fetchCategories, fetchClients, fetchOneRequest, fetchPriorities } from '../http/requestAPI';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const EditRequestPage = () => {
  const {id} = useParams();
  const history = useHistory();
  const {request} = useContext(Context);

  const [client, setClient] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [agent, setAgent] = useState('');
  const [req, setReq] = useState('');

  useEffect(() => {
    fetchClients().then(data => setClient(data));
    fetchCategories().then(data => setCategory(data));
    fetchPriorities().then(data => setPriority(data));
    fetchAgents().then(data => setAgent(data));
    fetchOneRequest(id).then(data => setReq(data));
  }, []);

  return (
    <main className='main'>
      <div className='internal-page-control-panel'>
        <button className='internal-page-link-back' onClick={() => history.push(REQUESTS_ROUTE)}/>
        <h1>
        Обращение № {req.id}
        </h1>
      </div>
      <form className='add-request-form'>
        <label className='add-request-form-label'>
          Инициатор:
          <select
            className='add-request-form-input'
            name='client'
            value={client}
            onChange={e => setClient(e.target.value)}
          >
          <option>Выберите ФИО</option>
          {request.clients.map(client => 
            <option
              key={client.id}
              value={client.id}
            >
              {client.last_name} {client.first_name} {client.middle_name}
            </option>
          )}
          </select>
        </label>
        
        <label className='add-request-form-label'>
          Ответственный:
          <select
            className='add-request-form-input'
            name='agent'
            value={agent}
            onChange={e => setAgent(e.target.value)}
          >
            <option>Выберите ФИО</option>
            {request.agents.map(agent => 
              <option
                key={agent.id}
                value={agent.id}
              >
                {agent.last_name} {agent.first_name} {agent.middle_name}
              </option>
            )}
          </select>
        </label>
        
        <label className='add-request-form-label'>
          Приоритет:
          <select
            className='add-request-form-input'
            name='priority'
            value={priority}
            onChange={e => setPriority(e.target.value)}
          >
            <option>Выберите приоритет</option>
            {request.priorities.map(priority => 
              <option
                key={priority.id}
                value={priority.id}
              >
                {priority.name}
              </option>
            )}
          </select>
        </label>

        <label className='add-request-form-label'>
          Категория:
          <select
            className='add-request-form-input'
            name='category'
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option>Выберите категорию</option>
            {request.categories.map(category => 
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            )}
          </select>
        </label>

        <label className='add-request-form-label'>
          Описание:
          <input
            className='add-request-form-input'
            type='text'
            placeholder='Введите описание'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        {/* <button className='add-request-form-btn' type='submit'>
          Зарегистрировать
        </button> */}
      </form>
    </main>
  );
};

export default EditRequestPage;