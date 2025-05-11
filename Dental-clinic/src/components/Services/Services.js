import React from 'react';
import '../../App.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in" data-aos-delay="100">
      <div className="icon-box">
        <div className="icon">
          <i className={`bi bi-${icon}`}></i>
        </div>
        <h4 className="title">
          <a href="/#services">{title}</a>
        </h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Clínica Geral',
      description: 'Tratamentos preventivos e curativos para manter sua saúde bucal em dia, incluindo limpezas, restaurações e tratamentos de canal',
      icon: 'clipboard-pulse'
    },
    {
      title: 'Implantes',
      description: 'Soluções permanentes para substituição de dentes perdidos, com resultados naturais e funcionais',
      icon: 'gear'
    },
    {
      title: 'Harmonização Orofacial',
      description: 'Procedimentos estéticos para equilibrar o sorriso e a face, proporcionando resultados harmônicos e naturais',
      icon: 'magic'
    },
    {
      title: 'Alinhadores',
      description: 'Alternativa discreta e confortável aos aparelhos convencionais para corrigir o posicionamento dos dentes',
      icon: 'align-center'
    },
    {
      title: 'Clareamento',
      description: 'Técnicas avançadas para devolver o branco natural dos seus dentes, com resultados duradouros',
      icon: 'brightness-high'
    },
    {
      title: 'Cirurgia',
      description: 'Procedimentos cirúrgicos realizados com precisão e segurança para diversas necessidades odontológicas',
      icon: 'scissors'
    },
    {
      title: 'Lentes de Contato',
      description: 'Finas lâminas de porcelana que transformam seu sorriso, corrigindo forma, cor e posicionamento dos dentes',
      icon: 'gem'
    },
    {
      title: 'Emergências 24h',
      description: 'Atendimento de urgência disponível 24 horas para resolver problemas dentários imediatos e aliviar dores',
      icon: 'hospital'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>Oferecemos uma ampla gama de tratamentos odontológicos com a mais alta qualidade</p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 