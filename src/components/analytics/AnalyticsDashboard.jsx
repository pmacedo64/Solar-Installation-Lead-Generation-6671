import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useAnalytics } from '../../hooks/useAnalytics';
import MetricCard from './MetricCard';
import VisitorChart from './VisitorChart';
import ConversionFunnel from './ConversionFunnel';
import TrafficSources from './TrafficSources';
import DeviceBreakdown from './DeviceBreakdown';
import LocationHeatmap from './LocationHeatmap';
import RealTimeStats from './RealTimeStats';

const { FiBarChart3, FiTrendingUp, FiUsers, FiTarget, FiRefreshCw, FiDownload } = FiIcons;

const AnalyticsDashboard = () => {
  const { dailyData, hourlyData, trafficSources, deviceData, locationData, realTimeData, loading, refetch } = useAnalytics();
  const [dateRange, setDateRange] = useState('30d');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <SafeIcon icon={FiRefreshCw} className="text-4xl text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  const totalVisitors = dailyData.reduce((sum, day) => sum + day.visitors, 0);
  const totalLeads = dailyData.reduce((sum, day) => sum + day.leads, 0);
  const totalQuotes = dailyData.reduce((sum, day) => sum + day.quotes, 0);
  const totalConversions = dailyData.reduce((sum, day) => sum + day.conversions, 0);
  const avgBounceRate = dailyData.reduce((sum, day) => sum + day.bounceRate, 0) / dailyData.length;
  const avgSessionTime = dailyData.reduce((sum, day) => sum + day.avgSessionTime, 0) / dailyData.length;

  const conversionRate = ((totalLeads / totalVisitors) * 100).toFixed(2);
  const quoteRate = ((totalQuotes / totalLeads) * 100).toFixed(2);
  const closingRate = ((totalConversions / totalQuotes) * 100).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <SafeIcon icon={FiBarChart3} className="text-blue-600" />
                Solar Analytics Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Track your solar lead generation performance</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              <button
                onClick={refetch}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <SafeIcon icon={FiRefreshCw} />
                Refresh
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <SafeIcon icon={FiDownload} />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Real-time Stats */}
        <RealTimeStats data={realTimeData} />

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Visitors"
            value={totalVisitors.toLocaleString()}
            change="+12.5%"
            trend="up"
            icon={FiUsers}
            color="blue"
          />
          <MetricCard
            title="Lead Conversion"
            value={`${conversionRate}%`}
            change="+2.3%"
            trend="up"
            icon={FiTarget}
            color="green"
          />
          <MetricCard
            title="Quote Requests"
            value={totalQuotes.toLocaleString()}
            change="+8.7%"
            trend="up"
            icon={FiTrendingUp}
            color="purple"
          />
          <MetricCard
            title="Avg. Session Time"
            value={`${Math.floor(avgSessionTime / 60)}m ${Math.floor(avgSessionTime % 60)}s`}
            change="+15.2%"
            trend="up"
            icon={FiBarChart3}
            color="orange"
          />
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <VisitorChart data={dailyData} />
          <ConversionFunnel 
            data={{
              visitors: totalVisitors,
              leads: totalLeads,
              quotes: totalQuotes,
              conversions: totalConversions
            }}
          />
        </div>

        {/* Traffic Sources and Device Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <TrafficSources data={trafficSources} />
          <DeviceBreakdown data={deviceData} />
        </div>

        {/* Location Heatmap */}
        <LocationHeatmap data={locationData} />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;