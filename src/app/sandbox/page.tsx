import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import { Wrench, Play, Settings, Save, Download } from 'lucide-react'

export default function SandboxPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-mh-warm-tan to-field-tan text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-6">
              <Wrench size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Interactive Project Sandbox
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Build your project virtually before construction begins. Drag and drop walls, 
              doors, windows, and finishes while watching costs update in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-army-black mb-8">
              🚧 Coming Soon
            </h2>
            <p className="text-xl text-field-gray max-w-4xl mx-auto mb-12 leading-relaxed">
              Our revolutionary Interactive Project Sandbox is currently in development. 
              This cutting-edge tool will allow you to design and modify your construction 
              project in real-time, with instant cost and timeline updates.
            </p>

            {/* Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-light-gray p-6 rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 bg-mh-warm-tan text-white rounded-full mx-auto mb-4">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-army-black mb-3">Drag & Drop Design</h3>
                <p className="text-field-gray">Intuitive interface for placing walls, doors, windows, and fixtures</p>
              </div>

              <div className="bg-light-gray p-6 rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 bg-mh-forest-green text-white rounded-full mx-auto mb-4">
                  <Settings size={24} />
                </div>
                <h3 className="text-xl font-bold text-army-black mb-3">Real-Time Costs</h3>
                <p className="text-field-gray">Watch project costs update instantly as you make design changes</p>
              </div>

              <div className="bg-light-gray p-6 rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 bg-army-gold text-army-black rounded-full mx-auto mb-4">
                  <Save size={24} />
                </div>
                <h3 className="text-xl font-bold text-army-black mb-3">Save & Share</h3>
                <p className="text-field-gray">Save multiple design versions and share with your team</p>
              </div>

              <div className="bg-light-gray p-6 rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 bg-army-green text-white rounded-full mx-auto mb-4">
                  <Download size={24} />
                </div>
                <h3 className="text-xl font-bold text-army-black mb-3">Export Plans</h3>
                <p className="text-field-gray">Generate detailed blueprints and material lists</p>
              </div>
            </div>

            {/* Demo Request */}
            <div className="bg-gradient-to-r from-mh-warm-tan to-field-tan text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Want a Sneak Peek?
              </h3>
              <p className="text-lg mb-6">
                Request a private demo of our Interactive Project Sandbox and see how 
                this revolutionary tool will transform your construction planning process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-mh-warm-tan px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Demo
                </a>
                <a
                  href="/estimate"
                  className="bg-army-gold text-army-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Get Traditional Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-4">
              Revolutionary Technology
            </h2>
            <p className="text-xl text-field-gray max-w-3xl mx-auto">
              Built with cutting-edge web technologies for seamless performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-army-black mb-4">3D Visualization</h3>
              <p className="text-field-gray">
                Advanced 3D rendering engine for realistic project visualization
                with real-time lighting and material preview.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-army-black mb-4">AI Integration</h3>
              <p className="text-field-gray">
                Machine learning algorithms provide intelligent design suggestions
                and accurate cost predictions based on historical data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-army-black mb-4">Cloud Sync</h3>
              <p className="text-field-gray">
                Seamless cloud synchronization ensures your projects are always
                accessible and up-to-date across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl text-field-gray mb-8">
            Sign up to be notified when the Interactive Project Sandbox launches
            and get exclusive early access.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-warm-tan focus:border-mh-warm-tan"
            />
            <button
              type="submit"
              className="bg-mh-warm-tan text-white px-6 py-3 rounded-lg font-semibold hover:bg-field-tan transition-colors"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>

  <WhyChooseSection />
  <Footer />
    </main>
  )
}
