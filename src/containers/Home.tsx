import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title> ChatApp | Home </title>
        <meta name='description' content='Website to chat with your friends' />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
