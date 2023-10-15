import React, { useContext, useEffect, useState } from 'react';
import '../style/AddRequestPage.css';
import { REQUESTS_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { fetchAgents, fetchCategories, fetchClients, fetchPriorities } from '../http/requestAPI';

const AddRequestPage = () => {
  const {request} = useContext(Context);

  const [client, setClient] = useState({});
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [agent, setAgent] = useState('');

  useEffect(() => {
    fetchClients().then(data => request.setClients(data));
    fetchCategories().then(data => request.setCategories(data));
    fetchPriorities().then(data => request.setPriorities(data));
    fetchAgents().then(data => request.setAgents(data));
  }, []);

  return (
    <main className='main'>
      <div className='internal-page-control-panel'>
        <a href={REQUESTS_ROUTE} className='internal-page-link-back'> </a>
        <h1>
          Создание нового обращения
        </h1>
      </div>
      <div className='add-request-form'>
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
              value={client.id}
            >
              {client.last_name} {client.first_name} {client.middle_name}
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
              <option value={category.id}>
                {category.name}
              </option>
            )}
          </select>
        </label>
        <label className='add-request-form-label'>
          Описание:
          <textarea
            className='add-request-form-textarea'
            rows='2'
            placeholder='Введите описание'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
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
              <option value={priority.id}>
                {priority.name}
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
              <option value={agent.id}>
                {agent.last_name} {agent.first_name} {agent.middle_name}
              </option>
            )}
          </select>
        </label>
        <button className='add-request-form-btn'>
          Зарегистрировать
        </button>
      </div>
    </main>
  );
};

export default AddRequestPage;