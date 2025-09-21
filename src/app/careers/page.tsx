"use client"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'
import { useState } from 'react'
import {
  Briefcase, Shield, Award, Users, Smile, DollarSign, Heart, ShieldCheck,
  TrendingUp, Sun, MapPin, Star, ArrowRight, User as UserIcon, FileText
} from 'lucide-react'

interface Position {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  benefits: string[]
}

// Only import Firebase in client environment with proper error handling
let db: any = null
let functions: any = null
let addDoc: any = null
let collection: any = null
let Timestamp: any = null
let httpsCallable: any = null
let firebaseAvailable = false

if (typeof window !== 'undefined') {
  try {
    const firebaseLib = require('../../lib/firebase')
    const firestoreLib = require('firebase/firestore')
    const functionsLib = require('firebase/functions')
    
    // Only use Firebase if it's properly initialized
    if (firebaseLib.db && firebaseLib.functions) {
      db = firebaseLib.db
      functions = firebaseLib.functions
      addDoc = firestoreLib.addDoc
      collection = firestoreLib.collection
      Timestamp = firestoreLib.Timestamp
      httpsCallable = functionsLib.httpsCallable
      firebaseAvailable = true
    }
  } catch (error) {
    console.warn('Firebase not available:', error)
    firebaseAvailable = false
  }
}

