import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiUser } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'Lisboa, Portugal',
      savings: '€180/mês',
      rating: 5,
      text: 'A CRenato Consulting superou todas as minhas expectativas! A minha fatura eléctrica passou de €220 para apenas €40 por mês. A instalação foi rápida e profissional. O melhor investimento que já fiz!',
      system: 'Sistema 8.5kW'
    },
    {
      name: 'João Santos',
      location: 'Porto, Portugal',
      savings: '€245/mês',
      rating: 5,
      text: 'Estava céptico no início, mas as poupanças são reais. Em apenas 6 meses, poupei mais de €1.400. A equipa era conhecedora e tratou de tudo, desde licenças até instalação.',
      system: 'Sistema 12kW'
    },
    {
      name: 'Ana Costa',
      location: 'Coimbra, Portugal',
      savings: '€165/mês',
      rating: 5,
      text: 'Todo o processo foi perfeito. Desde a consulta inicial até ligar o sistema, tudo foi tratado profissionalmente. O valor da minha casa aumentou e as minhas faturas desapareceram!',
      system: 'Sistema 7.2kW'
    },
    {
      name: 'Carlos Ferreira',
      location: 'Faro, Portugal',
      savings: '€290/mês',
      rating: 5,
      text: 'Após um ano com energia solar, poupei mais de €3.000! O sistema funciona ainda melhor do que prometido. O atendimento ao cliente da CRenato Consulting é excepcional - estão sempre lá quando precisa.',
      system: 'Sistema 15kW'
    },
    {
      name: 'Isabel Rodrigues',
      location: 'Braga, Portugal',
      savings: '€155/mês',
      rating: 5,
      text: 'Optar por energia solar foi a melhor decisão para a nossa família. Estamos a poupar dinheiro e a ajudar o ambiente. A equipa de instalação foi respeitosa com a nossa propriedade e completou tudo a tempo.',
      system: 'Sistema 6.8kW'
    },
    {
      name: 'Pedro Oliveira',
      location: 'Aveiro, Portugal',
      savings: '€210/mês',
      rating: 5,
      text: 'Adoro ter independência energética! Mesmo durante os meses de verão, o meu sistema solar cobre todas as nossas necessidades de electricidade. A garantia de 25 anos dá-me tranquilidade completa.',
      system: 'Sistema 10.5kW'
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <SafeIcon key={i} icon={FiStar} className="text-yellow-400 fill-current text-lg" />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Dizem Os Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não acredite apenas na nossa palavra. Aqui está o que os clientes reais estão a dizer sobre 
            a sua experiência solar e o dinheiro que estão a poupar todos os meses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="text-xl text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />

              <p className="text-gray-700 my-4 italic">
                "{testimonial.text}"
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-600">Poupança Mensal</p>
                  <p className="font-bold text-green-600 text-lg">{testimonial.savings}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Tamanho Sistema</p>
                  <p className="font-medium text-gray-900">{testimonial.system}</p>
                </div>
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
            <h3 className="text-3xl font-bold mb-4">
              Junte-se a 50.000+ Clientes Satisfeitos
            </h3>
            <p className="text-xl mb-6">
              Comece a poupar dinheiro e a gerar energia limpa para a sua casa hoje
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <p className="text-3xl font-bold">4.9/5</p>
                <div className="flex justify-center mb-1">
                  <StarRating rating={5} />
                </div>
                <p className="text-sm">Avaliação Cliente</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white opacity-30"></div>
              <div className="text-center">
                <p className="text-3xl font-bold">€2.400</p>
                <p className="text-sm">Poupança Anual Média</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white opacity-30"></div>
              <div className="text-center">
                <p className="text-3xl font-bold">25 Anos</p>
                <p className="text-sm">Cobertura Garantia</p>
              </div>
            </div>
            <button
              onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mt-6"
            >
              Obter o Seu Orçamento Gratuito
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;