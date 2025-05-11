import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/Dr_Abdul_Hadi_Logo_White_Transparent.png';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <img src={logo} alt="Dr. Abdul Hadi Odontologia" className="not-found-logo" />
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>Desculpe, a página que você está procurando não existe ou foi removida.</p>
        <Link to="/" className="btn-get-started">Voltar para a página inicial</Link>
      </div>
    </div>
  );
};

export default NotFound; 