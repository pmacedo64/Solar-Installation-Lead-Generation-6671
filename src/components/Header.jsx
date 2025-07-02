import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiPhone, FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <SafeIcon icon={FiSun} className="text-3xl text-yellow-500" />
            <span className="text-2xl font-bold text-gray-900">CRenato Consulting</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Processo
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testemunhos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+351961959272"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <SafeIcon icon={FiPhone} className="text-lg" />
              961 959 272
            </a>
            <button
              onClick={() => scrollToSection('hero')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Orçamento Gratuito
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-2xl text-gray-700" />
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t py-4"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Processo
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Testemunhos
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                FAQ
              </button>
              <a
                href="tel:+351961959272"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <SafeIcon icon={FiPhone} className="text-lg" />
                961 959 272
              </a>
              <button
                onClick={() => scrollToSection('hero')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-left"
              >
                Orçamento Gratuito
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;