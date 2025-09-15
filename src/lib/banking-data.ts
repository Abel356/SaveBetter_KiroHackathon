import { BankRate } from '@/types'

export const canadianBankRates: BankRate[] = [
  // Big 6 Canadian Banks - Savings Accounts
  {
    institution: 'RBC Royal Bank',
    productName: 'High Interest eSavings',
    type: 'savings',
    interestRate: 1.75,
    minimumDeposit: 0,
    features: ['Online account', 'No monthly fee', 'Unlimited transactions', 'Mobile banking'],
    pros: ['Canada\'s largest bank', 'Extensive branch network', 'Strong online platform', 'Excellent customer service'],
    cons: ['Lower interest rate', 'Online-only savings account', 'Better rates available elsewhere']
  },
  {
    institution: 'RBC Royal Bank',
    productName: 'RBC Savings Account',
    type: 'savings',
    interestRate: 0.05,
    minimumDeposit: 0,
    features: ['Branch access', 'ATM access', 'Online banking', 'Mobile app'],
    pros: ['Full branch access', 'No minimum balance', 'Established reputation', 'Comprehensive services'],
    cons: ['Very low interest rate', 'Monthly fees possible', 'Better options available']
  },
  {
    institution: 'TD Canada Trust',
    productName: 'High Interest Savings Account',
    type: 'savings',
    interestRate: 1.65,
    minimumDeposit: 0,
    features: ['Tiered interest rates', 'Online banking', 'Mobile app', '24/7 customer service'],
    pros: ['Large branch network', 'Extended hours', 'Good customer service', 'Stable institution'],
    cons: ['Lower rates', 'Fees on some transactions', 'Rate tiers favor high balances']
  },
  {
    institution: 'Bank of Montreal (BMO)',
    productName: 'Premium Rate Savings',
    type: 'savings',
    interestRate: 1.70,
    minimumDeposit: 0,
    features: ['No monthly fees', 'Online banking', 'Mobile deposits', 'Branch access'],
    pros: ['Established reputation', 'Good branch network', 'Competitive mobile app', 'No minimum balance'],
    cons: ['Moderate interest rates', 'Limited promotional offers', 'Some transaction fees']
  },
  {
    institution: 'Scotiabank',
    productName: 'Momentum PLUS Savings',
    type: 'savings',
    interestRate: 1.80,
    minimumDeposit: 0,
    features: ['Tiered rates', 'Branch access', 'Online banking', 'International presence'],
    pros: ['Big bank stability', 'Branch network', 'Good customer service', 'International banking'],
    cons: ['Lower rates than online banks', 'Fees on some accounts', 'Rate tiers']
  },
  {
    institution: 'CIBC',
    productName: 'eAdvantage Savings Account',
    type: 'savings',
    interestRate: 1.60,
    minimumDeposit: 0,
    features: ['No monthly fee', 'Online banking', 'Mobile app', 'Interac e-Transfer'],
    pros: ['No monthly fees', 'Good digital banking', 'Branch access', 'Student-friendly'],
    cons: ['Lower interest rates', 'Limited promotional rates', 'Online-only high interest']
  },
  {
    institution: 'National Bank of Canada',
    productName: 'High Interest Savings Account',
    type: 'savings',
    interestRate: 1.75,
    minimumDeposit: 0,
    features: ['Competitive rates', 'Online banking', 'Quebec focus', 'Bilingual service'],
    pros: ['Strong in Quebec', 'Bilingual service', 'Competitive rates', 'Good customer service'],
    cons: ['Limited presence outside Quebec', 'Fewer branches nationally', 'Regional focus']
  },

  // Online Banks - High Interest
  {
    institution: 'EQ Bank',
    productName: 'Savings Plus Account',
    type: 'savings',
    interestRate: 2.50,
    minimumDeposit: 0,
    features: ['No monthly fees', 'No minimum balance', 'Unlimited transactions', 'Joint accounts'],
    pros: ['Highest rate among major banks', 'No fees', 'Easy online banking', 'CDIC insured'],
    cons: ['Online-only bank', 'No physical branches', 'Limited ATM network', 'No investment options']
  },
  {
    institution: 'Tangerine',
    productName: 'Savings Account',
    type: 'savings',
    interestRate: 2.25,
    minimumDeposit: 0,
    features: ['No monthly fees', 'Mobile banking', 'Free Interac e-Transfers', 'Cafe locations'],
    pros: ['Good rate', 'User-friendly app', 'No fees', 'Some physical locations'],
    cons: ['Rate may change', 'Limited branch access', 'Promotional rates expire', 'Owned by Scotiabank']
  },
  {
    institution: 'Simplii Financial',
    productName: 'High Interest Savings Account',
    type: 'savings',
    interestRate: 2.00,
    minimumDeposit: 0,
    features: ['No monthly fees', 'CIBC ATM access', 'Online banking', '24/7 support'],
    pros: ['CIBC ATM network', 'Competitive rate', 'No minimum balance', 'Good customer service'],
    cons: ['Lower than top competitors', 'Online-only', 'Rate subject to change', 'Limited physical presence']
  },
  {
    institution: 'Koodo Financial',
    productName: 'High Interest Savings',
    type: 'savings',
    interestRate: 2.30,
    minimumDeposit: 0,
    features: ['High interest rate', 'No fees', 'Mobile-first', 'Simple interface'],
    pros: ['Very competitive rate', 'No fees', 'Simple to use', 'Mobile-optimized'],
    cons: ['New to market', 'Limited track record', 'Online-only', 'Limited features']
  },

  // Credit Unions
  {
    institution: 'Meridian Credit Union',
    productName: 'High Interest Savings',
    type: 'savings',
    interestRate: 2.10,
    minimumDeposit: 0,
    features: ['Member-owned', 'Competitive rates', 'Community focus', 'Ontario-based'],
    pros: ['Member benefits', 'Community-focused', 'Good rates', 'Personal service'],
    cons: ['Regional availability', 'Smaller network', 'Limited digital features', 'Membership required']
  },
  {
    institution: 'Vancity',
    productName: 'Member Savings',
    type: 'savings',
    interestRate: 1.95,
    minimumDeposit: 0,
    features: ['Ethical banking', 'Community investment', 'BC-focused', 'Sustainable practices'],
    pros: ['Ethical focus', 'Community investment', 'Member-owned', 'Sustainable banking'],
    cons: ['BC only', 'Lower rates than online banks', 'Limited national presence', 'Membership required']
  },

  // TFSA Options
  {
    institution: 'EQ Bank',
    productName: 'TFSA Savings Plus',
    type: 'tfsa',
    interestRate: 2.50,
    minimumDeposit: 0,
    features: ['Tax-free growth', 'No monthly fees', 'Flexible withdrawals', 'Online management'],
    pros: ['Highest TFSA rate', 'No fees', 'Easy to manage', 'Flexible access'],
    cons: ['Online-only', 'No investment options', 'Limited to savings', 'No branches']
  },
  {
    institution: 'Tangerine',
    productName: 'TFSA Savings',
    type: 'tfsa',
    interestRate: 2.25,
    minimumDeposit: 0,
    features: ['Tax-free savings', 'No fees', 'Easy transfers', 'Mobile banking'],
    pros: ['Good rate', 'No fees', 'Easy to use', 'Flexible withdrawals'],
    cons: ['Rate may change', 'Promotional periods', 'Limited investment options', 'Online focus']
  },
  {
    institution: 'RBC',
    productName: 'TFSA High Interest eSavings',
    type: 'tfsa',
    interestRate: 1.75,
    minimumDeposit: 0,
    features: ['Tax-free growth', 'Branch support', 'Online management', 'Investment options'],
    pros: ['Big bank stability', 'Branch access', 'Investment options available', 'Full service'],
    cons: ['Lower rates', 'May have fees', 'Complex fee structure', 'Rate tiers']
  },
  {
    institution: 'Questrade',
    productName: 'TFSA Self-Directed',
    type: 'tfsa',
    interestRate: 0, // Variable based on investments
    minimumDeposit: 1000,
    features: ['Investment options', 'Low fees', 'Self-directed', 'Stock trading'],
    pros: ['Investment growth potential', 'Low trading fees', 'Flexible options', 'Professional platform'],
    cons: ['Requires investment knowledge', 'Market risk', 'Minimum deposit required', 'No guaranteed returns']
  },
  {
    institution: 'Wealthsimple',
    productName: 'TFSA Invest',
    type: 'tfsa',
    interestRate: 0, // Variable based on portfolio
    minimumDeposit: 0,
    features: ['Robo-advisor', 'Automatic rebalancing', 'Socially responsible options', 'Low fees'],
    pros: ['Professional management', 'Low fees', 'Easy to use', 'Socially responsible'],
    cons: ['Management fees', 'Less control', 'Market risk', 'Limited customization']
  },

  // GIC Options
  {
    institution: 'Oaken Financial',
    productName: '1-Year GIC',
    type: 'gic',
    interestRate: 4.25,
    minimumDeposit: 1000,
    features: ['Guaranteed return', 'CDIC insured', 'Fixed term', 'Competitive rates'],
    pros: ['High guaranteed rate', 'No risk', 'CDIC protection', 'Predictable returns'],
    cons: ['Money locked in', 'No liquidity', 'Online-only bank', 'Minimum deposit']
  },
  {
    institution: 'RBC',
    productName: 'Cashable GIC',
    type: 'gic',
    interestRate: 3.80,
    minimumDeposit: 500,
    features: ['Cashable after 30 days', 'CDIC insured', 'Branch support', 'Flexible terms'],
    pros: ['Big bank security', 'Some liquidity', 'Branch support', 'Lower minimum'],
    cons: ['Lower rates than locked-in', 'Penalties for early withdrawal', 'Rate tiers', 'Fees may apply']
  },
  {
    institution: 'Tangerine',
    productName: 'GIC',
    type: 'gic',
    interestRate: 4.00,
    minimumDeposit: 500,
    features: ['Competitive rates', 'Various terms', 'Online management', 'CDIC insured'],
    pros: ['Good rates', 'Easy online management', 'Various terms available', 'Lower minimum'],
    cons: ['Money locked in', 'Online-only', 'Limited flexibility', 'Rate changes']
  },
  {
    institution: 'EQ Bank',
    productName: 'GIC',
    type: 'gic',
    interestRate: 4.10,
    minimumDeposit: 100,
    features: ['Very low minimum', 'Competitive rates', 'Online platform', 'CDIC insured'],
    pros: ['Very low minimum deposit', 'Good rates', 'Easy online process', 'Flexible amounts'],
    cons: ['Online-only', 'Money locked in', 'No branch support', 'Limited terms']
  },

  // Additional Regional Banks and Credit Unions
  {
    institution: 'Desjardins',
    productName: 'Desjardins Savings Account',
    type: 'savings',
    interestRate: 1.50,
    minimumDeposit: 0,
    features: ['Quebec-focused', 'Bilingual service', 'Cooperative model', 'Community banking'],
    pros: ['Strong in Quebec', 'Member-owned cooperative', 'Bilingual service', 'Community focus'],
    cons: ['Limited outside Quebec', 'Lower rates than online banks', 'Regional focus']
  },
  {
    institution: 'Coast Capital Savings',
    productName: 'High Interest Savings',
    type: 'savings',
    interestRate: 2.15,
    minimumDeposit: 0,
    features: ['Credit union benefits', 'BC-focused', 'Member rewards', 'Community investment'],
    pros: ['Credit union benefits', 'Competitive rates', 'Member-owned', 'Community focus'],
    cons: ['BC and Alberta only', 'Membership required', 'Limited national presence']
  },
  {
    institution: 'Servus Credit Union',
    productName: 'Servus Savings',
    type: 'savings',
    interestRate: 1.85,
    minimumDeposit: 0,
    features: ['Alberta-focused', 'Member benefits', 'Community banking', 'Profit sharing'],
    pros: ['Member profit sharing', 'Community investment', 'Good customer service', 'Local focus'],
    cons: ['Alberta only', 'Membership required', 'Limited digital features']
  },
  {
    institution: 'Conexus Credit Union',
    productName: 'Conexus Savings',
    type: 'savings',
    interestRate: 1.90,
    minimumDeposit: 0,
    features: ['Saskatchewan-focused', 'Member benefits', 'Agricultural expertise', 'Community support'],
    pros: ['Strong agricultural focus', 'Member benefits', 'Community investment', 'Local expertise'],
    cons: ['Saskatchewan only', 'Limited digital presence', 'Membership required']
  },
  {
    institution: 'Alterna Savings',
    productName: 'High Interest Savings',
    type: 'savings',
    interestRate: 2.05,
    minimumDeposit: 0,
    features: ['Ontario credit union', 'Ethical banking', 'Member-owned', 'Community focus'],
    pros: ['Ethical banking practices', 'Member-owned', 'Competitive rates', 'Community investment'],
    cons: ['Ontario only', 'Smaller network', 'Limited branch access']
  },
  {
    institution: 'HSBC Bank Canada',
    productName: 'HSBC Online Savings',
    type: 'savings',
    interestRate: 1.45,
    minimumDeposit: 0,
    features: ['International banking', 'Online platform', 'Global presence', 'Premium services'],
    pros: ['International expertise', 'Global banking network', 'Premium services', 'Multi-currency'],
    cons: ['Lower rates', 'Focus on high-net-worth', 'Limited branch network in Canada']
  },
  {
    institution: 'Laurentian Bank',
    productName: 'Laurentian Savings',
    type: 'savings',
    interestRate: 1.25,
    minimumDeposit: 0,
    features: ['Quebec-focused', 'Bilingual service', 'SME expertise', 'Regional banking'],
    pros: ['Strong SME focus', 'Quebec expertise', 'Bilingual service', 'Personal service'],
    cons: ['Lower rates', 'Limited national presence', 'Smaller network']
  },
  {
    institution: 'Canadian Western Bank',
    productName: 'CWB High Interest Savings',
    type: 'savings',
    interestRate: 1.65,
    minimumDeposit: 0,
    features: ['Western Canada focus', 'Business expertise', 'Personal service', 'Regional strength'],
    pros: ['Strong in Western Canada', 'Business banking expertise', 'Personal service', 'Regional focus'],
    cons: ['Limited eastern presence', 'Smaller network', 'Lower rates than online banks']
  },
  {
    institution: 'Mogo',
    productName: 'MogoMoney',
    type: 'savings',
    interestRate: 2.80,
    minimumDeposit: 0,
    features: ['High interest rate', 'Mobile-first', 'No fees', 'Credit monitoring'],
    pros: ['Very high rate', 'No fees', 'Mobile-optimized', 'Credit score monitoring'],
    cons: ['New to market', 'Limited track record', 'Online-only', 'Rate subject to change']
  },
  {
    institution: 'Paymi',
    productName: 'Paymi Savings',
    type: 'savings',
    interestRate: 2.60,
    minimumDeposit: 0,
    features: ['High rate', 'Digital-first', 'No minimum balance', 'Easy transfers'],
    pros: ['Competitive rate', 'Digital-first approach', 'No fees', 'Easy to use'],
    cons: ['New platform', 'Limited features', 'Online-only', 'Smaller institution']
  },

  // Additional TFSA Options
  {
    institution: 'TD Canada Trust',
    productName: 'TFSA High Interest Savings',
    type: 'tfsa',
    interestRate: 1.65,
    minimumDeposit: 0,
    features: ['Tax-free growth', 'Branch access', 'Online management', 'Investment options'],
    pros: ['Branch support', 'Investment options', 'Established bank', 'Full service'],
    cons: ['Lower rates', 'Fees possible', 'Rate tiers', 'Complex fee structure']
  },
  {
    institution: 'BMO',
    productName: 'TFSA Premium Rate Savings',
    type: 'tfsa',
    interestRate: 1.70,
    minimumDeposit: 0,
    features: ['Tax-free savings', 'Branch access', 'Investment options', 'Online banking'],
    pros: ['Branch network', 'Investment options', 'No minimum balance', 'Full service banking'],
    cons: ['Lower rates than online banks', 'Potential fees', 'Rate tiers']
  },
  {
    institution: 'Scotiabank',
    productName: 'TFSA Momentum PLUS',
    type: 'tfsa',
    interestRate: 1.80,
    minimumDeposit: 0,
    features: ['Tax-free growth', 'Tiered rates', 'Branch access', 'Investment platform'],
    pros: ['Investment platform access', 'Branch support', 'International presence', 'Tiered rates'],
    cons: ['Lower base rates', 'Fees on some services', 'Rate tiers favor high balances']
  },
  {
    institution: 'CIBC',
    productName: 'TFSA eAdvantage',
    type: 'tfsa',
    interestRate: 1.60,
    minimumDeposit: 0,
    features: ['Tax-free savings', 'Online banking', 'Mobile app', 'Investment options'],
    pros: ['No monthly fees', 'Investment options', 'Good digital platform', 'Student-friendly'],
    cons: ['Lower rates', 'Limited promotional offers', 'Online-only high interest']
  },
  {
    institution: 'Simplii Financial',
    productName: 'TFSA High Interest',
    type: 'tfsa',
    interestRate: 2.00,
    minimumDeposit: 0,
    features: ['Tax-free growth', 'CIBC ATM access', 'No fees', 'Online banking'],
    pros: ['CIBC ATM network', 'Competitive rate', 'No fees', 'Easy online management'],
    cons: ['Online-only', 'Rate subject to change', 'Limited investment options']
  },

  // Additional GIC Options
  {
    institution: 'RBC',
    productName: 'RBC 1-Year GIC',
    type: 'gic',
    interestRate: 3.95,
    minimumDeposit: 500,
    features: ['Guaranteed return', 'CDIC insured', 'Branch support', 'Various terms'],
    pros: ['Big bank security', 'Branch support', 'Flexible terms', 'CDIC protection'],
    cons: ['Lower rates than online banks', 'Money locked in', 'Minimum deposit required']
  },
  {
    institution: 'TD Canada Trust',
    productName: 'TD 1-Year GIC',
    type: 'gic',
    interestRate: 3.85,
    minimumDeposit: 500,
    features: ['Guaranteed return', 'Branch access', 'CDIC insured', 'Flexible terms'],
    pros: ['Branch network', 'Established reputation', 'Various term options', 'CDIC protection'],
    cons: ['Lower rates', 'Minimum deposit', 'Money locked in', 'Fees may apply']
  },
  {
    institution: 'BMO',
    productName: 'BMO 1-Year GIC',
    type: 'gic',
    interestRate: 3.90,
    minimumDeposit: 500,
    features: ['Guaranteed return', 'CDIC insured', 'Branch support', 'Investment options'],
    pros: ['Branch access', 'Investment platform', 'Established bank', 'CDIC protection'],
    cons: ['Lower rates than online options', 'Minimum deposit', 'Limited liquidity']
  },
  {
    institution: 'Scotiabank',
    productName: 'Scotia 1-Year GIC',
    type: 'gic',
    interestRate: 3.88,
    minimumDeposit: 500,
    features: ['Guaranteed return', 'International presence', 'CDIC insured', 'Various terms'],
    pros: ['International banking', 'Branch network', 'Various terms', 'CDIC protection'],
    cons: ['Lower rates', 'Minimum deposit required', 'Money locked in']
  },
  {
    institution: 'CIBC',
    productName: 'CIBC 1-Year GIC',
    type: 'gic',
    interestRate: 3.75,
    minimumDeposit: 500,
    features: ['Guaranteed return', 'CDIC insured', 'Online banking', 'Branch access'],
    pros: ['Branch access', 'Online management', 'CDIC protection', 'Established bank'],
    cons: ['Lower rates', 'Minimum deposit', 'Limited flexibility', 'Money locked in']
  },
  {
    institution: 'Meridian Credit Union',
    productName: 'Meridian 1-Year GIC',
    type: 'gic',
    interestRate: 4.15,
    minimumDeposit: 500,
    features: ['Member benefits', 'Competitive rates', 'CDIC equivalent', 'Community focus'],
    pros: ['Higher rates', 'Member benefits', 'Community investment', 'Personal service'],
    cons: ['Regional availability', 'Membership required', 'Smaller network']
  },
  {
    institution: 'Vancity',
    productName: 'Vancity Term Deposit',
    type: 'gic',
    interestRate: 4.05,
    minimumDeposit: 500,
    features: ['Ethical banking', 'Member-owned', 'Community investment', 'CDIC equivalent'],
    pros: ['Ethical focus', 'Member benefits', 'Community investment', 'Sustainable practices'],
    cons: ['BC only', 'Membership required', 'Limited national presence']
  }
]

