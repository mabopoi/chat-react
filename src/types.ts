import { FormEvent, ChangeEvent } from 'react';

export type MessageType = {
  info: string;
  user: User;
};

export type User = {
  name: string;
  email: string;
};

export type ContextType = {
  user: User;
  addUser: (arg0: User) => void;
};

export type FormProps = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  signUp: boolean;
  error: string;
  userCreated: boolean;
};
