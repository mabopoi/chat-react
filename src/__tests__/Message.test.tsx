import Message from '../components/Message';
import { render, screen } from '@testing-library/react';

describe('<Message /> tests', () => {
  beforeEach(() =>
    render(
      <Message
        user={{ email: 'test@test.com', name: 'test' }}
        msg={{
          info: 'Test message',
          user: { email: 'test@test.com', name: 'test' },
        }}
      />
    )
  );

  test('Message info & User name must be found', () => {
    expect(screen.getByText('Test message')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('The message must be ours', () => {
    const { container } = render(
      <Message
        user={{ email: 'test@test.com', name: 'test' }}
        msg={{
          info: 'Test message',
          user: { email: 'test@test.com', name: 'test' },
        }}
      />
    );

    const messageSection = container.firstChild;

    expect(messageSection).toHaveClass('message__section--right');
    expect(messageSection?.firstChild).toHaveClass(
      'message__msgContainer--mine'
    );
  });
});
