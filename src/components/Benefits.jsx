import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDollarSign, FiTrendingUp, FiShield, FiHome, FiZap, FiAward } = FiIcons;

const Benefits = () => {
  const benefits = [
    {
      icon: FiDollarSign,
      title: 'Poupanças Enormes',
      description: 'Poupe até 90% nas suas faturas mensais de electricidade e +€50.000 ao longo de 25 anos.',
      highlight: 'Até +€50K Poupanças'
    },
    {
      icon: FiTrendingUp,
      title: 'Aumenta Valor da Casa',
      description: 'Os painéis solares aumentam o valor da sua casa em média 4,1% segundo estudos de mercado.',
      highlight: '4,1% Aumento Valor'
    },
    {
      icon: FiShield,
      title: 'Garantia 25 Anos',
      description: 'Tranquilidade completa com a nossa garantia abrangente de 25 anos de equipamento e desempenho.',
      highlight: '25 Anos Proteção'
    },
    {
      icon: FiHome,
      title: 'Independência Energética',
      description: 'Gere a sua própria electricidade limpa e proteja-se do aumento dos custos energéticos.',
      highlight: 'Liberdade Energética'
    },
    {
      icon: FiZap,
      title: 'Energia Limpa',
      description: 'Reduza a sua pegada de carbono e contribua para um futuro mais limpo e sustentável.',
      highlight: '100% Energia Limpa'
    },
    {
      icon: FiAward,
      title: 'Créditos Fiscais',
      description: 'Aproveite os créditos fiscais federais até 30% do custo do seu sistema solar.',
      highlight: '30% Crédito Fiscal'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Porquê Escolher Solar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A energia solar não é apenas boa para o ambiente – também é óptima para a sua carteira. 
            Aqui está o porquê de milhares de proprietários estarem a fazer a mudança.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md">
                <SafeIcon icon={benefit.icon} className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {benefit.description}
              </p>
              <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {benefit.highlight}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto Para Começar a Poupar?
            </h3>
            <p className="text-xl mb-6">
              Junte-se a mais de 50.000 clientes satisfeitos que estão a poupar dinheiro com energia solar
            </p>
            <button
              onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Obter Orçamento Gratuito Agora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;