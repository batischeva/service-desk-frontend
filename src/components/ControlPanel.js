import React from 'react';
import {useHistory} from 'react-router-dom';
import '../style/ControlPanel.css';
import {ReactComponent as ControlPanelAdd} from "../icon/add.svg";
import {ReactComponent as PaginationArrowNext} from "../icon/pagination-arrow.svg";
import {ReactComponent as PaginationArrowPrevious} from "../icon/pagination-arrow-previous.svg";
import { ADD_REQUEST_ROUTE } from '../utils/consts';

const ControlPanel = () => {
  const history = useHistory();
  return (
    <div className='control-panel'>
      <div className='btn-block'>
        <button className='add-btn' onClick={() => history.push(ADD_REQUEST_ROUTE)}>
          <ControlPanelAdd />
          Создать обращение
        </button>
      </div>
      <form action="" method="get" className='search-block'>
        <input name="s" placeholder="Поиск" type="search" className='search' />
        <button type="submit" className='search-btn'></button>
      </form>
      <div className='pagination-block'>
        <PaginationArrowPrevious className='pagination-btn' />
        1 - 10
        <PaginationArrowNext className='pagination-btn' />
      </div>
    </div>
  );
};

export default ControlPanel;