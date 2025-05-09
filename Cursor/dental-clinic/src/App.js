import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

function App() {
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTopVisible(true);
      } else {
        setBackToTopVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize AOS on component mount
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main id="main">
        <About />
        <Services />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      
      <a 
        href="/#" 
        className={`back-to-top d-flex align-items-center justify-content-center ${backToTopVisible ? 'active' : ''}`}
        onClick={(e) => { e.preventDefault(); scrollToTop(); }}
        aria-label="Voltar ao topo"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default App;
