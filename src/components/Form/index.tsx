import { FormEvent, ChangeEvent } from 'react';
import './index.css';

type propsTypes = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  signIn: boolean;
};

const Form = ({ handleSubmit, handleChange, signIn }: propsTypes) => {
  return (
    <form onSubmit={handleSubmit}>
      <span className='form__input'>Email</span>
      <input className='form__text' type='text' onChange={handleChange} />
      {signIn && (
        <>
          <span className='form__input'>Name</span>
          <input className='form__text' type='text' onChange={handleChange} />
        </>
      )}
      <span className='form__input'>Password</span>
      <input className='form__text' type='text' onChange={handleChange} />
      {signIn && (
        <>
          <span className='form__input'>Confirm password</span>
          <input className='form__text' type='text' onChange={handleChange} />
        </>
      )}
      <button>Go!</button>
    </form>
  );
};

export default Form;
