import Profile from '../Profile';
import Chat from '../Chat';
import './index.css';

const MainChat = () => {
  return (
    <main className='mainChat'>
      <Profile />
      <Chat />
    </main>
  );
};

export default MainChat;
