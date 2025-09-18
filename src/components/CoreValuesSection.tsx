'use client'

import { Scale, Wrench, Shield, Heart, Handshake, Briefcase } from 'lucide-react'
import styles from '../styles/ProtectiveCase.module.css'

const CoreValuesSection = () => {
  const values = [
    {
      icon: Scale,
      title: "Ethics",
      description: "Rooted in small-town values, we believe in doing what's right. Honesty, transparency, and accountability are the minimum standard in every interaction. We operate with unwavering ethical standards in every aspect of our business. From fair pricing to honest timelines, we ensure that every decision reflects our commitment to doing what's right for our clients and community.",
      color: "text-army-gold"
    },
    {
      icon: Wrench,
      title: "Experience", 
      description: "Decades of combined construction expertise backed by military precision. Our team brings extensive knowledge from residential to commercial projects, ensuring your vision becomes reality with proven techniques and innovative solutions.",
      color: "text-mh-forest-green"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Our word is our bond highlights the heart of MH Construction. We maintain transparency in all communications, deliver on our promises, and take full responsibility for our work. By consistently doing what's right - even when on one is watching - we build long lasting trust with our clients and within our team.",
      color: "text-mh-warm-tan"
    },
    {
      icon: Heart,
      title: "Honesty",
      description: "Open, direct communication is the foundation of successful projects. We provide honest assessments, realistic timelines, and transparent pricing. No hidden costs, no surprises—just straightforward, truthful partnership. Honesty isn't just a policy; it's the foundation of our client relationships.",
      color: "text-army-green"
    },
    {
      icon: Handshake,
      title: "Trust",
      description: "Trust is built through consistent performance and reliability. We earn your confidence by showing up when promised, staying within budget, and delivering quality that exceeds expectations on every project.",
      color: "text-field-tan"
    },
    {
      icon: Briefcase,
      title: "Professionalism",
      description: "Military-grade professionalism in every interaction. From our initial consultation to project completion, we maintain the highest standards of conduct, punctuality, and respect for your property and schedule.",
      color: "text-army-gold"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
