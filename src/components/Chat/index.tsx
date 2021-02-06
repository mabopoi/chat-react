import { useEffect, useRef, useState, useContext } from 'react';
import { io, Socket } from 'socket.io-client';
import userContext from '../../contexts/User';
import { MessageType, ContextType } from '../../types';
import Message from '../Message';
import './index.css';

const Chat = () => {
  const [chatMessages, setChatMessages] = useState<MessageType[]>([]);
  const [msgToSend, setMsgToSend] = useState('');
  const { user } = useContext(userContext) as ContextType;
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:3001');
    socketRef.current.on('chat msg', (msg: MessageType) => {
      setChatMessages((chatMessages) => [...chatMessages, msg]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='chat'>
      <div className='chat__container'>
        {chatMessages.map((msg) => (
          <Message key={chatMessages.indexOf(msg)} user={user} msg={msg} />
        ))}
      </div>
      <input
        className='chat__input'
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
