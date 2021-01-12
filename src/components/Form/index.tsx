import { FormEvent, ChangeEvent } from 'react';
import './index.css';

type propsTypes = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  signUp: boolean;
};

const Form = ({ handleSubmit, handleChange, signUp }: propsTypes) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <span className='form__text'>Email</span>
      <input
        className='form__input'
        type='text'
        onChange={handleChange}
        name='email'
      />
      {signUp && (
        <>
          <span className='form__text'>Name</span>
          <input
            className='form__input'
            type='text'
            onChange={handleChange}
            name='name'
          />
        </>
      )}
      <span className='form__text'>Password</span>
      <input
        className='form__input'
        type='password'
        onChange={handleChange}
        name='password'
      />
      {signUp && (
        <>
          <span className='form__text'>Confirm password</span>
          <input
            className='form__input'
            type='password'
            onChange={handleChange}
            name='confirmedPassword'
          />
        </>
      )}
      <div className='form__btnContainer'>
        <button type='submit' className='form__btn'>
          Go!
        </button>
      </div>
    </form>
  );
};

export default Form;
