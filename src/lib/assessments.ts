import { AssessmentQuestion, AssessmentResult, SkillLevel, InvestmentPersonality } from '@/types'

export const skillQuestions: AssessmentQuestion[] = [
  {
    id: 'skill-1',
    question: 'What is a TFSA?',
    options: [
      'A type of savings account with no interest',
      'Tax-Free Savings Account where investments grow tax-free',
      'A government program for low-income families',
      'A retirement fund managed by the government'
    ],
    correctAnswer: 1
  },
  {
    id: 'skill-2',
    question: 'What is compound interest?',
    options: [
      'Interest paid only on the original amount',
      'Interest that decreases over time',
      'Interest earned on both principal and previously earned interest',
      'A type of bank fee'
    ],
    correctAnswer: 2
  },
  {
    id: 'skill-3',
    question: 'Which typically offers higher returns over the long term?',
    options: [
      'Savings accounts',
      'GICs (Guaranteed Investment Certificates)',
      'Stock market investments',
      'Cash under your mattress'
    ],
    correctAnswer: 2
  },
  {
    id: 'skill-4',
    question: 'What is the main difference between RRSP and TFSA contributions?',
    options: [
      'RRSP contributions are tax-deductible, TFSA contributions are not',
      'TFSA contributions are tax-deductible, RRSP contributions are not',
      'Both are tax-deductible',
      'Neither are tax-deductible'
    ],
    correctAnswer: 0
  },
  {
    id: 'skill-5',
    question: 'What does "diversification" mean in investing?',
    options: [
      'Putting all your money in one stock',
      'Only investing in Canadian companies',
      'Spreading investments across different assets to reduce risk',
      'Investing only in government bonds'
    ],
    correctAnswer: 2
  },
  {
    id: 'skill-6',
    question: 'What is an ETF (Exchange-Traded Fund)?',
    options: [
      'A type of savings account',
      'A fund that tracks an index and trades like a stock',
      'A government investment program',
      'A type of insurance policy'
    ],
    correctAnswer: 1
  }
]

export const personalityQuestions: AssessmentQuestion[] = [
  {
    id: 'personality-1',
    question: 'How do you feel about investment risk?',
    options: [
      'I prefer guaranteed returns, even if they\'re lower',
      'I\'m comfortable with some risk for potentially higher returns',
      'I\'m willing to take significant risks for maximum growth potential'
    ],
    weight: 1.0
  },
  {
    id: 'personality-2',
    question: 'How often would you check your investments?',
    options: [
      'Rarely - I prefer "set it and forget it"',
      'Monthly or quarterly to stay informed',
      'Daily or weekly - I like to stay on top of things'
    ],
    weight: 0.8
  },
  {
    id: 'personality-3',
    question: 'If your investments dropped 20% in value, what would you do?',
    options: [
      'Sell immediately to prevent further losses',
      'Hold steady and wait for recovery',
      'Buy more while prices are lower'
    ],
    weight: 1.2
  },
  {
    id: 'personality-4',
    question: 'What\'s your primary investment timeline?',
    options: [
      'Short-term (1-3 years) - I need access to my money soon',
      'Medium-term (5-10 years) - Building for specific goals',
      'Long-term (10+ years) - Focused on retirement and wealth building'
    ],
    weight: 0.9
  },
  {
    id: 'personality-5',
    question: 'How do you prefer to make investment decisions?',
    options: [
      'I want professional management - just tell me what to do',
      'I like guidance but want to understand and approve decisions',
      'I prefer to research and make my own investment choices'
    ],
    weight: 0.7
  }
]

export class AssessmentEngine {
  /**
   * Calculate skill level based on correct answers
   */
  calculateSkillLevel(answers: number[]): { level: SkillLevel; score: number } {
    const correctAnswers = answers.reduce((count, answer, index) => {
      return skillQuestions[index]?.correctAnswer === answer ? count + 1 : count
    }, 0)
    
    const score = correctAnswers / skillQuestions.length
    
    let level: SkillLevel
    if (score <= 0.40) {
      level = 'beginner'
    } else if (score <= 0.75) {
      level = 'intermediate'
    } else {
      level = 'advanced'
    }
    
    return { level, score }
  }
  
