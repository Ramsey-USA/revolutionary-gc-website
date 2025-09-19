import { Trophy, Star, Bot, Headphones } from 'lucide-react'

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white/25 dark:bg-dark-surface/35 backdrop-blur-sm transition-colors duration-300">
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
          <div className="text-center group">
            <div className="bg-army-gold dark:bg-army-gold text-army-black dark:text-army-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg group-hover:shadow-xl group-hover:rotate-6">
              <Trophy size={48} />
            </div>
            <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-army-gold dark:group-hover:text-army-gold transition-colors duration-300">150+ Years Experience</h3>
            <p className="text-field-gray dark:text-dark-text-secondary">Combined construction expertise across our team</p>
          </div>
          <div className="text-center group">
            <div className="bg-mh-hunter-green dark:bg-mh-hunter-green text-white dark:text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg group-hover:shadow-xl group-hover:rotate-6">
              <Star size={48} />
            </div>
            <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">Veteran Owned</h3>
            <p className="text-field-gray dark:text-dark-text-secondary">Military precision and integrity in every project</p>
          </div>
          <div className="text-center group">
            <div className="bg-army-green dark:bg-army-green text-white dark:text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg group-hover:shadow-xl group-hover:rotate-6">
              <Bot size={48} />
            </div>
            <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-army-green dark:group-hover:text-army-green transition-colors duration-300">Technology Leader</h3>
            <p className="text-field-gray dark:text-dark-text-secondary">First in the Pacific Northwest with AI estimating</p>
          </div>
          <div className="text-center group">
            <div className="bg-mh-leather-tan dark:bg-mh-leather-tan text-white dark:text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg group-hover:shadow-xl group-hover:rotate-6">
              <Headphones size={48} />
            </div>
            <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-mh-leather-tan dark:group-hover:text-mh-leather-tan transition-colors duration-300">Project Support</h3>
            <p className="text-field-gray dark:text-dark-text-secondary">Real-time updates and transparent communication</p>
          </div>
        </div>
      </div>
    </section>
  )
}
