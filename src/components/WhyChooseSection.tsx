import { Trophy, Star, Bot, Headphones } from 'lucide-react'

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white/25 dark:bg-dark-surface/35 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-4">
            Why Choose MH Construction?
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
            Military precision meets construction innovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-mh-leather-tan to-mh-leather-tan/80 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg group-hover:shadow-xl group-hover:rotate-6 border-2 border-mh-leather-tan/20 group-hover:border-mh-leather-tan/40">
              <Trophy size={40} className="drop-shadow-md" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-leather-tan dark:group-hover:text-mh-leather-tan transition-colors duration-300">150+ Years Experience</h3>
            <p className="text-gray-600 dark:text-dark-text-secondary">Combined construction expertise across our team</p>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-mh-hunter-green to-mh-hunter-green/80 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg group-hover:shadow-xl group-hover:rotate-6 border-2 border-mh-hunter-green/20 group-hover:border-mh-hunter-green/40">
              <Star size={40} className="drop-shadow-md" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">Veteran Owned</h3>
            <p className="text-gray-600 dark:text-dark-text-secondary">Military precision and integrity in every project</p>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-mh-hunter-green to-mh-leather-tan text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg group-hover:shadow-xl group-hover:rotate-6 border-2 border-mh-hunter-green/20 group-hover:border-mh-leather-tan/40">
              <Bot size={40} className="drop-shadow-md" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">Technology Leader</h3>
            <p className="text-gray-600 dark:text-dark-text-secondary">First in the Pacific Northwest with AI estimating</p>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-mh-leather-tan to-mh-hunter-green text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg group-hover:shadow-xl group-hover:rotate-6 border-2 border-mh-leather-tan/20 group-hover:border-mh-hunter-green/40">
              <Headphones size={40} className="drop-shadow-md" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-leather-tan dark:group-hover:text-mh-leather-tan transition-colors duration-300">Project Support</h3>
            <p className="text-gray-600 dark:text-dark-text-secondary">Real-time updates and transparent communication</p>
          </div>
        </div>
      </div>
    </section>
  )
}
