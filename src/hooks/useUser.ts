import { useState } from 'react';
import { User, contextType } from '../types';

export const useUser = (): contextType => {
  const [user, setUser] = useState<User>({ name: '', email: '' });
  const addUser = (userToAdd: User) => setUser(userToAdd);

  return { user, addUser };
};
