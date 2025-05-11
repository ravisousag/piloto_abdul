import React from 'react';
import '../App.css';

const Location = () => {
  return (
    <section id="location" className="location section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Localização</h2>
          <p>Encontre-nos facilmente em nossa localização central</p>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="address-info">
              <h3>Dr. Abdul Hadi Odontologia</h3>
              
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Endereço:</h4>
                  <p>Rua Santos Dumonnt, 182 - Sala 1005 - Centro, Florianópolis - SC, 88015-20</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h4>Telefone:</h4>
                  <p>(48) 98869-1414</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-clock flex-shrink-0"></i>
                <div>
                  <h4>Horário de Funcionamento:</h4>
                  <p>Segunda a Sexta: 08:00 - 20:00</p>
                  <p>Emergências: 24H</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0">
            <div className="map-container">
              <iframe 
                src="https://maps.google.com/maps?q=Dr+Abdul+Hadi+odontologia&output=embed"
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Dr. Abdul Hadi"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location; 