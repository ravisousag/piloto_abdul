import React from 'react';
import '../../App.css';

const About = () => {
  return (
    <section id="about" className="about py-5">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Sobre Nossa Clínica</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="about-img">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" className="img-fluid rounded" alt="Clínica odontológica Dr. Abdul Hadi" />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content d-flex flex-column justify-content-center" data-aos="fade-right">
            <h3 className="mb-4" style={{ color: 'var(--secondary-color)' }}>Dr. Abdul Hadi Odontologia</h3>
            <p className="fst-italic mb-4">
              Cuidamos da sua saúde bucal com excelência, tecnologia e um atendimento humanizado
            </p>
            <p>
              Com anos de experiência, nossa clínica odontológica se consolidou como referência
              em tratamentos odontológicos de excelência. Nossa equipe é formada por
              profissionais altamente qualificados, comprometidos em oferecer as melhores
              soluções para nossos pacientes.
            </p>
            <ul className="mt-4 mb-4 ps-0" style={{ listStyleType: 'none' }}>
              <li className="mb-2"><i className="bi bi-check-circle me-2" style={{ color: 'var(--primary-color)' }}></i> Equipe especializada com profissionais experientes e constantemente atualizados</li>
              <li className="mb-2"><i className="bi bi-check-circle me-2" style={{ color: 'var(--primary-color)' }}></i> Tecnologia avançada para diagnósticos precisos e tratamentos eficazes</li>
              <li className="mb-2"><i className="bi bi-check-circle me-2" style={{ color: 'var(--primary-color)' }}></i> Ambiente acolhedor e confortável para uma experiência agradável</li>
              <li className="mb-2"><i className="bi bi-check-circle me-2" style={{ color: 'var(--primary-color)' }}></i> Atendimento humanizado, respeitando as necessidades de cada paciente</li>
            </ul>
            <p>
              Contamos com instalações modernas e equipamentos de última geração, que nos
              permitem realizar diagnósticos precisos e tratamentos eficazes. Somos especializados
              em procedimentos estéticos avançados como <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>implantes, harmonização orofacial e 
              lentes de contato</span>, proporcionando uma experiência confortável e segura, com resultados que
              transformam sorrisos e vidas.
            </p>
            <div className="text-center text-lg-start mt-3">
              <a href="#services" className="read-more">Saiba mais <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About; 