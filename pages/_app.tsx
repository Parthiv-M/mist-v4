import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
const AOS = require('aos');

// import aos styles
import 'aos/dist/aos.css';

// importing components
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router])

  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

  // handles exit animation
  const handleExitComplete = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 })
    }
  }
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/bd63cd3620.js" crossOrigin="anonymous"></script>
      </Head>
      <Navbar />
      <AnimatePresence mode='wait' onExitComplete={handleExitComplete}>
        {pageLoading ? (
          <div className="min-h-screen text-4xl text-white flex flex-col justify-center text-center">
            <div className="lds-ring mx-auto">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>Loading</p>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </AnimatePresence>
      <Footer />
      <style jsx>{`
        .lds-ring {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-ring div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: 64px;
          height: 64px;
          margin: 8px;
          border: 8px solid #fff;
          border-radius: 50%;
          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: #fff transparent transparent transparent;
        }
        .lds-ring div:nth-child(1) {
          animation-delay: -0.45s;
        }
        .lds-ring div:nth-child(2) {
          animation-delay: -0.3s;
        }
        .lds-ring div:nth-child(3) {
          animation-delay: -0.15s;
        }
        @keyframes lds-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

export default MyApp
