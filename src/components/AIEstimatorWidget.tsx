'use client'

import React, { useState, useEffect } from 'react'
import { Calculator, TrendingUp, Clock, DollarSign, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react'
import ScheduleButton from './ScheduleButton'

interface ProjectData {
  projectType: string
  squareFootage: number
  stories: number
  quality: string
  location: string
  features: string[]
}

interface CostBreakdown {
  category: string
  amount: number
  percentage: number
}

interface EstimateResult {
  totalCost: number
  costBreakdown: CostBreakdown[]
  timeline: {
    phase: string
    duration: string
    weeks: number
  }[]
  accuracy: string
  riskFactors: string[]
  recommendations: string[]
}

const AIEstimatorWidget: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [projectData, setProjectData] = useState<ProjectData>({
    projectType: '',
    squareFootage: 0,
    stories: 1,
    quality: '',
    location: '',
    features: []
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [estimateResult, setEstimateResult] = useState<EstimateResult | null>(null)
  const [showResults, setShowResults] = useState(false)

  const totalSteps = 5

  // Project type options with base costs per sq ft
  const projectTypes = [
    { value: 'office', label: 'Office Building', baseCost: 180, description: 'Commercial office space with standard finishes' },
    { value: 'warehouse', label: 'Warehouse/Industrial', baseCost: 90, description: 'Industrial warehouse with basic utilities' },
    { value: 'retail', label: 'Retail Space', baseCost: 160, description: 'Retail storefront with customer areas' },
    { value: 'government', label: 'Government Facility', baseCost: 220, description: 'Government building with security features' },
    { value: 'healthcare', label: 'Healthcare Facility', baseCost: 350, description: 'Medical facility with specialized systems' },
    { value: 'education', label: 'Educational Building', baseCost: 190, description: 'School or training facility' }
  ]

  // Quality multipliers
  const qualityMultipliers = {
    'standard': { multiplier: 1.0, label: 'Standard Grade', description: 'Standard materials and finishes' },
    'high': { multiplier: 1.35, label: 'High Grade', description: 'Premium materials and enhanced finishes' },
    'premium': { multiplier: 1.7, label: 'Premium Grade', description: 'Luxury materials and custom finishes' }
  }

  // Special features with additional costs
  const specialFeatures = [
    { value: 'hvac', label: 'Advanced HVAC System', cost: 25 },
    { value: 'fire', label: 'Fire Suppression System', cost: 15 },
    { value: 'security', label: 'Security Systems', cost: 20 },
    { value: 'parking', label: 'Parking Structure', cost: 35 },
    { value: 'solar', label: 'Solar Energy System', cost: 30 },
    { value: 'elevator', label: 'Elevator System', cost: 40 }
  ]

  // AI calculation function
  const calculateEstimate = (): EstimateResult => {
    const baseProjectType = projectTypes.find(pt => pt.value === projectData.projectType)
    if (!baseProjectType) throw new Error('Invalid project type')

    const qualityMultiplier = qualityMultipliers[projectData.quality as keyof typeof qualityMultipliers]?.multiplier || 1.0
    
    // Base cost calculation
    let baseCostPerSqFt = baseProjectType.baseCost
    
    // Story multiplier (more stories = more complex)
    const storyMultiplier = 1 + ((projectData.stories - 1) * 0.15)
    
    // Location multiplier (simplified - in real app would use actual data)
    const locationMultiplier = projectData.location.toLowerCase().includes('seattle') ? 1.25 : 1.0
    
    // Calculate base cost
    let totalBaseCost = projectData.squareFootage * baseCostPerSqFt * qualityMultiplier * storyMultiplier * locationMultiplier
    
    // Add special features
    let featureCosts = 0
    projectData.features.forEach(feature => {
      const featureData = specialFeatures.find(sf => sf.value === feature)
      if (featureData) {
        featureCosts += projectData.squareFootage * featureData.cost
      }
    })
    
    const totalCost = totalBaseCost + featureCosts
    
    // Cost breakdown
    const costBreakdown: CostBreakdown[] = [
      { category: 'Foundation & Structure', amount: Math.round(totalCost * 0.25), percentage: 25 },
      { category: 'Framing & Envelope', amount: Math.round(totalCost * 0.20), percentage: 20 },
      { category: 'MEP Systems', amount: Math.round(totalCost * 0.18), percentage: 18 },
      { category: 'Interior Finishes', amount: Math.round(totalCost * 0.15), percentage: 15 },
      { category: 'Site Work & Utilities', amount: Math.round(totalCost * 0.12), percentage: 12 },
      { category: 'Permits & Fees', amount: Math.round(totalCost * 0.05), percentage: 5 },
      { category: 'Contingency', amount: Math.round(totalCost * 0.05), percentage: 5 }
    ]
    
    // Timeline calculation
    const timelineWeeks = Math.max(16, Math.min(52, Math.round(projectData.squareFootage / 1000) + (projectData.stories * 2)))
    const timeline = [
      { phase: 'Design & Permits', duration: '8-12 weeks', weeks: 10 },
      { phase: 'Site Preparation', duration: '4-6 weeks', weeks: 5 },
      { phase: 'Construction', duration: `${timelineWeeks}-${timelineWeeks + 4} weeks`, weeks: timelineWeeks },
      { phase: 'Final Inspections', duration: '2-3 weeks', weeks: 3 }
    ]
    
    // Risk factors and recommendations
    const riskFactors = []
    const recommendations = []
    
    if (projectData.squareFootage > 50000) {
      riskFactors.push('Large project complexity')
      recommendations.push('Consider phased construction approach')
    }
    
    if (projectData.stories > 3) {
      riskFactors.push('Multi-story structural requirements')
      recommendations.push('Early structural engineering consultation recommended')
    }
    
    if (projectData.features.includes('healthcare')) {
      riskFactors.push('Specialized regulatory requirements')
      recommendations.push('Allow additional time for healthcare permits')
    }
    
    return {
      totalCost: Math.round(totalCost),
      costBreakdown,
      timeline,
      accuracy: '±5%',
      riskFactors,
      recommendations
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Generate estimate
      setIsProcessing(true)
      setTimeout(() => {
        const result = calculateEstimate()
        setEstimateResult(result)
        setIsProcessing(false)
        setShowResults(true)
      }, 2000) // Simulate AI processing time
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFeatureToggle = (feature: string) => {
    setProjectData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1: return projectData.projectType !== ''
      case 2: return projectData.squareFootage > 0
      case 3: return projectData.quality !== ''
      case 4: return projectData.location !== ''
      case 5: return true
      default: return false
    }
  }

  const resetEstimator = () => {
    setCurrentStep(1)
    setProjectData({
      projectType: '',
      squareFootage: 0,
      stories: 1,
      quality: '',
      location: '',
      features: []
    })
    setEstimateResult(null)
    setShowResults(false)
    setIsProcessing(false)
  }

  if (isProcessing) {
    return (
      <div className="bg-gradient-to-br from-mh-hunter-green to-army-black text-white p-8 rounded-2xl shadow-2xl">
        <div className="text-center">
          <div className="w-20 h-20 bg-army-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Calculator size={32} className="text-army-black" />
          </div>
          <h3 className="text-3xl font-bold mb-4">AI Processing Your Estimate</h3>
          <p className="text-gray-200 mb-8">Analyzing project requirements and calculating costs...</p>
          
          <div className="space-y-4 max-w-md mx-auto">
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
              <span>Analyzing project type</span>
              <CheckCircle className="text-green-400" size={20} />
            </div>
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
              <span>Calculating material costs</span>
              <div className="w-5 h-5 border-2 border-army-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg opacity-50">
              <span>Generating timeline</span>
              <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg opacity-50">
              <span>Finalizing estimate</span>
              <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showResults && estimateResult) {
    return (
      <div className="space-y-6">
        {/* Results Header */}
        <div className="bg-gradient-to-br from-mh-hunter-green to-army-black text-white p-8 rounded-2xl shadow-2xl">
          <div className="text-center">
            <div className="w-20 h-20 bg-army-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-army-black" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Your AI Estimate is Ready!</h3>
            <div className="text-5xl font-bold text-army-gold mb-2">
              ${estimateResult.totalCost.toLocaleString()}
            </div>
            <p className="text-gray-200">Estimated Project Cost ({estimateResult.accuracy} accuracy)</p>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6">Detailed Cost Breakdown</h3>
          <div className="space-y-3">
            {estimateResult.costBreakdown.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-dark-surface-3 rounded-lg">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-mh-hunter-green rounded-full mr-3"></div>
                  <span className="font-semibold text-gray-700 dark:text-dark-text-secondary">{item.category}</span>
                </div>
                <div className="text-right">
                  <div className="text-mh-hunter-green font-bold">${item.amount.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">{item.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white dark:bg-dark-surface-2 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6">Project Timeline</h3>
          <div className="space-y-4">
            {estimateResult.timeline.map((phase, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-army-gold rounded-full flex items-center justify-center text-army-black font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-700 dark:text-dark-text-secondary">{phase.phase}</h4>
                  <p className="text-mh-hunter-green font-bold">{phase.duration}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-mh-hunter-green rounded-lg text-white">
            <div className="text-center">
              <span className="text-lg font-bold">Total Project Duration: </span>
              <span className="text-xl font-bold text-army-gold">
                {estimateResult.timeline.reduce((sum, phase) => sum + phase.weeks, 0)} weeks
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScheduleButton variant="primary" size="lg">
              Schedule Consultation
            </ScheduleButton>
            <button
              onClick={resetEstimator}
              className="border-2 border-mh-hunter-green text-mh-hunter-green hover:bg-mh-hunter-green hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              New Estimate
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
            This estimate is for planning purposes. Contact us for a detailed quote.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-mh-hunter-green to-army-black text-white p-8 rounded-2xl shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-army-gold rounded-full flex items-center justify-center mr-4">
            <Calculator size={24} className="text-army-black" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">AI Project Estimator</h3>
            <p className="text-gray-200">Step {currentStep} of {totalSteps}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-200">Progress</div>
          <div className="w-32 h-2 bg-white/20 rounded-full mt-1">
            <div 
              className="h-full bg-army-gold rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {currentStep === 1 && (
          <div>
            <h4 className="text-xl font-bold mb-4">What type of project are you planning?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setProjectData(prev => ({ ...prev, projectType: type.value }))}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    projectData.projectType === type.value
                      ? 'border-army-gold bg-army-gold/20'
                      : 'border-white/20 bg-white/10 hover:border-army-gold/50'
                  }`}
                >
                  <h5 className="font-bold mb-1">{type.label}</h5>
                  <p className="text-sm text-gray-300">{type.description}</p>
                  <p className="text-xs text-army-gold mt-2">~${type.baseCost}/sq ft base</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h4 className="text-xl font-bold mb-4">Project Size & Configuration</h4>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Square Footage</label>
                <input
                  type="number"
                  placeholder="Enter square footage (e.g., 10000)"
                  value={projectData.squareFootage || ''}
                  onChange={(e) => setProjectData(prev => ({ ...prev, squareFootage: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-army-gold focus:border-army-gold transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Number of Stories</label>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((stories) => (
                    <button
                      key={stories}
                      onClick={() => setProjectData(prev => ({ ...prev, stories }))}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        projectData.stories === stories
                          ? 'border-army-gold bg-army-gold/20'
                          : 'border-white/20 bg-white/10 hover:border-army-gold/50'
                      }`}
                    >
                      {stories === 3 ? '3+ Stories' : `${stories} Story`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h4 className="text-xl font-bold mb-4">Construction Quality Level</h4>
            <div className="space-y-4">
              {Object.entries(qualityMultipliers).map(([key, quality]) => (
                <button
                  key={key}
                  onClick={() => setProjectData(prev => ({ ...prev, quality: key }))}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    projectData.quality === key
                      ? 'border-army-gold bg-army-gold/20'
                      : 'border-white/20 bg-white/10 hover:border-army-gold/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="font-bold mb-1">{quality.label}</h5>
                      <p className="text-sm text-gray-300">{quality.description}</p>
                    </div>
                    <div className="text-army-gold font-bold">
                      {quality.multiplier === 1.0 ? 'Base' : `+${Math.round((quality.multiplier - 1) * 100)}%`}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h4 className="text-xl font-bold mb-4">Project Location</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">City, State</label>
                <input
                  type="text"
                  placeholder="Enter project location (e.g., Pasco, WA)"
                  value={projectData.location}
                  onChange={(e) => setProjectData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-army-gold focus:border-army-gold transition-all duration-300"
                />
              </div>
              <p className="text-sm text-gray-300">
                Location affects material costs, labor rates, and permit requirements. Major metro areas typically have 15-25% higher costs.
              </p>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <h4 className="text-xl font-bold mb-4">Special Features & Systems</h4>
            <p className="text-gray-200 mb-6">Select any additional features for your project:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialFeatures.map((feature) => (
                <button
                  key={feature.value}
                  onClick={() => handleFeatureToggle(feature.value)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    projectData.features.includes(feature.value)
                      ? 'border-army-gold bg-army-gold/20'
                      : 'border-white/20 bg-white/10 hover:border-army-gold/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="font-bold mb-1">{feature.label}</h5>
                      <p className="text-sm text-army-gold">+${feature.cost}/sq ft</p>
                    </div>
                    {projectData.features.includes(feature.value) && (
                      <CheckCircle className="text-army-gold" size={20} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} className="mr-2" />
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className="flex items-center px-6 py-3 bg-army-gold hover:bg-yellow-500 text-army-black rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentStep === totalSteps ? 'Generate Estimate' : 'Next'}
          {currentStep !== totalSteps && <ChevronRight size={20} className="ml-2" />}
          {currentStep === totalSteps && <Calculator size={20} className="ml-2" />}
        </button>
      </div>
    </div>
  )
}

export default AIEstimatorWidget