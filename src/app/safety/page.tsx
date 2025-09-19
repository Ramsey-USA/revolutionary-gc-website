import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import SafetyClient from './SafetyClient'

export const metadata: Metadata = {
  title: 'Safety Excellence | MH Construction',
  description: 'Discover MH Construction\'s commitment to safety excellence through awards, certifications, OSHA compliance, and proven safety protocols. Building safely for our team and clients.',
  keywords: 'construction safety, OSHA compliance, safety awards, safety certifications, workplace safety, construction protocols, safety excellence',
}

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-surface transition-colors duration-300">
      <Header />
      <SafetyClient />
      <div className="mt-auto">
        <WhyChooseSection />
        <Footer />
      </div>
    </main>
  )
}