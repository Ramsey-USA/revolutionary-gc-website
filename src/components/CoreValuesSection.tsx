'use client'

import { Lightbulb, Shield, Users, Award, MessageCircle } from 'lucide-react'
import styles from '../styles/ProtectiveCase.module.css'

const CoreValuesSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
  description: "We lead with innovation—bringing AI-powered estimating and 3D visualization to every project. As pioneers in the Pacific Northwest, we build the future of construction.",
      color: "text-army-gold"
    },
    {
      icon: Shield,
      title: "Veteran Excellence",
      description: "Our veteran-owned foundation brings military precision, integrity, and attention to detail to every project. We understand the importance of mission completion, timeline adherence, and exceeding expectations.",
      color: "text-mh-forest-green"
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We believe in true collaboration throughout the construction process. Our transparent approach includes real-time project updates, detailed cost breakdowns, and open communication every step of the way.",
      color: "text-mh-warm-tan"
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
  description: "We use premium materials and proven techniques. Every project reflects our commitment to durability, functionality, and lasting excellence.",
      color: "text-army-green"
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "No surprises, no hidden costs, no communication gaps. Our clients receive detailed explanations of every construction decision we make.",
      color: "text-field-tan"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-army-black mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-field-gray max-w-3xl mx-auto">
            Military precision meets construction excellence
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            
            return (
              <div key={index} className="flip-card h-80">
                <div className="flip-card-inner h-full">
                  {/* Front of Card - Hybrid Protective Case (simplified) */}
                  <div className={`flip-card-front ${styles.protectiveCase} bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center border border-gray-200`}>
                    <div className={`${value.color} mb-6`}>
                      <IconComponent size={48} />
                    </div>
                    <h3 className="text-xl font-bold text-army-gold text-center leading-tight drop-shadow-sm">
                      {value.title}
                    </h3>
                  </div>

                  {/* Back of Card - Hybrid Protective Case (simplified) */}
                  <div className={`flip-card-back ${styles.protectiveCase} bg-gradient-to-br from-mh-forest-green to-army-green rounded-xl shadow-lg p-6 flex flex-col justify-center text-white`}>
                    <div className="text-army-gold mb-4 flex justify-center">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-center text-army-gold">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-center">
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
          <p className="text-lg text-field-gray max-w-4xl mx-auto">
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