export class BankingService {
  /**
   * Get current rates for all banks
   */
  getCurrentRates(): BankRate[] {
    return canadianBankRates
  }
  
  /**
   * Get all banks by category
   */
  getBanksByCategory(): {
    bigSix: BankRate[]
    onlineBanks: BankRate[]
    creditUnions: BankRate[]
    regionalBanks: BankRate[]
    all: BankRate[]
  } {
    const bigSixNames = ['RBC Royal Bank', 'TD Canada Trust', 'Bank of Montreal (BMO)', 'Scotiabank', 'CIBC', 'National Bank of Canada']
    const onlineBankNames = ['EQ Bank', 'Tangerine', 'Simplii Financial', 'Koodo Financial', 'Mogo', 'Paymi']
    const creditUnionNames = ['Meridian Credit Union', 'Vancity', 'Coast Capital Savings', 'Servus Credit Union', 'Conexus Credit Union', 'Alterna Savings', 'Desjardins']
    const regionalBankNames = ['HSBC Bank Canada', 'Laurentian Bank', 'Canadian Western Bank']
    
    return {
      bigSix: canadianBankRates.filter(bank => bigSixNames.includes(bank.institution)),
      onlineBanks: canadianBankRates.filter(bank => onlineBankNames.includes(bank.institution)),
      creditUnions: canadianBankRates.filter(bank => creditUnionNames.includes(bank.institution)),
      regionalBanks: canadianBankRates.filter(bank => regionalBankNames.includes(bank.institution)),
      all: canadianBankRates
    }
  }
  
