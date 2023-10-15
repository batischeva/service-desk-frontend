import React from 'react';
import backArrow from '../icon/back-request-arrow.svg';
import { REQUESTS_ROUTE } from '../utils/consts';
import '../style/RequestInfo.css';

const RequestInfo = () => {
  const request = {id: 2, description: 'Установить обновления ОС на сервере 1С'};
  return (
    <main className='main'>
      <div className='internal-page-control-panel'>
        <a href={REQUESTS_ROUTE}>
          <img src={backArrow}/>
        </a>
        <h1 className='requests-title'>
          Обращение № {request.id}
        </h1>
      </div>
      <div className='request-info'>
        <div className='request-info-block'>
          <div className='request-info-label'>
            Описание:
          </div>
          <div className='request-info-item'>
            {request.description}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RequestInfo;