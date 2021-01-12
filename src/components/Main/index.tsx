import { useState, FormEvent, ChangeEvent } from 'react';
import Form from '../Form';
import './index.css';

const Main = () => {
  const [data, setData] = useState({});
  const [signUp, setSignUp] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData: object = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };

  const handleSignUpSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleLogInSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className='main'>
      <div className='main__chart'>
        <ul className='main__list'>
          <div className='main__listItem' onClick={() => setSignUp(true)}>
            <li>Sign up</li>
          </div>
          <div className='main__listItem' onClick={() => setSignUp(false)}>
            <li>Log in</li>
          </div>
        </ul>
        {signUp ? (
          <div className='main__chartContent'>
            <h2 className='main__chartTitle'>Sign up!</h2>
            <Form
              handleSubmit={handleSignUpSubmit}
              handleChange={handleChange}
              signUp={true}
            />
          </div>
        ) : (
          <div className='main__chartContent'>
            <h2 className='main__chartTitle'>Log in!</h2>
            <Form
              handleSubmit={handleLogInSubmit}
              handleChange={handleChange}
              signUp={false}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;
