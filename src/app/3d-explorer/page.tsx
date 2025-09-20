"use client"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'
import { Eye, MousePointer, Camera, Info } from 'lucide-react'

export default function ThreeDExplorerPage() {
  const featuredProjects = [
    {
      title: "Summer's Hub",
      description: "Modern commercial kitchen and dining facility",
      image: "/images/projects/summers-hub.jpg",
      status: "Available for 3D Tour"
    },
    {
      title: "Yakima Valley Fire Station #10",
      description: "State-of-the-art fire station administration building",
      image: "/images/projects/fire-station.jpg", 
      status: "Coming Soon"
    },
    {
      title: "Medical Office Complex",
      description: "Healthcare facility with specialized medical systems",
      image: "/images/projects/medical-office.jpg",
      status: "Coming Soon"
    }
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-dark-surface transition-colors duration-300">
      <Header />
      
      <UniversalHeroSection
        title="3D Project"
        titleHighlight="Explorer"
        subtitle="Tour our completed projects in immersive 3D detail. Click on any element to discover the builder's insights and learn why we made each construction decision."
        primaryButton={{
          text: "Start 3D Tour",
          href: "#demo"
        }}
        secondaryButton={{
          text: "Schedule Demo",
          href: "/contact"
        }}
      />

      {/* Interactive Demo Preview */}
      <section id="demo" className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-mh-leather-tan mb-4">
              Immersive Project Tours
            </h2>
            <p className="text-xl text-field-gray dark:text-dark-text max-w-3xl mx-auto">
              Experience our construction projects like never before with interactive 3D walkthroughs
            </p>
          </div>

          {/* Demo Interface Preview */}
          <div className="group bg-gray-900 dark:bg-dark-surface-2 rounded-xl overflow-hidden shadow-2xl mb-16 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <div className="bg-gray-800 dark:bg-dark-surface-3 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-mh-hunter-green rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-3 h-3 bg-mh-leather-tan rounded-full group-hover:scale-110 transition-transform duration-300 delay-75"></div>
                  <div className="w-3 h-3 bg-mh-hunter-green/70 rounded-full group-hover:scale-110 transition-transform duration-300 delay-150"></div>
                </div>
                <span className="text-white font-medium">3D Project Explorer - Summer's Hub</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Camera size={16} className="group-hover:text-mh-leather-tan transition-colors duration-300" />
                <span className="text-sm group-hover:text-mh-leather-tan transition-colors duration-300">360° View</span>
              </div>
            </div>
            
            <div className="relative h-96 bg-gradient-to-b from-gray-700 to-gray-900 dark:from-dark-surface-2 dark:to-dark-surface-3 flex items-center justify-center overflow-hidden">
              <div className="text-center text-white z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Eye size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-mh-leather-tan transition-colors duration-300">Interactive 3D Tour</h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">Click and drag to explore • Click elements for details</p>
                <button className="bg-mh-leather-tan text-white px-8 py-3 rounded-lg font-semibold hover:bg-mh-hunter-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Launch Demo Tour
                </button>
              </div>
              
              {/* Interactive hotspots preview */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-mh-leather-tan rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-mh-leather-tan rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300 delay-300"></div>
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-mh-leather-tan rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300 delay-600"></div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-32 h-32 border border-mh-leather-tan/30 rounded-lg transform rotate-12 group-hover:rotate-24 transition-transform duration-500"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 border border-mh-leather-tan/20 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50 dark:bg-dark-surface-2 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              Advanced 3D Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Experience construction projects like never before with cutting-edge visualization technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group text-center bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <MousePointer size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">Interactive Elements</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">Click on any construction element to learn about materials, techniques, and design decisions</p>
            </div>

            <div className="group text-center bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-hunter-green/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <Camera size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">360° Photography</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">High-resolution panoramic views of completed spaces with smooth navigation</p>
            </div>

            <div className="group text-center bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Info size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-leather-tan transition-colors duration-300">Builder Insights</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">Exclusive commentary from our construction team about challenges and solutions</p>
            </div>

            <div className="group text-center bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green/80 to-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">Virtual Reality Ready</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">Experience projects in VR for the ultimate immersive construction tour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Projects */}
      <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-mh-leather-tan mb-4">
              Available Project Tours
            </h2>
            <p className="text-xl text-field-gray dark:text-dark-text max-w-3xl mx-auto">
              Explore our completed projects in stunning 3D detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                      project.status === 'Available for 3D Tour' 
                        ? 'bg-mh-hunter-green dark:bg-mh-hunter-green text-white dark:text-white group-hover:scale-105' 
                        : 'bg-mh-leather-tan dark:bg-mh-leather-tan text-black dark:text-black group-hover:scale-105'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {project.status === 'Available for 3D Tour' ? (
                    <button className="w-full bg-mh-hunter-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-mh-leather-tan hover:text-black transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                      Launch 3D Tour
                    </button>
                  ) : (
                    <button className="w-full bg-gray-300 dark:bg-dark-surface-3 text-gray-600 dark:text-dark-text-secondary px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Behind */}
      <section className="py-20 bg-light-gray dark:bg-dark-surface-2 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-field-gray dark:text-dark-text-secondary max-w-3xl mx-auto">
              Our 3D Project Explorer uses the latest web technologies for seamless performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black dark:text-dark-text mb-6">Technical Features</h3>
              <ul className="space-y-4">
                <li className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-dark-surface transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">High-resolution 360° photography with smooth transitions</span>
                </li>
                <li className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-dark-surface transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-mh-hunter-green/80 to-mh-hunter-green rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">Interactive hotspots with detailed construction information</span>
                </li>
                <li className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-dark-surface transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">WebGL-powered 3D rendering for smooth performance</span>
                </li>
                <li className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-dark-surface transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-mh-hunter-green/80 to-mh-hunter-green rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">Mobile-optimized interface for tablets and smartphones</span>
                </li>
                <li className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-dark-surface transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">VR headset compatibility for immersive experiences</span>
                </li>
              </ul>
            </div>
            
            <div className="group bg-white dark:bg-dark-surface-2 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-dark-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <h3 className="text-xl font-bold text-black dark:text-dark-text mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">System Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-mh-hunter-green rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-dark-text">Browser</p>
                    <p className="text-gray-600 dark:text-dark-text-secondary">Chrome, Safari, Firefox, Edge (latest versions)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-mh-leather-tan rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black text-xs font-bold">C</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-dark-text">Connection</p>
                    <p className="text-gray-600 dark:text-dark-text-secondary">Broadband internet recommended</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-mh-hunter-green rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">H</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-dark-text">Hardware</p>
                    <p className="text-gray-600 dark:text-dark-text-secondary">Modern device with WebGL support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-mh-leather-tan rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black text-xs font-bold">VR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-dark-text">VR Support</p>
                    <p className="text-gray-600 dark:text-dark-text-secondary">Oculus, HTC Vive, or compatible headset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-mh-hunter-green to-black text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-mh-leather-tan/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Explore Your 
            <span className="bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 bg-clip-text text-transparent"> Future Project</span>?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Experience the future of construction visualization. Let us create an immersive 3D tour for your project and bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-mh-leather-tan hover:bg-mh-leather-tan/80 text-black px-10 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 hover:rotate-1 shadow-xl hover:shadow-2xl">
              Request 3D Tour
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <a
              href="/contact"
              className="group border-2 border-white hover:border-mh-leather-tan text-white hover:text-mh-leather-tan px-10 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:bg-white/10"
            >
              Schedule Demo
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">📹</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group text-center transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-mh-leather-tan transition-colors duration-300">Precision Planning</h3>
              <p className="text-gray-300">Every detail captured with millimeter accuracy for perfect project execution.</p>
            </div>
            <div className="group text-center transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-hunter-green/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Fast Delivery</h3>
              <p className="text-gray-300">3D tours ready within 48 hours of site photography completion.</p>
            </div>
            <div className="group text-center transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-mh-leather-tan transition-colors duration-300">Custom Features</h3>
              <p className="text-gray-300">Tailored interactive elements and branding to match your project needs.</p>
            </div>
          </div>
        </div>
      </section>

  <div className="mt-auto">
    <WhyChooseSection />
    <Footer />
  </div>
    </main>
  )
}
