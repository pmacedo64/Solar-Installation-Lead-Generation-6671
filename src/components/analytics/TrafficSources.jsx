import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const TrafficSources = ({ data }) => {
  const option = {
    title: {
      text: 'Traffic Sources',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: {
        color: '#374151'
      }
    },
    legend: {
      bottom: 0,
      left: 'center'
    },
    series: [
      {
        name: 'Visitors',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '45%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: data.map((item, index) => ({
          value: item.visitors,
          name: item.source,
          itemStyle: {
            color: [
              '#3b82f6', // Blue
              '#10b981', // Green
              '#f59e0b', // Orange
              '#8b5cf6', // Purple
              '#ef4444'  // Red
            ][index % 5]
          }
        }))
      }
    ]
  };

  const totalVisitors = data.reduce((sum, item) => sum + item.visitors, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <ReactECharts option={option} style={{ height: '300px' }} />
      
      <div className="mt-6 space-y-3">
        {data.map((source, index) => {
          const colors = ['blue', 'green', 'orange', 'purple', 'red'];
          const color = colors[index % colors.length];
          const percentage = ((source.visitors / totalVisitors) * 100).toFixed(1);
          const costPerLead = source.cost > 0 ? (source.cost / source.leads).toFixed(2) : '0.00';
          
          return (
            <div key={source.source} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-${color}-500`} />
                <span className="font-medium text-gray-900">{source.source}</span>
              </div>
              <div className="text-right text-sm">
                <div className="font-semibold text-gray-900">
                  {source.visitors.toLocaleString()} ({percentage}%)
                </div>
                <div className="text-gray-600">
                  {source.leads} leads • ${costPerLead} CPL
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TrafficSources;