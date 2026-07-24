import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Products } from './components/Products';
import type { ProductType } from './components/Products';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { DemoModal, ProductModal } from './components/Modals';
import './App.css';

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [demoProductTitle, setDemoProductTitle] = useState('');

  // Handler for scrolling to products section
  const handleScrollToProducts = () => {
    const productsSec = document.getElementById('produtos');
    if (productsSec) {
      const headerOffset = 80;
      const elementPosition = productsSec.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Open general demo request modal
  const handleOpenDemo = () => {
    setDemoProductTitle('geral');
    setIsDemoOpen(true);
  };

  // Open demo request preselected for a specific product
  const handleOpenProductDemo = (productTitle: string) => {
    // Map product title to select values in form
    const key = productTitle.toLowerCase();
    let interestVal = 'geral';
    if (key.includes('microlearning')) interestVal = 'microlearning';
    else if (key.includes('academy') || key.includes('classpoint')) interestVal = 'academy';
    else if (key.includes('revista')) interestVal = 'revistas';
    else if (key.includes('sensor') || key.includes('realidade')) interestVal = 'sensor';
    else if (key.includes('game') || key.includes('jogo')) interestVal = 'game';
    else if (key.includes('palcoweb') || key.includes('streaming')) interestVal = 'palcoweb';

    setDemoProductTitle(interestVal);
    setIsDemoOpen(true);
  };

  // Open product details modal
  const handleSelectProduct = (product: ProductType) => {
    setSelectedProduct(product);
  };

  // Close modals
  const handleCloseDemo = () => setIsDemoOpen(false);
  const handleCloseProduct = () => setSelectedProduct(null);

  return (
    <>
      {/* Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* Solutions List */}
        <Solutions onScrollToProducts={handleScrollToProducts} />

        {/* Products Showcases */}
        <Products onSelectProduct={handleSelectProduct} />

        {/* About Company */}
        <About onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer & Contact info */}
      <Footer />

      {/* Modals & Lead Overlays */}
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={handleCloseDemo} 
        defaultProduct={demoProductTitle} 
      />

      <ProductModal 
        product={selectedProduct} 
        isOpen={selectedProduct !== null} 
        onClose={handleCloseProduct} 
        onOpenDemo={handleOpenProductDemo}
      />
    </>
  );
}

export default App;
