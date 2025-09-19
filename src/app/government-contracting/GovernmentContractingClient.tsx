'use client'

import { useState } from 'react'
import CalendarScheduler from '../../components/CalendarScheduler'
import StarDecorations from '../../components/StarDecorations'
import { Download, FileText, Shield, Clock, Phone, Mail, MapPin, Calendar, ChevronDown, ExternalLink } from 'lucide-react'

const GovernmentContractingClient = () => {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false)
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null)

  const capabilities = [
    {
      id: 'federal',
      title: 'Federal Contracting',
      icon: '🏛️',
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
      icon: '🛡️',
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
      icon: '🏢',
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
      icon: '🔒',
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
      icon: '🚨',
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
      icon: '🔬',
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

  const toggleCapability = (id: string) => {
    setExpandedCapability(expandedCapability === id ? null : id)
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
              Government Contracting
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white dark:text-dark-text-secondary">
              Serving federal, state, and local governments with veteran-led expertise, 
              security clearances, and proven compliance across critical infrastructure projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                onClick={() => setIsSchedulerOpen(true)}
                className="group bg-army-gold hover:bg-army-gold/90 text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center"
              >
                <Calendar size={20} className="mr-2" />
                Schedule Government Consultation
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </button>
              <a 
                href="#capabilities" 
                className="group border border-white text-white hover:bg-white hover:text-mh-hunter-green px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
              >
                Our Capabilities
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Government Capabilities Section */}
      <section id="capabilities" className="py-20 bg-gray-50 dark:bg-dark-surface-2 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Government Contracting Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Our veteran-led team brings military precision and federal compliance expertise 
              to every government construction project, from small facility upgrades to major infrastructure developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={capability.id} className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-dark-border overflow-hidden">
                <div className={`bg-gradient-to-r ${capability.color} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{capability.icon}</div>
                    <button
                      onClick={() => toggleCapability(capability.id)}
                      className="text-white hover:text-army-gold transition-colors duration-300"
                    >
                      <ChevronDown 
                        size={24} 
                        className={`transform transition-transform duration-300 ${
                          expandedCapability === capability.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {capability.shortDesc}
                  </p>
                </div>
                
                {expandedCapability === capability.id && (
                  <div className="p-6 bg-white dark:bg-dark-surface border-t border-gray-100 dark:border-dark-border">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-army-black dark:text-dark-text mb-2">Overview</h4>
                        <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                          {capability.details.description}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-army-black dark:text-dark-text mb-2">Services</h4>
                        <ul className="text-sm text-gray-600 dark:text-dark-text-secondary space-y-1">
                          {capability.details.services.map((service, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-army-green mr-2 mt-1">•</span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-army-black dark:text-dark-text mb-2">Qualifications</h4>
                        <div className="flex flex-wrap gap-2">
                          {capability.details.qualifications.map((qual, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-gray-100 dark:bg-dark-surface-3 text-gray-700 dark:text-dark-text text-xs rounded-full"
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
            ))}
          </div>
        </div>
      </section>

      {/* Government Resources Section */}
      <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Government Contracting Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Download comprehensive documentation including capabilities statements, past performance records, 
              and certification details for your procurement requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governmentResources.map((resource, index) => (
              <div key={index} className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-dark-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-mh-hunter-green to-army-gold rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
                      <button className="group flex items-center space-x-2 text-mh-hunter-green hover:text-army-gold transition-colors duration-300">
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

      {/* Government Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark-surface-2 dark:to-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Government Contracting Contact
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Dedicated support for government procurement officers, contracting specialists, 
              and project managers. We understand your unique requirements and security protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-dark-surface rounded-xl p-8 shadow-lg border border-gray-100 dark:border-dark-border">
                <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6">
                  Government Contracting Office
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mh-hunter-green/20 dark:bg-mh-hunter-green/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-mh-hunter-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text">Direct Line</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary">(509) 308-6489</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">For urgent government contracting matters</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mh-leather-tan/20 dark:bg-mh-leather-tan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-mh-leather-tan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text">Government Contracts</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary">government@mhconstruction.com</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">Secure email for classified communications available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mh-hunter-green/20 dark:bg-mh-hunter-green/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-mh-hunter-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text">Headquarters</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary">Spokane, Washington</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">Serving Pacific Northwest & nationwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mh-leather-tan/20 dark:bg-mh-leather-tan/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-mh-leather-tan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text">Emergency Response</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary">24/7 Available</p>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">For critical infrastructure emergencies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Security Protocols</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-army-gold rounded-full mr-3"></span>
                    Secure communication channels available for classified projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-army-gold rounded-full mr-3"></span>
                    Personnel with active security clearances ready for deployment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-army-gold rounded-full mr-3"></span>
                    ITAR and NISPOM compliant project management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-army-gold rounded-full mr-3"></span>
                    Facility security clearance for sensitive material handling
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-dark-surface rounded-xl p-8 shadow-lg border border-gray-100 dark:border-dark-border">
                <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6">
                  Quick Actions
                </h3>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => setIsSchedulerOpen(true)}
                    className="w-full bg-gradient-to-r from-mh-hunter-green to-army-green text-white p-4 rounded-lg font-semibold hover:from-army-green hover:to-mh-hunter-green transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Calendar size={20} className="mr-2" />
                    Schedule Government Consultation
                  </button>
                  
                  <button className="w-full border-2 border-mh-hunter-green text-mh-hunter-green hover:bg-mh-hunter-green hover:text-white p-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <FileText size={20} className="mr-2" />
                    Request Capabilities Statement
                  </button>
                  
                  <button className="w-full border-2 border-army-gold text-army-gold hover:bg-army-gold hover:text-army-black p-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <Shield size={20} className="mr-2" />
                    Submit Security Clearance Inquiry
                  </button>
                </div>
              </div>

              <div className="bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-xl p-6 border border-mh-hunter-green/30 dark:border-mh-hunter-green/40">
                <h4 className="font-semibold text-mh-hunter-green dark:text-mh-hunter-green mb-2">Government Procurement</h4>
                <p className="text-mh-hunter-green/80 dark:text-mh-hunter-green/90 text-sm mb-4">
                  Looking for our GSA Schedule or need to submit an RFP? We're registered in SAM.gov and ready to respond to your solicitations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-mh-leather-tan/20 dark:bg-mh-leather-tan/30 text-mh-leather-tan dark:text-mh-leather-tan text-xs rounded-full">CAGE: 7XYZ9</span>
                  <span className="px-3 py-1 bg-mh-leather-tan/20 dark:bg-mh-leather-tan/30 text-mh-leather-tan dark:text-mh-leather-tan text-xs rounded-full">GSA Schedule 36</span>
                  <span className="px-3 py-1 bg-mh-leather-tan/20 dark:bg-mh-leather-tan/30 text-mh-leather-tan dark:text-mh-leather-tan text-xs rounded-full">SAM.gov Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of existing sections would go here: Portfolio, Credentials, etc. */}
      {/* I'll add a simplified portfolio section for now */}
      <section id="portfolio" className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Featured Government Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Recent successful deliveries for federal, state, and local government clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-dark-surface-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-mh-hunter-green to-mh-leather-tan flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">$12.3M</div>
                  <div className="text-sm">Federal Security Operations Center</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2">
                  DHS Security Facility
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                  45,000 sq ft secure facility with SCIF areas and advanced security systems.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-dark-surface-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-mh-leather-tan to-mh-hunter-green flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">$8.7M</div>
                  <div className="text-sm">Joint Base Medical Facility</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2">
                  Air Force Medical Center
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                  Complete renovation and expansion of military medical facilities.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-dark-surface-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-mh-hunter-green to-mh-leather-tan flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">$5.2M</div>
                  <div className="text-sm">Emergency Operations Center</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2">
                  County Emergency Center
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                  State-of-the-art emergency operations with advanced communications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with a Proven Government Contractor?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            With veteran leadership, security clearances, and extensive federal compliance experience, 
            MH Construction is your trusted partner for critical government infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsSchedulerOpen(true)}
              className="group bg-army-gold hover:bg-army-gold/90 text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Calendar size={20} className="mr-2" />
              Schedule Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </button>
            <a 
              href="/projects" 
              className="group border border-white text-white hover:bg-white hover:text-mh-hunter-green px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
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

export default GovernmentContractingClient