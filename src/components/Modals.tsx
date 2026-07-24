import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Zap, Sparkles, Monitor, Cpu } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, defaultProduct = '' }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    interesse: defaultProduct || 'geral',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      nome: '',
      email: '',
      whatsapp: '',
      empresa: '',
      interesse: 'geral',
      mensagem: ''
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem' }}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'inline-flex', padding: '6px 12px', borderRadius: '9999px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                <Sparkles size={14} style={{ marginRight: '6px', alignSelf: 'center' }} />
                Acelere sua Transformação
              </div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>Agende uma Demonstração</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Fale com um dos nossos especialistas em inovação e conheça as ferramentas que transformarão sua comunicação e treinamentos.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>Seu Nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>E-mail Corporativo</label>
                  <input
                    type="email"
                    required
                    placeholder="nome@empresa.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    required
                    placeholder="(21) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>Nome da Empresa</label>
                  <input
                    type="text"
                    required
                    placeholder="Sua Empresa Ltda"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>Produto de Interesse</label>
                <select
                  value={formData.interesse}
                  onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', backgroundColor: '#fff' }}
                >
                  <option value="geral">Geral / Múltiplas Soluções</option>
                  <option value="microlearning">Microlearning (Treinamento com IA)</option>
                  <option value="academy">Mercadata Business Academy (ClassPoint)</option>
                  <option value="revistas">Revistas Digitais</option>
                  <option value="sensor">Sensor Expand (Realidade Aumentada)</option>
                  <option value="game">Business Game (Jogo Pedagógico)</option>
                  <option value="palcoweb">PalcoWeb (Streaming de palestras)</option>
                  <option value="apps">Desenvolvimento de Apps customizados</option>
                  <option value="games">Desenvolvimento de Jogos sob medida</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>Como podemos ajudar? (Opcional)</label>
                <textarea
                  placeholder="Conte um pouco sobre suas necessidades de treinamento ou tecnologia..."
                  rows={3}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}
              >
                {loading ? (
                  <span>Processando...</span>
                ) : (
                  <>
                    Enviar Solicitação <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ display: 'inline-flex', color: 'var(--primary)', marginBottom: '1.5rem' }}>
              <CheckCircle size={64} strokeWidth={1.5} />
            </div>
            <h2 style={{ fontSize: '1.85rem', marginBottom: '0.75rem' }}>Solicitação Recebida!</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '420px', marginInline: 'auto' }}>
              Obrigado pelo seu interesse, <strong>{formData.nome}</strong>. Nosso time de especialistas foi notificado e entrará em contato pelo e-mail <strong>{formData.email}</strong> ou pelo WhatsApp cadastrado.
            </p>
            <button className="btn btn-primary" onClick={handleReset}>
              Entendido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface ProductModalProps {
  product: {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
    benefit: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: (productTitle: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onOpenDemo }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar modal">
          <X size={20} />
        </button>

        {/* Modal Banner */}
        <div style={{
          background: 'var(--accent-gradient)',
          padding: '3rem 2.5rem 2.5rem 2.5rem',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative shapes */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(30px)'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{
              display: 'inline-block',
              textTransform: 'uppercase',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '2px',
              padding: '4px 10px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '9999px',
              marginBottom: '0.75rem'
            }}>
              Soluções Mercadata
            </span>
            <h2 style={{ color: '#ffffff', fontSize: '2.25rem', marginBottom: '0.5rem', fontWeight: 800 }}>
              {product.title}
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem', maxWidth: '520px', lineHeight: 1.5 }}>
              {product.description}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2.5rem' }} className="modal-grid">
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Monitor size={18} className="text-pink" style={{ color: 'var(--primary)' }} />
                Visão Geral da Solução
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {product.fullDescription}
              </p>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-accent)' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.35rem', fontWeight: 700 }}>
                  Diferencial Competitivo
                </h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.92rem', fontWeight: 500 }}>
                  {product.benefit}
                </p>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={18} className="text-pink" style={{ color: 'var(--primary)' }} />
                Recursos Principais
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {product.features.map((feature, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <ShieldCheck size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    onClose();
                    onOpenDemo(product.title);
                  }}
                  style={{ width: '100%' }}
                >
                  Solicitar Demo <Zap size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
