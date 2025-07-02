import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTrendingUp, FiTrendingDown } = FiIcons;

const MetricCard = ({ title, value, change, trend, icon, color = 'blue' }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
  };

  const bgColors = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    orange: 'bg-orange-50',
    red: 'bg-red-50',
  };

  const iconColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${bgColors[color]}`}>
          <SafeIcon icon={icon} className={`text-2xl ${iconColors[color]}`} />
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
          trend === 'up' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          <SafeIcon 
            icon={trend === 'up' ? FiTrendingUp : FiTrendingDown} 
            className="text-xs" 
          />
          {change}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </motion.div>
  );
};

export default MetricCard;