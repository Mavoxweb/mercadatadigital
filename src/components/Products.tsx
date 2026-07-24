import React from 'react';
import { BrainCircuit, BookOpen, FileText, SmartphoneNfc, Trophy, PlayCircle } from 'lucide-react';

export interface ProductType {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefit: string;
  icon: React.ReactNode;
}

interface ProductsProps {
  onSelectProduct: (product: ProductType) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  const productsList: ProductType[] = [
    {
      id: "microlearning",
      title: "Microlearning",
      description: "Traduza visões educacionais em experiências dinâmicas auxiliadas por Inteligência Artificial.",
      fullDescription: "Uma plataforma avançada de treinamento corporativo focada em lições curtas e altamente focadas. Auxiliada por ferramentas de Inteligência Artificial para gerar automaticamente avaliações, resumos personalizados e trilhas de aprendizagem sob medida, garantindo alta retenção a custos competitivos.",
      features: [
        "Lições curtas (3 a 5 minutos) de alta retenção",
        "Geração autônoma de quizzes e resumos via IA",
        "Painel administrativo para monitoramento de KPIs",
        "Interface responsiva focada em mobile learning"
      ],
      benefit: "Reduz o tempo de treinamento necessário em até 50% enquanto eleva a absorção do conteúdo corporativo.",
      icon: <BrainCircuit size={28} />
    },
    {
      id: "academy",
      title: "Mercadata Business Academy",
      description: "ClassPoint é uma plataforma que atua como biblioteca e marketplace de cursos online.",
      fullDescription: "A plataforma ClassPoint, desenvolvida pela Mercadata Digital, funciona como uma biblioteca completa ou marketplace de capacitação. Ela é ideal tanto para centralizar os treinamentos internos de grandes corporações quanto para comercializar cursos para o público geral.",
      features: [
        "Vitrine de cursos e e-commerce integrados",
        "Ambiente virtual de aprendizagem personalizado",
        "Suporte a vídeos, documentos e webinários",
        "Emissão automática de certificados de conclusão"
      ],
      benefit: "Possibilita a estruturação de uma universidade corporativa ou canal de vendas em tempo recorde.",
      icon: <BookOpen size={28} />
    },
    {
      id: "revistas",
      title: "Revistas Digitais",
      description: "Conteúdo interativo para celular ou web ideal como material de apoio a treinamentos.",
      fullDescription: "Uma solução inovadora de publicações editoriais interativas para smartphones ou navegadores web. Desenvolvidas sob medida para enriquecer treinamentos presenciais ou online, as revistas contam com animações e vídeos integrados que prendem a atenção do leitor.",
      features: [
        "Design adaptativo para leitura confortável em celulares",
        "Integração com mídias interativas e botões de ação",
        "Compatibilidade com torneios de conhecimento corporativos",
        "Relatórios de engajamento e páginas acessadas"
      ],
      benefit: "Transforma manuais corporativos estáticos em experiências imersivas de leitura digital.",
      icon: <FileText size={28} />
    },
    {
      id: "sensor",
      title: "Sensor Expand",
      description: "Aplicativo inovador de Realidade Aumentada (AR) para otimização de vendas e demonstrações.",
      fullDescription: "Desenvolvido pela Mercadata - Soluções em Vendas, o Sensor Expand é um app inovador de Realidade Aumentada. Ele permite projetar modelos 3D hiper-realistas de produtos físicos em escala real no ambiente do cliente, revolucionando a abordagem de demonstração comercial.",
      features: [
        "Visualização tridimensional de produtos no ambiente físico",
        "Demonstração interativa de funcionamento de maquinários",
        "Catálogo digital sincronizado com a projeção",
        "Sem necessidade de óculos ou equipamentos externos"
      ],
      benefit: "Permite que sua equipe de vendas demonstre produtos de grande porte com extrema fidelidade em qualquer lugar.",
      icon: <SmartphoneNfc size={28} />
    },
    {
      id: "game",
      title: "Business Game",
      description: "Jogo pedagógico corporativo simulador de tomada de decisões empresariais.",
      fullDescription: "Simulador estratégico pedagógico onde os participantes tomam decisões cruciais para a gestão de uma empresa virtual (seja supermercado, indústria ou serviço). Funciona de forma multiusuário, estimulando a liderança, competitividade saudável e visão analítica em smartphone ou web.",
      features: [
        "Partidas multiplayer em tempo real ou em turnos",
        "Simulação de compras, precificação, marketing e finanças",
        "Relatórios financeiros detalhados pós-rodada",
        "Plataforma totalmente web, sem necessidade de instalação"
      ],
      benefit: "Fixa conceitos de negócios por meio da prática imersiva e do aprendizado baseado em erros sem riscos reais.",
      icon: <Trophy size={28} />
    },
    {
      id: "palcoweb",
      title: "PalcoWeb",
      description: "Casa de espetáculos online e streaming desenvolvida para transmissão monetizada de eventos.",
      fullDescription: "Uma inovadora plataforma institucional de streaming voltada para a transmissão ao vivo ou gravada de espetáculos, palestras e conferências. O foco do PalcoWeb é a autonomia do agente cultural ou palestrante, fornecendo meios robustos para cobrança de ingressos virtuais.",
      features: [
        "Transmissões seguras com proteção contra gravação pirata",
        "Bilheteria digital e check-in automático integrados",
        "Salas de interação e chats em tempo real com palestrantes",
        "Biblioteca de conteúdo sob demanda (VOD)"
      ],
      benefit: "Monetize seu conteúdo ao vivo de maneira profissional, livre de algoritmos restritivos de redes sociais.",
      icon: <PlayCircle size={28} />
    }
  ];

  return (
    <section id="produtos" className="products-section">
      {/* Background decoration */}
      <div className="products-bg-shape"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Nossos Produtos</span>
          <h2 className="section-title">Soluções que Inspiram e Convertem</h2>
          <p className="section-description">
            Descubra as plataformas proprietárias da Mercadata Digital, projetadas com foco em usabilidade, inovação e alta performance técnica.
          </p>
        </div>

        <div className="products-grid">
          {productsList.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-body">
                <div className="product-icon-box">
                  {product.icon}
                </div>
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-desc">{product.description}</p>
              </div>
              <div className="product-card-actions">
                <button 
                  className="btn btn-outline product-btn"
                  onClick={() => onSelectProduct(product)}
                >
                  Quero conhecer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
