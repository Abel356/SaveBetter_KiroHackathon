'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Filter, Search, ArrowUpDown, Building2, Globe, Users, MapPin } from 'lucide-react'
import { bankingService } from '@/lib/banking-data'
import { BankRate } from '@/types'
import Link from 'next/link'

export default function BankingPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<'all' | 'savings' | 'tfsa' | 'gic'>('all')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bigSix' | 'onlineBanks' | 'creditUnions' | 'regionalBanks'>('all')
  const [sortBy, setSortBy] = useState<'rate' | 'name' | 'minimumDeposit'>('rate')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const allBanks = bankingService.getCurrentRates()
  const bankCategories = bankingService.getBanksByCategory()
  const bankStats = bankingService.getBankingStats()

  const filteredAndSortedBanks = useMemo(() => {
    let filtered = allBanks

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(bank => 
        bank.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bank.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(bank => bank.type === selectedType)
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryBanks = bankCategories[selectedCategory]
      const categoryNames = categoryBanks.map(bank => bank.institution)
      filtered = filtered.filter(bank => categoryNames.includes(bank.institution))
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0
      
      switch (sortBy) {
        case 'rate':
          comparison = a.interestRate - b.interestRate
          break
        case 'name':
          comparison = a.institution.localeCompare(b.institution)
          break
        case 'minimumDeposit':
          comparison = a.minimumDeposit - b.minimumDeposit
          break
      }
      
      return sortOrder === 'desc' ? -comparison : comparison
    })

    return filtered
  }, [allBanks, searchTerm, selectedType, selectedCategory, sortBy, sortOrder, bankCategories])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'bigSix': return <Building2 className="w-4 h-4" />
      case 'onlineBanks': return <Globe className="w-4 h-4" />
      case 'creditUnions': return <Users className="w-4 h-4" />
      case 'regionalBanks': return <MapPin className="w-4 h-4" />
      default: return null
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'bigSix': return 'bg-blue-100 text-blue-800'
      case 'onlineBanks': return 'bg-green-100 text-green-800'
      case 'creditUnions': return 'bg-purple-100 text-purple-800'
      case 'regionalBanks': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getBankCategory = (institution: string): string => {
    for (const [category, banks] of Object.entries(bankCategories)) {
      if (category !== 'all' && banks.some(bank => bank.institution === institution)) {
        return category
      }
    }
    return 'other'
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
            All Canadian Banking Options
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Compare {bankStats.totalInstitutions} institutions with {bankStats.totalProducts} products
          </p>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">{bankCategories.bigSix.length}</div>
              <div className="text-sm text-blue-800">Big Six Banks</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">{bankCategories.onlineBanks.length}</div>
              <div className="text-sm text-green-800">Online Banks</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">{bankCategories.creditUnions.length}</div>
              <div className="text-sm text-purple-800">Credit Unions</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600">{bankCategories.regionalBanks.length}</div>
              <div className="text-sm text-orange-800">Regional Banks</div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold">Filter & Sort Options</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Bank name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="savings">Savings</option>
                <option value="tfsa">TFSA</option>
                <option value="gic">GIC</option>
              </select>
            </div>

            {/* Bank Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bank Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="bigSix">Big Six Banks</option>
                <option value="onlineBanks">Online Banks</option>
                <option value="creditUnions">Credit Unions</option>
                <option value="regionalBanks">Regional Banks</option>
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
                  <option value="rate">Interest Rate</option>
                  <option value="name">Bank Name</option>
                  <option value="minimumDeposit">Min Deposit</option>
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

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredAndSortedBanks.length} of {allBanks.length} options
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {filteredAndSortedBanks.map((bank, index) => {
            const category = getBankCategory(bank.institution)
            return (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Bank Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{bank.institution}</h3>
                        <p className="text-gray-600">{bank.productName}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getCategoryColor(category)}`}>
                        {getCategoryIcon(category)}
                        {category === 'bigSix' ? 'Big Six' : 
                         category === 'onlineBanks' ? 'Online' :
                         category === 'creditUnions' ? 'Credit Union' :
                         category === 'regionalBanks' ? 'Regional' : 'Other'}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {bank.features.slice(0, 4).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                      {bank.features.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                          +{bank.features.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Rate & Details */}
                  <div className="lg:text-right">
                    <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2">
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {bank.interestRate}%
                        </div>
                        <div className="text-sm text-gray-500">
                          {bank.type.toUpperCase()} Rate
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="text-green-600 font-medium">Min: ${bank.minimumDeposit.toLocaleString()}</div>
                        <div className="capitalize">{bank.type} Account</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-green-800 mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {bank.pros.slice(0, 2).map((pro, idx) => (
                          <li key={idx} className="text-sm text-green-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-red-800 mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {bank.cons.slice(0, 2).map((con, idx) => (
                          <li key={idx} className="text-sm text-red-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>

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