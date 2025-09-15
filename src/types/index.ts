// Core Types for SaveBetter Revised

export interface UserProfile {
  id: string
  age: number
  income: number
  province: string
  skillLevel: SkillLevel
  personality: InvestmentPersonality
  riskTolerance: number
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced'
export type InvestmentPersonality = 'steady_builder' | 'balanced_explorer' | 'growth_seeker'

export interface ExpenseData {
  housing: number
  transportation: number
  food: number
  utilities: number
  entertainment: number
  other: number
  total: number
}

export interface SavingsRecommendation {
  recommendedPercentage: number
  monthlyAmount: number
  confidenceLevel: number
  reasoning: string
  comparison: {
    traditional: number
    adaptive: number
    difference: number
  }
  nextSteps: string[]
}

export interface AssessmentQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer?: number // For skill questions
  weight?: number // For personality questions
}

export interface AssessmentResult {
  skillLevel: SkillLevel
  personality: InvestmentPersonality
  skillScore: number
  personalityScores: Record<InvestmentPersonality, number>
}

export interface BankRate {
  institution: string
  productName: string
  type: 'savings' | 'gic' | 'tfsa'
  interestRate: number
  minimumDeposit: number
  features: string[]
  pros: string[]
  cons: string[]
}

export interface DemoData {
  userProfile: UserProfile
  expenses: ExpenseData
  recommendation: SavingsRecommendation
  bankOptions: BankRate[]
  assessment: AssessmentResult
}

export interface ChartData {
  name: string
  traditional: number
  adaptive: number
  difference?: number
}

export interface AnalyticsData {
  savingsRate: number
  monthlyProgress: ChartData[]
  categoryBreakdown: {
    category: string
    amount: number
    percentage: number
  }[]
  projections: {
    month: string
    amount: number
  }[]
}

// Stock Market Types
export interface StockData {
  symbol: string
  name: string
  sector: string
  price: number
  change: number
  changePercent: number
  marketCap: number
  dividend: number
  dividendYield: number
  peRatio: number
  description: string
  riskLevel: 'low' | 'medium' | 'high'
  popularity: number
}

export interface ETFData {
  symbol: string
  name: string
  type: string
  price: number
  change: number
  changePercent: number
  expenseRatio: number
  dividend: number
  dividendYield: number
  assets: number
  description: string
  riskLevel: 'low' | 'medium' | 'high'
  popularity: number
}

export interface MarketData {
  totalStocks: number
  totalETFs: number
  gainers: number
  losers: number
  unchanged: number
  averageChange: number
  topGainer: StockData
  topLoser: StockData
}