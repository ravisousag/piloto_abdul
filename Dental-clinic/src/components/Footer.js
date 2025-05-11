import React from 'react';
import '../App.css';
import logo from '../assets/Dr_Abdul_Hadi_Logo_White_Transparent.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Dr. Abdul Hadi Odontologia" className="footer-logo-img" />
          </div>
          <p>Cuidando do seu sorriso com excelência e dedicação.</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/dr.abdul.hadii/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://api.whatsapp.com/send/?phone=554888691414" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#location">Localização</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Serviços</h3>
          <ul>
            <li><span>Clínica Geral</span></li>
            <li><span>Implantes</span></li>
            <li><span>Harmonização Orofacial</span></li>
            <li><span>Alinhadores</span></li>
            <li><span>Clareamento</span></li>
            <li><span>Cirurgia</span></li>
            <li><span>Lentes de Contato</span></li>
            <li><span>Emergências 24h</span></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contato</h3>
          <p><i className="bi bi-geo-alt"></i> Av. Trompowski, 291, Sala 103<br />Torre 1, Centro, Florianópolis - SC</p>
          <p><i className="bi bi-telephone"></i> (48) 8869-1414</p>
          <p><i className="bi bi-envelope"></i> contato@drabdulhadi.com.br</p>
          <p><i className="bi bi-clock"></i> Segunda a Sexta: 08:00 - 20:00<br />Emergências: 24H</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} RTM. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 