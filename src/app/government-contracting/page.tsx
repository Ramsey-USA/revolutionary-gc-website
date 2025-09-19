import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import GovernmentContractingClient from './GovernmentContractingClient'

export const metadata: Metadata = {
  title: 'Government Contracting | MH Construction',
  description: 'MH Construction specializes in federal government contracts with security clearances, CAGE codes, and extensive experience in military, federal, and municipal construction projects.',
  keywords: 'government contracting, federal contracts, military construction, CAGE code, security clearance, GSA schedule, government projects, federal compliance',
}

export default function GovernmentContractingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-surface transition-colors duration-300">
      <Header />
      <GovernmentContractingClient />
      <div className="mt-auto">
        <WhyChooseSection />
        <Footer />
      </div>
    </main>
  )
}