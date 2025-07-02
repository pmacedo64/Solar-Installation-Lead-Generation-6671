import { useState, useEffect, useCallback } from 'react';

// Mock analytics data - in production, this would connect to your analytics service
const generateMockData = () => {
  const now = new Date();
  const days = [];
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    days.push({
      date: date.toISOString().split('T')[0],
      visitors: Math.floor(Math.random() * 500) + 200,
      leads: Math.floor(Math.random() * 50) + 10,
      quotes: Math.floor(Math.random() * 20) + 5,
      conversions: Math.floor(Math.random() * 8) + 2,
      bounceRate: Math.random() * 0.3 + 0.2,
      avgSessionTime: Math.floor(Math.random() * 300) + 120,
    });
  }
  
  return days;
};

const generateHourlyData = () => {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push({
      hour: i,
      visitors: Math.floor(Math.random() * 50) + 10,
      leads: Math.floor(Math.random() * 8) + 1,
    });
  }
  return hours;
};

const generateTrafficSources = () => [
  { source: 'Google Ads', visitors: 1250, leads: 89, cost: 2450 },
  { source: 'Facebook Ads', visitors: 890, leads: 67, cost: 1890 },
  { source: 'Organic Search', visitors: 2100, leads: 145, cost: 0 },
  { source: 'Direct', visitors: 650, leads: 34, cost: 0 },
  { source: 'Referral', visitors: 320, leads: 18, cost: 0 },
];

const generateDeviceData = () => [
  { device: 'Desktop', visitors: 2100, percentage: 42 },
  { device: 'Mobile', visitors: 2400, percentage: 48 },
  { device: 'Tablet', visitors: 500, percentage: 10 },
];

const generateLocationData = () => [
  { state: 'California', visitors: 1200, leads: 89 },
  { state: 'Texas', visitors: 980, leads: 67 },
  { state: 'Florida', visitors: 850, leads: 56 },
  { state: 'Arizona', visitors: 720, leads: 45 },
  { state: 'Nevada', visitors: 650, leads: 38 },
  { state: 'Colorado', visitors: 580, leads: 32 },
];

export const useAnalytics = () => {
  const [data, setData] = useState({
    dailyData: [],
    hourlyData: [],
    trafficSources: [],
    deviceData: [],
    locationData: [],
    loading: true,
  });

  const [realTimeData, setRealTimeData] = useState({
    activeUsers: 0,
    todayVisitors: 0,
    todayLeads: 0,
    conversionRate: 0,
  });

  const fetchAnalytics = useCallback(async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const dailyData = generateMockData();
    const totalVisitors = dailyData.reduce((sum, day) => sum + day.visitors, 0);
    const totalLeads = dailyData.reduce((sum, day) => sum + day.leads, 0);
    
    setData({
      dailyData,
      hourlyData: generateHourlyData(),
      trafficSources: generateTrafficSources(),
      deviceData: generateDeviceData(),
      locationData: generateLocationData(),
      loading: false,
    });

    setRealTimeData({
      activeUsers: Math.floor(Math.random() * 50) + 20,
      todayVisitors: Math.floor(Math.random() * 200) + 100,
      todayLeads: Math.floor(Math.random() * 15) + 5,
      conversionRate: ((totalLeads / totalVisitors) * 100).toFixed(2),
    });
  }, []);

  useEffect(() => {
    fetchAnalytics();
    
    // Update real-time data every 30 seconds
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        activeUsers: Math.floor(Math.random() * 50) + 20,
        todayVisitors: prev.todayVisitors + Math.floor(Math.random() * 5),
        todayLeads: prev.todayLeads + (Math.random() > 0.8 ? 1 : 0),
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, [fetchAnalytics]);

  return { ...data, realTimeData, refetch: fetchAnalytics };
};