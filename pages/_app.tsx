import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full bg-[#010C15]">
      <div className="container mx-auto py-10">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
