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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-army-black via-mh-forest-green to-army-green dark:from-dark-surface-2 dark:via-dark-surface-3 dark:to-dark-surface-2 text-white dark:text-dark-text overflow-hidden">
        {/* Star decorations */}
        <StarDecorations />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-army-gold dark:bg-army-gold rounded-full mx-auto mb-6">
              <Calculator size={40} className="text-army-black dark:text-army-black" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-dark-text">
              AI Project Estimator
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 text-white dark:text-dark-text-secondary">
              Get accurate cost estimates and comprehensive project timelines in minutes 
              with our revolutionary AI-powered estimating technology.
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <TrendingUp size={24} className="text-army-gold" />
                <span className="text-lg font-semibold">±15% Accuracy</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock size={24} className="text-army-gold" />
                <span className="text-lg font-semibold">5-Minute Results</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <DollarSign size={24} className="text-army-gold" />
                <span className="text-lg font-semibold">Detailed Breakdown</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-mh-forest-green dark:bg-dark-surface-2 text-white dark:text-dark-text p-12 rounded-xl shadow-xl max-w-4xl mx-auto border border-transparent dark:border-dark-border">
              <div className="mb-6">
                <Calculator size={48} className="text-army-gold mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4 text-white dark:text-army-gold">🤖 AI Estimator MVP Coming Soon!</h2>
              </div>
              <p className="text-xl mb-6 text-white dark:text-dark-text">
                Our revolutionary AI-powered estimating tool will provide detailed cost breakdowns 
                and project timelines with military precision.
              </p>
              <p className="text-gray-200 dark:text-dark-text-secondary mb-8">
                Experience the future of construction planning with real-time cost analysis, 
                phase-by-phase breakdowns, and accurate timeline predictions.
              </p>
              <div className="space-y-4">
                <a 
                  href="/contact" 
                  className="inline-block bg-army-gold text-army-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors transform hover:scale-105 mr-4"
                >
                  Request Demo
                </a>
                <a 
                  href="/projects" 
                  className="inline-block border-2 border-army-gold text-army-gold dark:border-army-gold dark:text-army-gold px-8 py-4 rounded-lg text-lg font-bold hover:bg-army-gold hover:text-army-black dark:hover:bg-army-gold dark:hover:text-army-black transition-colors transform hover:scale-105"
                >
                  View Past Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  <WhyChooseSection />
  <Footer />
    </main>
  )
}
