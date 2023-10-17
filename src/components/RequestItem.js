import React from 'react';
import '../style/RequestList.css';
import {useHistory} from 'react-router-dom';
import { REQUESTS_ROUTE } from '../utils/consts';
import {ReactComponent as ControlPanelEdit} from "../icon/edit.svg";
import {ReactComponent as ControlPanelDelete} from "../icon/delete.svg";
import { deleteRequest } from '../http/requestAPI';

const RequestItem = ({request}) => {
  const history = useHistory();

  const createDate = (str) => {
    return str.split(' ', 1);
  };

  const createInitials = (str) => {
    return str.substring(0, 1) + '.';
  };

  const handleDelete = async (id) => {
    await deleteRequest(id)
    .then(res => {
      alert(`Обращение №${id} успешно удалено`);
    });
  };

  return (
    <tr className='request-row'>
      <td className='request-row-elem' onClick={() => history.push(REQUESTS_ROUTE + '/' + request.id)}>
        {request.id}
      </td>
      <td className='request-row-elem' onClick={() => history.push(REQUESTS_ROUTE + '/' + request.id)}>
        {createDate(request.createdAt)}
      </td>
      <td className='request-row-elem' onClick={() => history.push(REQUESTS_ROUTE + '/' + request.id)}>
        {createInitials(request.agent.first_name)} {createInitials(request.agent.middle_name)} {request.agent.last_name}
      </td>
      <td className='request-row-elem' onClick={() => history.push(REQUESTS_ROUTE + '/' + request.id)}>
        {createInitials(request.client.first_name)} {createInitials(request.client.middle_name)} {request.client.last_name}
      </td>
      <td className='request-row-elem' onClick={() => history.push(REQUESTS_ROUTE + '/' + request.id)}>
        {request.priority.name}
      </td>
      <td className='request-row-elem' onClick={() => history.push(REQUESTS_ROUTE + '/' + request.id)}>
        {request.status.name}
      </td>
      <td className='request-row-elem request-row-elem-btn'>
        <button className='btn'>
          <ControlPanelEdit />
        </button>
        <button className='btn' onClick={() => handleDelete(request.id)}>
          <ControlPanelDelete />
        </button>
      </td>
    </tr>
  );
};

export default RequestItem;