import React from 'react';
import '../style/ControlPanel.css';
import {ReactComponent as ControlPanelAdd} from "../icon/add.svg";
import {ReactComponent as ControlPanelEdit} from "../icon/edit.svg";
import {ReactComponent as ControlPanelDelete} from "../icon/delete.svg";
import {ReactComponent as ControlPanelSearch} from "../icon/search.svg";
import {ReactComponent as PaginationArrowNext} from "../icon/pagination-arrow.svg";
import {ReactComponent as PaginationArrowPrevious} from "../icon/pagination-arrow-previous.svg";

const ControlPanel = () => {
  return (
    <div className='control-panel'>
      <div className='btn-block'>
        <button className='add-btn'>
          <ControlPanelAdd />
          Создать
        </button>
        <button className='control-btn'>
          <ControlPanelEdit />
        </button>
        <button className='control-btn'>
          <ControlPanelDelete />
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