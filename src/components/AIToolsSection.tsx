'use client'

import Link from 'next/link'
import { Calculator, Wrench, Eye } from 'lucide-react'

const AIToolsSection = () => {
  const tools = [
    {
      icon: Calculator,
      title: "AI Project Estimator",
      description: "Get accurate cost estimates and comprehensive project timelines in minutes. Our AI analyzes your project requirements and provides detailed phase-by-phase breakdowns with ±5% accuracy.",
      ctaText: "Start Your Estimate",
      ctaLink: "/estimate",
      gradient: "from-mh-hunter-green via-mh-hunter-green/90 to-mh-leather-tan",
      iconBg: "bg-mh-leather-tan/20 group-hover:bg-mh-leather-tan/30",
      hoverColor: "group-hover:text-mh-leather-tan"
    },
    {
      icon: Wrench,
      title: "Interactive Project Sandbox",
      description: "Build your project virtually before construction begins. Drag and drop walls, doors, windows, and finishes while watching costs update in real-time.",
      ctaText: "Build Virtually",
      ctaLink: "/sandbox",
      gradient: "from-mh-leather-tan via-mh-leather-tan/90 to-mh-hunter-green",
      iconBg: "bg-mh-hunter-green/20 group-hover:bg-mh-hunter-green/30",
      hoverColor: "group-hover:text-mh-hunter-green"
    },
    {
      icon: Eye,
      title: "3D Project Explorer",
      description: "Tour our completed projects in immersive 3D detail. Click on any element to discover the builder's insights and learn why we made each construction decision.",
      ctaText: "Explore Projects",
      ctaLink: "/3d-explorer",
      gradient: "from-mh-hunter-green via-mh-leather-tan/80 to-mh-leather-tan",
      iconBg: "bg-white/20 group-hover:bg-white/30",
      hoverColor: "group-hover:text-white"
    }
  ]

  return (
    <section className="py-20 bg-white/25 dark:bg-dark-surface/35 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-4">
            Revolutionary AI-Powered Tools
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
            Experience construction planning like never before with cutting-edge technology
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 border border-gray-100 dark:border-dark-border hover:shadow-2xl hover:border-mh-leather-tan dark:hover:border-mh-leather-tan group flex flex-col h-full hover:-translate-y-2"
              >
                {/* Card Header with Icon */}
                <div className={`bg-gradient-to-br ${tool.gradient} p-6 text-white transition-all duration-300 group-hover:brightness-110 relative overflow-hidden`}>
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  <div className={`relative flex items-center justify-center w-16 h-16 ${tool.iconBg} rounded-full mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border border-white/20 group-hover:border-white/30 backdrop-blur-sm`}>
                    <IconComponent size={32} className="drop-shadow-md" />
                  </div>
                  <h3 className="relative text-2xl font-bold text-center text-white drop-shadow-md">{tool.title}</h3>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow bg-white dark:bg-dark-surface-2">
                  <p className="text-gray-600 dark:text-dark-text-secondary mb-6 leading-relaxed flex-grow">
                    {tool.description}
                  </p>
                  
                  <Link
                    href={tool.ctaLink}
                    className="block w-full bg-mh-hunter-green hover:bg-mh-leather-tan text-white hover:text-white text-center py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 mt-auto shadow-md hover:shadow-lg"
                  >
                    {tool.ctaText}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary mb-6">
            Ready to revolutionize your construction project with AI?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-mh-leather-tan hover:bg-mh-hunter-green text-white hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
          >
            <span>Schedule a Demo</span>
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AIToolsSection
