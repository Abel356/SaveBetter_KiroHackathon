import { ExpenseData, SavingsRecommendation, UserProfile } from '@/types'

export class AdaptiveSavingEngine {
  /**
   * Calculate realistic savings based on income and expenses
   */
  calculateRealisticSavings(
    income: number, 
    expenses: ExpenseData, 
    userProfile?: Partial<UserProfile>
  ): SavingsRecommendation {
    // Calculate disposable income after essential expenses
    const essentialExpenses = expenses.housing + expenses.utilities + expenses.food + expenses.transportation
    const discretionaryExpenses = expenses.entertainment + expenses.other
    const totalExpenses = essentialExpenses + discretionaryExpenses
    
    // Calculate disposable income with 20% buffer for unexpected expenses
    const disposableIncome = income - totalExpenses
    const bufferedDisposableIncome = disposableIncome * 0.8 // 20% buffer
    
    // Traditional 50/30/20 calculation
    const traditionalSavings = income * 0.20
    const traditionalMonthly = traditionalSavings / 12
    
    // Adaptive calculation based on actual capacity
    let adaptivePercentage = 0.20 // Start with 20%
    let confidenceLevel = 1.0
    let reasoning = "You're in great shape to save the traditional 20%!"
    
    if (bufferedDisposableIncome < traditionalSavings) {
      // Adjust down based on actual capacity
      const maxSavingsCapacity = Math.max(bufferedDisposableIncome, income * 0.01) // Minimum 1%
      adaptivePercentage = maxSavingsCapacity / income
      
      // Ensure minimum viable savings
      if (adaptivePercentage < 0.01) {
        adaptivePercentage = 0.01
        confidenceLevel = 0.3
        reasoning = "Starting with 1% is better than nothing. Every dollar counts!"
      } else if (adaptivePercentage < 0.05) {
        confidenceLevel = 0.5
        reasoning = "A smaller percentage that you can actually achieve builds better habits than an impossible 20%."
      } else if (adaptivePercentage < 0.10) {
        confidenceLevel = 0.7
        reasoning = "This percentage fits your current budget while leaving room for unexpected expenses."
      } else if (adaptivePercentage < 0.15) {
        confidenceLevel = 0.8
        reasoning = "You're doing better than many! This rate is sustainable and will grow over time."
      } else {
        confidenceLevel = 0.9
        reasoning = "Great job! You can save more than most people while staying comfortable."
      }
    }
    
    // Age-based adjustments
    if (userProfile?.age) {
      if (userProfile.age < 25) {
        adaptivePercentage *= 0.8 // Reduce for students/new grads
        reasoning += " Adjusted for your life stage - building the habit is more important than the amount."
      } else if (userProfile.age > 40) {
        adaptivePercentage *= 1.1 // Increase for higher earners
        reasoning += " Increased slightly as you're likely in your peak earning years."
      }
    }
    
    // Ensure we don't exceed income or go below 1%
    adaptivePercentage = Math.max(0.01, Math.min(0.30, adaptivePercentage))
    
    const adaptiveSavings = income * adaptivePercentage
    const adaptiveMonthly = adaptiveSavings / 12
    
    const nextSteps = this.generateNextSteps(adaptivePercentage, expenses, income)
    
    return {
      recommendedPercentage: Math.round(adaptivePercentage * 100) / 100,
      monthlyAmount: Math.round(adaptiveMonthly),
      confidenceLevel: Math.round(confidenceLevel * 100) / 100,
      reasoning,
      comparison: {
        traditional: Math.round(traditionalMonthly),
        adaptive: Math.round(adaptiveMonthly),
        difference: Math.round(adaptiveMonthly - traditionalMonthly)
      },
      nextSteps
    }
  }
  
  /**
   * Generate personalized next steps
   */
  private generateNextSteps(percentage: number, expenses: ExpenseData, income: number): string[] {
    const steps: string[] = []
    
    if (percentage < 0.05) {
      steps.push("Focus on building the savings habit first - consistency matters more than amount")
      steps.push("Look for small ways to reduce discretionary spending")
      steps.push("Consider a side income to boost your savings capacity")
    } else if (percentage < 0.10) {
      steps.push("You're on the right track! Aim to increase by 1% every 6 months")
      steps.push("Review your subscriptions and recurring expenses")
      steps.push("Set up automatic transfers to make saving effortless")
    } else if (percentage < 0.15) {
      steps.push("Excellent progress! Consider opening a high-interest savings account")
      steps.push("Start exploring TFSA options for tax-free growth")
      steps.push("Track your progress monthly and celebrate milestones")
    } else {
      steps.push("You're a savings superstar! Time to optimize your strategy")
      steps.push("Consider diversifying into investments for long-term growth")
      steps.push("Explore RRSP contributions for additional tax benefits")
    }
    
    // Add expense-specific recommendations
    if (expenses.entertainment > income * 0.15) {
      steps.push("Your entertainment budget is high - small cuts here could boost savings significantly")
    }
    
    if (expenses.food > income * 0.15) {
      steps.push("Meal planning and cooking at home could free up more money for savings")
    }
    
    return steps
  }
  
  /**
   * Adjust recommendations for Canadian context
   */
  adjustForCanadianContext(province: string, income: number): {
    taxConsiderations: string[]
    provincialPrograms: string[]
    recommendedAccounts: string[]
  } {
    const taxConsiderations: string[] = []
    const provincialPrograms: string[] = []
    const recommendedAccounts: string[] = []
    
    // Tax considerations
    if (income > 50000) {
      taxConsiderations.push("Consider RRSP contributions to reduce taxable income")
      recommendedAccounts.push("RRSP for tax deduction")
    }
    
    taxConsiderations.push("TFSA contributions grow tax-free")
    recommendedAccounts.push("TFSA for tax-free growth")
    
    // Provincial considerations
    switch (province.toLowerCase()) {
      case 'ontario':
        if (income < 40000) {
          provincialPrograms.push("Ontario Trillium Benefit may provide additional support")
        }
        break
      case 'quebec':
        taxConsiderations.push("Quebec has unique tax considerations - consult a local advisor")
        break
      case 'alberta':
        taxConsiderations.push("No provincial tax advantage - focus on federal programs")
        break
      case 'british columbia':
        if (income < 35000) {
          provincialPrograms.push("BC Climate Action Tax Credit available")
        }
        break
    }
    
    return {
      taxConsiderations,
      provincialPrograms,
      recommendedAccounts
    }
  }
  
  /**
   * Compare with traditional 50/30/20 rule
   */
  compareWithTraditional(income: number, adaptivePercentage: number) {
    const traditional = {
      needs: income * 0.50,
      wants: income * 0.30,
      savings: income * 0.20
    }
    
    const adaptive = {
      savings: income * adaptivePercentage,
      available: income - (income * adaptivePercentage)
    }
    
    return {
      traditional,
      adaptive,
      difference: adaptive.savings - traditional.savings,
      isMoreRealistic: adaptivePercentage !== 0.20,
      message: adaptivePercentage < 0.20 
        ? "More achievable than the traditional 20% rule"
        : adaptivePercentage > 0.20 
        ? "You can save even more than the traditional recommendation!"
        : "You're perfectly aligned with traditional advice"
    }
  }
}