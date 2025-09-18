import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'

export default function EstimatePage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-army-black mb-8">
              AI Project Estimator
            </h1>
            <p className="text-xl text-field-gray max-w-3xl mx-auto mb-16">
              Get accurate cost estimates and comprehensive project timelines in minutes
            </p>
            <div className="bg-mh-forest-green text-white p-8 rounded-lg">
              <p className="text-lg mb-4">
                🤖 AI Estimator MVP Coming Soon!
              </p>
              <p className="text-gray-200">
                Our revolutionary AI-powered estimating tool will provide detailed cost breakdowns 
                and project timelines with 15% accuracy. Contact us for a demo of our current 
                estimating capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
  <WhyChooseSection />
  <Footer />
    </main>
  )
}
