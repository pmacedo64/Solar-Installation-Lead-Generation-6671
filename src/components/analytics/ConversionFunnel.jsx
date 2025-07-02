import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUsers, FiTarget, FiFileText, FiCheckCircle } = FiIcons;

const ConversionFunnel = ({ data }) => {
  const steps = [
    {
      name: 'Visitors',
      value: data.visitors,
      icon: FiUsers,
      color: 'blue',
      percentage: 100
    },
    {
      name: 'Leads',
      value: data.leads,
      icon: FiTarget,
      color: 'green',
      percentage: ((data.leads / data.visitors) * 100).toFixed(1)
    },
    {
      name: 'Quotes',
      value: data.quotes,
      icon: FiFileText,
      color: 'orange',
      percentage: ((data.quotes / data.visitors) * 100).toFixed(1)
    },
    {
      name: 'Conversions',
      value: data.conversions,
      icon: FiCheckCircle,
      color: 'purple',
      percentage: ((data.conversions / data.visitors) * 100).toFixed(1)
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600' },
    green: { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-600' },
    orange: { bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-600' },
    purple: { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-600' }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">Conversion Funnel</h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${colorClasses[step.color].light}`}>
                <SafeIcon icon={step.icon} className={`text-xl ${colorClasses[step.color].text}`} />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">{step.name}</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">{step.value.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 ml-2">({step.percentage}%)</span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${step.percentage}%` }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className={`h-3 rounded-full ${colorClasses[step.color].bg}`}
                  />
                </div>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flex justify-center mt-2 mb-2">
                <div className="w-px h-4 bg-gray-300" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Key Insights</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Lead Conversion:</span>
            <span className="font-semibold text-green-600 ml-1">
              {((data.leads / data.visitors) * 100).toFixed(2)}%
            </span>
          </div>
          <div>
            <span className="text-gray-600">Quote Rate:</span>
            <span className="font-semibold text-orange-600 ml-1">
              {((data.quotes / data.leads) * 100).toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConversionFunnel;