import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
