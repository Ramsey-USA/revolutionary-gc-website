'use client'

import { Scale, Wrench, Shield, Heart, Handshake, Briefcase } from 'lucide-react'

const CoreValuesSection = () => {
  const values = [
    {
      icon: Scale,
      title: "Ethics",
      description: "Rooted in small-town values, we believe in doing what's right. Honesty, transparency, and accountability are the minimum standard in every interaction. We operate with unwavering ethical standards in every aspect of our business.",
      color: "text-mh-leather-tan",
      bgGradient: "from-mh-leather-tan/10 to-mh-leather-tan/5",
      hoverBg: "group-hover:from-mh-leather-tan/20 group-hover:to-mh-leather-tan/10"
    },
    {
      icon: Wrench,
      title: "Experience", 
      description: "Decades of combined construction expertise backed by military precision. Our team brings extensive knowledge from residential to commercial projects, ensuring your vision becomes reality with proven techniques.",
      color: "text-mh-hunter-green",
      bgGradient: "from-mh-hunter-green/10 to-mh-hunter-green/5",
      hoverBg: "group-hover:from-mh-hunter-green/20 group-hover:to-mh-hunter-green/10"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Our word is our bond highlights the heart of MH Construction. We maintain transparency in all communications, deliver on our promises, and take full responsibility for our work. Building long-lasting trust through consistent actions.",
      color: "text-mh-leather-tan",
      bgGradient: "from-mh-leather-tan/10 to-mh-leather-tan/5",
      hoverBg: "group-hover:from-mh-leather-tan/20 group-hover:to-mh-leather-tan/10"
    },
    {
      icon: Heart,
      title: "Honesty",
      description: "Open, direct communication is the foundation of successful projects. We provide honest assessments, realistic timelines, and transparent pricing. No hidden costs, no surprises—just straightforward, truthful partnership.",
      color: "text-mh-hunter-green",
      bgGradient: "from-mh-hunter-green/10 to-mh-hunter-green/5",
      hoverBg: "group-hover:from-mh-hunter-green/20 group-hover:to-mh-hunter-green/10"
    },
    {
      icon: Handshake,
      title: "Trust",
      description: "Trust is built through consistent performance and reliability. We earn your confidence by showing up when promised, staying within budget, and delivering quality that exceeds expectations on every project.",
      color: "text-mh-leather-tan",
      bgGradient: "from-mh-leather-tan/10 to-mh-leather-tan/5",
      hoverBg: "group-hover:from-mh-leather-tan/20 group-hover:to-mh-leather-tan/10"
    },
    {
      icon: Briefcase,
      title: "Professionalism",
      description: "Military-grade professionalism in every interaction. From our initial consultation to project completion, we maintain the highest standards of conduct, punctuality, and respect for your property and schedule.",
      color: "text-mh-hunter-green",
      bgGradient: "from-mh-hunter-green/10 to-mh-hunter-green/5",
      hoverBg: "group-hover:from-mh-hunter-green/20 group-hover:to-mh-hunter-green/10"
    }
  ]

  return (
    <section className="py-20 bg-white/25 dark:bg-dark-surface/35 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
            Military precision meets construction excellence
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            
            return (
              <div key={index} className="flip-card h-80 group">
                <div className="flip-card-inner h-full">
                  {/* Front of Card - Enhanced Design */}
                  <div className={`flip-card-front bg-gradient-to-br ${value.bgGradient} ${value.hoverBg} backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 transition-all duration-500 group-hover:scale-105`}>
                    <div className={`p-4 rounded-full bg-gradient-to-br ${value.bgGradient} shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={48} className={value.color} />
                    </div>
                    <h3 className={`text-2xl font-bold ${value.color} text-center leading-tight mb-3`}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                      Hover to discover our commitment
                    </p>
                  </div>

                  {/* Back of Card - Enhanced Design */}
                  <div className={`flip-card-back bg-gradient-to-br ${value.bgGradient} ${value.hoverBg} backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col justify-center border border-gray-200 dark:border-gray-700`}>
                    <div className={`p-3 rounded-full bg-gradient-to-br ${value.bgGradient} shadow-lg mb-4 mx-auto w-fit`}>
                      <IconComponent size={32} className={value.color} />
                    </div>
                    <h3 className={`text-xl font-bold ${value.color} mb-4 text-center`}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-lg text-medium-gray dark:text-dark-text-secondary max-w-4xl mx-auto">
            These values guide every decision we make, from project planning to final delivery. 
            When you choose MH Construction, you're choosing a partner committed to excellence, 
            innovation, and integrity.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CoreValuesSection
