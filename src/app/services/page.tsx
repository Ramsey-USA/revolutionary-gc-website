import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CoreValuesSection from '../../components/CoreValuesSection'
import { Building, Hammer, HeartPulse, Shield, Factory, Grape, Trophy, Star, Bot, Headphones } from 'lucide-react'

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
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-mh-forest-green to-army-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Construction Services
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Veteran-owned excellence delivering innovative construction solutions 
              across the Pacific Northwest with military precision and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-army-black mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-xl text-field-gray max-w-3xl mx-auto">
              From commercial buildings to specialized facilities, we deliver excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Service Header */}
                  <div className="bg-gradient-to-r from-mh-forest-green to-army-green p-6 text-white">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-center">{service.title}</h3>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-field-gray mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-army-black mb-3">Key Services:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-army-gold rounded-full"></div>
                          <span className="text-field-gray text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-army-black mb-4">
              Why Choose MH Construction?
            </h2>
            <p className="text-xl text-field-gray max-w-3xl mx-auto">
              Military precision meets construction innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-army-gold text-army-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                  <Trophy size={48} />
                </div>
                <h3 className="text-xl font-bold text-army-black mb-2">Years Experience</h3>
                <p className="text-field-gray">Decades of combined construction expertise</p>
              </div>

              <div className="text-center">
                <div className="bg-mh-forest-green text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                  <Star size={48} />
                </div>
                <h3 className="text-xl font-bold text-army-black mb-2">Veteran Owned</h3>
                <p className="text-field-gray">Military precision and integrity in every project</p>
              </div>

              <div className="text-center">
                <div className="bg-army-green text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                  <Bot size={48} />
                </div>
                <h3 className="text-xl font-bold text-army-black mb-2">Technology Leader</h3>
                <p className="text-field-gray">First in the Pacific Northwest with AI estimating</p>
              </div>

              <div className="text-center">
                <div className="bg-mh-warm-tan text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                  <Headphones size={48} />
                </div>
                <h3 className="text-xl font-bold text-army-black mb-2">Project Support</h3>
                <p className="text-field-gray">Real-time updates and transparent communication</p>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
