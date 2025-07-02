import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiHome, FiFileText, FiSettings, FiCheckCircle } = FiIcons;

const Process = () => {
  const steps = [
    {
      icon: FiPhone,
      step: '1',
      title: 'Consulta Gratuita',
      description: 'Os nossos especialistas solares irão contactá-lo para discutir as suas necessidades energéticas e responder a qualquer pergunta.',
      duration: '15 minutos'
    },
    {
      icon: FiHome,
      step: '2',
      title: 'Avaliação da Casa',
      description: 'Visitamos a sua casa para avaliar o seu telhado, sistema eléctrico e padrões de uso de energia.',
      duration: '1 hora'
    },
    {
      icon: FiFileText,
      step: '3',
      title: 'Proposta Personalizada',
      description: 'Receba uma proposta detalhada com design do sistema, custos, poupanças e opções de financiamento.',
      duration: '2-3 dias'
    },
    {
      icon: FiSettings,
      step: '4',
      title: 'Instalação',
      description: 'Os nossos técnicos certificados instalam o seu sistema solar com o mínimo de perturbação da sua rotina diária.',
      duration: '1-2 dias'
    },
    {
      icon: FiCheckCircle,
      step: '5',
      title: 'Começar a Poupar',
      description: 'Comece a gerar energia limpa e a poupar dinheiro nas suas faturas de electricidade imediatamente.',
      duration: 'Imediato'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Processo Simples de 5 Passos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Da consulta inicial às poupanças de energia, tornamos a transição para solar fácil e sem stress. 
            Aqui está exactamente o que esperar.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-green-600 transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                      <SafeIcon icon={step.icon} className="text-2xl text-white" />
                    </div>
                    <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Timeline connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-green-600"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto Para Começar?
            </h3>
            <p className="text-gray-600 mb-6">
              O processo começa com uma simples chamada telefónica. Os nossos especialistas solares estão prontos 
              para o ajudar a começar a poupar dinheiro com energia solar.
            </p>
            <button
              onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105"
            >
              Iniciar a Sua Jornada Solar
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;