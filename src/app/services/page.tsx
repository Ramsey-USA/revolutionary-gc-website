import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CoreValuesSection from '../../components/CoreValuesSection'
import WhyChooseSection from '../../components/WhyChooseSection'
import StarDecorations from '../../components/StarDecorations'
import ScheduleButton from '../../components/ScheduleButton'
import UniversalHeroSection from '../../components/UniversalHeroSection'
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
    <main className="min-h-screen pt-20 bg-white dark:bg-dark-surface transition-colors duration-300">
      <Header />
      <UniversalHeroSection
        title="Our Construction"
        titleHighlight="Services"
        subtitle="Veteran-owned excellence delivering innovative construction solutions across the Pacific Northwest with 150+ years of combined team expertise, military precision and cutting-edge technology."
        primaryButton={{
          text: "Start Your Project",
          href: "/estimate"
        }}
        secondaryButton={{
          text: "View Our Portfolio",
          href: "/projects"
        }}
      />

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 dark:via-dark-surface-2 to-transparent opacity-50 rounded-3xl transform -rotate-1"></div>
            <div className="relative z-10 py-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-4 relative">
                <span className="bg-gradient-to-r from-black dark:from-dark-text via-mh-hunter-green dark:via-mh-hunter-green to-black dark:to-dark-text bg-clip-text text-transparent">
                  Comprehensive Construction Solutions
                </span>
                {/* Accent line */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full"></div>
              </h2>
              <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
                From commercial buildings to specialized facilities, we deliver excellence in every project with 
                <span className="font-semibold text-mh-hunter-green dark:text-mh-hunter-green"> military precision</span> and 
                <span className="font-semibold text-mh-leather-tan dark:text-mh-leather-tan"> cutting-edge technology</span>
              </p>
            </div>
          </div>

          {/* Enhanced Statistics Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-mh-hunter-green via-gray-800 to-mh-leather-tan rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              {/* Background pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12 translate-x-1/2"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform -rotate-12 -translate-x-1/2"></div>
              </div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-mh-leather-tan group-hover:text-white transition-colors duration-300">150+</div>
                    <div className="text-sm md:text-base text-gray-200 group-hover:text-white transition-colors duration-300">Years Experience</div>
                  </div>
                  <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-mh-leather-tan group-hover:text-white transition-colors duration-300">500+</div>
                    <div className="text-sm md:text-base text-gray-200 group-hover:text-white transition-colors duration-300">Projects Completed</div>
                  </div>
                  <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-mh-leather-tan group-hover:text-white transition-colors duration-300">98%</div>
                    <div className="text-sm md:text-base text-gray-200 group-hover:text-white transition-colors duration-300">Client Satisfaction</div>
                  </div>
                  <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-mh-leather-tan group-hover:text-white transition-colors duration-300">100mi</div>
                    <div className="text-sm md:text-base text-gray-200 group-hover:text-white transition-colors duration-300">Service Radius</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    <span className="font-semibold text-mh-leather-tan">Veteran-Owned Excellence</span> — 
                    150+ years of combined construction expertise with military precision and cutting-edge AI technology
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              
              return (
                <div key={index} className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-dark-border overflow-hidden hover:shadow-2xl hover:border-mh-leather-tan dark:hover:border-mh-leather-tan transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                  {/* Enhanced Service Header */}
                  <div className="bg-gradient-to-br from-mh-hunter-green via-gray-800 to-mh-leather-tan p-6 text-white relative overflow-hidden">
                    {/* Enhanced animated background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-mh-leather-tan/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mx-auto mb-4 group-hover:bg-mh-leather-tan/20 group-hover:backdrop-blur-md transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-2xl">
                        <IconComponent size={32} className="group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-center group-hover:text-mh-leather-tan transition-colors duration-300">{service.title}</h3>
                    </div>
                  </div>

                  {/* Enhanced Service Content */}
                  <div className="p-6 group-hover:bg-gradient-to-br group-hover:from-gray-50 dark:group-hover:from-gray-700 group-hover:to-white dark:group-hover:to-gray-800 transition-all duration-300">
                    <p className="text-gray-600 dark:text-dark-text-secondary mb-6 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">Key Services:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 group-hover:transform group-hover:translate-x-2 transition-all duration-300" style={{ transitionDelay: `${featureIndex * 75}ms` }}>
                          <div className="w-2.5 h-2.5 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                          <span className="text-gray-600 dark:text-dark-text-secondary text-sm group-hover:text-gray-800 dark:group-hover:text-dark-text group-hover:font-medium transition-all duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Action Button */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <button className="w-full bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 text-white py-3 px-4 rounded-lg font-semibold hover:from-mh-hunter-green hover:to-mh-hunter-green/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Enhanced Construction Process Workflow */}
          <div className="mt-20 py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
                Our Construction Process
              </h3>
              <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
                Military-grade precision in every phase, from initial consultation to project completion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Enhanced Phase 1 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-mh-hunter-green to-mh-hunter-green/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-mh-leather-tan group-hover:to-mh-leather-tan/80 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                    <span className="text-white text-xl font-bold group-hover:text-black transition-colors duration-300">1</span>
                  </div>
                  {/* Enhanced Connector Line */}
                  <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-mh-hunter-green via-mh-leather-tan to-gray-300 dark:to-dark-border rounded-full group-hover:from-mh-leather-tan group-hover:via-mh-hunter-green transition-all duration-500"></div>
                </div>
                <h4 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Consultation</h4>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">AI-powered analysis and detailed project assessment</p>
              </div>

              {/* Enhanced Phase 2 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-mh-hunter-green to-mh-hunter-green/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-mh-leather-tan group-hover:to-mh-leather-tan/80 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                    <span className="text-white text-xl font-bold group-hover:text-black transition-colors duration-300">2</span>
                  </div>
                  {/* Enhanced Connector Line */}
                  <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-mh-hunter-green via-mh-leather-tan to-gray-300 dark:to-dark-border rounded-full group-hover:from-mh-leather-tan group-hover:via-mh-hunter-green transition-all duration-500"></div>
                </div>
                <h4 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Planning & Design</h4>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">Detailed blueprints and 3D visualization development</p>
              </div>

              {/* Enhanced Phase 3 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-mh-hunter-green to-mh-hunter-green/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-mh-leather-tan group-hover:to-mh-leather-tan/80 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                    <span className="text-white text-xl font-bold group-hover:text-black transition-colors duration-300">3</span>
                  </div>
                  {/* Enhanced Connector Line */}
                  <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-mh-hunter-green via-mh-leather-tan to-gray-300 dark:to-dark-border rounded-full group-hover:from-mh-leather-tan group-hover:via-mh-hunter-green transition-all duration-500"></div>
                </div>
                <h4 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Construction</h4>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">Expert execution with real-time progress tracking</p>
              </div>

              {/* Enhanced Phase 4 */}
              <div className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-mh-hunter-green to-mh-hunter-green/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-mh-leather-tan group-hover:to-mh-leather-tan/80 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                    <span className="text-white text-xl font-bold group-hover:text-black transition-colors duration-300">4</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Delivery</h4>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">Final inspection and seamless project handover</p>
              </div>
            </div>

            {/* Enhanced Process CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-dark-text-secondary mb-6">Ready to experience our streamlined process?</p>
              <a
                href="/estimate"
                className="inline-block bg-gradient-to-r from-mh-hunter-green to-mh-hunter-green/80 text-white px-8 py-3 rounded-lg font-semibold hover:from-mh-leather-tan hover:to-mh-leather-tan/80 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project Today
              </a>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-black dark:text-dark-text mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-gray-600 dark:text-dark-text-secondary mb-8 max-w-2xl mx-auto">
                Get a free AI-powered estimate and discover how our veteran-owned team 
                can bring your vision to life with precision and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/estimate"
                  className="bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-mh-hunter-green hover:to-mh-hunter-green/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get AI Estimate
                </a>
                <ScheduleButton variant="primary" size="lg" showIcon={false}>
                  Contact Us
                </ScheduleButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Enhanced Client Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Discover why clients choose MH Construction for their most important projects. 
              Our commitment to excellence speaks through every testimonial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enhanced Client Testimonial 1 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-200 dark:border-dark-border hover:border-mh-hunter-green dark:hover:border-mh-hunter-green">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                  <span className="text-white font-bold text-xl">WC</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-dark-text group-hover:text-mh-hunter-green transition-colors duration-300">Washington County</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Government Client</p>
                  <div className="flex text-mh-leather-tan mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-300" viewBox="0 0 20 20" style={{ transitionDelay: `${i * 50}ms` }}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300 leading-relaxed">
                "MH Construction delivered our new emergency services facility on time and under budget. Their military precision and attention to detail were exactly what we needed for this critical infrastructure project."
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary group-hover:text-mh-hunter-green transition-colors duration-300">
                <svg className="w-4 h-4 mr-2 text-mh-hunter-green group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Emergency Services Facility • $2.8M Project
              </div>
            </div>

            {/* Client Testimonial 2 */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">PH</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-dark-text group-hover:text-mh-leather-tan transition-colors duration-300">Pacific Health Group</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Healthcare Client</p>
                  <div className="flex text-mh-leather-tan mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                "The medical office complex MH Construction built for us exceeds all expectations. They understood the unique requirements of healthcare facilities and delivered exceptional quality and functionality."
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                <svg className="w-4 h-4 mr-2 text-mh-leather-tan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Medical Office Complex • $4.2M Project
              </div>
            </div>

            {/* Client Testimonial 3 */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-hunter-green/80 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">TC</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-dark-text group-hover:text-mh-hunter-green transition-colors duration-300">TechCorp Industries</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Commercial Client</p>
                  <div className="flex text-mh-leather-tan mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                "Our new headquarters showcases MH Construction's expertise in commercial construction. The integration of smart building technology and sustainable design exceeded our vision."
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                <svg className="w-4 h-4 mr-2 text-mh-hunter-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Corporate Headquarters • $6.5M Project
              </div>
            </div>

            {/* Client Testimonial 4 */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">ESD</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-dark-text group-hover:text-mh-hunter-green transition-colors duration-300">Eastside School District</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Educational Client</p>
                  <div className="flex text-mh-leather-tan mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                "MH Construction transformed our aging school facilities with modern, safe, and inspiring learning environments. Their dedication to quality and student safety was evident throughout the project."
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                <svg className="w-4 h-4 mr-2 text-mh-hunter-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Educational Facilities • $8.1M Project
              </div>
            </div>

            {/* Client Testimonial 5 */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">VW</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-dark-text group-hover:text-mh-leather-tan transition-colors duration-300">Valley Winery</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Specialty Client</p>
                  <div className="flex text-mh-leather-tan mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                "Our new winery facility combines traditional craftsmanship with modern technology. MH Construction understood our unique requirements and delivered a space that honors our heritage while embracing innovation."
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                <svg className="w-4 h-4 mr-2 text-mh-leather-tan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Winery & Tasting Room • $3.7M Project
              </div>
            </div>

            {/* Client Testimonial 6 */}
            <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">FM</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-dark-text group-hover:text-mh-hunter-green transition-colors duration-300">Federal Agency</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Government Client</p>
                  <div className="flex text-mh-leather-tan mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                "MH Construction's veteran leadership and security clearance capabilities made them the perfect choice for our sensitive facility. Their understanding of federal requirements and attention to detail was exceptional."
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                <svg className="w-4 h-4 mr-2 text-mh-hunter-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secure Federal Facility • $12.3M Project
              </div>
            </div>
          </div>

          {/* Enhanced Testimonials Statistics */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-mh-hunter-green/5 via-white to-mh-leather-tan/5 border-2 border-mh-hunter-green/20 rounded-xl p-8 max-w-4xl mx-auto shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-mh-leather-tan/40">
              <h3 className="text-2xl font-bold text-black dark:text-dark-text mb-6">Client Satisfaction Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-mh-hunter-green mb-2 group-hover:text-mh-leather-tan transition-colors duration-300">98%</div>
                  <div className="text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">Client Satisfaction Rate</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-mh-leather-tan mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">95%</div>
                  <div className="text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">On-Time Completion</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-mh-hunter-green mb-2 group-hover:text-mh-leather-tan transition-colors duration-300">92%</div>
                  <div className="text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">Repeat Clients</div>
                </div>
              </div>
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