  /**
   * Get unique institutions
   */
  getAllInstitutions(): string[] {
    return [...new Set(canadianBankRates.map(bank => bank.institution))].sort()
  }
  
  /**
   * Get statistics about the banking data
   */
  getBankingStats(): {
    totalInstitutions: number
    totalProducts: number
    averageRate: number
    highestRate: number
    lowestRate: number
    byType: Record<string, number>
  } {
    const rates = canadianBankRates.map(bank => bank.interestRate).filter(rate => rate > 0)
    const byType = canadianBankRates.reduce((acc, bank) => {
      acc[bank.type] = (acc[bank.type] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    return {
      totalInstitutions: this.getAllInstitutions().length,
      totalProducts: canadianBankRates.length,
      averageRate: rates.reduce((sum, rate) => sum + rate, 0) / rates.length,
      highestRate: Math.max(...rates),
      lowestRate: Math.min(...rates),
      byType
    }
  }
  
  /**
   * Find best options based on criteria
   */
  findBestOptions(criteria: {
    accountType?: 'savings' | 'tfsa' | 'gic'
    minimumRate?: number
    maxMinimumDeposit?: number
    preferredFeatures?: string[]
  }): BankRate[] {
    let filtered = canadianBankRates
    
    if (criteria.accountType) {
      filtered = filtered.filter(rate => rate.type === criteria.accountType)
    }
    
    if (criteria.minimumRate) {
      filtered = filtered.filter(rate => rate.interestRate >= criteria.minimumRate)
    }
    
    if (criteria.maxMinimumDeposit !== undefined) {
      filtered = filtered.filter(rate => rate.minimumDeposit <= criteria.maxMinimumDeposit)
    }
    
    if (criteria.preferredFeatures) {
      filtered = filtered.filter(rate => 
        criteria.preferredFeatures!.some(feature => 
          rate.features.some(bankFeature => 
            bankFeature.toLowerCase().includes(feature.toLowerCase())
          )
        )
      )
    }
    
    // Sort by interest rate (descending)
    return filtered.sort((a, b) => b.interestRate - a.interestRate)
  }
  
  /**
   * Get recommendations based on user profile
   */
  getRecommendations(profile: {
    savingsAmount: number
    riskTolerance: 'low' | 'medium' | 'high'
    preferOnline: boolean
    needsBranches: boolean
  }): {
    primary: BankRate
    alternatives: BankRate[]
    reasoning: string
  } {
    let recommendations = canadianBankRates
    
    // Filter based on preferences
    if (profile.preferOnline) {
      recommendations = recommendations.filter(rate => 
        ['EQ Bank', 'Tangerine', 'Simplii Financial'].includes(rate.institution)
      )
    }
    
    if (profile.needsBranches) {
      recommendations = recommendations.filter(rate => 
        ['RBC', 'TD Canada Trust', 'Scotiabank', 'BMO', 'CIBC'].includes(rate.institution)
      )
    }
    
    // Filter by minimum deposit
    recommendations = recommendations.filter(rate => 
      rate.minimumDeposit <= profile.savingsAmount
    )
    
    // Sort by rate
    recommendations.sort((a, b) => b.interestRate - a.interestRate)
    
    const primary = recommendations[0]
    const alternatives = recommendations.slice(1, 4)
    
    let reasoning = `Based on your preferences, ${primary.institution} offers the best combination of rate (${primary.interestRate}%) and features.`
    
    if (profile.preferOnline) {
      reasoning += " Online banks typically offer higher rates due to lower overhead costs."
    }
    
    if (profile.needsBranches) {
      reasoning += " Traditional banks provide branch access but may have slightly lower rates."
    }
    
    return {
      primary,
      alternatives,
      reasoning
    }
  }
  
  /**
   * Calculate potential earnings
   */
  calculateEarnings(principal: number, rate: number, months: number): {
    interest: number
    total: number
    monthlyGrowth: { month: number; balance: number }[]
  } {
    const monthlyRate = rate / 100 / 12
    const monthlyGrowth: { month: number; balance: number }[] = []
    
    let balance = principal
    for (let month = 1; month <= months; month++) {
      balance = balance * (1 + monthlyRate)
      monthlyGrowth.push({ month, balance: Math.round(balance * 100) / 100 })
    }
    
    const total = balance
    const interest = total - principal
    
    return {
      interest: Math.round(interest * 100) / 100,
      total: Math.round(total * 100) / 100,
      monthlyGrowth
    }
  }
}

export const bankingService = new BankingService()