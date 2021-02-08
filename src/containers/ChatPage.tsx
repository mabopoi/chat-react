import Footer from '../components/Footer';
import MainChat from '../components/MainChat';
import { Helmet } from 'react-helmet';

const ChatPage = () => {
  return (
    <>
      <Helmet>
        <title>ChatApp | Chat </title>
        <meta name='description' content='Chat section' />
      </Helmet>
      <MainChat />
      <Footer />
    </>
  );
};

export default ChatPage;
