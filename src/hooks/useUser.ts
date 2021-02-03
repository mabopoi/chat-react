import { useState } from 'react';
import { User, ContextType } from '../types';

export const useUser = (): ContextType => {
  const [user, setUser] = useState<User>({ name: '', email: '' });
  const addUser = (userToAdd: User) => setUser(userToAdd);

  return { user, addUser };
};
