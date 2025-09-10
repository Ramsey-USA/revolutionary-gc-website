import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-army-black mb-8">
              Our Projects
            </h1>
            <p className="text-xl text-field-gray max-w-3xl mx-auto mb-16">
              Explore our portfolio of construction excellence across the Pacific Northwest
            </p>
            <div className="bg-light-gray p-8 rounded-lg">
              <p className="text-lg text-field-gray">
                Detailed project pages coming soon. This will showcase our featured projects 
                with detailed descriptions, photos, and project specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
  <div className="mt-auto">
    <WhyChooseSection />
    <Footer />
  </div>
    </main>
  )
}
