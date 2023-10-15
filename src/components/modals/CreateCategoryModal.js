import React, { useState } from 'react';
import Modal from './Modal';
import { createCategory } from '../../http/requestAPI';

const CreateCategoryModal = ({modalActive, setModalActive}) => {
  const [value, setValue] = useState('');
  const addCategory = () => {
    createCategory({name: value}).then(data => {
      setValue('');
      alert('Категория успешно добавлена!');
    })
  };

  return (
    <Modal active={modalActive} setActive={setModalActive}>
      <h1>
        Добавить категорию обращений
      </h1>
      <form className='admin-form'>
        <fieldset className='admin-form-fieldset'>
          <input
            className='admin-form-input'
            type='text'
            placeholder='Введите название категории'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </fieldset>
        <button className='admin-form-btn' onClick={(event) => {
          event.preventDefault();
          addCategory();
          setModalActive(false);
        }}>
          Добавить
        </button>
      </form>
    </Modal>
  );
};

export default CreateCategoryModal;