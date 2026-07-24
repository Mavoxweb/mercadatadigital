import React from 'react';
import { Smartphone, Compass, Gamepad2, ArrowRight } from 'lucide-react';

interface SolutionsProps {
  onScrollToProducts: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onScrollToProducts }) => {
  const solutionsList = [
    {
      icon: <Smartphone size={32} />,
      title: "Desenvolvimento de Apps e Plataformas",
      subtitle: "iOS e Android",
      description: "Construímos aplicativos nativos e híbridos robustos, rápidos e seguros, focados em proporcionar a melhor experiência móvel para seus usuários e colaboradores."
    },
    {
      icon: <Compass size={32} />,
      title: "Consultoria em Inovação e Usabilidade",
      subtitle: "Design & UX/UI",
      description: "Apoiamos sua equipe na estruturação de jornadas intuitivas, validação de produtos digitais e implementação de metodologias ágeis focadas em resultados de negócios."
    },
    {
      icon: <Gamepad2 size={32} />,
      title: "Jogos Pedagógicos e Educacionais",
      subtitle: "Aprendizado Gamificado",
      description: "Desenvolvemos simulações lúdicas e ambientes de jogo que auxiliam na absorção de conceitos complexos de forma didática, divertida e engajadora."
    }
  ];

  return (
    <section id="solucoes" className="solutions-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">O Que Fazemos</span>
          <h2 className="section-title">Soluções Corporativas Inteligentes</h2>
          <p className="section-description">
            Criamos pontes tecnológicas e pedagógicas para impulsionar treinamentos, promover produtos e otimizar processos de comunicação corporativa.
          </p>
        </div>

        {/* Grid */}
        <div className="solutions-grid">
          {solutionsList.map((sol, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon-wrapper">
                {sol.icon}
              </div>
              <h3 className="solution-title">{sol.title}</h3>
              <span className="solution-sub">{sol.subtitle}</span>
              <p className="solution-desc">{sol.description}</p>
              
              <div className="solution-card-footer">
                <span className="learn-more-link">
                  Ver detalhes <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Products */}
        <div className="solutions-cta">
          <button className="btn btn-secondary" onClick={onScrollToProducts}>
            Conheça nossos produtos <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
