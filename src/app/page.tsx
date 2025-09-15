'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Calculator, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Beyond the{' '}
              <span className="text-primary-600">50/30/20</span>
              <br />
              Rule
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Traditional budgeting rules don't work for everyone. Our Adaptive Saving Engine 
              analyzes your real spending patterns and creates personalized recommendations 
              with access to ALL Canadian banking and investment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2">
                Try the Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="btn-secondary text-lg px-8 py-3">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Problem with One-Size-Fits-All
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The 50/30/20 rule assumes everyone can save 20% of their income. 
              But what if you're a student, new graduate, or supporting family? 
              What if 5% is more realistic than 20%?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card text-center"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rigid Rules Fail</h3>
              <p className="text-gray-600">
                Traditional percentages don't account for individual circumstances, 
                leading to unrealistic goals and financial stress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Generic Advice</h3>
              <p className="text-gray-600">
                Most financial apps give the same advice to everyone, 
                ignoring your unique spending patterns and life stage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card text-center"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Limited Options Shown</h3>
              <p className="text-gray-600">
                Most apps only show "best" options instead of ALL available choices, 
                limiting your ability to make truly informed financial decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Your Adaptive Saving Engine
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI analyzes your spending patterns and creates personalized 
              recommendations that evolve with your financial journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Smart. Adaptive. Canadian.</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>Analyzes your real spending patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>Shows ALL Canadian banking options (22+ institutions)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>Comprehensive TSX stock and ETF data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>Grows with you as your finances improve</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-indigo-100 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">12%</div>
                  <div className="text-sm text-gray-600 mb-4">Your Adaptive Rate</div>
                  <div className="text-xs text-gray-500">vs 20% Traditional</div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Achievable</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Sustainable</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Grows Over Time</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Save Smarter?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the future of personalized financial planning. 
              See how our Adaptive Saving Engine works with your real data.
            </p>
            <Link href="/demo" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg text-lg inline-flex items-center gap-2 transition-colors duration-200">
              Start Your Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}