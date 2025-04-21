import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import bgImg from './assets/gradient.png';
import Hero from './components/Hero';
import Fame from './components/Fame';
import Trusted from './components/Trusted';
import Products from './components/Products';
import Features from './components/Features';
import Partners from './components/Partners';
import Magic from './components/Magic';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import { useAtomValue } from "jotai";
import { themeAtom } from './jotai/Atoms';

const App = () => {
  const darkTheme = useAtomValue(themeAtom);

  useEffect(() => {
    const root = document.documentElement;
    darkTheme
      ? root.setAttribute('dark-theme', 'dark')
      : root.removeAttribute('dark-theme');
  }, [darkTheme]);

  const containerStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundColor: darkTheme ? '#212121' : 'white',
    height: "100vh",
    width: "100vw",
    color: darkTheme ? 'white' : 'black',
    overflowX: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <Hero />
      <Fame />
      <Trusted />
      <Products />
      <Features />
      <Partners />
      <Magic />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default App;
