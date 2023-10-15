import React from 'react';
import '../style/RequestList.css';
import {useHistory} from 'react-router-dom';
import { REQUESTS_ROUTE } from '../utils/consts';

const RequestItem = ({request}) => {
  const history = useHistory();
  return (
    <div className='request-row' onClick={() => history.push(REQUESTS_ROUTE + '/' + request.id)}>
      <div className='request-row-elem'>
        {request.id}
      </div>
      <div className='request-row-elem'>
        Дата
      </div>
      <div className='request-row-elem'>
        Ответственный
      </div>
      <div className='request-row-elem'>
        Пользователь
      </div>
      <div className='request-row-elem'>
        Приоритет
      </div>
      <div className='request-row-elem'>
        Статус
      </div>
    </div>
  );
};

export default RequestItem;