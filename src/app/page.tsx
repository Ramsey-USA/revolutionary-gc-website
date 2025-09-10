import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AIToolsSection from '../components/AIToolsSection'
import CoreValuesSection from '../components/CoreValuesSection'
import FeaturedProjectsSection from '../components/FeaturedProjectsSection'
import BlogNewsSection from '../components/BlogNewsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AIToolsSection />
      <CoreValuesSection />
      <FeaturedProjectsSection />
      <BlogNewsSection />
      <Footer />
    </main>
  )
}
