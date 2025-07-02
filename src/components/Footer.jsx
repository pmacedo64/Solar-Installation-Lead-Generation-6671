import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiPhone, FiMail, FiMapPin, FiClock } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <SafeIcon icon={FiSun} className="text-3xl text-yellow-500" />
              <span className="text-2xl font-bold">CRenato Consulting</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empresa líder em instalação solar ajudando proprietários a poupar dinheiro e gerar 
              energia limpa há mais de uma década.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiPhone} className="text-blue-400" />
                <span>961 959 272</span>
              </div>
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiMail} className="text-blue-400" />
                <span>info@crenatoconsulting.com</span>
              </div>
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiMapPin} className="text-blue-400" />
                <span>Portugal</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Instalação Solar Residencial</li>
              <li>Sistemas Solares Comerciais</li>
              <li>Manutenção Painéis Solares</li>
              <li>Soluções Armazenamento Energia</li>
              <li>Financiamento Solar</li>
              <li>Avaliação de Telhado</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Empresa</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Sobre Nós</li>
              <li>Avaliações de Clientes</li>
              <li>Informação de Garantia</li>
              <li>Opções de Financiamento</li>
              <li>Processo de Instalação</li>
              <li>Contacte-nos</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Horário de Funcionamento</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiClock} className="text-blue-400" />
                <div>
                  <p>Segunda - Sexta</p>
                  <p className="text-sm">09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiClock} className="text-blue-400" />
                <div>
                  <p>Sábado</p>
                  <p className="text-sm">09:00 - 14:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiClock} className="text-blue-400" />
                <div>
                  <p>Domingo</p>
                  <p className="text-sm">Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">
              © 2024 CRenato Consulting. Todos os direitos reservados. Licenciado e Segurado.
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
              <a href="#" className="hover:text-white transition-colors">Info Licença</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;