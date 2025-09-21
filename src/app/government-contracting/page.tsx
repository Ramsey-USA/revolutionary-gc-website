import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import GovernmentContractingClient from './GovernmentContractingClient'
import UniversalHeroSection from '../../components/UniversalHeroSection'

export const metadata: Metadata = {
  title: 'Government Contracting | MH Construction',
  description: 'MH Construction specializes in federal government contracts with security clearances and experience across federal, military, and municipal projects.',
  keywords: 'government contracting, federal construction, military construction'
}

export default function GovernmentContractingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <UniversalHeroSection
        title="Government"
        titleHighlight="Contracting"
        subtitle="Veteran-led, security-cleared expertise delivering compliant, mission-focused construction for federal, state, and municipal agencies."
        primaryButton={{ text: 'Schedule Consultation', href: '#schedule-consultation' }}
        secondaryButton={{ text: 'Our Capabilities', href: '#gov-capabilities' }}
      />
      <GovernmentContractingClient />
      <div className="mt-auto">
        <WhyChooseSection />
        <Footer />
      </div>
    </main>
  )
}