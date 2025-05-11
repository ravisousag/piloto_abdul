import React, { useState, useEffect } from 'react';
import '../App.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  // Using displayCount was likely a leftover from pagination implementation
  // const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    // Google Reviews data for Dr. Abdul Hadi Odontologia
    // These are genuine reviews based on actual customer feedback
    const googleReviews = [
      {
        id: 1,
        author_name: 'Ravi',
        rating: 5,
        text: 'Tive uma emergência dentária tarde da noite em pleno final de semana e fui atendido prontamente pelo Dr. Abdul, profissional incrível. O atendimento foi excelente desde o primeiro momento muito atencioso, cuidadoso e competente. Explicou tudo com clareza, me deixou tranquilo e resolveu o problema com rapidez e eficiência. É raro encontrar um dentista tão dedicado e disponível nesses horários. Recomendo de olhos fechados!',
        profile_photo_url: 'https://ui-avatars.com/api/?name=Ravi&background=random'
      },
      {
        id: 2,
        author_name: 'Luiz Antonio Assis',
        rating: 5,
        text: 'Fiquei surpreso com a dedicação e comprometimento que o Dr Abdul me explicou todo o tratamento. Sem dúvidas um profissional de excelência e extremamente comprometido com o que faz, meus parabéns, recomendo de olhos fechados!',
        profile_photo_url: 'https://ui-avatars.com/api/?name=Luiz+Antonio+Assis&background=random'
      },
      {
        id: 3,
        author_name: 'Karim Abou',
        rating: 5,
        text: 'Um ambiente agradável, e ótimo doutor. Atencioso e profissional. Vale a pena conhecer.',
        profile_photo_url: 'https://ui-avatars.com/api/?name=Karim+Abou&background=random'
      },
      {
        id: 4,
        author_name: 'Youssef Abou Fard',
        rating: 5,
        text: 'Com certeza o melhor de Floripa.',
        profile_photo_url: 'https://ui-avatars.com/api/?name=Youssef+Abou+Fard&background=random'
      }
    ];

    // Filter to show only 4 and 5-star reviews
    const filteredReviews = googleReviews.filter(review => review.rating >= 4);
    
    // Simulate API loading delay
    setTimeout(() => {
      setReviews(filteredReviews);
      setLoading(false);
      
      // Initialize Swiper after reviews are loaded
      setTimeout(initSwiper, 100);
    }, 500);
    
  }, []);

  const initSwiper = () => {
    if (typeof window !== 'undefined' && typeof window.Swiper !== 'undefined') {
      new window.Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          // Adding custom bullet styles
          renderBullet: function (index, className) {
            return '<span class="' + className + '" style="background-color: var(--primary-color); width: 12px; height: 12px; opacity: 0.5; transition: all 0.3s ease;"></span>';
          },
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      });
      
      // Add custom CSS for swiper bullets
      const style = document.createElement('style');
      style.textContent = `
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
          background-color: var(--primary-color) !important;
        }
        .swiper-pagination {
          position: relative;
          margin-top: 30px;
        }
      `;
      document.head.appendChild(style);
    }
  };

  // Helper function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="bi bi-star-fill" style={{color: 'var(--primary-color)'}}></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star" style={{color: 'var(--primary-color)'}}></i>);
      }
    }
    return stars;
  };

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Depoimentos</h2>
          <p>O que nossos pacientes dizem sobre nós</p>
        </div>

        {loading ? (
          <div className="text-center" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="spinner-grow" style={{color: 'var(--primary-color)'}} role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">
                
                {reviews.map((review) => (
                  <div className="swiper-slide" key={review.id}>
                    <div className="testimonial-item">
                      <div className="d-flex align-items-center mb-4" style={{ padding: '5px 0' }}>
                        <div className="avatar-container" style={{ 
                          width: '70px', 
                          height: '70px', 
                          borderRadius: '50%', 
                          overflow: 'hidden',
                          marginRight: '15px',
                          border: '2px solid var(--primary-color)',
                          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                        }}>
                          <img 
                            src={review.profile_photo_url} 
                            alt={review.author_name}
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover' 
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="mb-0" style={{ fontSize: '18px', fontWeight: '600' }}>{review.author_name}</h3>
                          <div className="stars mb-1">
                            {renderStars(review.rating)}
                          </div>
                          <small className="text-muted">{review.relative_time_description}</small>
                        </div>
                      </div>
                      <p style={{ 
                        fontSize: '15px', 
                        lineHeight: '1.6',
                        position: 'relative',
                        fontStyle: 'italic',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        padding: '15px 20px',
                        borderRadius: '10px',
                        minHeight: '120px',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <i className="bi bi-quote-alt-left quote-icon-left" style={{ fontSize: '24px', color: 'var(--primary-color)', opacity: '0.3', position: 'absolute', top: '10px', left: '10px' }}></i>
                        <span style={{ padding: '0 20px' }}>{review.text}</span>
                        <i className="bi bi-quote-alt-right quote-icon-right" style={{ fontSize: '24px', color: 'var(--primary-color)', opacity: '0.3', position: 'absolute', bottom: '10px', right: '10px' }}></i>
                      </p>
                      <div className="mt-3 text-end">
                        <img 
                          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                          alt="Google Reviews" 
                          style={{ height: '20px' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
              </div>
              <div className="swiper-pagination"></div>
            </div>

            <div className="text-center mt-5">
              <a 
                href="https://www.google.com/search?q=Dr.+Abdul+Hadi+Odontologia+Florianópolis&sca_esv=602158109&sxsrf=ACQVn08YwpfcSz5QoR4BgW8hOGjOc87e3A%3A1718333782844&ei=pr46Z8DmG6_F5OUP9ZGj-A4&ved=0ahUKEwiAjfaT8KSFAxWvIrkGHfXIqB8Q4dUDCBE&uact=5&oq=Dr.+Abdul+Hadi+Odontologia+Florianópolis&gs_lp=Egxnd3Mtd2l6LXNlcnAiKkRyLiBBYmR1bCBIYWRpIE9kb250b2xvZ2lhIEZsb3JpYW7Ds3BvbGlzMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigAUiNIlDmDVjVH3ABeAGQAQCYAbcBoAHdCaoBBDAuOLgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgcQIRigARgK4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#lrd=0x952737f7a4590d73:0xb8c7ad1d6c91e2fa,1,,,," 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn rounded-pill px-4 py-2"
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: '#fff',
                  fontWeight: '500',
                  transition: '0.3s',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#d8c6ad'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
              >
                <i className="bi bi-google me-2"></i>Ver todos os depoimentos no Google
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials; 