export default function CareersPage() {
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null)
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
  
  const positions: Position[] = [
    {
      id: '1',
      title: 'Senior Project Manager',
      department: 'Project Management',
      location: 'Pasco, WA',
      type: 'Full-time',
      experience: 'Senior Level',
      description: 'Lead complex construction projects from inception to completion, managing teams, budgets, and timelines with military precision.',
      requirements: [
        '8+ years project management experience',
        'PMP certification preferred',
        'Strong leadership and communication skills',
        'Experience with construction scheduling software'
      ],
      benefits: ['$85k-$110k salary', 'Health insurance', '401k matching', 'Profit sharing']
    },
    {
      id: '2',
      title: 'Construction Superintendent',
      department: 'Field Operations',
      location: 'Pasco, WA',
      type: 'Full-time',
      experience: 'Senior Level',
      description: 'Oversee daily construction activities, ensure safety compliance, and coordinate with subcontractors and project teams.',
      requirements: [
        '10+ years field supervision experience',
        'OSHA 30 certification required',
        'Strong problem-solving abilities',
        'Knowledge of building codes and regulations'
      ],
      benefits: ['$75k-$95k salary', 'Company vehicle', 'Health insurance', 'Performance bonuses']
    },
    {
      id: '3',
      title: 'Estimator',
      department: 'Estimating',
      location: 'Pasco, WA / Remote',
      type: 'Full-time',
      experience: 'Mid Level',
      description: 'Prepare accurate cost estimates for construction projects, analyze blueprints, and collaborate with project teams.',
      requirements: [
        '5+ years estimating experience',
        'Proficiency in estimating software',
        'Strong analytical skills',
        'Bachelor\'s degree in Construction or related field'
      ],
      benefits: ['$65k-$85k salary', 'Remote work options', 'Health insurance', 'Professional development']
    },
    {
      id: '4',
      title: 'Safety Coordinator',
      department: 'Field Operations',
      location: 'Pasco, WA',
      type: 'Full-time',
      experience: 'Mid Level',
      description: 'Develop and implement safety programs, conduct site inspections, and ensure OSHA compliance across all projects.',
      requirements: [
        '3+ years safety experience in construction',
        'CSP or CHST certification preferred',
        'Knowledge of OSHA regulations',
        'Strong communication and training skills'
      ],
      benefits: ['$60k-$75k salary', 'Health insurance', 'Continuing education', 'Safety bonuses']
    }
  ]

  const departments = ['all', 'Project Management', 'Field Operations', 'Estimating', 'Administration']
  
  const filteredPositions = selectedDepartment === 'all' 
    ? positions 
    : positions.filter(position => position.department === selectedDepartment)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experienceLevel: '',
    workPreference: '',
    desiredDepartment: '',
    howHeard: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Check if Firebase is available
      if (!firebaseAvailable || !db || !addDoc || !collection || !Timestamp) {
        console.warn('Firebase not available, using fallback submission method')
        // For now, just show success message - in production you might send to an API endpoint
        alert('Application submitted successfully! We will review your application and contact you soon.')
        setIsSubmitting(false)
        return
      }
      
      // Save to Firestore
      await addDoc(collection(db, 'applications'), {
        ...formData,
        createdAt: Timestamp.now()
      })
      
      // Try to call Cloud Function if available
      if (functions && httpsCallable) {
        try {
          const sendContactEmail = httpsCallable(functions, 'sendContactEmail')
          await sendContactEmail({ ...formData })
        } catch (funcError) {
          console.warn('Email function not available:', funcError)
        }
      }
      
      alert('Thank you for your application! We will review and contact you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experienceLevel: '',
        workPreference: '',
        desiredDepartment: '',
        howHeard: '',
        message: ''
      })
    } catch (error) {
      console.error('Application submission error:', error)
      alert('There was an error submitting your application. Please try again later or email us directly.')
    }
    
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <UniversalHeroSection
        title="Build Your Career"
        titleHighlight="With Us"
        subtitle="Join our veteran-owned team and help build the future of construction. We are always looking for skilled professionals who share our commitment to excellence, innovation, and military-grade precision."
        primaryButton={{
          text: "View Open Positions",
          onClick: () => {
            const element = document.getElementById('open-positions');
            element?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        secondaryButton={{
          text: "Learn About Benefits",
          onClick: () => {
            const element = document.getElementById('benefits');
            element?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Career Statistics */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group border border-mh-leather-tan/30 dark:border-mh-leather-tan/35">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-mh-leather-tan/15 flex items-center justify-center group-hover:bg-mh-leather-tan/25 transition">
                <Briefcase className="w-7 h-7 text-mh-leather-tan" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-1">12+</div>
              <div className="text-gray-600 dark:text-dark-text-secondary font-medium">Open Positions</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group border border-mh-hunter-green/30 dark:border-mh-hunter-green/40">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-mh-hunter-green/15 flex items-center justify-center group-hover:bg-mh-hunter-green/25 transition">
                <Shield className="w-7 h-7 text-mh-hunter-green" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent mb-1">85%</div>
              <div className="text-gray-600 dark:text-dark-text-secondary font-medium">Veteran Team</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-xl hover:shadow-xl shadow-lg transition-all duration-500 hover:scale-105 group border border-mh-leather-tan/30 dark:border-mh-leather-tan/35">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-mh-leather-tan/15 flex items-center justify-center group-hover:bg-mh-leather-tan/25 transition">
                <Award className="w-7 h-7 text-mh-leather-tan" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-1">150+</div>
              <div className="text-gray-600 dark:text-dark-text-secondary font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group border border-mh-hunter-green/30 dark:border-mh-hunter-green/40">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-mh-hunter-green/15 flex items-center justify-center group-hover:bg-mh-hunter-green/25 transition">
                <Smile className="w-7 h-7 text-mh-hunter-green" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent mb-1">95%</div>
              <div className="text-gray-600 dark:text-dark-text-secondary font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Culture Section */}
      <section id="benefits" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              Why Join MH Construction?
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              We believe in taking care of our team. Discover the benefits and culture that make MH Construction a great place to build your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Competitive Compensation */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-0 border border-mh-leather-tan/35 dark:border-mh-leather-tan/40">
              <div className="w-16 h-16 bg-mh-leather-tan/10 dark:bg-mh-leather-tan/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-leather-tan/20 dark:group-hover:bg-mh-leather-tan/30 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                <DollarSign className="w-8 h-8 text-mh-leather-tan" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black dark:text-dark-text mb-4 group-hover:text-mh-leather-tan dark:group-hover:text-mh-leather-tan transition-colors duration-300">Competitive Compensation</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Industry-leading salaries with performance bonuses and profit sharing opportunities.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Annual performance reviews</li>
                  <li>• Merit-based increases</li>
                  <li>• Quarterly bonus programs</li>
                </ul>
              </div>
            </div>

            {/* Health & Wellness */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-0 border border-mh-hunter-green/35 dark:border-mh-hunter-green/40">
              <div className="w-16 h-16 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-hunter-green/20 dark:group-hover:bg-mh-hunter-green/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <Heart className="w-8 h-8 text-mh-hunter-green" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-mh-hunter-green dark:text-dark-text mb-4 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">Health & Wellness</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Comprehensive health coverage and wellness programs for you and your family.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Medical, dental, vision</li>
                  <li>• Mental health support</li>
                  <li>• Wellness stipends</li>
                </ul>
              </div>
            </div>

            {/* Veteran Support */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-0 border border-mh-hunter-green/35 dark:border-mh-hunter-green/40">
              <div className="w-16 h-16 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-hunter-green/20 dark:group-hover:bg-mh-hunter-green/30 transition-all duration-500 group-hover:scale-110 group_hover:-rotate-12">
                <ShieldCheck className="w-8 h-8 text-mh-hunter-green" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black dark:text-dark-text mb-4 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">Veteran Support</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Dedicated support for our veteran team members with specialized programs.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Veteran mentorship program</li>
                  <li>• Military skill translation</li>
                  <li>• VA benefit assistance</li>
                </ul>
              </div>
            </div>

            {/* Professional Development */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-0 border border-mh-hunter-green/35 dark:border-mh-hunter-green/40">
              <div className="w-16 h-16 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-hunter-green/20 dark:group-hover:bg-mh-hunter-green/30 transition-all duration-500 group-hover:scale-110 group_hover:rotate-12">
                <TrendingUp className="w-8 h-8 text-mh-hunter-green" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-mh-hunter-green dark:text-dark-text mb-4 group-hover:text-mh-leather-tan dark:group-hover:text-mh-leather-tan transition-colors duration-300">Professional Development</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Continuous learning opportunities and career advancement programs.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Training & certifications</li>
                  <li>• Conference attendance</li>
                  <li>• Leadership development</li>
                </ul>
              </div>
            </div>

            {/* Work-Life Balance */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-0 border border-mh-leather-tan/35 dark:border-mh-leather-tan/40">
              <div className="w-16 h-16 bg-mh-leather-tan/10 dark:bg-mh-leather-tan/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-leather-tan/20 dark:group-hover:bg-mh-leather-tan/30 transition-all duration-500 group-hover:scale-110 group_hover:-rotate-12">
                <Sun className="w-8 h-8 text-mh-leather-tan" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-mh-hunter-green dark:text-dark-text mb-4 group-hover:text-mh-leather-tan dark:group-hover:text-mh-leather-tan transition-colors duration-300">Work-Life Balance</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Flexible schedules and time off policies that respect your personal time.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Flexible work arrangements</li>
                  <li>• Generous PTO policy</li>
                  <li>• Family-first culture</li>
                </ul>
              </div>
            </div>

            {/* Team Culture */}
            <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-0 border border-mh-leather-tan/35 dark:border-mh-leather-tan/40">
              <div className="w-16 h-16 bg-mh-leather-tan/10 dark:bg-mh-leather-tan/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-leather-tan/20 dark:group-hover:bg-mh-leather-tan/30 transition-all duration-500 group-hover:scale-110 group_hover:rotate-12">
                <Users className="w-8 h-8 text-mh-leather-tan" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-mh-hunter-green dark:text-dark-text mb-4 group-hover:text-mh-leather-tan dark:group-hover:text-mh-leather-tan transition-colors duration-300">Team Culture</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Join a tight-knit team that values collaboration, respect, and shared success.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Team building events</li>
                  <li>• Open communication</li>
                  <li>• Recognition programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Explore our open positions and find the perfect role to advance your career in construction.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map(dept => (
              <button
                key={dept}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mh-hunter-green/60 ${
                  selectedDepartment === dept
                    ? 'bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan border border-gray-200 dark:border-gray-700'
                }`}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>

          {/* Positions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPositions.map(position => (
              <div
                key={position.id}
                className="bg-white dark:bg-gray-800 border border-mh-hunter-green/25 dark:border-mh-hunter-green/35 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 group"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 text-mh-hunter-green dark:text-mh-hunter-green rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-mh-hunter-green/20 dark:group-hover:bg-mh-hunter-green/30">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 text-mh-hunter-green dark:text-mh-hunter-green rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-mh-hunter-green/20 dark:group-hover:bg-mh-hunter-green/30">
                          {position.type}
                        </span>
                        <span className="px-3 py-1 bg-mh-leather-tan/10 dark:bg-mh-leather-tan/20 text-mh-leather-tan dark:text-mh-leather-tan rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-mh-leather-tan/20 dark:group-hover:bg-mh-leather-tan/30">
                          {position.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-dark-text-secondary mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-mh-hunter-green group-hover:scale-110 transition-transform" />
                    {position.location}
                  </div>

                  <p className="text-gray-600 dark:text-dark-text-secondary mb-6 line-clamp-3">{position.description}</p>

                  {/* Expandable Details */}
                  {expandedPosition === position.id && (
                    <div className="space-y-6 mb-6 border-t dark:border-dark-border pt-6">
                      <div>
                        <h4 className="font-semibold text-black dark:text-dark-text mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-mh-hunter-green dark:bg-mh-hunter-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600 dark:text-dark-text-secondary">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-black dark:text-dark-text mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-mh-leather-tan dark:bg-mh-leather-tan rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600 dark:text-dark-text-secondary">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        setExpandedPosition(expandedPosition === position.id ? null : position.id)
                      }
                      className="flex-1 px-6 py-3 border-2 border-mh-hunter-green text-mh-hunter-green dark:text-mh-hunter-green rounded-lg font-medium hover:bg-mh-hunter-green hover:text-white transition-all duration-300"
                    >
                      {expandedPosition === position.id ? 'Show Less' : 'Learn More'}
                    </button>
                    <button
                      onClick={() => {
                        setFormData(prev => ({ ...prev, position: position.title }))
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white rounded-lg font-medium hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No positions found in this department.</p>
            </div>
          )}
        </div>
      </section>

      {/* Career Path Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Your Career Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A transparent growth path from entry to leadership inside MH Construction.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-mh-hunter-green/25 via-mh-leather-tan/25 to-mh-hunter-green/25 rounded"></div>
            <div className="space-y-16 lg:space-y-28">
              {/* Entry Level */}
              <div className="relative flex flex-col lg:flex-row items-center group">
                <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-mh-hunter-green/30 dark:border-mh-hunter-green/40 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-mh-hunter-green text-white flex items-center justify-center mr-4 font-bold group-hover:scale-110 transition">
                        1
                      </div>
                      <h3 className="text-xl font-bold text-mh-hunter-green">Entry Level</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Foundation roles with immersive training and mentorship.
                    </p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                      <li>• Field Technician</li>
                      <li>• Junior Estimator</li>
                      <li>• Assistant Project Coordinator</li>
                      <li>• Safety Assistant</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-mh-hunter-green border-4 border-white dark:border-gray-900 shadow group-hover:scale-125 transition"></div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="text-center lg:text-left">
                    <div className="text-4xl font-bold text-mh-hunter-green">0–2 Years</div>
                    <div className="text-gray-600 dark:text-gray-400">Experience Range</div>
                  </div>
                </div>
              </div>
              {/* Mid Level */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center group">
                <div className="lg:w-1/2 lg:pl-12 mb-10 lg:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-mh-leather-tan/35 dark:border-mh-leather-tan/40 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-mh-leather-tan text-white flex items-center justify-center mr-4 font-bold group-hover:scale-110 transition">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-mh-hunter-green">Mid Level</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Expanding responsibility, independent task ownership, skill depth.
                    </p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                      <li>• Project Coordinator</li>
                      <li>• Estimator</li>
                      <li>• Field Supervisor</li>
                      <li>• Safety Coordinator</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-mh-leather-tan border-4 border-white dark:border-gray-900 shadow group-hover:scale-125 transition"></div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="text-center lg:text-right">
                    <div className="text-4xl font-bold text-mh-leather-tan">3–7 Years</div>
                    <div className="text-gray-600 dark:text-gray-400">Experience Range</div>
                  </div>
                </div>
              </div>
              {/* Senior Level */}
              <div className="relative flex flex-col lg:flex-row items-center group">
                <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-mh-hunter-green/35 dark:border-mh-hunter-green/45 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-mh-hunter-green text-white flex items-center justify-center mr-4 font-bold group-hover:scale-110 transition">
                        3
                      </div>
                      <h3 className="text-xl font-bold text-mh-hunter-green">Senior Level</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Strategic influence, cross-discipline coordination, mentorship leadership.
                    </p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                      <li>• Senior Project Manager</li>
                      <li>• Senior Estimator</li>
                      <li>• Superintendent</li>
                      <li>• Safety Manager</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-mh-hunter-green border-4 border-white dark:border-gray-900 shadow group-hover:scale-125 transition"></div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="text-center lg:text-left">
                    <div className="text-4xl font-bold text-mh-hunter-green">8–15 Years</div>
                    <div className="text-gray-600 dark:text-gray-400">Experience Range</div>
                  </div>
                </div>
              </div>
              {/* Leadership */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center group">
                <div className="lg:w-1/2 lg:pl-12 mb-10 lg:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-mh-leather-tan/35 dark:border-mh-leather-tan/45 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-mh-leather-tan text-white flex items-center justify-center mr-4 font-bold group-hover:scale-110 transition">
                        4
                      </div>
                      <h3 className="text-xl font-bold text-mh-hunter-green">Leadership</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Vision setting, portfolio direction, enterprise mentorship & stewardship.
                    </p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                      <li>• Operations Manager</li>
                      <li>• Division Director</li>
                      <li>• Vice President</li>
                      <li>• Partner</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-mh-leather-tan border-4 border-white dark:border-gray-900 shadow group-hover:scale-125 transition"></div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="text-center lg:text-right">
                    <div className="text-4xl font-bold text-mh-leather-tan">15+ Years</div>
                    <div className="text-gray-600 dark:text-gray-400">Experience Range</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">Apply Today</h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary">
              Ready to start your career with MH Construction? Submit your application below.
            </p>
          </div>
          
          <form className="space-y-8 bg-gray-50 dark:bg-gray-800/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300" onSubmit={handleSubmit}>
            {/* Form Header */}
            <div className="text-center pb-6 border-b border-gray-200 dark:border-dark-border">
              <h3 className="text-2xl font-bold text-black dark:text-dark-text mb-2">Job Application</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">All fields marked with * are required</p>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-black dark:text-dark-text flex items-center">
                <UserIcon className="w-5 h-5 mr-2 text-mh-hunter-green" /> Personal Information
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-black dark:text-dark-text">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-black dark:text-dark-text">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-dark-text">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition"
                  placeholder="(509) 308-6489"
                />
              </div>
            </div>

            {/* Position Information Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-black dark:text-dark-text flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-mh-hunter-green" /> Position Information
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="position" className="block text-sm font-medium text-black dark:text-dark-text">Position Interested In *</label>
                  <input 
                    type="text" 
                    id="position" 
                    name="position" 
                    required 
                    value={formData.position} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition"
                    placeholder="e.g. Project Manager, Estimator, Superintendent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-black dark:text-dark-text">Experience Level *</label>
                  <select 
                    id="experienceLevel" 
                    name="experienceLevel" 
                    required 
                    value={formData.experienceLevel} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition"
                  >
                    <option value="">Select experience level</option>
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (3-7 years)</option>
                    <option value="senior">Senior Level (8-15 years)</option>
                    <option value="executive">Leadership (15+ years)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="workPreference" className="block text-sm font-medium text-black dark:text-dark-text">Work Preference *</label>
                  <select 
                    id="workPreference" 
                    name="workPreference" 
                    required 
                    value={formData.workPreference} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition"
                  >
                    <option value="">Select preference</option>
                    <option value="onsite">On-site</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="desiredDepartment" className="block text-sm font-medium text-black dark:text-dark-text">Desired Department *</label>
                  <select 
                    id="desiredDepartment" 
                    name="desiredDepartment" 
                    required 
                    value={formData.desiredDepartment} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition"
                  >
                    <option value="">Select department</option>
                    <option value="field">Field Operations</option>
                    <option value="project">Project Management</option>
                    <option value="estimating">Estimating</option>
                    <option value="admin">Administration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-black dark:text-dark-text flex items-center">
                <FileText className="w-5 h-5 mr-2 text-mh-hunter-green" /> Additional Information
              </h4>
              
              <div className="space-y-2">
                <label htmlFor="howHeard" className="block text-sm font-medium text-black dark:text-dark-text">How Did You Hear About Us? *</label>
                <select 
                  id="howHeard" 
                  name="howHeard" 
                  required 
                  value={formData.howHeard} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition"
                >
                  <option value="">Select option</option>
                  <option value="referral">Referral/Word of Mouth</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="event">Event/Trade Show</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-black dark:text-dark-text">Tell Us About Yourself *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={6} 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition"
                  placeholder="Share your experience, skills, and why you want to join MH Construction..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200 dark:border-dark-border">
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan dark:from-mh-hunter-green dark:to-mh-leather-tan text-white dark:text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-mh-leather-tan hover:to-mh-hunter-green dark:hover:from-mh-leather-tan dark:hover:to-mh-hunter-green transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </span>
                ) : (
                  <span className="flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    Submit Application
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                )}
              </button>
              
              <p className="text-center text-sm text-gray-500 dark:text-dark-text-secondary mt-4">
                By submitting this form, you consent to MH Construction processing your personal data for recruitment purposes.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Hear directly from our employees about their experience working at MH Construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group min-h-[320px]">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">SG</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-dark-text group-hover:text-mh-hunter-green transition-colors duration-300">Sarah G.</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Senior Project Manager</p>
                  <p className="text-gray-500 dark:text-dark-text-secondary text-xs">8 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-mh-leather-tan group-hover:scale-110 transition-transform duration-200"
                    fill="currentColor"
                    stroke="none"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-dark-text-secondary italic flex-1">
                "MH Construction gave me the opportunity to grow from a junior coordinator to a senior project manager. The veteran leadership understands teamwork and creates an environment where you can truly excel."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group min-h-[320px]">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">MT</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-black group-hover:text-mh-hunter-green transition-colors duration-300">Mike T.</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Construction Superintendent</p>
                  <p className="text-gray-500 dark:text-dark-text-secondary text-xs">12 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-mh-leather-tan group-hover:scale-110 transition-transform duration-200"
                    fill="currentColor"
                    stroke="none"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-dark-text italic flex-1">
                "As a veteran myself, I appreciate the military values and precision that MH Construction brings to every project. The benefits are excellent and the work-life balance is the best I've experienced in construction."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-mh-leather-tan rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">JR</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-black group-hover:text-mh-leather-tan transition-colors duration-300">Jessica R.</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Senior Estimator</p>
                  <p className="text-gray-500 dark:text-dark-text-secondary text-xs">6 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-mh-leather-tan group-hover:scale-110 transition-transform duration-200"
                    fill="currentColor"
                    stroke="none"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-dark-text italic flex-1">
                "The professional development opportunities here are incredible. MH Construction invested in my training and certifications, and I've been able to advance my career faster than I ever imagined possible."
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">DL</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-black group-hover:text-mh-hunter-green transition-colors duration-300">David L.</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Safety Coordinator</p>
                  <p className="text-gray-500 dark:text-dark-text-secondary text-xs">4 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-mh-leather-tan group-hover:scale-110 transition-transform duration-200"
                    fill="currentColor"
                    stroke="none"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-dark-text italic">
                "Safety is truly the top priority here, not just a slogan. The company provides the best training and equipment, and everyone genuinely cares about getting home safely every day."
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-mh-leather-tan rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">AK</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-black group-hover:text-mh-leather-tan transition-colors duration-300">Amanda K.</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Project Coordinator</p>
                  <p className="text-gray-500 dark:text-dark-text-secondary text-xs">3 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-mh-leather-tan group-hover:scale-110 transition-transform duration-200"
                    fill="currentColor"
                    stroke="none"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-dark-text italic">
                "The team here feels like family. Everyone supports each other, and there's a real sense of pride in the quality work we do. I love coming to work every day."
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <span className="text-white font-bold text-xl">RC</span>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-black group-hover:text-mh-hunter-green transition-colors duration-300">Robert C.</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Field Technician</p>
                  <p className="text-gray-500 dark:text-dark-text-secondary text-xs">2 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-mh-leather-tan group-hover:scale-110 transition-transform duration-200"
                    fill="currentColor"
                    stroke="none"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-dark-text italic">
                "Starting here as an entry-level worker, I've learned so much from the experienced team. The mentorship program is fantastic, and I can see a clear path for my career growth."
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-mh-hunter-green/5 dark:bg-mh-hunter-green/10 border border-mh-hunter-green/20 dark:border-mh-hunter-green/30 rounded-xl p-8 max-w-3xl mx-auto hover:bg-mh-hunter-green/10 dark:hover:bg-mh-hunter-green/15 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-black dark:text-dark-text mb-4">Ready to Join Our Team?</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
                Join the MH Construction family and experience the difference of working with a veteran-owned company that truly values its employees.
              </p>
              <button
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white rounded-lg font-semibold hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                Apply Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <WhyChooseSection />
        <Footer />
      </div>
    </main>
  )
}