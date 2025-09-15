'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Filter, Search, ArrowUpDown, Building, PieChart, Shield, Zap } from 'lucide-react'
import { stockMarketService } from '@/lib/stock-data'
import { StockData, ETFData } from '@/types'
import Link from 'next/link'

export default function InvestmentsPage() {
  const [activeTab, setActiveTab] = useState<'stocks' | 'etfs' | 'overview'>('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSector, setSelectedSector] = useState<string>('all')
  const [selectedRisk, setSelectedRisk] = useState<'all' | 'low' | 'medium' | 'high'>('all')
  const [sortBy, setSortBy] = useState<'performance' | 'name' | 'price'>('performance')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const allStocks = stockMarketService.getAllStocks()
  const allETFs = stockMarketService.getAllETFs()
  const stocksBySector = stockMarketService.getStocksBySector()
  const etfsByType = stockMarketService.getETFsByType()
  const marketOverview = stockMarketService.getMarketOverview()
  const topPerformers = stockMarketService.getTopPerformers(5)

  const filteredStocks = useMemo(() => {
    let filtered = allStocks

    if (searchTerm) {
      filtered = filtered.filter(stock => 
        stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedSector !== 'all') {
      filtered = filtered.filter(stock => stock.sector === selectedSector)
    }

    if (selectedRisk !== 'all') {
      filtered = filtered.filter(stock => stock.riskLevel === selectedRisk)
    }

    filtered.sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case 'performance':
          comparison = a.changePercent - b.changePercent
          break
        case 'name':
          comparison = a.name.localeCompare(b.name)
          break
        case 'price':
          comparison = a.price - b.price
          break
      }
      return sortOrder === 'desc' ? -comparison : comparison
    })

    return filtered
  }, [allStocks, searchTerm, selectedSector, selectedRisk, sortBy, sortOrder])

  const filteredETFs = useMemo(() => {
    let filtered = allETFs

    if (searchTerm) {
      filtered = filtered.filter(etf => 
        etf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        etf.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedRisk !== 'all') {
      filtered = filtered.filter(etf => etf.riskLevel === selectedRisk)
    }

    filtered.sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case 'performance':
          comparison = a.changePercent - b.changePercent
          break
        case 'name':
          comparison = a.name.localeCompare(b.name)
          break
        case 'price':
          comparison = a.price - b.price
          break
      }
      return sortOrder === 'desc' ? -comparison : comparison
    })

    return filtered
  }, [allETFs, searchTerm, selectedRisk, sortBy, sortOrder])

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return <Shield className="w-4 h-4 text-green-600" />
      case 'medium': return <PieChart className="w-4 h-4 text-yellow-600" />
      case 'high': return <Zap className="w-4 h-4 text-red-600" />
      default: return null
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'high': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Canadian Investment Options
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Explore {allStocks.length} stocks and {allETFs.length} ETFs on the TSX
          </p>
        </motion.div>

        {/* Market Overview */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Market Stats */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Market Overview</h2>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{marketOverview.totalStocks}</div>
                  <div className="text-sm text-blue-800">Total Stocks</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{marketOverview.gainers}</div>
                  <div className="text-sm text-green-800">Gainers Today</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">{marketOverview.losers}</div>
                  <div className="text-sm text-red-800">Losers Today</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{marketOverview.totalETFs}</div>
                  <div className="text-sm text-purple-800">Available ETFs</div>
                </div>
              </div>

              {/* Top Performers */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Top Performing Stocks
                  </h3>
                  <div className="space-y-3">
                    {topPerformers.stocks.slice(0, 5).map((stock, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{stock.symbol}</div>
                          <div className="text-sm text-gray-600">{stock.name}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">${stock.price}</div>
                          <div className={`text-sm ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-blue-600" />
                    Popular ETFs
                  </h3>
                  <div className="space-y-3">
                    {allETFs.slice(0, 5).map((etf, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{etf.symbol}</div>
                          <div className="text-sm text-gray-600">{etf.type}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">${etf.price}</div>
                          <div className={`text-sm ${etf.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {etf.changePercent >= 0 ? '+' : ''}{etf.changePercent.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sectors Overview */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Sectors Overview</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(stocksBySector)
                  .sort(([a], [b]) => a.localeCompare(b)) // Sort sectors alphabetically for consistent order
                  .map(([sector, stocks]) => (
                  <div key={sector} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{sector}</h3>
                    <div className="text-2xl font-bold text-primary-600 mb-1">{stocks.length}</div>
                    <div className="text-sm text-gray-600">Companies</div>
                    <div className="mt-2">
                      <div className="text-xs text-gray-500">
                        Avg: {(stocks.reduce((sum, s) => sum + s.changePercent, 0) / stocks.length).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ETF Types */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">ETF Categories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(etfsByType)
                  .sort(([a], [b]) => a.localeCompare(b)) // Sort ETF types alphabetically for consistent order
                  .map(([type, etfs]) => (
                  <div key={type} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{type}</h3>
                    <div className="text-2xl font-bold text-indigo-600 mb-1">{etfs.length}</div>
                    <div className="text-sm text-gray-600">ETFs Available</div>
                    <div className="mt-2">
                      <div className="text-xs text-gray-500">
                        Avg Expense: {(etfs.reduce((sum, e) => sum + e.expenseRatio, 0) / etfs.length).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-white text-primary-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Market Overview
            </button>
            <button
              onClick={() => setActiveTab('stocks')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'stocks' 
                  ? 'bg-white text-primary-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Canadian Stocks ({allStocks.length})
            </button>
            <button
              onClick={() => setActiveTab('etfs')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'etfs' 
                  ? 'bg-white text-primary-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Canadian ETFs ({allETFs.length})
            </button>
          </div>
        </motion.div>

        {/* Filters for Stocks/ETFs */}
        {(activeTab === 'stocks' || activeTab === 'etfs') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold">Filter & Sort</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Company name or symbol..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Sector (Stocks only) */}
              {activeTab === 'stocks' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sector</label>
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Sectors</option>
                    {Object.keys(stocksBySector).sort().map(sector => (
                      <option key={sector} value={sector}>{sector}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Risk Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Risk Level</label>
                <select
                  value={selectedRisk}
                  onChange={(e) => setSelectedRisk(e.target.value as any)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Risk Levels</option>
                  <option value="low">Low Risk</option>
                  <option value="medium">Medium Risk</option>
                  <option value="high">High Risk</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <div className="flex gap-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="performance">Performance</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                  </select>
                  <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stocks List */}
        {activeTab === 'stocks' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="text-sm text-gray-600 mb-4">
              Showing {filteredStocks.length} of {allStocks.length} stocks
            </div>
            {filteredStocks.map((stock, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{stock.symbol}</h3>
                        <p className="text-gray-600">{stock.name}</p>
                        <p className="text-sm text-gray-500">{stock.description}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getRiskColor(stock.riskLevel)}`}>
                        {getRiskIcon(stock.riskLevel)}
                        {stock.riskLevel} risk
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {stock.sector}
                      </span>
                      {stock.dividend > 0 && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          {stock.dividendYield.toFixed(2)}% yield
                        </span>
                      )}
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        ${stock.marketCap.toFixed(1)}B market cap
                      </span>
                    </div>
                  </div>

                  <div className="lg:text-right">
                    <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2">
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          ${stock.price.toFixed(2)}
                        </div>
                        <div className={`text-sm font-medium ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>${stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}</div>
                        <div>Today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ETFs List */}
        {activeTab === 'etfs' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="text-sm text-gray-600 mb-4">
              Showing {filteredETFs.length} of {allETFs.length} ETFs
            </div>
            {filteredETFs.map((etf, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{etf.symbol}</h3>
                        <p className="text-gray-600">{etf.name}</p>
                        <p className="text-sm text-gray-500">{etf.description}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getRiskColor(etf.riskLevel)}`}>
                        {getRiskIcon(etf.riskLevel)}
                        {etf.riskLevel} risk
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                        {etf.type}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {etf.expenseRatio}% expense ratio
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {etf.dividendYield.toFixed(2)}% yield
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        ${etf.assets.toFixed(1)}B assets
                      </span>
                    </div>
                  </div>

                  <div className="lg:text-right">
                    <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2">
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          ${etf.price.toFixed(2)}
                        </div>
                        <div className={`text-sm font-medium ${etf.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {etf.changePercent >= 0 ? '+' : ''}{etf.changePercent.toFixed(2)}%
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>${etf.change >= 0 ? '+' : ''}{etf.change.toFixed(2)}</div>
                        <div>Today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Back to Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link href="/demo/results" className="btn-secondary">
            Back to Your Results
          </Link>
        </motion.div>
      </div>
    </div>
  )
}