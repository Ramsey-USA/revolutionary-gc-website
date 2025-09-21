"use client"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'
import { Eye, MousePointer, Camera, Info, Target, Rocket, Palette, Wrench } from 'lucide-react'

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
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
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
      <section id="demo" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-gray-100 mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <Wrench className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-mh-hunter-green" aria-hidden="true" />
              <span>Immersive Project Tours</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Experience our construction projects like never before with interactive 3D walkthroughs
            </p>
          </div>

          {/* Demo Interface Preview */}
          <div className="group bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl mb-12 sm:mb-16 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <div className="bg-gray-800 dark:bg-gray-700 px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-mh-hunter-green rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-mh-leather-tan rounded-full group-hover:scale-110 transition-transform duration-300 delay-75"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-mh-hunter-green/70 rounded-full group-hover:scale-110 transition-transform duration-300 delay-150"></div>
                </div>
                <span className="text-white font-medium text-sm sm:text-base truncate">3D Project Explorer - Summer's Hub</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 text-gray-400">
                <Camera size={14} className="sm:w-4 sm:h-4 group-hover:text-mh-leather-tan transition-colors duration-300" />
                <span className="text-xs sm:text-sm group-hover:text-mh-leather-tan transition-colors duration-300 hidden sm:inline">360° View</span>
              </div>
            </div>
            
            <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-b from-gray-700 to-gray-900 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
              <div className="text-center text-white z-10 px-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Eye size={24} className="sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-mh-leather-tan transition-colors duration-300">Interactive 3D Tour</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">Click and drag to explore • Click elements for details</p>
                <button className="bg-mh-leather-tan text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-mh-hunter-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Launch Demo Tour
                </button>
              </div>
              
              {/* Interactive hotspots preview */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-mh-leather-tan rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute top-1/2 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-mh-leather-tan rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300 delay-300"></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-mh-leather-tan rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300 delay-600"></div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-24 h-24 sm:w-32 sm:h-32 border border-mh-leather-tan/30 rounded-lg transform rotate-12 group-hover:rotate-24 transition-transform duration-500"></div>
                <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-4 w-18 h-18 sm:w-24 sm:h-24 border border-mh-leather-tan/20 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              Advanced 3D Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto px-4">
              Experience construction projects like never before with cutting-edge visualization technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="group text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <MousePointer size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">Interactive Elements</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">Click on any construction element to learn about materials, techniques, and design decisions</p>
            </div>

            <div className="group text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-mh-hunter-green to-mh-hunter-green/80 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <Camera size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">360° Photography</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">High-resolution panoramic views of completed spaces with smooth navigation</p>
            </div>

            <div className="group text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Info size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-leather-tan transition-colors duration-300">Builder Insights</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">Exclusive commentary from our construction team about challenges and solutions</p>
            </div>

            <div className="group text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-mh-hunter-green/80 to-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <Eye size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">Virtual Reality Ready</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">Experience projects in VR for the ultimate immersive construction tour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Projects */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-mh-leather-tan mb-4">
              Available Project Tours
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-dark-text max-w-3xl mx-auto px-4">
              Explore our completed projects in stunning 3D detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-gray-700">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      project.status === 'Available for 3D Tour' 
                        ? 'bg-mh-hunter-green dark:bg-mh-hunter-green text-white dark:text-white group-hover:scale-105' 
                        : 'bg-mh-leather-tan dark:bg-mh-leather-tan text-black dark:text-black group-hover:scale-105'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {project.status === 'Available for 3D Tour' ? (
                    <button className="w-full bg-mh-hunter-green text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-mh-leather-tan hover:text-black transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg text-sm sm:text-base">
                      Launch 3D Tour
                    </button>
                  ) : (
                    <button className="w-full bg-gray-300 dark:bg-dark-surface-3 text-gray-600 dark:text-dark-text-secondary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold cursor-not-allowed text-sm sm:text-base">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto px-4">
              Our 3D Project Explorer uses the latest web technologies for seamless performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-dark-text mb-4 sm:mb-6">Technical Features</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">High-resolution 360° photography with smooth transitions</span>
                </li>
                <li className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-mh-hunter-green/80 to-mh-hunter-green rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">Interactive hotspots with detailed construction information</span>
                </li>
                <li className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">WebGL-powered 3D rendering for smooth performance</span>
                </li>
                <li className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-mh-hunter-green/80 to-mh-hunter-green rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">Mobile-optimized interface for tablets and smartphones</span>
                </li>
                <li className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">VR headset compatibility for immersive experiences</span>
                </li>
              </ul>
            </div>
            
            <div className="group bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <h3 className="text-lg sm:text-xl font-bold text-black dark:text-dark-text mb-4 group-hover:text-mh-hunter-green transition-colors duration-300">System Requirements</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-mh-hunter-green rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-dark-text text-sm sm:text-base">Browser</p>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Chrome, Safari, Firefox, Edge (latest versions)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-mh-leather-tan rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-black text-xs font-bold">C</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-dark-text text-sm sm:text-base">Connection</p>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Broadband internet recommended</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-mh-hunter-green rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-white text-xs font-bold">H</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-dark-text text-sm sm:text-base">Hardware</p>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Modern device with WebGL support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-mh-leather-tan rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-black text-xs font-bold">VR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-dark-text text-sm sm:text-base">VR Support</p>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Oculus, HTC Vive, or compatible headset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-mh-hunter-green via-mh-hunter-green/90 to-mh-leather-tan text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-mh-leather-tan/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to Explore Your 
            <span className="bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 bg-clip-text text-transparent block sm:inline"> Future Project</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Experience the future of construction visualization. Let us create an immersive 3D tour for your project and bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <button className="group w-full sm:w-auto bg-mh-leather-tan hover:bg-mh-leather-tan/80 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 hover:rotate-1 shadow-xl hover:shadow-2xl">
              Request 3D Tour
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <a
              href="/contact"
              className="group w-full sm:w-auto border-2 border-white hover:border-mh-leather-tan text-white hover:text-mh-leather-tan px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:bg-white/10"
            >
              Schedule Demo
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">📹</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="group text-center transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-mh-leather-tan transition-colors duration-300">Precision Planning</h3>
              <p className="text-gray-200 text-sm sm:text-base">Every detail captured with millimeter accuracy for perfect project execution.</p>
            </div>
            <div className="group text-center transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-mh-hunter-green to-mh-hunter-green/80 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Fast Delivery</h3>
              <p className="text-gray-200 text-sm sm:text-base">3D tours ready within 48 hours of site photography completion.</p>
            </div>
            <div className="group text-center transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group_hover:rotate-12 transition-transform duration-300">
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 group_hover:text-mh-leather-tan transition-colors duration-300">Custom Features</h3>
              <p className="text-gray-200 text-sm sm:text-base">Tailored interactive elements and branding to match your project needs.</p>
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
