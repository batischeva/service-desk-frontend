import React, { useState } from 'react';
import Modal from './Modal';
import { createCategory } from '../../http/requestAPI';

const CreateCategoryModal = ({modalActive, setModalActive}) => {
  const [value, setValue] = useState('');

  const addCategory = async () => {
    try {
      await createCategory({name: value});
      alert('Категория успешно добавлена!');
      setValue('');
      setModalActive(false);
    } catch (e) {
      alert(e.response.data.message);
    }
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
        <button className='admin-form-btn' onClick={(e) => {
          e.preventDefault();
          addCategory();
        }}>
          Добавить
        </button>
      </form>
    </Modal>
  );
};

export default CreateCategoryModal;