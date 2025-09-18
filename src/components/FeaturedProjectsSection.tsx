'use client'

import Link from 'next/link'
import Image from 'next/image'

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
    <section className="py-20 bg-light-gray dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-army-black dark:text-dark-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-field-gray dark:text-dark-text-secondary max-w-3xl mx-auto">
            Showcasing our construction excellence across the Pacific Northwest
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flip-card h-96 cursor-pointer"
            >
              <div className="flip-card-inner h-full">
                {/* Front of Card - Image */}
                <div className="flip-card-front relative rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-army-gold dark:bg-army-gold text-army-black dark:text-army-black px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Back of Card - Description */}
                <div className="flip-card-back bg-gradient-to-br from-mh-forest-green to-army-green dark:from-dark-surface-2 dark:to-dark-surface-3 rounded-xl shadow-lg p-6 flex flex-col justify-between text-white dark:text-dark-text">
                  <div>
                    <span className="inline-block bg-army-gold dark:bg-army-gold text-army-black dark:text-army-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 text-army-gold dark:text-army-gold">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 dark:text-dark-text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block w-full bg-army-gold dark:bg-army-gold text-army-black dark:text-army-black text-center py-3 rounded-lg font-semibold hover:bg-yellow-500 dark:hover:bg-yellow-500 transition-colors"
                    >
                      View Project Details
                    </Link>
                    <Link
                      href="/estimate"
                      className="block w-full bg-transparent border-2 border-white dark:border-dark-text text-white dark:text-dark-text text-center py-2 rounded-lg font-semibold hover:bg-white dark:hover:bg-dark-text hover:text-army-black dark:hover:text-army-black transition-colors"
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
            className="inline-block bg-mh-forest-green dark:bg-mh-forest-green text-white dark:text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-army-green dark:hover:bg-army-green transition-colors transform hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectsSection
