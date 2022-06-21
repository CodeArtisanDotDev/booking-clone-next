import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Header />
      <main className='min-h-screen'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
