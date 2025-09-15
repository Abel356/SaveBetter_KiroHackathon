import { StockData, ETFData, MarketData } from '@/types'

// Popular Canadian Stocks (TSX)
export const canadianStocks: StockData[] = [
  // Technology
  {
    symbol: 'SHOP.TO',
    name: 'Shopify Inc.',
    sector: 'Technology',
    price: 89.45,
    change: 2.34,
    changePercent: 2.69,
    marketCap: 112.5,
    dividend: 0,
    dividendYield: 0,
    peRatio: 0,
    description: 'E-commerce platform provider',
    riskLevel: 'high',
    popularity: 95
  },
  {
    symbol: 'BB.TO',
    name: 'BlackBerry Limited',
    sector: 'Technology',
    price: 4.23,
    change: -0.12,
    changePercent: -2.76,
    marketCap: 2.4,
    dividend: 0,
    dividendYield: 0,
    peRatio: 0,
    description: 'Cybersecurity and IoT solutions',
    riskLevel: 'high',
    popularity: 78
  },
  {
    symbol: 'CGI.TO',
    name: 'CGI Inc.',
    sector: 'Technology',
    price: 134.67,
    change: 1.89,
    changePercent: 1.42,
    marketCap: 32.1,
    dividend: 0,
    dividendYield: 0,
    peRatio: 18.5,
    description: 'IT consulting and services',
    riskLevel: 'medium',
    popularity: 72
  },

  // Financial Services
  {
    symbol: 'RY.TO',
    name: 'Royal Bank of Canada',
    sector: 'Financial Services',
    price: 142.89,
    change: 0.78,
    changePercent: 0.55,
    marketCap: 203.4,
    dividend: 4.32,
    dividendYield: 3.02,
    peRatio: 12.8,
    description: 'Canada\'s largest bank',
    riskLevel: 'low',
    popularity: 88
  },
  {
    symbol: 'TD.TO',
    name: 'The Toronto-Dominion Bank',
    sector: 'Financial Services',
    price: 89.23,
    change: -0.45,
    changePercent: -0.50,
    marketCap: 162.8,
    dividend: 3.84,
    dividendYield: 4.30,
    peRatio: 11.2,
    description: 'Major Canadian bank',
    riskLevel: 'low',
    popularity: 85
  },
  {
    symbol: 'BNS.TO',
    name: 'The Bank of Nova Scotia',
    sector: 'Financial Services',
    price: 76.45,
    change: 0.23,
    changePercent: 0.30,
    marketCap: 91.2,
    dividend: 3.60,
    dividendYield: 4.71,
    peRatio: 10.9,
    description: 'International banking focus',
    riskLevel: 'low',
    popularity: 82
  },
  {
    symbol: 'BMO.TO',
    name: 'Bank of Montreal',
    sector: 'Financial Services',
    price: 134.56,
    change: 1.12,
    changePercent: 0.84,
    marketCap: 98.7,
    dividend: 5.52,
    dividendYield: 4.10,
    peRatio: 12.1,
    description: 'Canada\'s oldest bank',
    riskLevel: 'low',
    popularity: 80
  },
  {
    symbol: 'CM.TO',
    name: 'Canadian Imperial Bank of Commerce',
    sector: 'Financial Services',
    price: 67.89,
    change: -0.34,
    changePercent: -0.50,
    marketCap: 64.2,
    dividend: 3.32,
    dividendYield: 4.89,
    peRatio: 10.5,
    description: 'Retail and commercial banking',
    riskLevel: 'low',
    popularity: 78
  },
  {
    symbol: 'NA.TO',
    name: 'National Bank of Canada',
    sector: 'Financial Services',
    price: 112.34,
    change: 0.67,
    changePercent: 0.60,
    marketCap: 38.9,
    dividend: 3.92,
    dividendYield: 3.49,
    peRatio: 11.8,
    description: 'Quebec-focused banking',
    riskLevel: 'low',
    popularity: 65
  },

  // Energy
  {
    symbol: 'CNQ.TO',
    name: 'Canadian Natural Resources Limited',
    sector: 'Energy',
    price: 89.67,
    change: 2.45,
    changePercent: 2.81,
    marketCap: 102.3,
    dividend: 3.00,
    dividendYield: 3.35,
    peRatio: 14.2,
    description: 'Oil and gas production',
    riskLevel: 'high',
    popularity: 75
  },
  {
    symbol: 'SU.TO',
    name: 'Suncor Energy Inc.',
    sector: 'Energy',
    price: 56.78,
    change: 1.89,
    changePercent: 3.44,
    marketCap: 78.9,
    dividend: 1.98,
    dividendYield: 3.49,
    peRatio: 13.8,
    description: 'Oil sands operations',
    riskLevel: 'high',
    popularity: 73
  },
  {
    symbol: 'ENB.TO',
    name: 'Enbridge Inc.',
    sector: 'Energy',
    price: 59.23,
    change: 0.45,
    changePercent: 0.77,
    marketCap: 123.4,
    dividend: 3.66,
    dividendYield: 6.18,
    peRatio: 19.2,
    description: 'Pipeline infrastructure',
    riskLevel: 'medium',
    popularity: 82
  },

  // Materials
  {
    symbol: 'PAAS.TO',
    name: 'Pan American Silver Corp.',
    sector: 'Materials',
    price: 23.45,
    change: -0.78,
    changePercent: -3.22,
    marketCap: 4.9,
    dividend: 0.40,
    dividendYield: 1.71,
    peRatio: 0,
    description: 'Silver mining operations',
    riskLevel: 'high',
    popularity: 68
  },
  {
    symbol: 'ABX.TO',
    name: 'Barrick Gold Corporation',
    sector: 'Materials',
    price: 21.89,
    change: -0.34,
    changePercent: -1.53,
    marketCap: 38.7,
    dividend: 0.40,
    dividendYield: 1.83,
    peRatio: 16.8,
    description: 'Gold mining company',
    riskLevel: 'high',
    popularity: 71
  },

  // Transportation
  {
    symbol: 'CNR.TO',
    name: 'Canadian National Railway Company',
    sector: 'Transportation',
    price: 167.89,
    change: 1.23,
    changePercent: 0.74,
    marketCap: 112.8,
    dividend: 2.94,
    dividendYield: 1.75,
    peRatio: 20.1,
    description: 'Railway transportation',
    riskLevel: 'low',
    popularity: 79
  },
  {
    symbol: 'CP.TO',
    name: 'Canadian Pacific Kansas City Limited',
    sector: 'Transportation',
    price: 102.45,
    change: 0.89,
    changePercent: 0.88,
    marketCap: 95.2,
    dividend: 2.28,
    dividendYield: 2.23,
    peRatio: 24.3,
    description: 'Railway operations',
    riskLevel: 'medium',
    popularity: 74
  },

  // Telecommunications
  {
    symbol: 'BCE.TO',
    name: 'BCE Inc.',
    sector: 'Telecommunications',
    price: 56.78,
    change: -0.23,
    changePercent: -0.40,
    marketCap: 51.8,
    dividend: 3.99,
    dividendYield: 7.03,
    peRatio: 18.9,
    description: 'Telecommunications services',
    riskLevel: 'low',
    popularity: 76
  },
  {
    symbol: 'T.TO',
    name: 'TELUS Corporation',
    sector: 'Telecommunications',
    price: 26.89,
    change: 0.12,
    changePercent: 0.45,
    marketCap: 37.2,
    dividend: 1.38,
    dividendYield: 5.13,
    peRatio: 22.4,
    description: 'Wireless and internet services',
    riskLevel: 'low',
    popularity: 72
  },

  // Consumer Discretionary
  {
    symbol: 'QSR.TO',
    name: 'Restaurant Brands International Inc.',
    sector: 'Consumer Discretionary',
    price: 89.34,
    change: 1.45,
    changePercent: 1.65,
    marketCap: 40.2,
    dividend: 2.16,
    dividendYield: 2.42,
    peRatio: 16.7,
    description: 'Quick service restaurants',
    riskLevel: 'medium',
    popularity: 69
  },

  // Real Estate
  {
    symbol: 'CAR-UN.TO',
    name: 'Canadian Apartment Properties REIT',
    sector: 'Real Estate',
    price: 56.23,
    change: 0.78,
    changePercent: 1.41,
    marketCap: 9.8,
    dividend: 2.04,
    dividendYield: 3.63,
    peRatio: 0,
    description: 'Residential real estate investment trust',
    riskLevel: 'medium',
    popularity: 63
  }
]

