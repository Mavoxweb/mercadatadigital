import React from 'react';
import { Calendar, Target, Award, Sparkles } from 'lucide-react';

interface AboutProps {
  onOpenDemo: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenDemo }) => {
  const stats = [
    { icon: <Calendar size={24} />, number: "2019", label: "Ano de Fundação" },
    { icon: <Target size={24} />, number: "100%", label: "Foco em Inovação" },
    { icon: <Award size={24} />, number: "Grupo", label: "Mercadata de Apoio" },
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="container about-container">
        {/* Left column */}
        <div className="about-text-column">
          <span className="section-subtitle">Quem Somos</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Transformando Ideias em Plataformas Digitais de Sucesso
          </h2>
          <p className="about-paragraph" style={{ marginBottom: '1.25rem' }}>
            Somos uma startup criada em <strong>2019</strong> pelo conceituado <strong>Grupo Mercadata</strong>. Nosso objetivo principal é desenvolver e ofertar soluções em Tecnologia da Informação de ponta, com foco especial na área de inovação tecnológica, metodologias ativas e gamificação.
          </p>
          <p className="about-paragraph" style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            Nossa equipe é formada por especialistas apaixonados por criar softwares e metodologias que realmente façam a diferença nos resultados de treinamento de equipes de vendas, comunicação interna corporativa e promoção de marcas inovadoras.
          </p>
          
          <button className="btn btn-primary" onClick={onOpenDemo}>
            Solicite uma demo
          </button>
        </div>

        {/* Right column (stats grid) */}
        <div className="about-stats-column">
          <div className="stats-box">
            <div className="stats-box-header">
              <Sparkles size={20} className="text-cyan" />
              <h4>Trajetória & Foco</h4>
            </div>
            
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-guarantee">
              <p>Entregamos soluções escaláveis que aliam tecnologia de ponta com usabilidade impecável para todos os dispositivos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
