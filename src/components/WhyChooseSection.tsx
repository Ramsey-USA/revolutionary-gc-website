import { Trophy, Star, Bot, Headphones } from 'lucide-react'

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-light-gray dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-army-black dark:text-dark-text mb-4">
            Why Choose MH Construction?
          </h2>
          <p className="text-xl text-field-gray dark:text-dark-text-secondary max-w-3xl mx-auto">
            Military precision meets construction innovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-army-gold dark:bg-army-gold text-army-black dark:text-army-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
              <Trophy size={48} />
            </div>
            <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-2">150+ Years Experience</h3>
            <p className="text-field-gray dark:text-dark-text-secondary">Combined construction expertise across our team</p>
          </div>
          <div className="text-center">
            <div className="bg-mh-forest-green dark:bg-mh-forest-green text-white dark:text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
              <Star size={48} />
            </div>
            <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-2">Veteran Owned</h3>
            <p className="text-field-gray dark:text-dark-text-secondary">Military precision and integrity in every project</p>
          </div>
          <div className="text-center">
            <div className="bg-army-green dark:bg-army-green text-white dark:text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
              <Bot size={48} />
            </div>
            <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-2">Technology Leader</h3>
            <p className="text-field-gray dark:text-dark-text-secondary">First in the Pacific Northwest with AI estimating</p>
          </div>
          <div className="text-center">
            <div className="bg-mh-warm-tan dark:bg-mh-warm-tan text-white dark:text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
              <Headphones size={48} />
            </div>
            <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-2">Project Support</h3>
            <p className="text-field-gray dark:text-dark-text-secondary">Real-time updates and transparent communication</p>
          </div>
        </div>
      </div>
    </section>
  )
}
