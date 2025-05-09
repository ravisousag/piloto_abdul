import React from 'react';
import '../../App.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="service-btn">Saiba mais</button>
    </div>
  );
};

export default ServiceCard; 