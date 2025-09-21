'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const FeaturedProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Summer's Hub",
      description: "Modern commercial kitchen and dining facility featuring advanced HVAC systems and premium finishes",
      image: "/images/projects/summers-hub.jpg",
      category: "Commercial",
      slug: "summers-hub"
    },
    {
      id: 2,
      title: "Yakima Valley Fire Station #10",
      description: "State-of-the-art fire station administration building with specialized emergency services infrastructure",
      image: "/images/projects/fire-station.jpg",
      category: "Public Safety",
      slug: "yakima-fire-station"
    },
    {
      id: 3,
      title: "Medical Office Complex",
      description: "Healthcare facility with specialized medical systems and patient-focused design",
      image: "/images/projects/medical-office.jpg",
      category: "Healthcare",
      slug: "medical-office-complex"
    },
    {
      id: 4,
      title: "Religious Center",
      description: "Community worship space combining traditional architecture with modern construction techniques",
      image: "/images/projects/religious-center.jpg",
      category: "Community",
      slug: "religious-center"
    },
    {
      id: 5,
      title: "Industrial Warehouse",
      description: "Large-scale industrial facility with advanced logistics and safety systems",
      image: "/images/projects/industrial-warehouse.jpg",
      category: "Industrial",
      slug: "industrial-warehouse"
    },
    {
      id: 6,
      title: "Winery Facility",
      description: "Specialized wine production facility with climate-controlled environments and premium finishes",
      image: "/images/projects/winery.jpg",
      category: "Specialty",
      slug: "winery-facility"
    }
  ]

  return (
    <section className="py-20 bg-white/25 dark:bg-dark-surface/35 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
            Showcasing our construction excellence across the Pacific Northwest
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flip-card h-96 cursor-pointer group"
            >
              <div className="flip-card-inner h-full">
                {/* Front of Card - Enhanced Image */}
                <div className="flip-card-front relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                  <div className="relative h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    {/* Enhanced overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-mh-leather-tan drop-shadow-lg">
                        {project.title}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full mt-2 transform group-hover:w-32 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Back of Card - Enhanced Description */}
                <div className="flip-card-back bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 text-mh-hunter-green dark:text-mh-leather-tan">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn btn-primary block w-full text-center"
                    >
                      View Project Details
                    </Link>
                    <Link
                      href="/estimate"
                      className="btn btn-outline block w-full text-center"
                    >
                      Get Similar Estimate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="btn btn-secondary inline-flex items-center"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2 icon-action icon-animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectsSection
