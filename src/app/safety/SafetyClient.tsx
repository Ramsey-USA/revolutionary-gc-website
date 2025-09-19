'use client'

import { useState } from 'react'
import CalendarScheduler from '../../components/CalendarScheduler'
import StarDecorations from '../../components/StarDecorations'
import { Download, FileText, Shield, AlertTriangle, TrendingUp, Calendar, Mail, Phone, MapPin, Clock, ChevronDown, ExternalLink } from 'lucide-react'
import { db } from '../../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { sendTeamNotification } from '../../lib/notifications'

const SafetyClient = () => {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [incidentFormData, setIncidentFormData] = useState({
    type: '',
    description: '',
    location: '',
    reporterName: '',
    reporterEmail: '',
    severity: 'low'
  })
  const [isSubmittingIncident, setIsSubmittingIncident] = useState(false)
  const [incidentSubmitSuccess, setIncidentSubmitSuccess] = useState(false)

  const safetyResources = [
    {
      title: 'Safety Manual & Procedures',
      description: 'Comprehensive safety manual including OSHA compliance, emergency procedures, and safety protocols.',
      icon: FileText,
      size: '4.2 MB',
      type: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'Safety Certifications',
      description: 'Current safety certifications, training records, and compliance documentation for all personnel.',
      icon: Shield,
      size: '2.8 MB',
      type: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'Incident Report Forms',
      description: 'Safety incident reporting forms, near-miss documentation, and safety suggestion templates.',
      icon: AlertTriangle,
      size: '1.5 MB',
      type: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'Safety Performance Reports',
      description: 'Monthly safety performance metrics, trend analysis, and industry benchmarking reports.',
      icon: TrendingUp,
      size: '3.1 MB',
      type: 'PDF',
      downloadUrl: '#'
    }
  ]

  const safetyAwards = [
    {
      title: 'OSHA VPP Star Award',
      description: 'Highest recognition for workplace safety and health excellence, demonstrating outstanding injury and illness prevention programs.',
      year: '2023',
      category: 'Federal Recognition',
      color: 'from-mh-hunter-green to-mh-leather-tan'
    },
    {
      title: 'AGC Safety Excellence',
      description: 'Associated General Contractors recognition for outstanding safety performance and commitment to protecting construction workers.',
      year: '2023',
      category: 'Industry Leadership',
      color: 'from-mh-leather-tan to-mh-hunter-green'
    },
    {
      title: 'Zero Incident Recognition',
      description: 'Multiple client awards recognizing our achievement of zero recordable incidents across major construction projects.',
      year: '2022-2023',
      category: 'Client Recognition',
      color: 'from-mh-hunter-green to-mh-leather-tan'
    },
    {
      title: 'Safety Innovation Award',
      description: 'Recognition for implementing innovative safety technologies and protocols that set new industry standards.',
      year: '2023',
      category: 'Technology Innovation',
      color: 'from-mh-leather-tan to-mh-hunter-green'
    },
    {
      title: 'Electrical Safety Excellence',
      description: 'NECA recognition for outstanding electrical safety practices and zero electrical incidents across all projects.',
      year: '2023',
      category: 'Specialty Recognition',
      color: 'from-mh-hunter-green to-mh-leather-tan'
    },
    {
      title: 'Community Safety Partner',
      description: 'Local recognition for promoting construction safety awareness and education in the community.',
      year: '2023',
      category: 'Community Impact',
      color: 'from-mh-leather-tan to-mh-hunter-green'
    }
  ]

  const handleIncidentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingIncident(true)

    try {
      // Save to Firebase
      const incidentRef = await addDoc(collection(db, 'safetyIncidents'), {
        ...incidentFormData,
        status: 'pending',
        createdAt: serverTimestamp(),
        type: 'safety-incident'
      })

      // Send team notification
      await sendTeamNotification({
        type: 'form-submission',
        title: 'Safety Incident Reported',
        message: `New safety incident reported: ${incidentFormData.type} at ${incidentFormData.location}. Description: ${incidentFormData.description}`,
        clientInfo: {
          name: incidentFormData.reporterName,
          email: incidentFormData.reporterEmail,
          phone: 'Not provided'
        },
        priority: incidentFormData.severity === 'high' ? 'high' : 'medium',
        metadata: {
          incidentId: incidentRef.id,
          severity: incidentFormData.severity,
          location: incidentFormData.location,
          incidentType: incidentFormData.type
        }
      })

      setIncidentSubmitSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIncidentFormData({
          type: '',
          description: '',
          location: '',
          reporterName: '',
          reporterEmail: '',
          severity: 'low'
        })
        setIncidentSubmitSuccess(false)
        setIsSubmittingIncident(false)
      }, 3000)

    } catch (error) {
      console.error('Error submitting safety incident:', error)
      alert('There was an error submitting the safety incident. Please try again or call us directly at (509) 308-6489.')
      setIsSubmittingIncident(false)
    }
  }

  const handleIncidentInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setIncidentFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-army-black via-mh-hunter-green to-army-green dark:from-dark-surface dark:via-dark-surface-2 dark:to-dark-surface-3 text-white dark:text-dark-text overflow-hidden">
        {/* Star decorations */}
        <StarDecorations />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-dark-text">
              Safety Excellence
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white dark:text-dark-text-secondary">
              Every project starts with safety. Our unwavering commitment to protecting our team, 
              clients, and communities drives everything we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                onClick={() => setIsSchedulerOpen(true)}
                className="group bg-army-gold hover:bg-army-gold/90 text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center"
              >
                <Calendar size={20} className="mr-2" />
                Schedule Safety Consultation
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </button>
              <a 
                href="#statistics" 
                className="group border border-white text-white hover:bg-white hover:text-mh-hunter-green px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
              >
                Safety Statistics
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Statistics Section */}
      <section id="statistics" className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Safety Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Our commitment to safety is measured not just in awards, but in the real-world impact 
              on our workers, clients, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2" onClick={() => toggleSection('incidents')}>
              <div className="text-center">
                <div className="text-4xl font-bold text-mh-hunter-green mb-2">0</div>
                <div className="text-lg font-semibold text-army-black dark:text-dark-text mb-1">Lost Time Incidents</div>
                <div className="text-sm text-gray-600 dark:text-dark-text-secondary">Last 24 Months</div>
              </div>
            </div>

            <div className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2" onClick={() => toggleSection('hours')}>
              <div className="text-center">
                <div className="text-4xl font-bold text-mh-leather-tan mb-2">500K+</div>
                <div className="text-lg font-semibold text-army-black dark:text-dark-text mb-1">Safe Work Hours</div>
                <div className="text-sm text-gray-600 dark:text-dark-text-secondary">Without Incident</div>
              </div>
            </div>

            <div className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2" onClick={() => toggleSection('awards')}>
              <div className="text-center">
                <div className="text-4xl font-bold text-mh-hunter-green mb-2">15</div>
                <div className="text-lg font-semibold text-army-black dark:text-dark-text mb-1">Safety Awards</div>
                <div className="text-sm text-gray-600 dark:text-dark-text-secondary">Industry Recognition</div>
              </div>
            </div>

            <div className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2" onClick={() => toggleSection('emr')}>
              <div className="text-center">
                <div className="text-4xl font-bold text-mh-leather-tan mb-2">0.12</div>
                <div className="text-lg font-semibold text-army-black dark:text-dark-text mb-1">EMR Rating</div>
                <div className="text-sm text-gray-600 dark:text-dark-text-secondary">Below Industry Average</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Awards Section */}
      <section id="awards" className="py-20 bg-gray-50 dark:bg-dark-surface-2 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Safety Excellence Recognition
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Industry recognition for our unwavering commitment to workplace safety and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyAwards.map((award, index) => (
              <div key={index} className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-dark-border overflow-hidden">
                <div className={`bg-gradient-to-r ${award.color} p-6 text-white`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {award.year}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                      {award.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Resources Section */}
      <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Safety Resources & Documentation
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Comprehensive safety documentation, training materials, and compliance resources 
              for teams, clients, and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyResources.map((resource, index) => (
              <div key={index} className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-dark-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-army-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-dark-text-secondary">
                        <span className="px-2 py-1 bg-gray-200 dark:bg-dark-surface-3 rounded">{resource.type}</span>
                        <span>{resource.size}</span>
                      </div>
                      <button className="group flex items-center space-x-2 text-mh-hunter-green hover:text-mh-leather-tan transition-colors duration-300">
                        <Download size={16} />
                        <span className="text-sm font-medium">Download</span>
                        <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Reporting Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark-surface-2 dark:to-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Safety Incident Reporting
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Immediate reporting and response system for safety incidents, near-misses, and safety suggestions. 
              Your safety is our priority.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Incident Report Form */}
            <div className="bg-white dark:bg-dark-surface rounded-xl p-8 shadow-lg border border-gray-100 dark:border-dark-border">
              <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6">
                Report Safety Incident
              </h3>
              
              {incidentSubmitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={32} className="text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">Report Submitted Successfully</h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary">
                    Thank you for reporting this safety incident. Our safety team has been notified and will respond immediately.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleIncidentSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-army-black dark:text-dark-text mb-2">
                      Incident Type *
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={incidentFormData.type}
                      onChange={handleIncidentInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-transparent bg-white dark:bg-dark-surface-2 text-army-black dark:text-dark-text"
                    >
                      <option value="">Select incident type</option>
                      <option value="injury">Injury</option>
                      <option value="near-miss">Near Miss</option>
                      <option value="property-damage">Property Damage</option>
                      <option value="unsafe-condition">Unsafe Condition</option>
                      <option value="safety-violation">Safety Violation</option>
                      <option value="suggestion">Safety Suggestion</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="severity" className="block text-sm font-medium text-army-black dark:text-dark-text mb-2">
                      Severity Level *
                    </label>
                    <select
                      id="severity"
                      name="severity"
                      value={incidentFormData.severity}
                      onChange={handleIncidentInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-transparent bg-white dark:bg-dark-surface-2 text-army-black dark:text-dark-text"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-army-black dark:text-dark-text mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={incidentFormData.location}
                      onChange={handleIncidentInputChange}
                      required
                      placeholder="Project site, address, or specific location"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-transparent bg-white dark:bg-dark-surface-2 text-army-black dark:text-dark-text"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-army-black dark:text-dark-text mb-2">
                      Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={incidentFormData.description}
                      onChange={handleIncidentInputChange}
                      required
                      rows={4}
                      placeholder="Detailed description of the incident, what happened, and any immediate actions taken"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-transparent bg-white dark:bg-dark-surface-2 text-army-black dark:text-dark-text resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="reporterName" className="block text-sm font-medium text-army-black dark:text-dark-text mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="reporterName"
                      name="reporterName"
                      value={incidentFormData.reporterName}
                      onChange={handleIncidentInputChange}
                      required
                      placeholder="Full name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-transparent bg-white dark:bg-dark-surface-2 text-army-black dark:text-dark-text"
                    />
                  </div>

                  <div>
                    <label htmlFor="reporterEmail" className="block text-sm font-medium text-army-black dark:text-dark-text mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="reporterEmail"
                      name="reporterEmail"
                      value={incidentFormData.reporterEmail}
                      onChange={handleIncidentInputChange}
                      required
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-transparent bg-white dark:bg-dark-surface-2 text-army-black dark:text-dark-text"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingIncident}
                    className="w-full bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmittingIncident ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting Report...
                      </>
                    ) : (
                      <>
                        <AlertTriangle size={20} className="mr-2" />
                        Submit Safety Report
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Emergency Contacts */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-dark-surface rounded-xl p-8 shadow-lg border border-gray-100 dark:border-dark-border">
                <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6">
                  Emergency Contacts
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mh-leather-tan/20 dark:bg-mh-leather-tan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-mh-leather-tan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text">Emergency Line</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary">911</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">Life-threatening emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mh-hunter-green/20 dark:bg-mh-hunter-green/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-mh-hunter-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text">Safety Hotline</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary">(509) 308-6489</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">24/7 safety concerns</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mh-leather-tan/20 dark:bg-mh-leather-tan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-mh-leather-tan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text">Safety Manager</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary">safety@mhconstruction.com</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">Non-emergency safety issues</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mh-hunter-green/20 dark:bg-mh-hunter-green/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-mh-hunter-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text">Safety Office</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary">Spokane, Washington</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">Main safety coordination center</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Safety Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-army-gold rounded-full mr-3"></span>
                    OSHA emergency response protocols
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-army-gold rounded-full mr-3"></span>
                    First aid and medical emergency procedures
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-army-gold rounded-full mr-3"></span>
                    Equipment safety inspection checklists
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-army-gold rounded-full mr-3"></span>
                    Anonymous safety reporting system
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with a Safety-First Construction Leader
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Experience the confidence that comes from working with a construction team 
            that prioritizes safety above all else. Your project deserves the best protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsSchedulerOpen(true)}
              className="group bg-army-gold hover:bg-army-gold/90 text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Calendar size={20} className="mr-2" />
              Schedule Safety Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </button>
            <a 
              href="/projects" 
              className="group border border-white text-white hover:bg-white hover:text-mh-hunter-green px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Safe Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </a>
          </div>
        </div>
      </section>

      <CalendarScheduler 
        isOpen={isSchedulerOpen} 
        onClose={() => setIsSchedulerOpen(false)} 
      />
    </>
  )
}

export default SafetyClient