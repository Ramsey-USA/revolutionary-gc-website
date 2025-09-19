import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import StarDecorations from '../../components/StarDecorations'
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react'

export default function EstimatePage() {
  return (
    <main className="min-h-screen pt-20 bg-white dark:bg-dark-surface transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-mh-hunter-green via-army-black to-mh-hunter-green text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-army-gold/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
        </div>
        
        {/* Star decorations */}
        <StarDecorations />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="group flex items-center justify-center w-24 h-24 bg-gradient-to-r from-army-gold to-yellow-400 rounded-full mx-auto mb-8 hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-2xl">
              <Calculator size={48} className="text-army-black group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm font-semibold">AI-Powered • Available 24/7 • Instant Results</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI Project 
              <span className="bg-gradient-to-r from-army-gold to-yellow-400 bg-clip-text text-transparent"> Estimator</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 text-gray-200">
              Get precise cost estimates and detailed project timelines instantly with our revolutionary AI technology. 
              <span className="text-army-gold font-semibold">No waiting, no appointments needed.</span>
            </p>
            
            {/* AI Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-army-gold mb-1">±5%</div>
                <div className="text-sm text-gray-300">AI Accuracy</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <Clock size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-army-gold mb-1">3 Min</div>
                <div className="text-sm text-gray-300">Average Time</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <DollarSign size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-army-gold mb-1">$0</div>
                <div className="text-sm text-gray-300">Cost to Use</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-full mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold">24/7</span>
                </div>
                <div className="text-2xl font-bold text-army-gold mb-1">Always</div>
                <div className="text-sm text-gray-300">Available</div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-army-gold hover:bg-yellow-500 text-army-black px-10 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 hover:rotate-1 shadow-2xl hover:shadow-3xl">
                Try AI Estimator Now
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">🤖</span>
              </button>
              <a
                href="/contact"
                className="group border-2 border-white hover:border-army-gold text-white hover:text-army-gold px-10 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:bg-white/10"
              >
                Need Personal Consultation?
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">👥</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI vs Consultation Comparison */}
      <section className="py-20 bg-gray-50 dark:bg-dark-surface-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-army-black dark:text-dark-text mb-6">
              Choose Your 
              <span className="bg-gradient-to-r from-mh-hunter-green to-army-gold bg-clip-text text-transparent"> Estimation Method</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              We offer two powerful ways to estimate your project. Choose the option that best fits your needs and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Estimator Card */}
            <div className="group bg-gradient-to-br from-mh-hunter-green to-army-black rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-500 hover:-translate-y-3 hover:rotate-1 shadow-2xl hover:shadow-3xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-army-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">AI Estimator</h3>
                <p className="text-gray-200">Instant, data-driven estimates powered by machine learning</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Instant results in 3-5 minutes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Available 24/7, no appointments needed</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>±5% accuracy based on 1,000+ projects</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Detailed cost breakdown by category</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Timeline projections and milestones</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Free to use, no commitment</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-army-gold font-semibold mb-4">Best for:</p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Quick budget planning and feasibility</li>
                  <li>• Standard construction projects</li>
                  <li>• Initial project exploration</li>
                  <li>• Comparing multiple concepts</li>
                </ul>
              </div>

              <button className="w-full bg-army-gold hover:bg-yellow-500 text-army-black px-8 py-4 rounded-xl font-bold text-lg mt-8 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Try AI Estimator Now
              </button>
            </div>

            {/* In-Person Consultation Card */}
            <div className="group bg-white dark:bg-dark-surface-3 rounded-2xl p-8 border-2 border-army-gold transform hover:scale-105 transition-all duration-500 hover:-translate-y-3 hover:-rotate-1 shadow-2xl hover:shadow-3xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-army-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-army-black dark:text-dark-text">Personal Consultation</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary">Detailed, customized estimates with expert guidance</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-army-gold rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-army-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-dark-text-secondary">Site visit and detailed assessment</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-army-gold rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-army-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-dark-text-secondary">Custom solutions for unique challenges</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-army-gold rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-army-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-dark-text-secondary">Expert recommendations and alternatives</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-army-gold rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-army-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-dark-text-secondary">Regulatory and permit guidance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-army-gold rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-army-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-dark-text-secondary">Value engineering opportunities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-army-gold rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-army-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 dark:text-dark-text-secondary">Detailed proposal and contract</span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-dark-border pt-6">
                <p className="text-mh-hunter-green font-semibold mb-4">Best for:</p>
                <ul className="text-sm text-gray-600 dark:text-dark-text-secondary space-y-2">
                  <li>• Complex or specialized projects</li>
                  <li>• Historic or challenging sites</li>
                  <li>• Government and institutional work</li>
                  <li>• Projects requiring permits/approvals</li>
                </ul>
              </div>

              <a
                href="/contact"
                className="block w-full bg-gradient-to-r from-mh-hunter-green to-army-green text-white px-8 py-4 rounded-xl font-bold text-lg mt-8 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl text-center"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Process Comparison */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-army-black dark:text-dark-text mb-12">
              Process Comparison
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-dark-surface-3 rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-mh-hunter-green mb-4 flex items-center">
                  <span className="w-8 h-8 bg-mh-hunter-green rounded-full flex items-center justify-center text-white text-sm mr-3">AI</span>
                  AI Estimator Process
                </h4>
                <ol className="space-y-3 text-gray-600 dark:text-dark-text-secondary">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-mh-hunter-green text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    Input project details (type, size, location)
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-mh-hunter-green text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    AI analyzes data against 1,000+ similar projects
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-mh-hunter-green text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    Receive instant detailed cost breakdown
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-mh-hunter-green text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                    Download report or schedule consultation
                  </li>
                </ol>
              </div>
              <div className="bg-white dark:bg-dark-surface-3 rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-army-gold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-army-gold rounded-full flex items-center justify-center text-army-black text-sm mr-3">👥</span>
                  Consultation Process
                </h4>
                <ol className="space-y-3 text-gray-600 dark:text-dark-text-secondary">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-army-gold text-army-black rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    Submit project inquiry through contact form
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-army-gold text-army-black rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    Schedule site visit and requirements meeting
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-army-gold text-army-black rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    Receive custom proposal within 5-7 days
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-army-gold text-army-black rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                    Review, refine, and finalize project agreement
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - AI Estimator Interface */}
      <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-army-black dark:text-dark-text mb-6">
              Try Our 
              <span className="bg-gradient-to-r from-mh-hunter-green to-army-gold bg-clip-text text-transparent">AI Estimator</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Experience the future of construction estimation. Get detailed cost breakdowns and timelines in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Estimator Form Mockup */}
            <div className="bg-gradient-to-br from-mh-hunter-green to-army-black text-white p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-army-gold rounded-full flex items-center justify-center mr-4">
                  <Calculator size={24} className="text-army-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AI Estimator MVP</h3>
                  <p className="text-gray-200">Coming Soon - Advanced Beta</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-army-gold focus:border-army-gold transition-all duration-300">
                    <option value="">Select project type...</option>
                    <option value="office">Office Building</option>
                    <option value="warehouse">Warehouse/Industrial</option>
                    <option value="retail">Retail Space</option>
                    <option value="government">Government Facility</option>
                    <option value="healthcare">Healthcare Facility</option>
                    <option value="education">Educational Building</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-200">Square Footage</label>
                    <input type="number" placeholder="10,000" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-army-gold focus:border-army-gold transition-all duration-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-200">Stories</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-army-gold focus:border-army-gold transition-all duration-300">
                      <option value="1">1 Story</option>
                      <option value="2">2 Stories</option>
                      <option value="3">3+ Stories</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">Construction Quality</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-army-gold focus:border-army-gold transition-all duration-300">
                    <option value="standard">Standard Grade</option>
                    <option value="high">High Grade</option>
                    <option value="premium">Premium Grade</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">Location</label>
                  <input type="text" placeholder="Pasco, WA" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-army-gold focus:border-army-gold transition-all duration-300" />
                </div>

                {/* Special Features */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-200">Special Features</label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-white/20 bg-white/10 text-army-gold focus:ring-army-gold" />
                      <span>HVAC System</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-white/20 bg-white/10 text-army-gold focus:ring-army-gold" />
                      <span>Fire Suppression</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-white/20 bg-white/10 text-army-gold focus:ring-army-gold" />
                      <span>Security Systems</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-white/20 bg-white/10 text-army-gold focus:ring-army-gold" />
                      <span>Parking Structure</span>
                    </label>
                  </div>
                </div>

                <button className="w-full bg-army-gold hover:bg-yellow-500 text-army-black px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <span className="mr-2">🤖</span>
                  Generate AI Estimate
                </button>
              </div>
            </div>

            {/* Results Preview */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-dark-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-army-black dark:text-dark-text">Cost Breakdown Preview</h3>
                  <div className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    ±5% Accuracy
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-dark-surface-3 rounded-lg">
                    <span className="font-semibold text-gray-700 dark:text-dark-text-secondary">Foundation & Structure</span>
                    <span className="text-mh-hunter-green font-bold">$485,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-dark-surface-3 rounded-lg">
                    <span className="font-semibold text-gray-700 dark:text-dark-text-secondary">Framing & Envelope</span>
                    <span className="text-mh-hunter-green font-bold">$320,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-dark-surface-3 rounded-lg">
                    <span className="font-semibold text-gray-700 dark:text-dark-text-secondary">MEP Systems</span>
                    <span className="text-mh-hunter-green font-bold">$265,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-dark-surface-3 rounded-lg">
                    <span className="font-semibold text-gray-700 dark:text-dark-text-secondary">Interior Finishes</span>
                    <span className="text-mh-hunter-green font-bold">$180,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-dark-surface-3 rounded-lg">
                    <span className="font-semibold text-gray-700 dark:text-dark-text-secondary">Site Work & Utilities</span>
                    <span className="text-mh-hunter-green font-bold">$125,000</span>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-dark-border pt-4">
                    <div className="flex justify-between items-center p-4 bg-mh-hunter-green rounded-lg text-white">
                      <span className="text-xl font-bold">Total Project Cost</span>
                      <span className="text-2xl font-bold">$1,375,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-dark-border">
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-6">Timeline Projection</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-army-gold rounded-full"></div>
                    <span className="flex-1 text-gray-700 dark:text-dark-text-secondary">Design & Permits</span>
                    <span className="font-semibold text-mh-hunter-green">8-12 weeks</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="flex-1 text-gray-700 dark:text-dark-text-secondary">Site Preparation</span>
                    <span className="font-semibold text-mh-hunter-green">4-6 weeks</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="flex-1 text-gray-700 dark:text-dark-text-secondary">Construction</span>
                    <span className="font-semibold text-mh-hunter-green">24-28 weeks</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="flex-1 text-gray-700 dark:text-dark-text-secondary">Final Inspections</span>
                    <span className="font-semibold text-mh-hunter-green">2-3 weeks</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-dark-border pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-army-black dark:text-dark-text">Total Timeline</span>
                      <span className="text-xl font-bold text-mh-hunter-green">38-49 weeks</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary mb-4">
                  This is a preview of our AI estimator. The full version will be available soon.
                </p>
                <div className="space-y-3">
                  <a 
                    href="/contact" 
                    className="inline-block bg-mh-hunter-green hover:bg-army-green text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 mr-4"
                  >
                    Get Detailed Quote Now
                  </a>
                  <a 
                    href="/projects" 
                    className="inline-block border-2 border-mh-hunter-green text-mh-hunter-green hover:bg-mh-hunter-green hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                  >
                    View Past Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* AI Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark-surface-2 dark:to-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-army-black dark:text-dark-text mb-6">
              AI-Powered 
              <span className="bg-gradient-to-r from-mh-hunter-green to-army-gold bg-clip-text text-transparent"> Precision</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Our AI estimator leverages machine learning and military-grade precision to deliver unmatched accuracy and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instant Results */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-dark-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">Lightning Fast Results</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
                Get comprehensive estimates in under 3 minutes. Our AI processes thousands of data points instantly to deliver accurate cost breakdowns.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Average response: 2.8 minutes
                </div>
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  24/7 availability
                </div>
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  No waiting for callbacks
                </div>
              </div>
            </div>

            {/* Precision Accuracy */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-dark-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">Military-Grade Accuracy</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
                Trained on 1,000+ completed projects with ±5% accuracy. Our AI learns from every project to continuously improve precision.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-blue-600 dark:text-blue-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  ±5% cost accuracy
                </div>
                <div className="flex items-center text-blue-600 dark:text-blue-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Validated against real projects
                </div>
                <div className="flex items-center text-blue-600 dark:text-blue-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Continuous learning algorithm
                </div>
              </div>
            </div>

            {/* Comprehensive Analysis */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-dark-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <DollarSign size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">Detailed Breakdown</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
                Complete cost analysis by category, timeline projections, and risk assessments. Everything you need for informed decision-making.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-purple-600 dark:text-purple-400">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  15+ cost categories
                </div>
                <div className="flex items-center text-purple-600 dark:text-purple-400">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Timeline with milestones
                </div>
                <div className="flex items-center text-purple-600 dark:text-purple-400">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Risk factor analysis
                </div>
              </div>
            </div>

            {/* Data-Driven Insights */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-dark-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <span className="text-white text-xl font-bold">📊</span>
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">Market Intelligence</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
                Real-time market data integration for material costs, labor rates, and regional variations. Always current, always accurate.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-orange-600 dark:text-orange-400">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Live material pricing
                </div>
                <div className="flex items-center text-orange-600 dark:text-orange-400">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Regional cost adjustments
                </div>
                <div className="flex items-center text-orange-600 dark:text-orange-400">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Economic trend analysis
                </div>
              </div>
            </div>

            {/* Smart Recommendations */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-dark-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <span className="text-white text-xl font-bold">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">Smart Recommendations</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
                AI-powered suggestions for cost optimization, alternative materials, and value engineering opportunities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-teal-600 dark:text-teal-400">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Cost optimization tips
                </div>
                <div className="flex items-center text-teal-600 dark:text-teal-400">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Alternative material options
                </div>
                <div className="flex items-center text-teal-600 dark:text-teal-400">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Value engineering insights
                </div>
              </div>
            </div>

            {/* Seamless Integration */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-dark-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-army-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <span className="text-white text-xl font-bold">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">Seamless Transition</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
                Easily transition from AI estimate to personal consultation. Your data carries forward for detailed project planning.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-mh-hunter-green dark:text-mh-hunter-green">
                  <span className="w-2 h-2 bg-mh-hunter-green rounded-full mr-2"></span>
                  One-click consultation request
                </div>
                <div className="flex items-center text-mh-hunter-green dark:text-mh-hunter-green">
                  <span className="w-2 h-2 bg-mh-hunter-green rounded-full mr-2"></span>
                  Data preservation
                </div>
                <div className="flex items-center text-mh-hunter-green dark:text-mh-hunter-green">
                  <span className="w-2 h-2 bg-mh-hunter-green rounded-full mr-2"></span>
                  Personalized follow-up
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Explanation Section */}
      <section className="py-20 bg-army-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Science Behind 
                <span className="bg-gradient-to-r from-army-gold to-yellow-400 bg-clip-text text-transparent"> Our AI</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI estimator combines military precision with cutting-edge machine learning to deliver unprecedented accuracy in construction cost estimation.
              </p>

              <div className="space-y-6">
                <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-army-gold mb-3 flex items-center">
                    <span className="w-8 h-8 bg-army-gold rounded-full flex items-center justify-center text-army-black text-sm mr-3 group-hover:rotate-12 transition-transform duration-300">🧠</span>
                    Machine Learning Algorithms
                  </h3>
                  <p className="text-gray-300">
                    Advanced neural networks trained on over 1,000 completed projects, continuously learning from new data to improve accuracy with every estimate.
                  </p>
                </div>

                <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-army-gold mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3 group-hover:rotate-12 transition-transform duration-300">📊</span>
                    Real-Time Data Integration
                  </h3>
                  <p className="text-gray-300">
                    Live feeds from material suppliers, labor markets, and economic indicators ensure our estimates reflect current market conditions.
                  </p>
                </div>

                <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-army-gold mb-3 flex items-center">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3 group-hover:rotate-12 transition-transform duration-300">🔒</span>
                    Military-Grade Security
                  </h3>
                  <p className="text-gray-300">
                    Your project data is protected with enterprise-level encryption and secure processing, ensuring complete confidentiality.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-mh-hunter-green to-army-green rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">AI Processing Pipeline</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <div className="w-10 h-10 bg-army-gold rounded-full flex items-center justify-center text-army-black font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Data Input</h4>
                      <p className="text-sm text-gray-300">Project specifications parsed and validated</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Pattern Matching</h4>
                      <p className="text-sm text-gray-300">AI finds similar projects in database</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Cost Calculation</h4>
                      <p className="text-sm text-gray-300">Real-time pricing and labor analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Validation</h4>
                      <p className="text-sm text-gray-300">Cross-reference with expert knowledge</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <div>
                      <h4 className="font-semibold">Result Generation</h4>
                      <p className="text-sm text-gray-300">Detailed breakdown and timeline</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center bg-green-500/20 rounded-full px-4 py-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-sm font-semibold">Average Processing Time: 2.8 seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Showcase Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-surface-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-army-black dark:text-dark-text mb-6">
              Proven 
              <span className="bg-gradient-to-r from-mh-hunter-green to-army-gold bg-clip-text text-transparent"> Results</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Our AI estimator has been tested against real project outcomes with remarkable accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">95%</span>
              </div>
              <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2">Accuracy Rate</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">Within ±5% of final costs</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3m</span>
              </div>
              <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2">Average Time</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">From input to estimate</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1K+</span>
              </div>
              <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2">Training Projects</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">Completed builds analyzed</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2">Availability</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">Always ready to estimate</p>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-dark-surface-3 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-army-black dark:text-dark-text">John Davidson</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary">City Planning Director</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4">
                "The AI estimator was within 3% of our final construction costs for the new fire station. Incredible accuracy for such a quick turnaround."
              </p>
              <div className="flex text-army-gold">
                <span>★★★★★</span>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-surface-3 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-army-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-army-black font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-bold text-army-black dark:text-dark-text">Sarah Martinez</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary">Healthcare Administrator</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4">
                "We used the AI estimator for budget planning on our medical facility expansion. The detailed breakdown helped us secure funding immediately."
              </p>
              <div className="flex text-army-gold">
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-br from-mh-hunter-green to-army-black text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-army-gold/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Experience 
            <span className="bg-gradient-to-r from-army-gold to-yellow-400 bg-clip-text text-transparent"> AI Precision</span>?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Choose your path to accurate project estimates. Start with our AI for instant results, or schedule a consultation for complex projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-army-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Estimator</h3>
              <p className="text-gray-300 mb-6">Perfect for quick estimates and initial planning</p>
              <ul className="text-sm text-gray-300 space-y-2 mb-8">
                <li>• Instant results in 3 minutes</li>
                <li>• ±5% accuracy guarantee</li>
                <li>• Free to use, no commitment</li>
                <li>• Available 24/7</li>
              </ul>
              <button className="w-full bg-army-gold hover:bg-yellow-500 text-army-black px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Try AI Estimator
              </button>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Personal Consultation</h3>
              <p className="text-gray-300 mb-6">Ideal for complex and specialized projects</p>
              <ul className="text-sm text-gray-300 space-y-2 mb-8">
                <li>• Site visit and assessment</li>
                <li>• Custom solutions</li>
                <li>• Expert recommendations</li>
                <li>• Detailed proposals</li>
              </ul>
              <a
                href="/contact"
                className="block w-full border-2 border-white hover:border-army-gold text-white hover:text-army-gold px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 text-center"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            Start with AI, upgrade to consultation - your data transfers seamlessly
          </p>
        </div>
      </section>

  <WhyChooseSection />
  <Footer />
    </main>
  )
}
