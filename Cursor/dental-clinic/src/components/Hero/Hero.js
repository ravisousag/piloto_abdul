import React, { useState, useEffect } from 'react';
import '../../App.css';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    // Preconnect to YouTube for faster video loading
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://www.youtube.com';
    document.head.appendChild(preconnectLink);
    
    return () => {
      // Clean up preconnect link on unmount
      document.head.removeChild(preconnectLink);
    };
  }, []);
  
  const openVideo = () => {
    setShowVideo(true);
    // Start loading the video
    setTimeout(() => setVideoLoaded(true), 100);
  };
  
  const closeVideo = () => {
    setShowVideo(false);
    // Reset video loaded state after animation completes
    setTimeout(() => setVideoLoaded(false), 300);
  };
  
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1>SORRIA COM CONFIANÇA</h1>
            <h2>Cuidados odontológicos de excelência para toda família</h2>
            <div className="d-flex justify-content-center align-items-center mt-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=554888691414&text=Ol%C3%A1,+vim+pelo+site+e+gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0" 
                className="btn-get-started scrollto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar Consulta via WhatsApp"
              >
                Agendar Consulta
              </a>
              <button onClick={openVideo} className="btn-watch-video" aria-label="Assistir Vídeo">
                <i className="bi bi-play-circle"></i>
                <span>Assistir Vídeo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showVideo && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="video-modal-close" onClick={closeVideo} aria-label="Fechar Vídeo">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="ratio ratio-16x9">
              {!videoLoaded && (
                <div className="video-loading">
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Carregando...</span>
                  </div>
                </div>
              )}
              {(videoLoaded || showVideo) && (
                <iframe 
                  src="https://www.youtube.com/embed/0r9Ck_IeWgk?autoplay=1&start=39" 
                  title="Dr. Abdul Hadi - Odontologia" 
                  frameBorder="0" 
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  onLoad={() => setVideoLoaded(true)}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero; 