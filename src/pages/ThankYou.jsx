import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiPhone, FiMail, FiHome } = FiIcons;

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <SafeIcon icon={FiCheckCircle} className="text-6xl text-green-500 mx-auto mb-4" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Obrigado Pelo Seu Interesse!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Recebemos as suas informações e os nossos especialistas solares irão contactá-lo dentro de 24 horas 
          com o seu orçamento solar personalizado e análise de poupanças.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">O que acontece a seguir?</h2>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <SafeIcon icon={FiPhone} className="text-blue-600 text-xl flex-shrink-0" />
              <span className="text-gray-700">O nosso consultor solar irá contactá-lo para discutir as suas necessidades energéticas</span>
            </div>
            <div className="flex items-center gap-3">
              <SafeIcon icon={FiHome} className="text-blue-600 text-xl flex-shrink-0" />
              <span className="text-gray-700">Agendaremos uma avaliação gratuita da casa na sua conveniência</span>
            </div>
            <div className="flex items-center gap-3">
              <SafeIcon icon={FiMail} className="text-blue-600 text-xl flex-shrink-0" />
              <span className="text-gray-700">Receberá uma proposta detalhada com cálculos de poupanças</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <p className="text-sm text-gray-500 mb-4">
            Perguntas? Contacte-nos directamente:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+351961959272"
              className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <SafeIcon icon={FiPhone} className="text-lg" />
              961 959 272
            </a>
            <a
              href="mailto:info@crenatoconsulting.com"
              className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <SafeIcon icon={FiMail} className="text-lg" />
              info@crenatoconsulting.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;