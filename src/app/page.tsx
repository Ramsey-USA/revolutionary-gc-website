"use client"
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AIToolsSection from '../components/AIToolsSection'
import CoreValuesSection from '../components/CoreValuesSection'
import FeaturedProjectsSection from '../components/FeaturedProjectsSection'
import BlogNewsSection from '../components/BlogNewsSection'
import Footer from '../components/Footer'
import WhyChooseSection from '../components/WhyChooseSection'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      <HeroSection />
      <AIToolsSection />
      <CoreValuesSection />
      <FeaturedProjectsSection />
      <BlogNewsSection />
      <div className="mt-auto">
        <WhyChooseSection />
        <Footer />
      </div>
    </main>
  )
}
