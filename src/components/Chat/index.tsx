import { useEffect, useRef, useState, useContext } from 'react';
import { io, Socket } from 'socket.io-client';
import userContext from '../../contexts/User';
import { Message, contextType } from '../../types';
import './index.css';

const Chat = () => {
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [msgToSend, setMsgToSend] = useState('');
  const { user } = useContext(userContext) as contextType;
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:3001');
    socketRef.current.on('chat msg', (msg: Message) => {
      setChatMessages((chatMessages) => [...chatMessages, msg]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='chat'>
      {chatMessages.map((msg) => (
        <div
          className={
            user.email === msg.user.email
              ? 'chat__container--right'
              : 'chat__container--left'
          }
          key={chatMessages.indexOf(msg)}
        >
          <div
            className={
              user.email === msg.user.email
                ? 'chat__msgContainer--mine'
                : 'chat__msgContainer'
            }
          >
            <span>{msg.user.name}</span>
            <span>{msg.info}</span>
          </div>
        </div>
      ))}
      <input
        type='text'
        value={msgToSend}
        onChange={(e) => setMsgToSend(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            socketRef.current?.emit('chat msg', { info: msgToSend, user });
            setMsgToSend('');
          }
        }}
      />
    </section>
  );
};

export default Chat;
