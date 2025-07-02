import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiMinus } = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Quanto posso realmente poupar com energia solar?',
      answer: 'A maioria dos proprietários poupa 70-90% nas suas faturas de electricidade, com poupanças médias de €1.500-€3.000 por ano. Ao longo de 25 anos, as poupanças totais variam tipicamente entre €40.000-€75.000, dependendo da sua fatura eléctrica actual e tamanho do sistema.'
    },
    {
      question: 'E se o meu telhado não for adequado para energia solar?',
      answer: 'Os nossos especialistas avaliam cada telhado individualmente. Podemos trabalhar com a maioria dos tipos de telhado, orientações e até sombra parcial. Se o seu telhado realmente não for adequado, informá-lo-emos antecipadamente - sem surpresas ou tácticas de venda agressivas.'
    },
    {
      question: 'Quanto tempo demora a instalação?',
      answer: 'A maioria das instalações são concluídas em 1-2 dias. Todo o processo desde a assinatura do contrato até à activação do sistema demora tipicamente 6-12 semanas, incluindo licenças, aprovações das companhias eléctricas e agendamento.'
    },
    {
      question: 'O que acontece se precisar de reparações no telhado mais tarde?',
      answer: 'Podemos facilmente remover e reinstalar os seus painéis se for necessário trabalho no telhado. A nossa instalação inclui proteção do telhado e trabalhamos com empreiteiros de telhados para garantir coordenação perfeita quando necessário.'
    },
    {
      question: 'Os painéis solares funcionam em tempo nublado?',
      answer: 'Sim! Os painéis solares geram electricidade mesmo em dias nublados, embora com eficiência reduzida. Os painéis modernos são projetados para capturar luz solar difusa e funcionam bem em várias condições meteorológicas.'
    },
    {
      question: 'Que opções de financiamento estão disponíveis?',
      answer: 'Oferecemos múltiplas opções de financiamento incluindo empréstimos solares com €0 de entrada, compras a dinheiro e programas de leasing. A maioria dos clientes qualifica-se para financiamento com taxas competitivas e termos flexíveis.'
    },
    {
      question: 'Quanto tempo duram os painéis solares?',
      answer: 'Os painéis solares são construídos para durar 25-30+ anos com manutenção mínima. Os nossos sistemas vêm com garantia de 25 anos cobrindo tanto equipamento como desempenho, garantindo tranquilidade a longo prazo.'
    },
    {
      question: 'A energia solar aumentará o valor da minha casa?',
      answer: 'Sim! Estudos mostram que painéis solares aumentam o valor da casa em média 4,1%. O valor aumentado excede tipicamente o custo do sistema, tornando a energia solar um investimento inteligente mesmo se planeia vender a sua casa.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Obtenha respostas às perguntas mais comuns sobre instalação solar e poupanças.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <SafeIcon
                  icon={openIndex === index ? FiMinus : FiPlus}
                  className="text-2xl text-blue-600 flex-shrink-0"
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
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
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda Tem Perguntas?
            </h3>
            <p className="text-gray-600 mb-6">
              Os nossos especialistas solares estão aqui para ajudar. Obtenha respostas personalizadas 
              e um orçamento personalizado para a sua casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+351961959272"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ligar Agora: 961 959 272
              </a>
              <button
                onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Obter Orçamento Gratuito
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;