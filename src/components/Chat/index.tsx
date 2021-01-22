import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const Chat = () => {
  const [chatMessages, setChatMessages] = useState<object[]>([]);
  const [msgToSend, setMsgToSend] = useState('');
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:3001');
    socketRef.current.on('chat msg', (msg: object) => {
      setChatMessages((chatMessages) => [...chatMessages, msg]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div>
        {chatMessages.map((msg) => (
          <span key={chatMessages.indexOf(msg)}>{msg}</span>
        ))}
      </div>
      <input
        type='text'
        value={msgToSend}
        onChange={(e) => setMsgToSend(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            socketRef.current?.emit('chat msg', msgToSend);
            setMsgToSend('');
          }
        }}
      />
    </section>
  );
};

export default Chat;
