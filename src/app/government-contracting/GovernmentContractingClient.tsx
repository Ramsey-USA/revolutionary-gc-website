'use client'

import { useState, useEffect } from 'react'
import CalendarScheduler from '../../components/CalendarScheduler'
// Removed hero import
// import UniversalHeroSection from '../../components/UniversalHeroSection'
import {
  Download, FileText, Shield, Clock, Phone, Mail, MapPin, Calendar,
  ChevronDown, ExternalLink, Landmark, Building2, Lock, Siren, FlaskConical,
  ShieldCheck
} from 'lucide-react'

const GovernmentContractingClient = () => {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false)
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null)

  const capabilities = [
    {
      id: 'federal',
      title: 'Federal Contracting',
      icon: <Landmark className="w-8 h-8 text-white" />,
      color: 'from-mh-hunter-green to-mh-leather-tan',
      shortDesc: 'Direct contracts with federal agencies including DoD, GSA, VA, and other federal departments for critical infrastructure projects.',
      details: {
        description: 'Our federal contracting expertise spans across multiple agencies and project types. We understand the complex requirements of federal procurement and maintain all necessary credentials to work directly with government entities.',
        services: [
          'Prime contractor for federal construction projects',
          'Subcontracting services for large federal initiatives',
          'GSA Schedule contracting and procurement',
          'IDIQ (Indefinite Delivery/Indefinite Quantity) contracts',
          'Design-build federal construction projects',
          'Federal facility maintenance and operations'
        ],
        qualifications: [
          'Prime & Subcontractor Experience',
          'GSA Schedule Holder',
          'CAGE Code: 7XYZ9',
          'SAM.gov Registration Current',
          'Federal Acquisition Regulation (FAR) Compliance',
          'DCAA Accounting System Approval'
        ]
      }
    },
    {
      id: 'military',
      title: 'Military Construction',
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      color: 'from-mh-leather-tan to-mh-hunter-green',
      shortDesc: 'Specialized experience in military base construction, renovation, and security infrastructure for all branches of the armed forces.',
      details: {
        description: 'Military construction requires unique expertise in security protocols, specialized materials, and classified project management. Our team includes veterans who understand military operational requirements.',
        services: [
          'MILCON (Military Construction) projects',
          'Base infrastructure development and renovation',
          'Security facility construction and upgrades',
          'Barracks and housing construction',
          'Military medical facility construction',
          'Training facility development'
        ],
        qualifications: [
          'Security Clearance Personnel',
          'MILCON Experience',
          'Base Access Protocols',
          'Military Specification Compliance',
          'Anti-Terrorism/Force Protection (AT/FP) Standards',
          'Veteran-Owned Business Certification'
        ]
      }
    },
    {
      id: 'municipal',
      title: 'State & Municipal',
      icon: <Building2 className="w-8 h-8 text-white" />,
      color: 'from-mh-hunter-green to-mh-leather-tan',
      shortDesc: 'Comprehensive services for state agencies, counties, cities, and local government entities across the Pacific Northwest.',
      details: {
        description: 'State and municipal projects require deep understanding of local regulations, prevailing wage requirements, and public accountability standards. We excel in transparent, community-focused project delivery.',
        services: [
          'Public works construction and infrastructure',
          'Municipal building construction and renovation',
          'State agency facility development',
          'County courthouse and government building projects',
          'Public safety facility construction',
          'Parks and recreation facility development'
        ],
        qualifications: [
          'Public Works Projects',
          'Prevailing Wage Compliance',
          'Local Hiring Programs',
          'State Contractor License',
          'Public Works Bond Capacity',
          'MWBE (Minority/Women Business Enterprise) Partnerships'
        ]
      }
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: <Lock className="w-8 h-8 text-white" />,
      color: 'from-mh-leather-tan to-mh-hunter-green',
      shortDesc: 'Full compliance with federal security protocols, clearance requirements, and specialized facility construction standards.',
      details: {
        description: 'Security and compliance are paramount in government construction. Our personnel hold active security clearances and we maintain strict protocols for classified and sensitive projects.',
        services: [
          'SCIF (Sensitive Compartmented Information Facility) construction',
          'Classified project management and execution',
          'Security system integration and installation',
          'Access control system implementation',
          'Cybersecurity infrastructure development',
          'Emergency notification system installation'
        ],
        qualifications: [
          'Secret Clearance Personnel',
          'ITAR Compliance',
          'SCIF Construction',
          'ICS-705 Physical Security Standards',
          'TEMPEST Standards Compliance',
          'NISPOM (National Industrial Security Program) Compliance'
        ]
      }
    },
    {
      id: 'emergency',
      title: 'Emergency Services',
      icon: <Siren className="w-8 h-8 text-white" />,
      color: 'from-mh-hunter-green to-mh-leather-tan',
      shortDesc: 'Rapid response construction and repair services for government facilities during emergencies and disaster recovery operations.',
      details: {
        description: 'Emergency response capabilities are critical for government continuity. Our teams are prepared for rapid deployment and 24/7 emergency construction services to restore critical infrastructure.',
        services: [
          '24/7 emergency response and repair services',
          'Disaster recovery construction and restoration',
          'Critical infrastructure emergency repairs',
          'Temporary facility construction and setup',
          'Emergency power and utilities restoration',
          'Post-disaster facility assessment and rebuilding'
        ],
        qualifications: [
          '24/7 Emergency Response',
          'Disaster Recovery',
          'Critical Infrastructure',
          'Emergency Management Certification',
          'FEMA Contractor Registration',
          'Rapid Deployment Capabilities'
        ]
      }
    },
    {
      id: 'specialized',
      title: 'Specialized Facilities',
      icon: <FlaskConical className="w-8 h-8 text-white" />,
      color: 'from-mh-leather-tan to-mh-hunter-green',
      shortDesc: 'Expert construction of specialized government facilities including laboratories, data centers, and high-security installations.',
      details: {
        description: 'Specialized facilities require unique expertise in environmental controls, precision construction, and advanced systems integration. We deliver complex projects that meet the highest technical standards.',
        services: [
          'Laboratory construction and renovation',
          'Data center design and build-out',
          'Clean room facility construction',
          'Research facility development',
          'Medical and healthcare facility construction',
          'Technology and communications centers'
        ],
        qualifications: [
          'Laboratory Construction',
          'Data Center Build-outs',
          'Clean Room Facilities',
          'HVAC and Environmental Controls Expertise',
          'Technology Infrastructure Integration',
          'Specialized Equipment Installation'
        ]
      }
    }
  ]

  const governmentResources = [
    {
      title: 'Capabilities Statement',
      description: 'Comprehensive overview of MH Construction government contracting capabilities, certifications, and past performance.',
      icon: FileText,
      size: '2.4 MB',
      type: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'Past Performance Documentation',
      description: 'Detailed project summaries and client references for federal, state, and local government contracts.',
      icon: Shield,
      size: '3.1 MB',
      type: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'Certifications & Credentials',
      description: 'Current certifications including GSA Schedule, CAGE code, security clearances, and compliance documentation.',
      icon: Shield,
      size: '1.8 MB',
      type: 'PDF',
      downloadUrl: '#'
    },
    {
      title: 'Company Profile & Team Bios',
      description: 'Executive team backgrounds, veteran leadership, and company history in government contracting.',
      icon: FileText,
      size: '2.2 MB',
      type: 'PDF',
      downloadUrl: '#'
    }
  ]

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#schedule-consultation') {
        setIsSchedulerOpen(true)
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const toggleCapability = (id: string) => {
    setExpandedCapability(expandedCapability === id ? null : id)
  }

  return (
    <>
      {/* Hidden anchor target for hero button */}
      <div id="schedule-consultation" className="sr-only" aria-hidden="true" />

      {/* Capabilities Section */}
      <section id="gov-capabilities" role="region" aria-label="Government Contracting Capabilities"
        className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
        {/* subtle radial brand backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,104,81,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(189,146,100,0.08),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/20 rounded-full mb-6">
              <Shield size={20} className="text-mh-hunter-green mr-2" />
              <span className="text-mh-hunter-green font-semibold text-sm">Government Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-6 leading-tight">
              Government Contracting 
              <span className="text-mh-hunter-green">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed">
              Our veteran-led team brings military precision and federal compliance expertise 
              to every government construction project, from small facility upgrades to major infrastructure developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map(capability => {
              const expanded = expandedCapability === capability.id
              return (
                <div key={capability.id} className="h-full flex flex-col min-h-[320px]">
                  <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-mh-hunter-green/15 dark:border-mh-hunter-green/25 overflow-hidden flex flex-col h-full focus-within:ring-2 focus-within:ring-mh-hunter-green/50">
                    <div className={`bg-gradient-to-r ${capability.color} p-6 flex-shrink-0`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
                          {capability.icon}
                        </div>
                        <button
                          onClick={() => toggleCapability(capability.id)}
                          aria-expanded={expanded}
                          aria-controls={`${capability.id}-panel`}
                          id={`${capability.id}-toggle`}
                          className="text-white hover:text-mh-leather-tan transition-colors duration-300 p-2 rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                          <ChevronDown
                            size={24}
                            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{capability.shortDesc}</p>
                    </div>
                    {expanded && (
                      <div
                        id={`${capability.id}-panel`}
                        role="region"
                        aria-labelledby={`${capability.id}-toggle`}
                        className="p-6 bg-white dark:bg-gray-800 border-t border-mh-hunter-green/15 dark:border-mh-hunter-green/25 flex-1 flex flex-col"
                      >
                        <div className="space-y-6 flex-1">
                          <div>
                            <h4 className="font-semibold text-black dark:text-dark-text mb-3 text-base">Overview</h4>
                            <p className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed">
                              {capability.details.description}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-black dark:text-dark-text mb-3 text-base">Services</h4>
                            <ul className="text-sm text-gray-600 dark:text-dark-text-secondary space-y-2">
                              {capability.details.services.map((service, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-mh-hunter-green mr-2 mt-1 font-bold">•</span>
                                  <span className="leading-relaxed">{service}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-auto">
                            <h4 className="font-semibold text-black dark:text-dark-text mb-3 text-base">Qualifications</h4>
                            <div className="flex flex-wrap gap-2">
                              {capability.details.qualifications.map((qual, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/20 text-mh-hunter-green dark:text-mh-hunter-green text-xs rounded-full border border-mh-hunter-green/20 dark:border-mh-hunter-green/30 font-medium"
                                >
                                  {qual}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources Section (surface & borders unified) */}
      <section role="region" aria-label="Government Resources"
        className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-mh-leather-tan/10 to-mh-hunter-green/10 dark:from-mh-leather-tan/20 dark:to-mh-hunter-green/20 rounded-full mb-6">
              <FileText size={20} className="text-mh-leather-tan mr-2" />
              <span className="text-mh-leather-tan font-semibold text-sm">Documentation & Resources</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-6 leading-tight">
              Government Contracting 
              <span className="text-mh-leather-tan">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed">
              Download comprehensive documentation including capabilities statements, past performance records, 
              and certification details for your procurement requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governmentResources.map((resource, index) => (
              <div key={index} className="h-full flex flex-col min-h-[240px]">
                <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-mh-hunter-green/15 dark:border-mh-hunter-green/25 flex flex-col h-full hover:-translate-y-1 focus-within:ring-2 focus-within:ring-mh-hunter-green/40">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-14 h-14 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <resource.icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green transition-colors duration-300 leading-tight">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-6 leading-relaxed flex-1">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-dark-text-secondary">
                          <span className="px-3 py-1 bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/20 text-mh-hunter-green dark:text-mh-hunter-green rounded-full font-medium border border-mh-hunter-green/20 dark:border-mh-hunter-green/30">
                            {resource.type}
                          </span>
                          <span className="font-medium">{resource.size}</span>
                        </div>
                        <button
                          className="group/btn flex items-center space-x-2 text-mh-hunter-green hover:text-mh-leather-tan transition-colors duration-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg hover:shadow-md border border-mh-hunter-green/30 dark:border-mh-hunter-green/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-mh-hunter-green/50"
                          aria-label={`Download ${resource.title}`}
                        >
                          <Download size={16} />
                          <span className="text-sm font-semibold">Download</span>
                          <ExternalLink size={12} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (dark surfaces normalized) */}
      <section role="region" aria-label="Government Contact"
        className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/20 rounded-full mb-6">
              <Phone size={20} className="text-mh-hunter-green mr-2" />
              <span className="text-mh-hunter-green font-semibold text-sm">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-6 leading-tight">
              Government Contracting 
              <span className="text-mh-hunter-green">Contact</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed">
              Dedicated support for government procurement officers, contracting specialists, 
              and project managers. We understand your unique requirements and security protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-100 dark:border-dark-border min-h-[520px] flex flex-col">
                <h3 className="text-2xl font-bold text-black dark:text-dark-text mb-6 border-b border-mh-hunter-green/20 pb-3">
                  Government Contracting Office
                </h3>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-mh-hunter-green to-mh-hunter-green/80 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-black dark:text-dark-text text-base mb-1">Direct Line</h4>
                      <p className="text-mh-hunter-green font-semibold text-lg">(509) 308-6489</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">For urgent government contracting matters</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-black dark:text-dark-text text-base mb-1">Government Contracts</h4>
                      <p className="text-mh-leather-tan font-semibold text-lg">government@mhconstruction.com</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">Secure email for classified communications available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-mh-hunter-green to-mh-hunter-green/80 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-black dark:text-dark-text text-base mb-1">Headquarters</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary font-medium">Spokane, Washington</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">Serving Pacific Northwest & nationwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/80 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-black dark:text-dark-text text-base mb-1">Emergency Response</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary font-medium">24/7 Available</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">For critical infrastructure emergencies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Shield size={24} className="mr-3" />
                  Security Protocols
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-mh-leather-tan rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">Secure communication channels available for classified projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-mh-leather-tan rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">Personnel with active security clearances ready for deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-mh-leather-tan rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">ITAR and NISPOM compliant project management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-mh-leather-tan rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">Facility security clearance for sensitive material handling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-100 dark:border-dark-border min-h-[360px] flex flex-col">
                <h3 className="text-2xl font-bold text-black dark:text-dark-text mb-6 border-b border-mh-hunter-green/20 pb-3">
                  Quick Actions
                </h3>
                
                <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setIsSchedulerOpen(true)}
                    className="w-full bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white p-4 rounded-xl font-bold hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <Calendar size={22} className="mr-3" />
                    Schedule Government Consultation
                  </button>
                  
                  <button className="w-full border-2 border-mh-hunter-green text-mh-hunter-green hover:bg-mh-hunter-green hover:text-white dark:hover:text-white p-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <FileText size={22} className="mr-3" />
                    Request Capabilities Statement
                  </button>
                  
                  <button className="w-full border-2 border-mh-leather-tan text-mh-leather-tan hover:bg-mh-leather-tan hover:text-black dark:hover:text-black p-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <Shield size={22} className="mr-3" />
                    Submit Security Clearance Inquiry
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/20 rounded-xl p-6 border-2 border-mh-hunter-green/30 dark:border-mh-hunter-green/40">
                <h4 className="font-bold text-mh-hunter-green dark:text-mh-hunter-green mb-3 text-lg flex items-center">
                  <Shield size={20} className="mr-2" />
                  Government Procurement
                </h4>
                <p className="text-mh-hunter-green/80 dark:text-mh-hunter-green/90 text-sm mb-4 leading-relaxed">
                  Looking for our GSA Schedule or need to submit an RFP? We're registered in SAM.gov and ready to respond to your solicitations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-gradient-to-r from-mh-leather-tan/20 to-mh-leather-tan/30 dark:from-mh-leather-tan/30 dark:to-mh-leather-tan/40 text-mh-leather-tan dark:text-mh-leather-tan text-xs rounded-full font-bold border border-mh-leather-tan/30">
                    CAGE: 7XYZ9
                  </span>
                  <span className="px-3 py-2 bg-gradient-to-r from-mh-leather-tan/20 to-mh-leather-tan/30 dark:from-mh-leather-tan/30 dark:to-mh-leather-tan/40 text-mh-leather-tan dark:text-mh-leather-tan text-xs rounded-full font-bold border border-mh-leather-tan/30">
                    GSA Schedule 36
                  </span>
                  <span className="px-3 py-2 bg-gradient-to-r from-mh-leather-tan/20 to-mh-leather-tan/30 dark:from-mh-leather-tan/30 dark:to-mh-leather-tan/40 text-mh-leather-tan dark:text-mh-leather-tan text-xs rounded-full font-bold border border-mh-leather-tan/30">
                    SAM.gov Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section (icons replaced) */}
      <section id="portfolio" role="region" aria-label="Featured Government Projects"
        className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-mh-leather-tan/10 to-mh-hunter-green/10 dark:from-mh-leather-tan/20 dark:to-mh-hunter-green/20 rounded-full mb-6">
              <Shield size={20} className="text-mh-leather-tan mr-2" />
              <span className="text-mh-leather-tan font-semibold text-sm">Project Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-6 leading-tight">
              Featured Government 
              <span className="text-mh-leather-tan">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed">
              Recent successful deliveries for federal, state, and local government clients showcasing our expertise in secure and critical infrastructure projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-full flex flex-col min-h-[300px]">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-dark-border flex flex-col h-full">
                <div className="h-48 bg-gradient-to-br from-mh-hunter-green to-mh-leather-tan flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="text-center text-white z-10">
                    <div className="text-3xl font-bold mb-2">$12.3M</div>
                    <div className="text-sm font-medium px-4">Federal Security Operations Center</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Shield size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-black dark:text-dark-text mb-3">
                    DHS Security Facility
                  </h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    45,000 sq ft secure facility with SCIF areas and advanced security systems for critical government operations.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 text-mh-hunter-green dark:text-mh-hunter-green text-xs rounded-full font-medium">SCIF Construction</span>
                    <span className="px-2 py-1 bg-mh-leather-tan/10 dark:bg-mh-leather-tan/20 text-mh-leather-tan dark:text-mh-leather-tan text-xs rounded-full font-medium">Federal Contract</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full flex flex-col min-h-[300px]">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-dark-border flex flex-col h-full">
                <div className="h-48 bg-gradient-to-br from-mh-leather-tan to-mh-hunter-green flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="text-center text-white z-10">
                    <div className="text-3xl font-bold mb-2">$8.7M</div>
                    <div className="text-sm font-medium px-4">Joint Base Medical Facility</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <div className="text-white text-lg">🏥</div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-black dark:text-dark-text mb-3">
                    Air Force Medical Center
                  </h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    Complete renovation and expansion of military medical facilities with specialized equipment integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 text-mh-hunter-green dark:text-mh-hunter-green text-xs rounded-full font-medium">MILCON</span>
                    <span className="px-2 py-1 bg-mh-leather-tan/10 dark:bg-mh-leather-tan/20 text-mh-leather-tan dark:text-mh-leather-tan text-xs rounded-full font-medium">Medical Facility</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full flex flex-col min-h-[300px]">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-dark-border flex flex-col h-full">
                <div className="h-48 bg-gradient-to-br from-mh-hunter-green to-mh-leather-tan flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="text-center text-white z-10">
                    <div className="text-3xl font-bold mb-2">$5.2M</div>
                    <div className="text-sm font-medium px-4">Emergency Operations Center</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <div className="text-white text-lg">🚨</div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-black dark:text-dark-text mb-3">
                    County Emergency Center
                  </h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    State-of-the-art emergency operations with advanced communications and coordination systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 text-mh-hunter-green dark:text-mh-hunter-green text-xs rounded-full font-medium">Emergency Services</span>
                    <span className="px-2 py-1 bg-mh-leather-tan/10 dark:bg-mh-leather-tan/20 text-mh-leather-tan dark:text-mh-leather-tan text-xs rounded-full font-medium">Municipal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (unchanged structurally; ensure contrast) */}
      <section className="py-20 bg-gradient-to-r from-mh-hunter-green via-mh-hunter-green/90 to-mh-leather-tan relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Partner with a 
              <span className="block text-mh-leather-tan">Proven Government Contractor?</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-white/90 mb-4 leading-relaxed">
                With veteran leadership, security clearances, and extensive federal compliance experience, 
                MH Construction is your trusted partner for critical government infrastructure projects.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm font-medium mb-8">
                <div className="flex items-center">
                  <Shield size={16} className="mr-2 text-mh-leather-tan" />
                  Security Clearances
                </div>
                <div className="flex items-center">
                  <FileText size={16} className="mr-2 text-mh-leather-tan" />
                  GSA Schedule Holder
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2 text-mh-leather-tan" />
                  24/7 Emergency Response
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setIsSchedulerOpen(true)}
              className="group bg-gradient-to-r from-mh-leather-tan to-mh-leather-tan/90 hover:from-mh-leather-tan/90 hover:to-mh-leather-tan text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-2xl hover:shadow-3xl text-lg min-w-[280px]"
            >
              <Calendar size={24} className="mr-3" />
              Schedule Consultation
              <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block text-xl">→</span>
            </button>
            
            <a 
              href="/projects" 
              className="group border-2 border-white text-white hover:bg-white hover:text-mh-hunter-green px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg min-w-[280px]"
            >
              <Shield size={24} className="mr-3" />
              View All Projects
              <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block text-xl">→</span>
            </a>
          </div>
          
          {/* Additional Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4 font-medium">Trusted by Government Agencies Nationwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-mh-leather-tan">50+</div>
                <div className="text-white/80 text-xs">Federal Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mh-leather-tan">$250M+</div>
                <div className="text-white/80 text-xs">Government Contracts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mh-leather-tan">15+</div>
                <div className="text-white/80 text-xs">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mh-leather-tan">100%</div>
                <div className="text-white/80 text-xs">Security Compliant</div>
              </div>
            </div>
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

export default GovernmentContractingClient