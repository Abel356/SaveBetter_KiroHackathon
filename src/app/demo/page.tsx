'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, DollarSign, MapPin, User, Brain, Target } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { skillQuestions, personalityQuestions } from '@/lib/assessments'

const provinces = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
  'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia',
  'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'
]

export default function DemoPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    income: '',
    age: '',
    province: '',
    skillAnswers: [] as number[],
    personalityAnswers: [] as number[]
  })

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1)
    } else {
      // Navigate to results with data
      const params = new URLSearchParams({
        income: formData.income,
        age: formData.age,
        province: formData.province,
        skillAnswers: JSON.stringify(formData.skillAnswers),
        personalityAnswers: JSON.stringify(formData.personalityAnswers)
      })
      router.push(`/demo/results?${params.toString()}`)
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.income && parseInt(formData.income) > 0
      case 2:
        return formData.age && parseInt(formData.age) >= 18
      case 3:
        return formData.province
      case 4:
        return formData.skillAnswers.length === 6
      case 5:
        return formData.personalityAnswers.length === 5
      case 6:
        return true
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Step {step} of 6</span>
            <span className="text-sm text-gray-500">{Math.round((step / 6) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-primary-600 h-2 rounded-full"
              initial={{ width: '16%' }}
              animate={{ width: `${(step / 6) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="card"
        >
          {step === 1 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">What's your annual income?</h2>
              <p className="text-gray-600 mb-8">
                This helps us calculate realistic savings recommendations for your situation.
              </p>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="65000"
                    value={formData.income}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '')
                      setFormData({ ...formData, income: value })
                    }}
                    className="w-full px-3 py-3 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-xl bg-white text-gray-900"
                    autoComplete="off"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">Enter your gross annual salary in CAD (numbers only)</p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">How old are you?</h2>
              <p className="text-gray-600 mb-8">
                Age helps us tailor recommendations for your life stage and financial goals.
              </p>
              <div className="max-w-md mx-auto">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="26"
                  value={formData.age}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '')
                    if (parseInt(value) <= 100 || value === '') {
                      setFormData({ ...formData, age: value })
                    }
                  }}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-xl bg-white text-gray-900"
                  autoComplete="off"
                />
                <p className="text-sm text-gray-500 mt-2">Your age in years (18-100)</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Which province do you live in?</h2>
              <p className="text-gray-600 mb-8">
                Provincial tax rates and programs affect your optimal savings strategy.
              </p>
              <div className="max-w-md mx-auto">
                <select
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg bg-white text-gray-900"
                >
                  <option value="">Select your province</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Financial Knowledge Assessment</h2>
              <p className="text-gray-600 mb-8">
                Let's assess your financial knowledge to provide better recommendations.
              </p>
              <div className="max-w-2xl mx-auto space-y-6">
                {skillQuestions.map((question, qIndex) => (
                  <div key={question.id} className="text-left">
                    <h3 className="font-semibold mb-3 text-gray-900">
                      {qIndex + 1}. {question.question}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="radio"
                            name={`skill-${qIndex}`}
                            value={oIndex}
                            checked={formData.skillAnswers[qIndex] === oIndex}
                            onChange={() => {
                              const newAnswers = [...formData.skillAnswers]
                              newAnswers[qIndex] = oIndex
                              setFormData({ ...formData, skillAnswers: newAnswers })
                            }}
                            className="mr-3"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Investment Personality</h2>
              <p className="text-gray-600 mb-8">
                Understanding your investment style helps us recommend the right approach.
              </p>
              <div className="max-w-2xl mx-auto space-y-6">
                {personalityQuestions.map((question, qIndex) => (
                  <div key={question.id} className="text-left">
                    <h3 className="font-semibold mb-3 text-gray-900">
                      {qIndex + 1}. {question.question}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="radio"
                            name={`personality-${qIndex}`}
                            value={oIndex}
                            checked={formData.personalityAnswers[qIndex] === oIndex}
                            onChange={() => {
                              const newAnswers = [...formData.personalityAnswers]
                              newAnswers[qIndex] = oIndex
                              setFormData({ ...formData, personalityAnswers: newAnswers })
                            }}
                            className="mr-3"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Ready for Your Results!</h2>
              <p className="text-gray-600 mb-8">
                We'll now create your personalized financial plan based on your income, age, location, 
                financial knowledge, and investment personality.
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-indigo-50 rounded-xl p-6 max-w-md mx-auto">
                <h3 className="font-semibold mb-2 text-gray-900">Your Profile Summary:</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Income: ${parseInt(formData.income).toLocaleString()}/year</p>
                  <p>Age: {formData.age} years old</p>
                  <p>Location: {formData.province}</p>
                  <p>Assessment: Complete ✓</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              className="btn-secondary"
              disabled={step === 1}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 6 ? 'See My Results' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Demo Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            This is a demo. No personal information is stored or transmitted.
          </p>
        </div>
      </div>
    </div>
  )
}