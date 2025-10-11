'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Target, Lightbulb, ArrowRight, Brain } from 'lucide-react'
import { AdaptiveSavingEngine } from '@/lib/adaptive-engine'
import { bankingService } from '@/lib/banking-data'
import { assessmentEngine } from '@/lib/assessments'
import { useEffect, useState } from 'react'
import { SavingsRecommendation, BankRate, AssessmentResult } from '@/types'
import Link from 'next/link'

const adaptiveEngine = new AdaptiveSavingEngine()

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [recommendation, setRecommendation] = useState<SavingsRecommendation | null>(null)
  const [bankOptions, setBankOptions] = useState<BankRate[]>([])
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null)
  const [investmentRecommendations, setInvestmentRecommendations] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const income = parseInt(searchParams.get('income') || '0')
  const age = parseInt(searchParams.get('age') || '0')
  const province = searchParams.get('province') || ''
  const skillAnswers = JSON.parse(searchParams.get('skillAnswers') || '[]')
  const personalityAnswers = JSON.parse(searchParams.get('personalityAnswers') || '[]')

  useEffect(() => {
    if (income && age && province && skillAnswers.length && personalityAnswers.length) {
      // Simulate realistic expenses based on income
      const expenses = {
        housing: Math.round(income * 0.30 / 12), // 30% of income for housing
        transportation: Math.round(income * 0.15 / 12),
        food: Math.round(income * 0.12 / 12),
        utilities: Math.round(income * 0.05 / 12),
        entertainment: Math.round(income * 0.08 / 12),
        other: Math.round(income * 0.05 / 12),
        total: 0
      }
      expenses.total = Object.values(expenses).reduce((sum, val) => sum + val, 0) - expenses.total

      const rec = adaptiveEngine.calculateRealisticSavings(income, expenses, { age })
      setRecommendation(rec)

      // Process assessment results
      const assessment = assessmentEngine.processAssessment(skillAnswers, personalityAnswers)
      setAssessmentResult(assessment)

      // Get investment recommendations
      const investmentRecs = assessmentEngine.getRecommendations(assessment)
      setInvestmentRecommendations(investmentRecs)

      // Get ALL bank options, then filter for top recommendations
      const allBanks = bankingService.getCurrentRates()
      const filteredBanks = bankingService.findBestOptions({
        accountType: investmentRecs.riskLevel === 'low' ? 'savings' : 'tfsa',
        maxMinimumDeposit: rec.monthlyAmount * 3
      })
      
      // Show top 3 for recommendations, but make all available
      setBankOptions(filteredBanks)

      setLoading(false)
    }
  }, [income, age, province, skillAnswers, personalityAnswers])

  if (loading || !recommendation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Calculating your personalized recommendations...</p>
        </div>
      </div>
    )
  }

  const monthlyIncome = Math.round(income / 12)
  const traditionalAmount = Math.round(monthlyIncome * 0.20)

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Personalized Savings Plan
          </h1>
          <p className="text-xl text-gray-600">
            Based on ${income.toLocaleString()} annual income in {province}
          </p>
        </motion.div>

        {/* Main Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card mb-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Your Adaptive Rate</h2>
                  <p className="text-gray-600">Personalized for your situation</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-green-600">
                    {Math.round(recommendation.recommendedPercentage * 100)}%
                  </span>
                  <span className="text-lg text-gray-600">of income</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-green-600">
                    ${recommendation.monthlyAmount.toLocaleString()}
                  </span>
                  <span className="text-gray-600">per month</span>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">
                    Confidence Level: {Math.round(recommendation.confidenceLevel * 100)}%
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Traditional vs Adaptive</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Traditional (20%)</span>
                  <span className="font-semibold text-green-600">${traditionalAmount.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-medium">Your Adaptive Rate</span>
                  <span className="font-bold text-green-600">${recommendation.monthlyAmount.toLocaleString()}/mo</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Difference</span>
                    <span className={`font-semibold ${recommendation.comparison.difference >= 0 ? 'text-green-600' : 'text-orange-600'}`}>
                      {recommendation.comparison.difference >= 0 ? '+' : ''}${Math.abs(recommendation.comparison.difference).toLocaleString()}/mo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reasoning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Why This Rate Works for You</h3>
              <p className="text-gray-700 leading-relaxed">{recommendation.reasoning}</p>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">Your Next Steps</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {recommendation.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-primary-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Assessment Results */}
        {assessmentResult && investmentRecommendations && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Your Investment Profile</h3>
                <p className="text-gray-600">Based on your dual assessment results</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                <h4 className="font-semibold text-green-800 mb-2">Financial Knowledge</h4>
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {assessmentResult.skillLevel.charAt(0).toUpperCase() + assessmentResult.skillLevel.slice(1)}
                </div>
                <div className="text-sm text-green-700">
                  Score: {Math.round(assessmentResult.skillScore * 100)}%
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Investment Style</h4>
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {assessmentResult.personality.split('_').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </div>
                <div className="text-sm text-purple-700">
                  Risk Level: {investmentRecommendations.riskLevel}
                </div>
              </div>
            </div>

            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2 text-gray-900">Your Investment Strategy</h4>
              <p className="text-gray-700 mb-3">{investmentRecommendations.investmentStrategy}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Recommended Products:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {investmentRecommendations.recommendedProducts.slice(0, 3).map((product: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Learning Path:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {investmentRecommendations.educationPath.slice(0, 3).map((step: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Comprehensive Banking Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">All Canadian Banking Options</h3>
              <p className="text-gray-600">Compare ALL available options to make an informed decision</p>
            </div>
          </div>
          
          {/* Banking Categories */}
          <div className="mb-6">
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600">6</div>
                <div className="text-sm text-blue-800">Big Six Banks</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">6</div>
                <div className="text-sm text-green-800">Online Banks</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-600">7</div>
                <div className="text-sm text-purple-800">Credit Unions</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-orange-600">3</div>
                <div className="text-sm text-orange-800">Regional Banks</div>
              </div>
            </div>
          </div>

          {/* Top Recommendations */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-gray-900">Top Recommendations for You</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {bankOptions.slice(0, 3).map((bank, index) => (
                <div key={index} className="border-2 border-primary-200 rounded-lg p-4 bg-primary-50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="font-semibold text-primary-900">{bank.institution}</h5>
                      <p className="text-sm text-primary-700">{bank.productName}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{bank.interestRate}%</div>
                      <div className="text-xs text-gray-500">APY</div>
                    </div>
                  </div>
                  <div className="space-y-1 mb-3">
                    {bank.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="text-xs text-primary-700 flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-green-600">
                    Min. deposit: ${bank.minimumDeposit.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Options Button */}
          <div className="text-center">
            <button 
              onClick={() => router.push('/demo/banking')}
              className="btn-secondary"
            >
              View All {bankOptions.length} Banking Options
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Compare rates, features, and find the perfect fit for your needs
            </p>
          </div>
        </motion.div>

        {/* Stock Market Investment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="card mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Canadian Investment Options</h3>
              <p className="text-gray-600">Grow your savings through the stock market (secondary to savings)</p>
            </div>
          </div>

          {/* Investment Overview */}
          <div className="mb-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-indigo-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-indigo-600">20+</div>
                <div className="text-sm text-indigo-800">Canadian Stocks</div>
                <div className="text-xs text-indigo-600 mt-1">TSX Listed</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">10+</div>
                <div className="text-sm text-green-800">Canadian ETFs</div>
                <div className="text-xs text-green-600 mt-1">Diversified Options</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">All</div>
                <div className="text-sm text-blue-800">Risk Levels</div>
                <div className="text-xs text-blue-600 mt-1">Conservative to Growth</div>
              </div>
            </div>
          </div>

          {/* Sample Investment Options Based on Profile */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-gray-900">
              Recommended for {assessmentResult?.personality.split('_').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')} Investors
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* ETF Recommendations */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-3">Canadian ETFs</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">VGRO.TO</div>
                      <div className="text-xs text-gray-600">Vanguard Growth Portfolio</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">+1.58%</div>
                      <div className="text-xs text-green-600 font-medium">$28.89</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">VCN.TO</div>
                      <div className="text-xs text-gray-600">Canadian All Cap Index</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">+1.99%</div>
                      <div className="text-xs text-green-600 font-medium">$45.67</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">VBAL.TO</div>
                      <div className="text-xs text-gray-600">Balanced Portfolio</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">+1.29%</div>
                      <div className="text-xs text-green-600 font-medium">$26.78</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stock Recommendations */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-3">Canadian Stocks</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">RY.TO</div>
                      <div className="text-xs text-gray-600">Royal Bank of Canada</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">+0.55%</div>
                      <div className="text-xs text-green-600 font-medium">$142.89</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">SHOP.TO</div>
                      <div className="text-xs text-gray-600">Shopify Inc.</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">+2.69%</div>
                      <div className="text-xs text-green-600 font-medium">$89.45</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">CNR.TO</div>
                      <div className="text-xs text-gray-600">Canadian National Railway</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">+0.74%</div>
                      <div className="text-xs text-green-600 font-medium">$167.89</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Strategy Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Lightbulb className="w-3 h-3 text-amber-600" />
              </div>
              <div>
                <h5 className="font-medium text-amber-800 mb-1">Investment Strategy</h5>
                <p className="text-sm text-amber-700">
                  {investmentRecommendations?.investmentStrategy || 'Focus on building your savings foundation first, then gradually explore investments as your financial stability grows.'}
                </p>
              </div>
            </div>
          </div>

          {/* View All Investments Button */}
          <div className="text-center mt-6">
            <button 
              onClick={() => router.push('/demo/investments')}
              className="btn-secondary"
            >
              Explore All Canadian Investments
            </button>
            <p className="text-sm text-gray-500 mt-2">
              View 20+ stocks and 10+ ETFs with detailed analysis
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Start Saving Smarter?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              This demo shows how our Adaptive Saving Engine creates personalized recommendations. 
              The full app includes investment guidance, progress tracking, and much more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary inline-flex items-center gap-2">
                Learn More About SaveBetter
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/demo" className="btn-secondary">
                Try Another Scenario
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
