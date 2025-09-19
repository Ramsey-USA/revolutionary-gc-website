'use client'

import Link from 'next/link'
import { Calculator, Wrench, Eye } from 'lucide-react'

const AIToolsSection = () => {
  const tools = [
    {
      icon: Calculator,
      title: "AI Project Estimator",
      description: "Get accurate cost estimates and comprehensive project timelines in minutes. Our AI analyzes your project requirements and provides detailed phase-by-phase breakdowns with 15% accuracy.",
      ctaText: "Start Your Estimate",
      ctaLink: "/estimate",
      gradient: "from-mh-hunter-green to-army-green"
    },
    {
      icon: Wrench,
      title: "Interactive Project Sandbox",
      description: "Build your project virtually before construction begins. Drag and drop walls, doors, windows, and finishes while watching costs update in real-time.",
      ctaText: "Build Virtually",
      ctaLink: "/sandbox",
      gradient: "from-mh-leather-tan to-field-tan"
    },
    {
      icon: Eye,
      title: "3D Project Explorer",
      description: "Tour our completed projects in immersive 3D detail. Click on any element to discover the builder's insights and learn why we made each construction decision.",
      ctaText: "Explore Projects",
      ctaLink: "/3d-explorer",
      gradient: "from-mh-hunter-green to-army-black"
    }
  ]

  return (
    <section className="py-20 bg-white/45 dark:bg-dark-surface/55 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-army-black dark:text-dark-text mb-4">
            Revolutionary AI-Powered Tools
          </h2>
          <p className="text-xl text-field-gray dark:text-dark-text-secondary max-w-3xl mx-auto">
            Experience construction planning like never before
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 border dark:border-dark-border hover:shadow-xl group flex flex-col h-full"
              >
                {/* Card Header with Icon */}
                <div className={`bg-gradient-to-r ${tool.gradient} p-6 text-white transition-all duration-300 group-hover:brightness-110`}>
                  <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-center text-white dark:text-white">{tool.title}</h3>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-field-gray dark:text-dark-text-secondary mb-6 leading-relaxed flex-grow">
                    {tool.description}
                  </p>
                  
                  <Link
                    href={tool.ctaLink}
                    className="block w-full bg-army-black dark:bg-dark-surface-3 text-white dark:text-dark-text text-center py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 mt-auto"
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
          <p className="text-lg text-field-gray dark:text-dark-text-secondary mb-6">
            Ready to revolutionize your construction project?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-mh-hunter-green dark:bg-mh-hunter-green text-white dark:text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-army-green dark:hover:bg-army-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AIToolsSection