// Popular Canadian ETFs
export const canadianETFs: ETFData[] = [
  {
    symbol: 'VTI.TO',
    name: 'Vanguard Total Stock Market Index Fund',
    type: 'Broad Market',
    price: 89.45,
    change: 1.23,
    changePercent: 1.39,
    expenseRatio: 0.05,
    dividend: 2.45,
    dividendYield: 2.74,
    assets: 45.2,
    description: 'Tracks the entire Canadian stock market',
    riskLevel: 'medium',
    popularity: 92
  },
  {
    symbol: 'VCN.TO',
    name: 'Vanguard FTSE Canada All Cap Index ETF',
    type: 'Canadian Equity',
    price: 45.67,
    change: 0.89,
    changePercent: 1.99,
    expenseRatio: 0.05,
    dividend: 1.89,
    dividendYield: 4.14,
    assets: 8.9,
    description: 'Broad Canadian equity exposure',
    riskLevel: 'medium',
    popularity: 88
  },
  {
    symbol: 'TDB902',
    name: 'TD Canadian Index Fund',
    type: 'Canadian Equity',
    price: 52.34,
    change: 0.67,
    changePercent: 1.30,
    expenseRatio: 0.31,
    dividend: 2.12,
    dividendYield: 4.05,
    assets: 12.4,
    description: 'Tracks S&P/TSX Capped Composite Index',
    riskLevel: 'medium',
    popularity: 85
  },
  {
    symbol: 'VGRO.TO',
    name: 'Vanguard Growth ETF Portfolio',
    type: 'Balanced',
    price: 28.89,
    change: 0.45,
    changePercent: 1.58,
    expenseRatio: 0.22,
    dividend: 0.89,
    dividendYield: 3.08,
    assets: 6.7,
    description: '80% stocks, 20% bonds balanced portfolio',
    riskLevel: 'medium',
    popularity: 90
  },
  {
    symbol: 'VBAL.TO',
    name: 'Vanguard Balanced ETF Portfolio',
    type: 'Balanced',
    price: 26.78,
    change: 0.34,
    changePercent: 1.29,
    expenseRatio: 0.22,
    dividend: 1.12,
    dividendYield: 4.18,
    assets: 4.2,
    description: '60% stocks, 40% bonds balanced portfolio',
    riskLevel: 'low',
    popularity: 87
  },
  {
    symbol: 'VCON.TO',
    name: 'Vanguard Conservative ETF Portfolio',
    type: 'Conservative',
    price: 25.45,
    change: 0.12,
    changePercent: 0.47,
    expenseRatio: 0.22,
    dividend: 1.34,
    dividendYield: 5.26,
    assets: 2.1,
    description: '40% stocks, 60% bonds conservative portfolio',
    riskLevel: 'low',
    popularity: 78
  },
  {
    symbol: 'XIC.TO',
    name: 'iShares Core S&P Total Canadian Stock Market ETF',
    type: 'Canadian Equity',
    price: 34.56,
    change: 0.78,
    changePercent: 2.31,
    expenseRatio: 0.06,
    dividend: 1.45,
    dividendYield: 4.19,
    assets: 15.8,
    description: 'Broad Canadian market exposure',
    riskLevel: 'medium',
    popularity: 83
  },
  {
    symbol: 'TDB900',
    name: 'TD Canadian Bond Index Fund',
    type: 'Fixed Income',
    price: 10.89,
    change: -0.02,
    changePercent: -0.18,
    expenseRatio: 0.33,
    dividend: 0.45,
    dividendYield: 4.13,
    assets: 8.9,
    description: 'Canadian government and corporate bonds',
    riskLevel: 'low',
    popularity: 75
  },
  {
    symbol: 'VAB.TO',
    name: 'Vanguard Canadian Aggregate Bond Index ETF',
    type: 'Fixed Income',
    price: 23.67,
    change: -0.05,
    changePercent: -0.21,
    expenseRatio: 0.09,
    dividend: 1.12,
    dividendYield: 4.73,
    assets: 3.4,
    description: 'Broad Canadian bond market exposure',
    riskLevel: 'low',
    popularity: 72
  },
  {
    symbol: 'VFV.TO',
    name: 'Vanguard S&P 500 Index ETF',
    type: 'US Equity',
    price: 112.34,
    change: 1.89,
    changePercent: 1.71,
    expenseRatio: 0.09,
    dividend: 2.34,
    dividendYield: 2.08,
    assets: 18.9,
    description: 'Tracks S&P 500 in Canadian dollars',
    riskLevel: 'medium',
    popularity: 89
  }
]

