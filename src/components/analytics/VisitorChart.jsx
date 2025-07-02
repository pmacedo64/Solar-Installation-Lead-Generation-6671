import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const VisitorChart = ({ data }) => {
  const option = {
    title: {
      text: 'Visitor Trends (30 Days)',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937'
      }
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: {
        color: '#374151'
      }
    },
    legend: {
      data: ['Visitors', 'Leads', 'Quotes'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.map(d => new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
      axisLine: {
        lineStyle: {
          color: '#e5e7eb'
        }
      },
      axisLabel: {
        color: '#6b7280'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#e5e7eb'
        }
      },
      axisLabel: {
        color: '#6b7280'
      },
      splitLine: {
        lineStyle: {
          color: '#f3f4f6'
        }
      }
    },
    series: [
      {
        name: 'Visitors',
        type: 'line',
        smooth: true,
        data: data.map(d => d.visitors),
        lineStyle: {
          color: '#3b82f6',
          width: 3
        },
        itemStyle: {
          color: '#3b82f6'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(59, 130, 246, 0.3)' },
              { offset: 1, color: 'rgba(59, 130, 246, 0.05)' }
            ]
          }
        }
      },
      {
        name: 'Leads',
        type: 'line',
        smooth: true,
        data: data.map(d => d.leads),
        lineStyle: {
          color: '#10b981',
          width: 3
        },
        itemStyle: {
          color: '#10b981'
        }
      },
      {
        name: 'Quotes',
        type: 'line',
        smooth: true,
        data: data.map(d => d.quotes),
        lineStyle: {
          color: '#f59e0b',
          width: 3
        },
        itemStyle: {
          color: '#f59e0b'
        }
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <ReactECharts option={option} style={{ height: '400px' }} />
    </motion.div>
  );
};

export default VisitorChart;