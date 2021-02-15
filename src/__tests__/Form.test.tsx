import React from 'react';
import { render, screen, fireEvent, Nullish } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/Form';

describe('<Form /> tests', () => {
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
        error={'Test error'}
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

  test('handleChange & handleSubmit must be called when writing or clicking the button, respectively', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();

    const { getByText, getByRole } = render(
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        signUp={false}
        userCreated={false}
        error={''}
      />
    );
    const input = getByRole('textbox');
    userEvent.type(input, 'test@test.com');
    expect(handleChange).toBeCalledTimes(13);

    fireEvent.click(getByText('Go!'));
    expect(handleSubmit).toBeCalled();
  });

  test('error must be visible', () => {
    const { getByText } = render(
      <Form
        handleChange={() => {
          return;
        }}
        handleSubmit={() => {
          return;
        }}
        signUp={false}
        userCreated={false}
        error={'Test error'}
      />
    );

    const errorMsg = getByText((content, node) => {
      const hasText = (node: Nullish<Element>) =>
        node?.textContent === 'Test error';
      const nodeHasText = hasText(node);
      const { children } = node as HTMLElement;
      const childrenDontHaveText = Array.from(children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });

    expect(errorMsg).toBeInTheDocument();
  });

  test('userCreated warning must not be visible', () => {
    const userCreatedWarning = screen.queryByText(
      'User created successfully, go to Log In'
    );
    expect(userCreatedWarning).not.toBeInTheDocument();
  });
});
