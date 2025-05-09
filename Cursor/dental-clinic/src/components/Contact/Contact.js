import React, { useState } from 'react';
import '../../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show loading indicator
    setLoading(true);
    
    // Formatando a mensagem para o WhatsApp
    const whatsappMessage = `Olá, sou ${formData.name}. ${formData.message} Meu contato é ${formData.phone} e email ${formData.email}.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Simulate API delay
    setTimeout(() => {
      // Abrindo o WhatsApp com a mensagem formatada
      window.open(`https://api.whatsapp.com/send/?phone=554888691414&text=${encodedMessage}&type=phone_number&app_absent=0`, '_blank');
      
      // Show success message
      setLoading(false);
      setSuccess(true);
      
      // Hide success message after a delay
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      
      // Resetando o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contato</h2>
          <p>Entre em contato conosco</p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address mb-4">
                <i className="bi bi-geo-alt"></i>
                <h4>Endereço:</h4>
                <p>Rua Santos Dumonnt, 182 - Sala 1005 - Centro, Florianópolis 88015-20</p>
              </div>

              <div className="email mb-4">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>drabdulhadi32@gmail.com</p>
              </div>

              <div className="phone mb-4">
                <i className="bi bi-phone"></i>
                <h4>Telefone:</h4>
                <p>(48) 98869-1414</p>
              </div>

              <div className="hours mb-4">
                <i className="bi bi-clock"></i>
                <h4>Horário de Atendimento:</h4>
                <p>Segunda a Sexta: 08:00 - 20:00<br/>Emergências: 24H</p>
              </div>

              <div className="social-links mt-4">
                <a href="https://www.instagram.com/dr.abdul.hadii/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5548988691414" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 d-flex align-items-stretch">
            <div className="contact-form w-100">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Nome</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control" 
                      id="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email" 
                      id="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    name="phone" 
                    id="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea 
                    className="form-control" 
                    name="message" 
                    id="message"
                    rows="6" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                <div className="my-4">
                  {loading && <div className="loading">Carregando</div>}
                  {success && <div className="sent-message">Sua mensagem foi enviada. Obrigado!</div>}
                </div>
                <div className="text-center">
                  <button type="submit">
                    <i className="bi bi-whatsapp me-2"></i>
                    Enviar Mensagem via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 