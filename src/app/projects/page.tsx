"use client"
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'
import ScheduleButton from '../../components/ScheduleButton'
import { Building, Factory, HeartPulse, Shield, Hammer, MapPin, Clock, Users, Award, Ruler, Grape } from 'lucide-react'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Commercial', 'Industrial', 'Healthcare', 'Emergency Services', 'Specialty']
  const featuredProjects = [
    {
      id: 1,
      title: "Summer's Hub",
      category: "Commercial",
      description: "Modern commercial kitchen and dining facility featuring advanced HVAC systems and premium finishes",
      image: "/images/projects/summers-hub.jpg",
      details: {
        size: "12,000 sq ft",
        duration: "8 months",
        year: "2024",
        location: "Pasco, WA"
      },
      features: ["Commercial Kitchen", "Advanced HVAC", "Premium Finishes", "Dining Facility"],
      icon: Building
    },
    {
      id: 2,
      title: "Yakima Valley Fire Station #10",
      category: "Emergency Services",
      description: "State-of-the-art fire station administration building with specialized emergency services infrastructure",
      image: "/images/projects/fire-station.jpg",
      details: {
        size: "8,500 sq ft",
        duration: "10 months",
        year: "2023",
        location: "Yakima, WA"
      },
      features: ["Emergency Systems", "Administration Building", "Specialized Infrastructure", "Safety Systems"],
      icon: Shield
    },
    {
      id: 3,
      title: "Medical Office Complex",
      category: "Healthcare",
      description: "Healthcare facility with specialized medical systems and patient-focused design",
      image: "/images/projects/medical-office.jpg",
      details: {
        size: "15,000 sq ft",
        duration: "12 months",
        year: "2023",
        location: "Richland, WA"
      },
      features: ["Medical Systems", "Patient-Focused Design", "Healthcare Compliance", "Specialized Equipment"],
      icon: HeartPulse
    },
    {
      id: 4,
      title: "Religious Center",
      category: "Specialty",
      description: "Community worship space combining traditional architecture with modern construction techniques",
      image: "/images/projects/religious-center.jpg",
      details: {
        size: "6,000 sq ft",
        duration: "6 months",
        year: "2022",
        location: "Kennewick, WA"
      },
      features: ["Traditional Architecture", "Modern Techniques", "Community Space", "Acoustic Design"],
      icon: Building
    },
    {
      id: 5,
      title: "Industrial Warehouse",
      category: "Industrial",
      description: "Large-scale industrial facility with advanced logistics and safety systems",
      image: "/images/projects/warehouse.jpg",
      details: {
        size: "50,000 sq ft",
        duration: "14 months",
        year: "2023",
        location: "Pasco, WA"
      },
      features: ["Logistics Systems", "Safety Infrastructure", "Large-Scale Construction", "Industrial Equipment"],
      icon: Factory
    },
    {
      id: 6,
      title: "Winery Facility",
      category: "Specialty",
      description: "Specialized wine production facility with climate-controlled environments and premium finishes",
      image: "/images/projects/winery.jpg",
      details: {
        size: "10,000 sq ft",
        duration: "9 months",
        year: "2022",
        location: "Walla Walla, WA"
      },
      features: ["Climate Control", "Production Facility", "Premium Finishes", "Specialized Systems"],
      icon: Grape
    }
  ]

  const projectStats = [
    { label: "Projects Completed", value: "500+", icon: Building },
    { label: "Square Feet Built", value: "2M+", icon: Hammer },
    { label: "Happy Clients", value: "450+", icon: Users },
    { label: "Industry Awards", value: "25+", icon: Award }
  ]

  return (
    <main className="min-h-screen pt-20 bg-white dark:bg-dark-surface transition-colors duration-300">
      <Header />
      
      <UniversalHeroSection
        title="Our Construction"
        titleHighlight="Portfolio"
        subtitle="Showcasing 150+ years of combined expertise across commercial, industrial, healthcare, and specialty construction projects throughout the Pacific Northwest"
        primaryButton={{
          text: "View Featured Projects",
          href: "#featured-projects"
        }}
        secondaryButton={{
          text: "Get Project Estimate",
          href: "/estimate"
        }}
      />

      {/* Enhanced Project Statistics */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-mh-hunter-green/10 to-mh-hunter-green/5 dark:from-mh-hunter-green/20 dark:to-mh-hunter-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:from-mh-leather-tan group-hover:to-mh-leather-tan/80 dark:group-hover:from-mh-leather-tan dark:group-hover:to-mh-leather-tan/80 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-2xl">
                    <IconComponent size={28} className="text-mh-hunter-green dark:text-mh-hunter-green group-hover:text-white dark:group-hover:text-white transition-colors duration-300 group-hover:scale-110" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan dark:text-mh-leather-tan mb-1 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary group-hover:text-black dark:group-hover:text-dark-text transition-colors duration-300">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mh-hunter-green dark:text-dark-text mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
              Showcasing our construction excellence across diverse project types
            </p>

            {/* Enhanced Project Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 text-white shadow-lg scale-105'
                      : 'bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-dark-text border border-gray-300 dark:border-dark-border hover:from-mh-hunter-green hover:to-mh-hunter-green/80 hover:text-white hover:border-mh-hunter-green'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects
              .filter(project => selectedCategory === 'All' || project.category === selectedCategory)
              .map((project) => {
              const IconComponent = project.icon
              
              return (
                <div key={project.id} className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-dark-border overflow-hidden hover:shadow-2xl hover:border-mh-leather-tan dark:hover:border-mh-leather-tan transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                  {/* Enhanced Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-mh-hunter-green via-gray-800 to-mh-leather-tan overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent size={64} className="text-white/50 group-hover:text-white/80 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    {/* Enhanced Project Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                        {project.category}
                      </span>
                    </div>
                    {/* Enhanced Project Details Overlay */}
                    <div className="absolute bottom-4 right-4 text-white text-right">
                      <div className="text-sm opacity-80 transition-opacity duration-300 group-hover:opacity-100 font-medium">{project.details.year}</div>
                      <div className="text-xs opacity-60 transition-opacity duration-300 group-hover:opacity-80">{project.details.location}</div>
                    </div>
                    {/* Accent line on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>

                  {/* Enhanced Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-mh-hunter-green dark:text-dark-text mb-2 group-hover:text-mh-leather-tan dark:group-hover:text-mh-leather-tan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-dark-text-secondary mb-4 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Enhanced Project Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg transition-all duration-300 group-hover:from-mh-hunter-green/5 group-hover:to-mh-leather-tan/5 border border-gray-200 dark:border-gray-700 group-hover:border-mh-hunter-green/20">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-mh-hunter-green dark:text-mh-hunter-green group-hover:text-mh-leather-tan transition-colors duration-300">{project.details.size}</div>
                        <div className="text-xs text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">Size</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-mh-hunter-green dark:text-mh-hunter-green group-hover:text-mh-leather-tan transition-colors duration-300">{project.details.duration}</div>
                        <div className="text-xs text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-800 dark:group-hover:text-dark-text transition-colors duration-300">Duration</div>
                      </div>
                    </div>

                    {/* Enhanced Key Features */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-mh-hunter-green dark:text-dark-text text-sm group-hover:text-mh-leather-tan transition-colors duration-300">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                            <div className="w-2 h-2 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full transition-all duration-300 group-hover:scale-125 group-hover:shadow-sm"></div>
                            <span className="text-gray-600 dark:text-dark-text-secondary text-xs group-hover:text-gray-800 dark:group-hover:text-dark-text group-hover:font-medium transition-all duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Action Button */}
                    <button className="btn btn-primary w-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Project Details
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Project Development Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mh-hunter-green dark:text-dark-text mb-4">
              From Vision to Reality
            </h2>
            <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
              Our proven project development process ensures every build meets military-grade standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Phase 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-mh-hunter-green dark:bg-mh-hunter-green rounded-full flex items-center justify-center mx-auto group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:rotate-6">
                  <MapPin size={32} className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-mh-leather-tan rounded-full flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">1</div>
                {/* Connector Line */}
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-mh-hunter-green to-gray-300 dark:from-mh-hunter-green dark:to-dark-border"></div>
              </div>
              <h3 className="text-lg font-bold text-mh-hunter-green dark:text-dark-text mb-2 group-hover:text-mh-leather-tan transition-colors duration-300">Site Assessment</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Comprehensive site analysis and feasibility studies</p>
            </div>

            {/* Phase 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-mh-hunter-green dark:bg-mh-hunter-green rounded-full flex items-center justify-center mx-auto group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:rotate-6">
                  <Building size={32} className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-mh-leather-tan rounded-full flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">2</div>
                {/* Connector Line */}
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-mh-hunter-green to-gray-300 dark:from-mh-hunter-green dark:to-dark-border"></div>
              </div>
              <h3 className="text-lg font-bold text-mh-hunter-green dark:text-dark-text mb-2 group-hover:text-mh-leather-tan transition-colors duration-300">Design & Planning</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary text-sm">AI-powered design with 3D visualization and detailed blueprints</p>
            </div>

            {/* Phase 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-mh-hunter-green dark:bg-mh-hunter-green rounded-full flex items-center justify-center mx-auto group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:rotate-6">
                  <Shield size={32} className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-mh-leather-tan rounded-full flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">3</div>
                {/* Connector Line */}
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-mh-hunter-green to-gray-300 dark:from-mh-hunter-green dark:to-dark-border"></div>
              </div>
              <h3 className="text-lg font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Permits & Approval</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Navigate regulatory requirements with veteran precision</p>
            </div>

            {/* Phase 4 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-mh-hunter-green dark:bg-mh-hunter-green rounded-full flex items-center justify-center mx-auto group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:rotate-6">
                  <Hammer size={32} className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-mh-leather-tan rounded-full flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">4</div>
                {/* Connector Line */}
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-mh-hunter-green to-gray-300 dark:from-mh-hunter-green dark:to-dark-border"></div>
              </div>
              <h3 className="text-lg font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Construction</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Expert execution with real-time progress monitoring</p>
            </div>

            {/* Phase 5 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-mh-hunter-green dark:bg-mh-hunter-green rounded-full flex items-center justify-center mx-auto group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:rotate-6">
                  <Award size={32} className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-mh-leather-tan rounded-full flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">5</div>
              </div>
              <h3 className="text-lg font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Quality Delivery</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Final inspection and seamless project handover</p>
            </div>
          </div>

          {/* Process CTA */}
          <div className="text-center mt-16">
            <div className="bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-border transition-colors duration-300">
              <h3 className="text-2xl font-bold text-black dark:text-dark-text mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-6">Experience our proven process with AI-powered planning and military-grade execution</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/estimate"
                  className="bg-mh-leather-tan text-white px-8 py-3 rounded-lg font-semibold hover:bg-mh-hunter-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg"
                >
                  Get AI Estimate
                </a>
                <ScheduleButton variant="primary" size="md" showIcon={false}>
                  Schedule Consultation
                </ScheduleButton>
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
