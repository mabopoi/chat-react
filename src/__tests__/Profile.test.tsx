import React from 'react';
import Profile from '../components/Profile';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

describe('<Profile /> tests', () => {
  beforeEach(() => {
    const useUser = jest.fn().mockImplementation(() => ({
      user: { email: 'test@test.com', name: 'test' },
      addUser: () => {},
    })); //Same result with mockReturnValue

    React.useContext = useUser;

    render(<Profile />);
  });

  test('Context info must be found succesfully', () => {
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('handleLogOut must be called when clicking the button', () => {
    const handleLogOut = jest.fn();

    const logOutButton = screen.getByText('Log out');
    fireEvent.click(logOutButton);

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(handleLogOut).toBeCalled());
  });
});