export class StockMarketService {
  /**
   * Get all Canadian stocks
   */
  getAllStocks(): StockData[] {
    return canadianStocks
  }

  /**
   * Get all Canadian ETFs
   */
  getAllETFs(): ETFData[] {
    return canadianETFs
  }

  /**
   * Get stocks by sector
   */
  getStocksBySector(): Record<string, StockData[]> {
    const sectors = canadianStocks.reduce((acc, stock) => {
      if (!acc[stock.sector]) {
        acc[stock.sector] = []
      }
      acc[stock.sector].push(stock)
      return acc
    }, {} as Record<string, StockData[]>)
    
    // Sort sectors alphabetically for consistent ordering
    const sortedSectors: Record<string, StockData[]> = {}
    Object.keys(sectors).sort().forEach(sector => {
      sortedSectors[sector] = sectors[sector]
    })
    
    return sortedSectors
  }

  /**
   * Get ETFs by type
   */
  getETFsByType(): Record<string, ETFData[]> {
    const types = canadianETFs.reduce((acc, etf) => {
      if (!acc[etf.type]) {
        acc[etf.type] = []
      }
      acc[etf.type].push(etf)
      return acc
    }, {} as Record<string, ETFData[]>)
    
    // Sort types alphabetically for consistent ordering
    const sortedTypes: Record<string, ETFData[]> = {}
    Object.keys(types).sort().forEach(type => {
      sortedTypes[type] = types[type]
    })
    
    return sortedTypes
  }

