"use client"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'
import { Wrench, Play, Settings, Save, Download } from 'lucide-react'

export default function SandboxPage() {
  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: integrate notification signup API
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100">
      <Header />
      <UniversalHeroSection
        title="Interactive Project"
        titleHighlight="Sandbox"
        subtitle="Build your project virtually before construction begins. Drag and drop components while watching costs and timelines update in real-time with military precision."
        primaryButton={{ text: "Request Demo", href: "/contact" }}
        secondaryButton={{ text: "Get Traditional Estimate", href: "/estimate" }}
      />

      {/* Coming Soon Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-gray-100 mb-4">
              🚧 Revolutionary Tool in Development
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our cutting-edge Interactive Project Sandbox is being built with military precision. 
              Design, modify, and visualize your construction project with real-time cost and timeline updates.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Wrench size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-gray-100 mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">
                Drag & Drop Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                Intuitive interface for placing walls, doors, windows, and fixtures with precision control
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <Settings size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-gray-100 mb-3 group-hover:text-mh-leather-tan transition-colors duration-300">
                Real-Time Costs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                Watch project costs update instantly as you make design changes with AI-powered calculations
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Save size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-gray-100 mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">
                Save & Share
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                Save multiple design versions and collaborate with your team in real-time
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <Download size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-gray-100 mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">
                Export Plans
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                Generate detailed blueprints, material lists, and professional documentation
              </p>
            </div>
          </div>

          {/* Demo Request */}
          <div className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-xl p-8 text-white relative overflow-hidden">
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">
                Want a Sneak Peek?
              </h3>
              <p className="text-lg mb-6 text-gray-200">
                Request a private demo of our Interactive Project Sandbox and see how 
                this revolutionary tool will transform your construction planning process with military precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group bg-mh-leather-tan hover:bg-mh-leather-tan/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Request Demo
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </a>
                <a
                  href="/estimate"
                  className="group border border-mh-leather-tan text-mh-leather-tan hover:bg-mh-leather-tan hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Traditional Estimate
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-gray-100 mb-4">
              Revolutionary Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Built with cutting-edge web technologies for seamless performance and military-grade precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-gray-100 mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">
                3D Visualization
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                Advanced 3D rendering engine for realistic project visualization with real-time lighting, 
                materials, and environmental effects.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-gray-100 mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">
                AI Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                Machine learning algorithms provide intelligent design suggestions and accurate cost 
                predictions based on extensive historical construction data.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-gray-100 mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">
                Cloud Sync
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                Seamless cloud synchronization ensures your projects are always accessible, 
                secure, and up-to-date across all devices and team members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Signup */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-gray-100 mb-6">
            Be the First to <span className="text-mh-hunter-green dark:text-mh-leather-tan">Know</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Sign up to be notified when the Interactive Project Sandbox launches and get exclusive early access.
          </p>
          
          <form onSubmit={handleNotifySubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white px-6 py-3 rounded-lg font-semibold hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-mh-hunter-green/60"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>

      <div className="mt-auto">
        <WhyChooseSection />
        <Footer />
      </div>
    </main>
  )
}