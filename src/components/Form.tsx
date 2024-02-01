import React from 'react';
import { FormEvent } from 'react';

const Form = () => {
  const handleSumbit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Sumbitted');
  };
  return (
    <form onSubmit={handleSumbit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input id='name' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input id='age' type='number' className='form-control' />
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
