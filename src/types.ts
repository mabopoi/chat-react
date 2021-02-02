export type Message = {
  info: string;
  user: User;
};

export type User = {
  name: string;
  email: string;
};

export type contextType = {
  user: User;
  addUser: (arg0: User) => void;
};
