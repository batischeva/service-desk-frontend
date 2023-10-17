import React, { useEffect, useState } from 'react';
import { REQUESTS_ROUTE } from '../utils/consts';
import '../style/RequestInfo.css';
import { useParams } from 'react-router-dom';
import { fetchOneRequest } from '../http/requestAPI';

const RequestInfo = () => {
  const [request, setRequest] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fetchOneRequest(id).then(data => setRequest(data)).catch(err => console.log(err));
  }, []);

  console.log(request)

  return (
    <main className='main'>
      <div className='internal-page-control-panel'>
        <a href={REQUESTS_ROUTE} className='internal-page-link-back'> </a>
        <h1 className='requests-title'>
          Обращение № {request.id}
        </h1>
      </div>
      <div className='request-info'>
        <div className='request-info-block'>
          <div className='request-info-label'>
            Инициатор:
          </div>
          <div className='request-info-item'>
            {request.clientId}
          </div>
        </div>

        <div className='request-info-block'>
          <div className='request-info-label'>
            Категория:
          </div>
          <div className='request-info-item'>
            {request.categoryId}
          </div>
        </div>

        <div className='request-info-block'>
          <div className='request-info-label'>
            Описание:
          </div>
          <div className='request-info-item'>
            {request.description}
          </div>
        </div>
        
        <div className='request-info-block'>
          <div className='request-info-label'>
            Приоритет:
          </div>
          <div className='request-info-item'>
            {request.priorityId}
          </div>
        </div>

        <div className='request-info-block'>
          <div className='request-info-label'>
            Ответственный:
          </div>
          <div className='request-info-item'>
            {/* {request.agent.first_name} {request.agent.middle_name} {request.agent.last_name} */}
          </div>
        </div>

        <div className='request-info-block'>
          <div className='request-info-label'>
            Статус:
          </div>
          <div className='request-info-item'>
            {request.statusId}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RequestInfo;