  /**
   * Filter investments by risk level
   */
  filterByRiskLevel(riskLevel: 'low' | 'medium' | 'high'): {
    stocks: StockData[]
    etfs: ETFData[]
  } {
    return {
      stocks: canadianStocks.filter(stock => stock.riskLevel === riskLevel),
      etfs: canadianETFs.filter(etf => etf.riskLevel === riskLevel)
    }
  }

  /**
   * Get top performers
   */
  getTopPerformers(limit: number = 10): {
    stocks: StockData[]
    etfs: ETFData[]
  } {
    const topStocks = [...canadianStocks]
      .sort((a, b) => b.changePercent - a.changePercent)
      .slice(0, limit)
    
    const topETFs = [...canadianETFs]
      .sort((a, b) => b.changePercent - a.changePercent)
      .slice(0, limit)

    return { stocks: topStocks, etfs: topETFs }
  }

  /**
   * Get dividend-focused investments
   */
  getDividendInvestments(minYield: number = 3): {
    stocks: StockData[]
    etfs: ETFData[]
  } {
    return {
      stocks: canadianStocks.filter(stock => stock.dividendYield >= minYield),
      etfs: canadianETFs.filter(etf => etf.dividendYield >= minYield)
    }
  }

  /**
   * Get recommendations based on user profile
   */
  getRecommendations(profile: {
    riskTolerance: 'low' | 'medium' | 'high'
    investmentAmount: number
    timeHorizon: 'short' | 'medium' | 'long'
    focusDividends: boolean
  }): {
    recommended: (StockData | ETFData)[]
    reasoning: string
  } {
    let recommended: (StockData | ETFData)[] = []
    let reasoning = ''

    if (profile.riskTolerance === 'low') {
      recommended = [
        ...canadianETFs.filter(etf => etf.riskLevel === 'low'),
        ...canadianStocks.filter(stock => stock.riskLevel === 'low' && stock.dividendYield > 3)
      ]
      reasoning = 'Conservative investments focused on stability and dividend income.'
    } else if (profile.riskTolerance === 'medium') {
      recommended = [
        ...canadianETFs.filter(etf => etf.type === 'Balanced' || etf.type === 'Canadian Equity'),
        ...canadianStocks.filter(stock => stock.riskLevel === 'medium')
      ]
      reasoning = 'Balanced approach with diversified ETFs and stable growth stocks.'
    } else {
      recommended = [
        ...canadianStocks.filter(stock => stock.sector === 'Technology' || stock.sector === 'Energy'),
        ...canadianETFs.filter(etf => etf.type === 'Broad Market')
      ]
      reasoning = 'Growth-focused investments with higher potential returns and volatility.'
    }

    if (profile.focusDividends) {
      recommended = recommended.filter(inv => 
        ('dividendYield' in inv && inv.dividendYield > 2)
      )
      reasoning += ' Filtered for dividend-paying investments.'
    }

    // Sort by popularity and limit results
    recommended = recommended
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 8)

    return { recommended, reasoning }
  }

  /**
   * Get market overview
   */
  getMarketOverview(): MarketData {
    const allStocks = canadianStocks
    const gainers = allStocks.filter(s => s.changePercent > 0).length
    const losers = allStocks.filter(s => s.changePercent < 0).length
    const unchanged = allStocks.length - gainers - losers

    const avgChange = allStocks.reduce((sum, stock) => sum + stock.changePercent, 0) / allStocks.length

    return {
      totalStocks: allStocks.length,
      totalETFs: canadianETFs.length,
      gainers,
      losers,
      unchanged,
      averageChange: Math.round(avgChange * 100) / 100,
      topGainer: allStocks.reduce((prev, current) => 
        prev.changePercent > current.changePercent ? prev : current
      ),
      topLoser: allStocks.reduce((prev, current) => 
        prev.changePercent < current.changePercent ? prev : current
      )
    }
  }
}

export const stockMarketService = new StockMarketService()