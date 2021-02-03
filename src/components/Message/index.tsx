import { MessageType, User } from '../../types';
import './index.css';

const Message = (props: { user: User; msg: MessageType }) => {
  const { user, msg } = props;

  return (
    <div
      className={
        user.email === msg.user.email
          ? 'message__section--right'
          : 'message__section--left'
      }
    >
      <div
        className={
          user.email === msg.user.email
            ? 'message__msgContainer--mine'
            : 'message__msgContainer'
        }
      >
        <span className='message__userName'>{msg.user.name}</span>
        <span className='message_content'>{msg.info}</span>
      </div>
    </div>
  );
};

export default Message;
