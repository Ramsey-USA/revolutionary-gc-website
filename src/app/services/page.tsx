import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CoreValuesSection from '../../components/CoreValuesSection'
import WhyChooseSection from '../../components/WhyChooseSection'
import StarDecorations from '../../components/StarDecorations'
import { Building, Hammer, HeartPulse, Shield, Factory, Grape } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Complete commercial building solutions from concept to completion. We specialize in office buildings, retail spaces, and mixed-use developments with cutting-edge technology integration.",
      features: ["Office Buildings", "Retail Spaces", "Mixed-Use Developments", "Technology Integration"]
    },
    {
      icon: Factory,
      title: "Industrial Building",
      description: "Large-scale industrial facilities designed for efficiency and safety. Our expertise includes warehouses, manufacturing plants, and specialized industrial infrastructure.",
      features: ["Warehouses", "Manufacturing Plants", "Distribution Centers", "Industrial Infrastructure"]
    },
    {
      icon: HeartPulse,
      title: "Healthcare Facilities",
      description: "Specialized medical construction with patient-focused design and compliance with healthcare regulations. We understand the unique requirements of medical environments.",
      features: ["Medical Offices", "Clinics", "Specialized Medical Systems", "Patient-Focused Design"]
    },
    {
      icon: Shield,
      title: "Emergency Services",
      description: "Fire stations and emergency service facilities built to support first responders. Our veteran background brings unique understanding to these critical projects.",
      features: ["Fire Stations", "Emergency Services", "Administration Buildings", "Specialized Infrastructure"]
    },
    {
      icon: Hammer,
      title: "AI-Powered Estimating",
      description: "Revolutionary AI technology provides accurate cost estimates and project timelines with 15% accuracy. Experience the future of construction planning.",
      features: ["AI Cost Analysis", "Timeline Prediction", "Phase Breakdown", "Real-time Updates"]
    },
    {
      icon: Grape,
      title: "Specialty Projects",
      description: "Unique and specialized construction projects including wineries, religious centers, and custom facilities that require specialized knowledge and techniques.",
      features: ["Wineries", "Religious Centers", "Custom Facilities", "Specialized Systems"]
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-mh-forest-green to-army-green text-white overflow-hidden">
        {/* Star decorations */}
        <StarDecorations />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Construction Services
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Veteran-owned excellence delivering innovative construction solutions 
              across the Pacific Northwest with 150+ years of combined team expertise, 
              military precision and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-50 rounded-3xl transform -rotate-1"></div>
            <div className="relative z-10 py-8">
              <h2 className="text-4xl md:text-5xl font-bold text-army-black mb-4 relative">
                <span className="bg-gradient-to-r from-army-black via-mh-forest-green to-army-black bg-clip-text text-transparent">
                  Comprehensive Construction Solutions
                </span>
                {/* Accent line */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-army-gold to-yellow-500 rounded-full"></div>
              </h2>
              <p className="text-xl text-field-gray max-w-3xl mx-auto leading-relaxed">
                From commercial buildings to specialized facilities, we deliver excellence in every project with 
                <span className="font-semibold text-mh-forest-green"> military precision</span> and 
                <span className="font-semibold text-army-gold"> cutting-edge technology</span>
              </p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-mh-forest-green to-army-green rounded-2xl p-8 md:p-12 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-army-gold">150+</div>
                  <div className="text-sm md:text-base text-gray-200">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-army-gold">500+</div>
                  <div className="text-sm md:text-base text-gray-200">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-army-gold">98%</div>
                  <div className="text-sm md:text-base text-gray-200">Client Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-army-gold">100mi</div>
                  <div className="text-sm md:text-base text-gray-200">Service Radius</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center">
                <p className="text-lg md:text-xl text-gray-200">
                  <span className="font-semibold text-army-gold">Veteran-Owned Excellence</span> — 
                  150+ years of combined construction expertise with military precision and cutting-edge AI technology
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              
              return (
                <div key={index} className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-army-gold transition-all duration-500 transform hover:-translate-y-2">
                  {/* Service Header */}
                  <div className="bg-gradient-to-r from-mh-forest-green to-army-green p-6 text-white relative overflow-hidden">
                    {/* Animated background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-army-gold to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 group-hover:bg-army-gold group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110">
                        <IconComponent size={32} className="group-hover:text-army-black transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-center group-hover:text-army-gold transition-colors duration-300">{service.title}</h3>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transition-all duration-300">
                    <p className="text-field-gray mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-army-black mb-3 group-hover:text-mh-forest-green transition-colors duration-300">Key Services:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 group-hover:transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                          <div className="w-2 h-2 bg-army-gold rounded-full group-hover:bg-mh-forest-green group-hover:scale-125 transition-all duration-300"></div>
                          <span className="text-field-gray text-sm group-hover:text-gray-800 group-hover:font-medium transition-all duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button className="w-full bg-army-gold text-army-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Construction Process Workflow */}
          <div className="mt-20 py-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-army-black mb-4">
                Our Construction Process
              </h3>
              <p className="text-lg text-field-gray max-w-2xl mx-auto">
                Military-grade precision in every phase, from initial consultation to project completion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phase 1 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-mh-forest-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold group-hover:scale-110 transition-all duration-300">
                    <span className="text-white text-xl font-bold group-hover:text-army-black">1</span>
                  </div>
                  {/* Connector Line */}
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-mh-forest-green to-gray-300"></div>
                </div>
                <h4 className="text-xl font-bold text-army-black mb-2 group-hover:text-mh-forest-green transition-colors duration-300">Consultation</h4>
                <p className="text-field-gray text-sm">AI-powered analysis and detailed project assessment</p>
              </div>

              {/* Phase 2 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-mh-forest-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold group-hover:scale-110 transition-all duration-300">
                    <span className="text-white text-xl font-bold group-hover:text-army-black">2</span>
                  </div>
                  {/* Connector Line */}
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-mh-forest-green to-gray-300"></div>
                </div>
                <h4 className="text-xl font-bold text-army-black mb-2 group-hover:text-mh-forest-green transition-colors duration-300">Planning & Design</h4>
                <p className="text-field-gray text-sm">Detailed blueprints and 3D visualization development</p>
              </div>

              {/* Phase 3 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-mh-forest-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold group-hover:scale-110 transition-all duration-300">
                    <span className="text-white text-xl font-bold group-hover:text-army-black">3</span>
                  </div>
                  {/* Connector Line */}
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-mh-forest-green to-gray-300"></div>
                </div>
                <h4 className="text-xl font-bold text-army-black mb-2 group-hover:text-mh-forest-green transition-colors duration-300">Construction</h4>
                <p className="text-field-gray text-sm">Expert execution with real-time progress tracking</p>
              </div>

              {/* Phase 4 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-mh-forest-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold group-hover:scale-110 transition-all duration-300">
                    <span className="text-white text-xl font-bold group-hover:text-army-black">4</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-army-black mb-2 group-hover:text-mh-forest-green transition-colors duration-300">Delivery</h4>
                <p className="text-field-gray text-sm">Final inspection and seamless project handover</p>
              </div>
            </div>

            {/* Process CTA */}
            <div className="text-center mt-12">
              <p className="text-field-gray mb-6">Ready to experience our streamlined process?</p>
              <a
                href="/estimate"
                className="inline-block bg-mh-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-army-green transition-colors duration-300 transform hover:scale-105"
              >
                Start Your Project Today
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-army-black mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-field-gray mb-8 max-w-2xl mx-auto">
              Get a free AI-powered estimate and discover how our veteran-owned team 
              can bring your vision to life with precision and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/estimate"
                className="bg-army-gold text-army-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors transform hover:scale-105"
              >
                Get AI Estimate
              </a>
              <a
                href="/contact"
                className="bg-mh-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-army-green transition-colors transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValuesSection />

  <div className="mt-auto">
    <WhyChooseSection />
    <Footer />
  </div>
    </main>
  )
}
