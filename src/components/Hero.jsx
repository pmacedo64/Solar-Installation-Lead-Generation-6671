import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiDollarSign, FiShield, FiArrowRight } = FiIcons;

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    monthlyBill: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to email
      const emailData = {
        to: 'pedro.macedo@payoffmarketing.pt',
        subject: 'Novo Pedido de Orçamento Solar - CRenato Consulting',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        monthlyBill: formData.monthlyBill
      };

      console.log('Dados do formulário:', emailData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Redirect to thank you page
      window.location.href = 'https://crenatoconsulting.com/obrigado/';
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitMessage('Erro ao enviar formulário. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Poupe Até <span className="text-green-600">90%</span> na Sua Fatura de Electricidade
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Obtenha um orçamento gratuito de instalação solar e comece a poupar milhares todos os anos. 
              Instalação profissional com garantia de 25 anos incluída.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <SafeIcon icon={FiZap} className="text-3xl text-yellow-500 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Energia Limpa</p>
                <p className="text-sm text-gray-600">100% Renovável</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <SafeIcon icon={FiDollarSign} className="text-3xl text-green-500 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Grandes Poupanças</p>
                <p className="text-sm text-gray-600">+€50.000 Vitalícias</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <SafeIcon icon={FiShield} className="text-3xl text-blue-500 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Garantia 25 Anos</p>
                <p className="text-sm text-gray-600">Proteção Total</p>
              </motion.div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                ⚡ Tempo Limitado: Crédito Fiscal até 30%
              </p>
              <p className="text-gray-600">
                Aja agora para garantir a máxima poupança na sua instalação solar!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Obtenha o Seu Orçamento Solar Gratuito
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Introduza o seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço de Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Introduza o seu email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Telefone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Introduza o seu número de telefone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Morada da Casa *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Introduza a sua morada"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fatura Mensal de Electricidade
                </label>
                <select
                  name="monthlyBill"
                  value={formData.monthlyBill}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione a sua fatura mensal</option>
                  <option value="under-100">Menos de €100</option>
                  <option value="100-200">€100 - €200</option>
                  <option value="200-300">€200 - €300</option>
                  <option value="300-400">€300 - €400</option>
                  <option value="over-400">Mais de €400</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'A Enviar...'
                ) : (
                  <>
                    Obter o Meu Orçamento Gratuito
                    <SafeIcon icon={FiArrowRight} className="text-xl" />
                  </>
                )}
              </button>
            </form>

            {submitMessage && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {submitMessage}
              </div>
            )}

            <p className="text-xs text-gray-500 text-center mt-4">
              Ao submeter este formulário, concorda em receber comunicações da CRenato Consulting. 
              Respeitamos a sua privacidade e nunca partilharemos as suas informações.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;