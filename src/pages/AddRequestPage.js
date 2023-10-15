import React, { useContext } from 'react';
import '../style/AddRequestPage.css';
import backArrow from '../icon/back-request-arrow.svg';
import { REQUESTS_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AddRequestPage = () => {
  const {request} = useContext(Context);
  return (
    <main className='main'>
      <div className='internal-page-control-panel'>
        <a href={REQUESTS_ROUTE}>
          <img src={backArrow}/>
        </a>
        <h1>
          Создание нового обращения
        </h1>
      </div>
      <form className='add-request-form'>
        <fieldset className='add-request-form-fieldset'>
          <label className='add-request-form-label'>
            Инициатор:
            <select name='client' className='add-request-form-input' required>
            <option selected disabled>Выберите ФИО</option>
              {request.clients.map(client => 
                <option value={client.id}>
                  {client.last_name} {client.first_name} {client.middle_name}
                </option>
              )}
            </select>
          </label>
          <label className='add-request-form-label'>
            Категория:
            <select name='category' className='add-request-form-input' required>
              <option selected disabled>Выберите категорию</option>
              {request.categories.map(category => 
                <option value={category.id}>
                  {category.name}
                </option>
              )}
            </select>
          </label>
          <label className='add-request-form-label'>
            Описание:
            <textarea className='add-request-form-textarea' rows='2' placeholder='Введите описание'/>
          </label>
          <label className='add-request-form-label'>
            Приоритет:
            <select name='priority' className='add-request-form-input' required>
              <option selected disabled>Выберите приоритет</option>
              {request.priorities.map(priority => 
                <option value={priority.id}>
                  {priority.name}
                </option>
              )}
            </select>
          </label>
          <label className='add-request-form-label'>
            Ответственный:
            <select name='agent' className='add-request-form-input' required>
              <option selected disabled>Выберите ФИО</option>
              {request.agents.map(agent => 
                <option value={agent.id}>
                  {agent.last_name} {agent.first_name} {agent.middle_name}
                </option>
              )}
            </select>
          </label>
        </fieldset>
        <button className='add-request-form-btn'>
          Зарегистрировать
        </button>
      </form>
    </main>
  );
};

export default AddRequestPage;