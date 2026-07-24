import React from 'react';
import { ArrowRight, Sparkles, Shield, Rocket } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <header id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="text-pink" />
            <span>Tecnologia da Informação & Inovação</span>
          </div>
          
          <h1 className="hero-title">
            Soluções criativas e inovadoras para <span className="text-brand-gradient">treinamentos, promoção</span> e comunicação.
          </h1>
          
          <p className="hero-description">
            Unimos o poder do desenvolvimento de software de alta performance, design de interfaces e inteligência artificial para elevar o aprendizado corporativo e a divulgação estratégica da sua marca.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onOpenDemo}>
              Solicite uma demo <ArrowRight size={18} />
            </button>
            <a href="#solucoes" className="btn btn-outline">
              Saiba Mais
            </a>
          </div>

          {/* Quick stats for visual trust */}
          <div className="hero-trust">
            <div className="trust-item">
              <Rocket size={18} style={{ color: 'var(--primary)', marginRight: '8px' }} />
              <span>Ideias inovadoras</span>
            </div>
            <div className="trust-item">
              <Shield size={18} style={{ color: 'var(--primary)', marginRight: '8px' }} />
              <span>Plataformas seguras</span>
            </div>
          </div>
        </div>

        {/* Right Graphic */}
        <div className="hero-graphic">
          <div className="graphic-wrapper">
            {/* Glowing background circles for visual depth */}
            <div className="glow-circle glow-1"></div>
            <div className="glow-circle glow-2"></div>
            
            {/* Generated Hero Image */}
            <img 
              src="/mercadata_hero.png" 
              alt="Mercadata Digital Plataforma e Apps" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
