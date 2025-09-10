import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-r from-army-green to-mh-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Careers at MH Construction</h1>
          <p className="text-xl mb-8 leading-relaxed">
            Join our veteran-owned team and help build the future of construction. We are always looking for skilled professionals who share our commitment to excellence, innovation, and military-grade precision.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-army-black mb-8 text-center">Apply Now</h2>
          <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-army-black mb-2">Full Name *</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green" placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-army-black mb-2">Email Address *</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-army-black mb-2">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green" placeholder="(509) 555-0123" />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-army-black mb-2">Position Interested In *</label>
              <input type="text" id="position" name="position" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green" placeholder="e.g. Project Manager, Estimator, Superintendent" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-army-black mb-2">Tell Us About Yourself *</label>
              <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green" placeholder="Share your experience, skills, and why you want to join MH Construction..." />
            </div>
            <button type="submit" className="w-full bg-army-gold text-army-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors">Submit Application</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}
