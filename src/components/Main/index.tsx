import { useState, FormEvent, ChangeEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../Form';
import Axios from 'axios';
import userContext from '../../contexts/User';
import { ContextType } from '../../types';
import './index.css';

const Main = () => {
  const [data, setData] = useState({});
  const [signUp, setSignUp] = useState(true);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const { addUser } = useContext(userContext) as ContextType;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData: object = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };

  const handleSignUpSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const signUp = await Axios.post('http://localhost:3001/auth/sign-up', data);

    if (signUp.status === 201) {
      setUserCreated(true);
    } else {
      setError('There was a problem, user not created');
    }
  };

  const handleLogInSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const logIn = await Axios.post('http://localhost:3001/auth/sign-in', data);
    try {
      if (logIn.status === 200) {
        addUser(logIn.data.user);
        history.replace('/chat');
      }
    } catch {
      setError("Email and password don't match");
    }
  };

  return (
    <main className='main'>
      <div className='main__chart'>
        <ul className='main__list'>
          <div
            className='main__listItem'
            onClick={() => {
              setSignUp(true);
              setError('');
            }}
          >
            <li>Sign up</li>
          </div>
          <div
            className='main__listItem'
            onClick={() => {
              setSignUp(false);
              setError('');
            }}
          >
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
              userCreated={userCreated}
              error={error}
            />
          </div>
        ) : (
          <div className='main__chartContent'>
            <h2 className='main__chartTitle'>Log in!</h2>
            <Form
              handleSubmit={handleLogInSubmit}
              handleChange={handleChange}
              signUp={false}
              userCreated={false}
              error={error}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;
