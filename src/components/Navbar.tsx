import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo-mercadata-digital.png';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 88;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo oficial */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }}
          className="logo-container"
          aria-label="Mercadata Digital — página inicial"
        >
          <img
            src={logoImg}
            alt="Mercadata Digital"
            className="logo-img"
          />
        </a>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          {['solucoes', 'produtos', 'sobre', 'contato'].map((id) => {
            const labels: Record<string, string> = {
              solucoes: 'Soluções',
              produtos: 'Produtos',
              sobre: 'Sobre',
              contato: 'Contato',
            };
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(id); }}
                className="nav-link"
              >
                {labels[id]}
              </a>
            );
          })}
        </div>

        <div className="nav-cta-desktop">
          <button className="btn btn-primary btn-nav" onClick={onOpenDemo}>
            Solicite uma demo <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-links-mobile ${isOpen ? 'active' : ''}`}>
        {['solucoes', 'produtos', 'sobre', 'contato'].map((id) => {
          const labels: Record<string, string> = {
            solucoes: 'Soluções',
            produtos: 'Produtos',
            sobre: 'Sobre',
            contato: 'Contato',
          };
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(id); }}
              className="nav-link-mobile-item"
            >
              {labels[id]}
            </a>
          );
        })}
        <button
          className="btn btn-primary"
          style={{ marginTop: '0.5rem' }}
          onClick={() => { setIsOpen(false); onOpenDemo(); }}
        >
          Solicite uma demo
        </button>
      </div>
    </nav>
  );
};
