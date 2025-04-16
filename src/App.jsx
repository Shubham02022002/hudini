import React from 'react';
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
const App = () => {
  return (
    <div style={{
      backgroundImage: `url(${bgImg})`,
      backgroundColor: "#212121",
      height: "100vh",
      width: "100vw"
    }}>
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
    </div >
  )
}

export default App;