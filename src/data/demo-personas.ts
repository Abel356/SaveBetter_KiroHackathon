import { UserProfile, ExpenseData, DemoData } from '@/types'
import { AdaptiveSavingEngine } from '@/lib/adaptive-engine'
import { assessmentEngine } from '@/lib/assessments'
import { canadianBankRates } from '@/lib/banking-data'

const adaptiveEngine = new AdaptiveSavingEngine()

// Demo Personas
export const demoPersonas: DemoData[] = [
  // Bob - The Relatable Young Professional (Our Demo Star!)
  {
    userProfile: {
      id: 'bob',
      age: 26,
      income: 65000,
      province: 'Ontario',
      skillLevel: 'intermediate',
      personality: 'balanced_explorer',
      riskTolerance: 0.6
    },
    expenses: {
      housing: 2200, // Toronto rent reality
      transportation: 450, // TTC + occasional Uber
      food: 650, // Groceries + eating out
      utilities: 180, // Hydro, internet, phone
      entertainment: 400, // Movies, drinks, hobbies
      other: 350, // Clothes, misc, student loan payments
      total: 4230
    },
    recommendation: adaptiveEngine.calculateRealisticSavings(65000, {
      housing: 1800,
      transportation: 400,
      food: 600,
      utilities: 150,
      entertainment: 500,
      other: 300,
      total: 3750
    }, { age: 26 }),
    bankOptions: canadianBankRates.slice(0, 5),
    assessment: assessmentEngine.processAssessment([1, 2, 2], [1, 1])
  },
  
  // Recent Graduate
  {
    userProfile: {
      id: 'demo-2',
      age: 23,
      income: 45000,
      province: 'British Columbia',
      skillLevel: 'beginner',
      personality: 'steady_builder',
      riskTolerance: 0.3
    },
    expenses: {
      housing: 1400,
      transportation: 300,
      food: 450,
      utilities: 120,
      entertainment: 300,
      other: 200,
      total: 2770
    },
    recommendation: adaptiveEngine.calculateRealisticSavings(45000, {
      housing: 1400,
      transportation: 300,
      food: 450,
      utilities: 120,
      entertainment: 300,
      other: 200,
      total: 2770
    }, { age: 23 }),
    bankOptions: canadianBankRates.filter(bank => bank.minimumDeposit === 0),
    assessment: assessmentEngine.processAssessment([0, 1, 1], [0, 0])
  },
  
  // Established Professional
  {
    userProfile: {
      id: 'demo-3',
      age: 35,
      income: 95000,
      province: 'Alberta',
      skillLevel: 'advanced',
      personality: 'growth_seeker',
      riskTolerance: 0.8
    },
    expenses: {
      housing: 2200,
      transportation: 600,
      food: 800,
      utilities: 200,
      entertainment: 600,
      other: 400,
      total: 4800
    },
    recommendation: adaptiveEngine.calculateRealisticSavings(95000, {
      housing: 2200,
      transportation: 600,
      food: 800,
      utilities: 200,
      entertainment: 600,
      other: 400,
      total: 4800
    }, { age: 35 }),
    bankOptions: canadianBankRates,
    assessment: assessmentEngine.processAssessment([1, 2, 2], [2, 2])
  }
]

export const getPersonaByIncome = (income: number): DemoData => {
  if (income < 50000) return demoPersonas[1] // Recent Graduate
  if (income < 80000) return demoPersonas[0] // Young Professional
  return demoPersonas[2] // Established Professional
}

export const getPersonaByAge = (age: number): DemoData => {
  if (age < 25) return demoPersonas[1] // Recent Graduate
  if (age < 30) return demoPersonas[0] // Young Professional
  return demoPersonas[2] // Established Professional
}