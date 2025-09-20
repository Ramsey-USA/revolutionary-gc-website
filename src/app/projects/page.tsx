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

      {/* Project Statistics */}
      <section className="py-16 bg-white dark:bg-dark-surface-2 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:bg-opacity-90 dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110">
                    <IconComponent size={28} className="text-mh-hunter-green dark:text-mh-hunter-green group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan dark:text-mh-leather-tan mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-medium-gray dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
              Showcasing our construction excellence across diverse project types
            </p>

            {/* Project Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                    selectedCategory === category
                      ? 'bg-mh-leather-tan dark:bg-mh-leather-tan text-white dark:text-white shadow-lg'
                      : 'bg-white dark:bg-dark-surface-2 text-medium-gray dark:text-dark-text border border-gray-300 dark:border-dark-border hover:bg-mh-hunter-green dark:hover:bg-mh-hunter-green hover:text-white dark:hover:text-white hover:border-mh-hunter-green dark:hover:border-mh-hunter-green hover:shadow-md'
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
                <div key={project.id} className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg border border-gray-200 dark:border-dark-border overflow-hidden hover:shadow-2xl hover:border-mh-leather-tan dark:hover:border-mh-leather-tan transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-mh-hunter-green to-mh-leather-tan overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent size={64} className="text-white opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    {/* Project Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-mh-leather-tan dark:bg-mh-leather-tan text-white dark:text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg transition-transform duration-300 group-hover:scale-105">
                        {project.category}
                      </span>
                    </div>
                    {/* Project Details Overlay */}
                    <div className="absolute bottom-4 right-4 text-white dark:text-white text-right">
                      <div className="text-sm opacity-80 transition-opacity duration-300 group-hover:opacity-100">{project.details.year}</div>
                      <div className="text-xs opacity-60 transition-opacity duration-300 group-hover:opacity-80">{project.details.location}</div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-medium-gray dark:text-dark-text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 dark:bg-dark-surface-3 rounded-lg transition-colors duration-300 group-hover:bg-mh-hunter-green/5 dark:group-hover:bg-mh-hunter-green/10">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-mh-hunter-green dark:text-mh-hunter-green">{project.details.size}</div>
                        <div className="text-xs text-medium-gray dark:text-dark-text-secondary">Size</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-mh-hunter-green dark:text-mh-hunter-green">{project.details.duration}</div>
                        <div className="text-xs text-medium-gray dark:text-dark-text-secondary">Duration</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-black dark:text-dark-text text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 bg-mh-leather-tan dark:bg-mh-leather-tan rounded-full transition-transform duration-300 group-hover:scale-125"></div>
                            <span className="text-medium-gray dark:text-dark-text-secondary text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-mh-hunter-green dark:bg-mh-hunter-green text-white dark:text-white py-2 px-4 rounded-lg font-semibold hover:bg-mh-leather-tan dark:hover:bg-mh-leather-tan transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      View Project Details
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Development Process */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white dark:from-dark-surface-2 dark:to-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              From Vision to Reality
            </h2>
            <p className="text-lg text-medium-gray dark:text-dark-text-secondary max-w-2xl mx-auto">
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
              <h3 className="text-lg font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Site Assessment</h3>
              <p className="text-medium-gray dark:text-dark-text-secondary text-sm">Comprehensive site analysis and feasibility studies</p>
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
              <h3 className="text-lg font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Design & Planning</h3>
              <p className="text-medium-gray dark:text-dark-text-secondary text-sm">AI-powered design with 3D visualization and detailed blueprints</p>
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
              <p className="text-medium-gray dark:text-dark-text-secondary text-sm">Navigate regulatory requirements with veteran precision</p>
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
              <p className="text-medium-gray dark:text-dark-text-secondary text-sm">Expert execution with real-time progress monitoring</p>
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
              <p className="text-medium-gray dark:text-dark-text-secondary text-sm">Final inspection and seamless project handover</p>
            </div>
          </div>

          {/* Process CTA */}
          <div className="text-center mt-16">
            <div className="bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-border transition-colors duration-300">
              <h3 className="text-2xl font-bold text-black dark:text-dark-text mb-4">Ready to Start Your Project?</h3>
              <p className="text-medium-gray dark:text-dark-text-secondary mb-6">Experience our proven process with AI-powered planning and military-grade execution</p>
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
