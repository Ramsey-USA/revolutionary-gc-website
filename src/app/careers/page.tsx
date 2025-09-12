"use client"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import StarDecorations from '../../components/StarDecorations'
import { useState } from 'react'

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

if (typeof window !== 'undefined') {
  try {
    const firebaseLib = require('../../lib/firebase')
    const firestoreLib = require('firebase/firestore')
    const functionsLib = require('firebase/functions')
    
    db = firebaseLib.db
    functions = firebaseLib.functions
    addDoc = firestoreLib.addDoc
    collection = firestoreLib.collection
    Timestamp = firestoreLib.Timestamp
    httpsCallable = functionsLib.httpsCallable
  } catch (error) {
    console.warn('Firebase not available:', error)
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
      if (!db || !addDoc || !collection || !Timestamp) {
        throw new Error('Firebase not configured')
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
    <main className="min-h-screen">
      <Header />
      {/* Hero Section with Statistics */}
      <section className="relative py-20 bg-gradient-to-r from-army-green to-mh-forest-green text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Star decorations */}
        <StarDecorations />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Build Your Career With Us
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-90">
              Join our veteran-owned team and help build the future of construction. We are always looking for skilled professionals who share our commitment to excellence, innovation, and military-grade precision.
            </p>
          </div>

          {/* Career Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-army-gold mb-2 animate-fade-in-up">12+</div>
              <div className="text-white/90 font-medium">Open Positions</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-army-gold mb-2 animate-fade-in-up">85%</div>
              <div className="text-white/90 font-medium">Veteran Team</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-army-gold mb-2 animate-fade-in-up">150+</div>
              <div className="text-white/90 font-medium">Years Combined Experience</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-army-gold mb-2 animate-fade-in-up">95%</div>
              <div className="text-white/90 font-medium">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-4">
              Why Join MH Construction?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team. Discover the benefits and culture that make MH Construction a great place to build your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Competitive Compensation */}
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-army-gold">
              <div className="w-16 h-16 bg-army-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-army-gold/20 transition-colors">
                <svg className="w-8 h-8 text-army-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black mb-4">Competitive Compensation</h3>
              <p className="text-gray-600 mb-4">Industry-leading salaries with performance bonuses and profit sharing opportunities.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Annual performance reviews</li>
                <li>• Merit-based increases</li>
                <li>• Quarterly bonus programs</li>
              </ul>
            </div>

            {/* Health & Wellness */}
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-mh-forest-green">
              <div className="w-16 h-16 bg-mh-forest-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-forest-green/20 transition-colors">
                <svg className="w-8 h-8 text-mh-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black mb-4">Health & Wellness</h3>
              <p className="text-gray-600 mb-4">Comprehensive health coverage and wellness programs for you and your family.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Medical, dental, vision</li>
                <li>• Mental health support</li>
                <li>• Wellness stipends</li>
              </ul>
            </div>

            {/* Veteran Support */}
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-army-green">
              <div className="w-16 h-16 bg-army-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-army-green/20 transition-colors">
                <svg className="w-8 h-8 text-army-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black mb-4">Veteran Support</h3>
              <p className="text-gray-600 mb-4">Dedicated support for our veteran team members with specialized programs.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Veteran mentorship program</li>
                <li>• Military skill translation</li>
                <li>• VA benefit assistance</li>
              </ul>
            </div>

            {/* Professional Development */}
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-600">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black mb-4">Professional Development</h3>
              <p className="text-gray-600 mb-4">Continuous learning opportunities and career advancement programs.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Training & certifications</li>
                <li>• Conference attendance</li>
                <li>• Leadership development</li>
              </ul>
            </div>

            {/* Work-Life Balance */}
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-amber-700">
              <div className="w-16 h-16 bg-amber-700/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-700/20 transition-colors">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black mb-4">Work-Life Balance</h3>
              <p className="text-gray-600 mb-4">Flexible schedules and time off policies that respect your personal time.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Flexible work arrangements</li>
                <li>• Generous PTO policy</li>
                <li>• Family-first culture</li>
              </ul>
            </div>

            {/* Team Culture */}
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-amber-600">
              <div className="w-16 h-16 bg-amber-600/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600/20 transition-colors">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black mb-4">Team Culture</h3>
              <p className="text-gray-600 mb-4">Join a tight-knit team that values collaboration, respect, and shared success.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Team building events</li>
                <li>• Open communication</li>
                <li>• Recognition programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-4">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our open positions and find the perfect role to advance your career in construction.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-army-green text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
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
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-army-black mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-army-green/10 text-army-green rounded-full text-sm font-medium">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full text-sm font-medium">
                          {position.type}
                        </span>
                        <span className="px-3 py-1 bg-amber-700/10 text-amber-700 rounded-full text-sm font-medium">
                          {position.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {position.location}
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-3">{position.description}</p>

                  {/* Expandable Details */}
                  {expandedPosition === position.id && (
                    <div className="space-y-6 mb-6 border-t pt-6">
                      <div>
                        <h4 className="font-semibold text-army-black mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-army-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-army-black mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-army-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      onClick={() => setExpandedPosition(
                        expandedPosition === position.id ? null : position.id
                      )}
                      className="flex-1 px-6 py-3 border-2 border-army-green text-army-green rounded-lg font-medium hover:bg-army-green hover:text-white transition-colors duration-300"
                    >
                      {expandedPosition === position.id ? 'Show Less' : 'Learn More'}
                    </button>
                    <button
                      onClick={() => {
                        setFormData(prev => ({ ...prev, position: position.title }))
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="flex-1 px-6 py-3 bg-army-gold text-army-black rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-4">
              Your Career Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At MH Construction, we believe in promoting from within. See how you can advance your career with us.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-army-green/20 hidden lg:block"></div>

            <div className="space-y-12 lg:space-y-24">
              {/* Entry Level */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-bold text-army-black">Entry Level</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Start your career with hands-on experience and comprehensive training programs.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li>• Field Technician</li>
                      <li>• Junior Estimator</li>
                      <li>• Assistant Project Coordinator</li>
                      <li>• Safety Assistant</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="text-center lg:text-left">
                    <div className="text-4xl font-bold text-blue-500 mb-2">0-2 Years</div>
                    <div className="text-gray-600">Experience Range</div>
                  </div>
                </div>
              </div>

              {/* Mid Level */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center">
                <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-bold text-army-black">Mid Level</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Take on more responsibility and lead smaller projects while developing specialized skills.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li>• Project Coordinator</li>
                      <li>• Estimator</li>
                      <li>• Field Supervisor</li>
                      <li>• Safety Coordinator</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="text-center lg:text-right">
                    <div className="text-4xl font-bold text-green-500 mb-2">3-7 Years</div>
                    <div className="text-gray-600">Experience Range</div>
                  </div>
                </div>
              </div>

              {/* Senior Level */}
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-army-green">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-army-green rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-bold text-army-black">Senior Level</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Lead major projects and mentor junior team members while expanding your expertise.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li>• Senior Project Manager</li>
                      <li>• Senior Estimator</li>
                      <li>• Construction Superintendent</li>
                      <li>• Safety Manager</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-army-green rounded-full border-4 border-white shadow-lg"></div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="text-center lg:text-left">
                    <div className="text-4xl font-bold text-army-green mb-2">8-15 Years</div>
                    <div className="text-gray-600">Experience Range</div>
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center">
                <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-army-gold">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-army-gold rounded-full flex items-center justify-center mr-4">
                        <span className="text-army-black font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-bold text-army-black">Leadership</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Shape the future of the company as a leader, setting strategy and mentoring the next generation.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li>• Operations Manager</li>
                      <li>• Division Director</li>
                      <li>• Vice President</li>
                      <li>• Partner</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-army-gold rounded-full border-4 border-white shadow-lg"></div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="text-center lg:text-right">
                    <div className="text-4xl font-bold text-army-gold mb-2">15+ Years</div>
                    <div className="text-gray-600">Experience Range</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-4">Apply Today</h2>
            <p className="text-xl text-gray-600">
              Ready to start your career with MH Construction? Submit your application below.
            </p>
          </div>
          
          <form className="space-y-8 bg-gray-50 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100" onSubmit={handleSubmit}>
            {/* Form Header */}
            <div className="text-center pb-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-army-black mb-2">Job Application</h3>
              <p className="text-gray-600">All fields marked with * are required</p>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-army-black flex items-center">
                <svg className="w-5 h-5 mr-2 text-army-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Personal Information
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-army-black">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-army-green focus:border-army-green transition-colors bg-white hover:border-gray-400" 
                    placeholder="Your full name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-army-black">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-army-green focus:border-army-green transition-colors bg-white hover:border-gray-400" 
                    placeholder="your.email@example.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-army-black">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-army-green focus:border-army-green transition-colors bg-white hover:border-gray-400" 
                  placeholder="(509) 555-0123" 
                />
              </div>
            </div>

            {/* Position Information Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-army-black flex items-center">
                <svg className="w-5 h-5 mr-2 text-army-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a1 1 0 001-1v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v1a1 1 0 001 1h2a2 2 0 002-2z" />
                </svg>
                Position Information
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="position" className="block text-sm font-medium text-army-black">Position Interested In *</label>
                  <input 
                    type="text" 
                    id="position" 
                    name="position" 
                    required 
                    value={formData.position} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-army-green focus:border-army-green transition-colors bg-white hover:border-gray-400" 
                    placeholder="e.g. Project Manager, Estimator, Superintendent" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-army-black">Experience Level *</label>
                  <select 
                    id="experienceLevel" 
                    name="experienceLevel" 
                    required 
                    value={formData.experienceLevel} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-army-green focus:border-army-green transition-colors bg-white hover:border-gray-400"
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
                  <label htmlFor="workPreference" className="block text-sm font-medium text-army-black">Work Preference *</label>
                  <select 
                    id="workPreference" 
                    name="workPreference" 
                    required 
                    value={formData.workPreference} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-army-green focus:border-army-green transition-colors bg-white hover:border-gray-400"
                  >
                    <option value="">Select preference</option>
                    <option value="onsite">On-site</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="desiredDepartment" className="block text-sm font-medium text-army-black">Desired Department *</label>
                  <select 
                    id="desiredDepartment" 
                    name="desiredDepartment" 
                    required 
                    value={formData.desiredDepartment} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-army-green focus:border-army-green transition-colors bg-white hover:border-gray-400"
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
              <h4 className="text-lg font-semibold text-army-black flex items-center">
                <svg className="w-5 h-5 mr-2 text-army-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Additional Information
              </h4>
              
              <div className="space-y-2">
                <label htmlFor="howHeard" className="block text-sm font-medium text-army-black">How Did You Hear About Us? *</label>
                <select 
                  id="howHeard" 
                  name="howHeard" 
                  required 
                  value={formData.howHeard} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-army-green focus:border-army-green transition-colors bg-white hover:border-gray-400"
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
                <label htmlFor="message" className="block text-sm font-medium text-army-black">Tell Us About Yourself *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={6} 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-army-green focus:border-army-green transition-colors bg-white hover:border-gray-400 resize-vertical" 
                  placeholder="Share your experience, skills, and why you want to join MH Construction..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-army-gold text-army-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-army-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting this form, you consent to MH Construction processing your personal data for recruitment purposes.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-4">
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our employees about their experience working at MH Construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-army-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">SG</span>
                </div>
                <div>
                  <h4 className="font-bold text-army-black">Sarah G.</h4>
                  <p className="text-gray-600 text-sm">Senior Project Manager</p>
                  <p className="text-gray-500 text-xs">8 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-army-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "MH Construction gave me the opportunity to grow from a junior coordinator to a senior project manager. The veteran leadership understands teamwork and creates an environment where you can truly excel."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-mh-forest-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">MT</span>
                </div>
                <div>
                  <h4 className="font-bold text-army-black">Mike T.</h4>
                  <p className="text-gray-600 text-sm">Construction Superintendent</p>
                  <p className="text-gray-500 text-xs">12 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-army-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "As a veteran myself, I appreciate the military values and precision that MH Construction brings to every project. The benefits are excellent and the work-life balance is the best I've experienced in construction."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-army-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-army-black font-bold text-xl">JR</span>
                </div>
                <div>
                  <h4 className="font-bold text-army-black">Jessica R.</h4>
                  <p className="text-gray-600 text-sm">Senior Estimator</p>
                  <p className="text-gray-500 text-xs">6 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-army-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The professional development opportunities here are incredible. MH Construction invested in my training and certifications, and I've been able to advance my career faster than I ever imagined possible."
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">DL</span>
                </div>
                <div>
                  <h4 className="font-bold text-army-black">David L.</h4>
                  <p className="text-gray-600 text-sm">Safety Coordinator</p>
                  <p className="text-gray-500 text-xs">4 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-army-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Safety is truly the top priority here, not just a slogan. The company provides the best training and equipment, and everyone genuinely cares about getting home safely every day."
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">AK</span>
                </div>
                <div>
                  <h4 className="font-bold text-army-black">Amanda K.</h4>
                  <p className="text-gray-600 text-sm">Project Coordinator</p>
                  <p className="text-gray-500 text-xs">3 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-army-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The team here feels like family. Everyone supports each other, and there's a real sense of pride in the quality work we do. I love coming to work every day."
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">RC</span>
                </div>
                <div>
                  <h4 className="font-bold text-army-black">Robert C.</h4>
                  <p className="text-gray-600 text-sm">Field Technician</p>
                  <p className="text-gray-500 text-xs">2 years with MH Construction</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-army-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Starting here as an entry-level worker, I've learned so much from the experienced team. The mentorship program is fantastic, and I can see a clear path for my career growth."
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-army-green/5 border border-army-green/20 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-army-black mb-4">Ready to Join Our Team?</h3>
              <p className="text-gray-600 mb-6">
                Join the MH Construction family and experience the difference of working with a veteran-owned company that truly values its employees.
              </p>
              <button
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-3 bg-army-gold text-army-black rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
              >
                Apply Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
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
