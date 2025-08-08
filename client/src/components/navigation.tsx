import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      
      if (mobileMenuOpen && 
          mobileMenu && 
          mobileMenuBtn && 
          !mobileMenu.contains(event.target as Node) && 
          !mobileMenuBtn.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PG</span>
            </div>
            <span className="text-xl font-bold gradient-text">PIX GPX</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('industries')} 
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-btn"
            className="md:hidden text-slate-600 hover:text-blue-600" 
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`mobile-menu fixed top-16 right-0 w-64 h-screen bg-white shadow-xl md:hidden ${mobileMenuOpen ? 'active' : ''}`}
      >
        <div className="p-6 space-y-4">
          <button 
            onClick={() => scrollToSection('home')} 
            className="block text-slate-600 hover:text-blue-600 transition-colors py-2 w-full text-left"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="block text-slate-600 hover:text-blue-600 transition-colors py-2 w-full text-left"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('industries')} 
            className="block text-slate-600 hover:text-blue-600 transition-colors py-2 w-full text-left"
          >
            Industries
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="block text-slate-600 hover:text-blue-600 transition-colors py-2 w-full text-left"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="block text-slate-600 hover:text-blue-600 transition-colors py-2 w-full text-left"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="block bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-lg text-center mt-4 w-full"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
