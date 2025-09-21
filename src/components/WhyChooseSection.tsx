import { Trophy, Star, Bot, Headphones } from 'lucide-react'

const features = [
  {
    id: 1,
    icon: Trophy,
    title: "150+ Years Experience",
    description: "Combined construction expertise across our team",
    iconVariant: "feature-icon-primary",
    titleVariant: "feature-title-primary",
    animation: "icon-animate-float"
  },
  {
    id: 2,
    icon: Star,
    title: "Veteran Owned",
    description: "Military precision and integrity in every project",
    iconVariant: "feature-icon-secondary",
    titleVariant: "feature-title-secondary",
    animation: "icon-animate-glow"
  },
  {
    id: 3,
    icon: Bot,
    title: "Technology Leader",
    description: "First in the Pacific Northwest with AI estimating",
    iconVariant: "feature-icon-gradient",
    titleVariant: "feature-title-secondary",
    animation: "icon-animate-color-shift"
  },
  {
    id: 4,
    icon: Headphones,
    title: "Project Support",
    description: "Real-time updates and transparent communication",
    iconVariant: "feature-icon-gradient-alt",
    titleVariant: "feature-title-primary",
    animation: "icon-interactive-secondary"
  }
]

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white/25 dark:bg-dark-surface/35 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Why Choose MH Construction?
          </h2>
          <p className="section-subtitle">
            Military precision meets construction innovation
          </p>
        </div>

        {/* Features Grid */}
        <div className="feature-grid">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div key={feature.id} className="feature-card group">
                {/* Icon Container */}
                <div className={`feature-icon-container ${feature.iconVariant}`}>
                  <IconComponent 
                    size={40} 
                    className={`drop-shadow-md icon-hero ${feature.animation}`} 
                  />
                </div>

                {/* Content */}
                <h3 className={`feature-title ${feature.titleVariant}`}>
                  {feature.title}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
