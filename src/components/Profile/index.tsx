import { useContext } from 'react';
import userContext from '../../contexts/User';
import { ContextType } from '../../types';
import { useHistory } from 'react-router-dom';
import './index.css';

const Profile = () => {
  const { user, addUser } = useContext(userContext) as ContextType;
  const history = useHistory();

  const handleLogOut = () => {
    addUser({ name: '', email: '' });
    history?.push('/');
  };

  return (
    <aside className='profile'>
      <h4 className='profile__mainText'>You are logged as:</h4>
      <span className='profile__text'>{user.email}</span>
      <span className='profile__text'>{user.name}</span>
      <button className='profile__btn' onClick={handleLogOut}>
        Log out
      </button>
    </aside>
  );
};

export default Profile;
