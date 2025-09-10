import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
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
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-army-gold to-yellow-500 text-army-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-6">
              <Eye size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              3D Project Explorer
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Tour our completed projects in immersive 3D detail. Click on any element 
              to discover the builder's insights and learn why we made each construction decision.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-army-black mb-4">
              Immersive Project Tours
            </h2>
            <p className="text-xl text-field-gray max-w-3xl mx-auto">
              Experience our construction projects like never before with interactive 3D walkthroughs
            </p>
          </div>

          {/* Demo Interface Preview */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl mb-16">
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white font-medium">3D Project Explorer - Summer's Hub</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Camera size={16} />
                <span className="text-sm">360° View</span>
              </div>
            </div>
            
            <div className="relative h-96 bg-gradient-to-b from-gray-700 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <Eye size={64} className="mx-auto mb-4 text-army-gold" />
                <h3 className="text-2xl font-bold mb-2">Interactive 3D Tour</h3>
                <p className="text-gray-300 mb-6">Click and drag to explore • Click elements for details</p>
                <button className="bg-army-gold text-army-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                  Launch Demo Tour
                </button>
              </div>
              
              {/* Interactive hotspots preview */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-army-gold rounded-full animate-pulse cursor-pointer"></div>
              <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-army-gold rounded-full animate-pulse cursor-pointer"></div>
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-army-gold rounded-full animate-pulse cursor-pointer"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-army-gold text-army-black rounded-full mx-auto mb-4">
                <MousePointer size={24} />
              </div>
              <h3 className="text-xl font-bold text-army-black mb-3">Interactive Elements</h3>
              <p className="text-field-gray">Click on any construction element to learn about materials, techniques, and design decisions</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-mh-forest-green text-white rounded-full mx-auto mb-4">
                <Camera size={24} />
              </div>
              <h3 className="text-xl font-bold text-army-black mb-3">360° Photography</h3>
              <p className="text-field-gray">High-resolution panoramic views of completed spaces with smooth navigation</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-army-green text-white rounded-full mx-auto mb-4">
                <Info size={24} />
              </div>
              <h3 className="text-xl font-bold text-army-black mb-3">Builder Insights</h3>
              <p className="text-field-gray">Exclusive commentary from our construction team about challenges and solutions</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-mh-warm-tan text-white rounded-full mx-auto mb-4">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-army-black mb-3">Virtual Reality Ready</h3>
              <p className="text-field-gray">Experience projects in VR for the ultimate immersive construction tour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-4">
              Available Project Tours
            </h2>
            <p className="text-xl text-field-gray max-w-3xl mx-auto">
              Explore our completed projects in stunning 3D detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Available for 3D Tour' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-army-black'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-army-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-field-gray mb-4">
                    {project.description}
                  </p>
                  
                  {project.status === 'Available for 3D Tour' ? (
                    <button className="w-full bg-army-gold text-army-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                      Launch 3D Tour
                    </button>
                  ) : (
                    <button className="w-full bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
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
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-field-gray max-w-3xl mx-auto">
              Our 3D Project Explorer uses the latest web technologies for seamless performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-army-black mb-6">Technical Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-army-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-field-gray">High-resolution 360° photography with smooth transitions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-army-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-field-gray">Interactive hotspots with detailed construction information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-army-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-field-gray">WebGL-powered 3D rendering for smooth performance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-army-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-field-gray">Mobile-optimized interface for tablets and smartphones</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-army-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-field-gray">VR headset compatibility for immersive experiences</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-army-black mb-4">System Requirements</h3>
              <div className="space-y-3 text-field-gray">
                <p><strong>Browser:</strong> Chrome, Safari, Firefox, Edge (latest versions)</p>
                <p><strong>Connection:</strong> Broadband internet recommended</p>
                <p><strong>Hardware:</strong> Modern device with WebGL support</p>
                <p><strong>VR:</strong> Oculus, HTC Vive, or compatible headset</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mh-forest-green to-army-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Experience the future of construction visualization. See our work in incredible 
            detail and understand the craftsmanship that goes into every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-army-gold text-army-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors transform hover:scale-105">
              Start 3D Tour
            </button>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-mh-forest-green transition-colors transform hover:scale-105"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

  <WhyChooseSection />
  <Footer />
    </main>
  )
}
