import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import RequestItem from '../components/RequestItem';
import '../style/RequestList.css';

const RequestList = observer(() => {
  const {request} = useContext(Context);
  return (
    <div>
      <div className='request-row request-col-header'>
        <div className='request-col-heading'>
          Номер
        </div>
        <div className='request-col-heading'>
          Дата
        </div>
        <div className='request-col-heading'>
          Ответственный
        </div>
        <div className='request-col-heading'>
          Пользователь
        </div>
        <div className='request-col-heading'>
          Приоритет
        </div>
        <div className='request-col-heading'>
          Статус
        </div>
      </div>
      {request.requests.map(request =>
        <RequestItem key={request.id} request={request} />
      )}
    </div>
  );
});

export default RequestList;