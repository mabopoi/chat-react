import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../components/Form';

describe('LogIn process', () => {
  beforeAll(() => {
    render(
      <Form
        handleChange={() => {
          return;
        }}
        handleSubmit={() => {
          return;
        }}
        signUp={false}
        userCreated={false}
        error={''}
      />
    );
  });

  test('successful form render', () => {
    const emailLabel = screen.getByText(/Email/i);
    expect(emailLabel).toBeInTheDocument();
  });

  test('if is not signUp form', () => {
    const nameLabel = screen.queryByText('Name');
    expect(nameLabel).not.toBeInTheDocument();
  });
});
