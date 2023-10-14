import React from 'react';
import Modal from './Modal';

const CreateCategory = ({modalActive, setModalActive}) => {
  return (
    <Modal active={modalActive} setActive={setModalActive}>
      <h1>
        Добавить категорию обращений
      </h1>
      <form className='admin-form'>
        <fieldset className='admin-form-fieldset'>
          <input type='text' placeholder='Введите название категории' className='admin-form-input'/>
        </fieldset>
        <button className='admin-form-btn'>
          Добавить
        </button>
      </form>
    </Modal>
  );
};

export default CreateCategory;