import React, { useState, useEffect } from 'react';
import '../App.css';
import drAbdulLogo from '../assets/Dr_Abdul_Hadi_Logo_White_Transparent.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavShown, setIsMobileNavShown] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Check which section is currently in view
      updateActiveSection();
    };
    
    const updateActiveSection = () => {
      const sections = [
        'hero',
        'about',
        'services',
        'testimonials',
        'location',
        'contact'
      ];
      
      // Find which section is currently visible
      // We'll consider a section "active" when the top of the section is within 
      // the viewport or just above it (within 100px)
      const currentPos = window.scrollY + 200; // Adding an offset for better UX
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (currentPos >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set the active section on component mount
    updateActiveSection();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavShown(!isMobileNavShown);
  };

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    if (isMobileNavShown) {
      setIsMobileNavShown(false);
    }
  };

  const navLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleNavLinkClick(sectionId);
  };

  return (
    <header id="header" className={isScrolled ? "header-scrolled" : ""}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/#hero" className="logo me-auto" onClick={(e) => navLinkClick(e, 'hero')}>
          <img src={drAbdulLogo} alt="Dr. Abdul Hadi Odontologia" />
        </a>

        <nav id="navbar" className={isMobileNavShown ? "navbar-mobile" : "navbar"}>
          <ul>
            <li>
              <a 
                className={`nav-link scrollto ${activeSection === 'hero' ? 'active' : ''}`} 
                href="/#hero"
                onClick={(e) => navLinkClick(e, 'hero')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                className={`nav-link scrollto ${activeSection === 'about' ? 'active' : ''}`} 
                href="/#about"
                onClick={(e) => navLinkClick(e, 'about')}
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a 
                className={`nav-link scrollto ${activeSection === 'services' ? 'active' : ''}`} 
                href="/#services"
                onClick={(e) => navLinkClick(e, 'services')}
              >
                Serviços
              </a>
            </li>
            <li>
              <a 
                className={`nav-link scrollto ${activeSection === 'testimonials' ? 'active' : ''}`} 
                href="/#testimonials"
                onClick={(e) => navLinkClick(e, 'testimonials')}
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a 
                className={`nav-link scrollto ${activeSection === 'location' ? 'active' : ''}`} 
                href="/#location"
                onClick={(e) => navLinkClick(e, 'location')}
              >
                Localização
              </a>
            </li>
            <li>
              <a 
                className={`nav-link scrollto ${activeSection === 'contact' ? 'active' : ''}`} 
                href="/#contact"
                onClick={(e) => navLinkClick(e, 'contact')}
              >
                Contato
              </a>
            </li>
          </ul>
          <i 
            className={`bi ${isMobileNavShown ? 'bi-x' : 'bi-list'} mobile-nav-toggle d-lg-none`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 