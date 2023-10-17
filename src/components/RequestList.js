import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import RequestItem from '../components/RequestItem';
import '../style/RequestList.css';

const RequestList = observer(() => {
  const {request} = useContext(Context);
  return (
    <table>
      <thead className='request-col-header'>
        <tr>
          <th className='request-col-heading'>
            №
          </th>
          <th className='request-col-heading'>
            Дата
          </th>
          <th className='request-col-heading'>
            Ответственный
          </th>
          <th className='request-col-heading'>
            Инициатор
          </th>
          <th className='request-col-heading'>
            Приоритет
          </th>
          <th className='request-col-heading'>
            Статус
          </th>
          <th className='request-col-heading'/>
        </tr>
      </thead>
      <tbody>
        {request.requests.map(request =>
          <RequestItem key={request.id} request={request} />
        )}
      </tbody>
    </table>
  );
});

export default RequestList;