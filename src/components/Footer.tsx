import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo-mercadata-digital.png';

export const Footer: React.FC = () => {
  const [contactData, setContactData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 1000);
  };

  const handleReset = () => {
    setContactData({ nome: '', email: '', mensagem: '' });
    setSent(false);
  };

  return (
    <footer id="contato" className="footer-section">
      <div className="container footer-container">
        
        {/* Left Side: Brand and Contact Info */}
        <div className="footer-info">
          <div className="footer-brand">
            <img src={logoImg} alt="Mercadata Digital" className="footer-logo-img" />
          </div>
          
          <p className="footer-tagline">
            Soluções criativas e inovadoras para treinamentos, promoção e comunicação com uso da tecnologia da informação.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <MapPin size={20} className="contact-icon text-cyan" />
              <span>Av. das Américas, 3959 - Loja 112, Barra da Tijuca - Rio de Janeiro - RJ - CEP 22631-003</span>
            </div>

            <div className="contact-item">
              <Phone size={20} className="contact-icon text-cyan" />
              <a href="tel:+552134104040">Tel: +55 (21) 3410-4040</a>
            </div>

            <div className="contact-item">
              <Mail size={20} className="contact-icon text-cyan" />
              <a href="mailto:comercial@mercadata.com.br">comercial@mercadata.com.br</a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="footer-form-wrapper">
          <div className="footer-card">
            <h3 className="footer-form-title">
              <Sparkles size={18} className="text-cyan" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} />
              Fale Conosco
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Tem uma dúvida ou deseja orçamento? Mande uma mensagem agora.
            </p>

            {!sent ? (
              <form onSubmit={handleSubmit} className="footer-form">
                <div className="form-group">
                  <label htmlFor="footer-name">Nome</label>
                  <input
                    id="footer-name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={contactData.nome}
                    onChange={(e) => setContactData({ ...contactData, nome: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="footer-email">E-mail</label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="seuemail@contato.com"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="footer-msg">Mensagem</label>
                  <textarea
                    id="footer-msg"
                    required
                    placeholder="Sua mensagem..."
                    rows={3}
                    value={contactData.mensagem}
                    onChange={(e) => setContactData({ ...contactData, mensagem: e.target.value })}
                  />
                </div>

                <button type="submit" disabled={submitting} className="btn btn-primary w-full">
                  {submitting ? "Enviando..." : (
                    <>
                      Enviar Mensagem <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle size={48} style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'inline-block' }} />
                <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Mensagem enviada com sucesso!</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Agradecemos seu contato. Responderemos o mais breve possível.
                </p>
                <button onClick={handleReset} className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>
                  Nova Mensagem
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© 2024 Mercadata. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#hero">Início</a>
            <a href="#solucoes">Soluções</a>
            <a href="#produtos">Produtos</a>
            <a href="#sobre">Sobre nós</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