  /**
   * Calculate investment personality based on weighted answers with sophisticated analysis
   */
  calculatePersonality(answers: number[]): {
    personality: InvestmentPersonality
    scores: Record<InvestmentPersonality, number>
    traits: string[]
    confidence: number
  } {
    const scores: Record<InvestmentPersonality, number> = {
      steady_builder: 0,
      balanced_explorer: 0,
      growth_seeker: 0
    }
    
    const traits: string[] = []
    
    // Sophisticated scoring based on question combinations
    answers.forEach((answer, index) => {
      const question = personalityQuestions[index]
      if (!question) return
      
      const weight = question.weight || 1.0
      
      // Question-specific analysis
      switch (index) {
        case 0: // Risk tolerance
          if (answer === 0) {
            scores.steady_builder += weight * 2
            traits.push('Risk-averse')
          } else if (answer === 1) {
            scores.balanced_explorer += weight * 1.5
            traits.push('Moderate risk tolerance')
          } else {
            scores.growth_seeker += weight * 2
            traits.push('High risk tolerance')
          }
          break
          
        case 1: // Monitoring frequency
          if (answer === 0) {
            scores.steady_builder += weight
            traits.push('Passive investor')
          } else if (answer === 1) {
            scores.balanced_explorer += weight
            traits.push('Engaged investor')
          } else {
            scores.growth_seeker += weight
            traits.push('Active trader')
          }
          break
          
        case 2: // Market volatility response
          if (answer === 0) {
            scores.steady_builder += weight * 1.8
            traits.push('Loss-averse')
          } else if (answer === 1) {
            scores.balanced_explorer += weight * 1.2
            traits.push('Patient during volatility')
          } else {
            scores.growth_seeker += weight * 1.5
            traits.push('Opportunistic buyer')
          }
          break
          
        case 3: // Investment timeline
          if (answer === 0) {
            scores.steady_builder += weight * 1.3
            traits.push('Short-term focused')
          } else if (answer === 1) {
            scores.balanced_explorer += weight * 1.4
            traits.push('Goal-oriented')
          } else {
            scores.growth_seeker += weight * 1.2
            traits.push('Long-term wealth builder')
          }
          break
          
        case 4: // Decision-making style
          if (answer === 0) {
            scores.steady_builder += weight
            traits.push('Prefers guidance')
          } else if (answer === 1) {
            scores.balanced_explorer += weight * 1.3
            traits.push('Collaborative decision-maker')
          } else {
            scores.growth_seeker += weight
            traits.push('Independent researcher')
          }
          break
      }
    })
    
    // Calculate confidence based on score distribution
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0)
    const maxScore = Math.max(...Object.values(scores))
    const confidence = maxScore / totalScore
    
    // Determine dominant personality
    const personality = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as InvestmentPersonality] > scores[b[0] as InvestmentPersonality] ? a : b
    )[0] as InvestmentPersonality
    
    return { personality, scores, traits, confidence }
  }
  
  /**
   * Generate complete assessment result
   */
  processAssessment(skillAnswers: number[], personalityAnswers: number[]): AssessmentResult {
    const { level: skillLevel, score: skillScore } = this.calculateSkillLevel(skillAnswers)
    const { personality, scores: personalityScores } = this.calculatePersonality(personalityAnswers)
    
    return {
      skillLevel,
      personality,
      skillScore,
      personalityScores
    }
  }
  
  /**
   * Get recommendations based on combined assessment
   */
  getRecommendations(result: AssessmentResult): {
    investmentStrategy: string
    educationPath: string[]
    riskLevel: 'low' | 'medium' | 'high'
    recommendedProducts: string[]
  } {
    const { skillLevel, personality } = result
    
    // Determine risk level
    let riskLevel: 'low' | 'medium' | 'high' = 'medium'
    if (personality === 'steady_builder') riskLevel = 'low'
    if (personality === 'growth_seeker') riskLevel = 'high'
    
    // Generate strategy based on combination
    let investmentStrategy = ''
    let educationPath: string[] = []
    let recommendedProducts: string[] = []
    
    if (skillLevel === 'beginner') {
      educationPath = [
        'Start with basic financial literacy',
        'Learn about compound interest',
        'Understand different account types (TFSA, RRSP)',
        'Practice with savings accounts before investing'
      ]
      
      if (personality === 'steady_builder') {
        investmentStrategy = 'Focus on high-interest savings accounts and GICs while learning'
        recommendedProducts = ['High-Interest Savings Account', 'Short-term GICs', 'TFSA Savings']
      } else if (personality === 'balanced_explorer') {
        investmentStrategy = 'Start with conservative investments while building knowledge'
        recommendedProducts = ['Balanced Mutual Funds', 'Target-Date Funds', 'TFSA Investments']
      } else {
        investmentStrategy = 'Learn the basics first, then gradually explore growth investments'
        recommendedProducts = ['Index Funds', 'ETFs', 'Robo-Advisor Portfolios']
      }
    } else if (skillLevel === 'intermediate') {
      educationPath = [
        'Deepen investment knowledge',
        'Learn about asset allocation',
        'Understand tax implications',
        'Explore different investment vehicles'
      ]
      
      if (personality === 'steady_builder') {
        investmentStrategy = 'Build a conservative, diversified portfolio'
        recommendedProducts = ['Bond Funds', 'Dividend ETFs', 'Conservative Balanced Funds']
      } else if (personality === 'balanced_explorer') {
        investmentStrategy = 'Create a balanced portfolio with growth potential'
        recommendedProducts = ['Index Funds', 'Balanced ETFs', 'Target-Date Funds']
      } else {
        investmentStrategy = 'Focus on growth investments with proper diversification'
        recommendedProducts = ['Growth ETFs', 'Individual Stocks', 'Sector Funds']
      }
    } else { // advanced
      educationPath = [
        'Advanced portfolio management',
        'Tax optimization strategies',
        'Alternative investments',
        'Regular portfolio rebalancing'
      ]
      
      if (personality === 'steady_builder') {
        investmentStrategy = 'Sophisticated conservative approach with tax optimization'
        recommendedProducts = ['Corporate Bonds', 'REITs', 'Dividend Aristocrats']
      } else if (personality === 'balanced_explorer') {
        investmentStrategy = 'Advanced balanced approach with tactical allocation'
        recommendedProducts = ['Multi-Asset ETFs', 'Factor-Based Investing', 'International Diversification']
      } else {
        investmentStrategy = 'Aggressive growth strategy with risk management'
        recommendedProducts = ['Growth Stocks', 'Emerging Markets', 'Options Strategies']
      }
    }
    
    return {
      investmentStrategy,
      educationPath,
      riskLevel,
      recommendedProducts
    }
  }
}

export const assessmentEngine = new AssessmentEngine()