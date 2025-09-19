'use client'

import React from 'react'
import { Calendar } from 'lucide-react'
import CalendarScheduler from './CalendarScheduler'
import { useScheduler } from '../hooks/useScheduler'

interface ScheduleButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
  block?: boolean
}

const ScheduleButton: React.FC<ScheduleButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children = 'Schedule Consultation',
  showIcon = true,
  block = false
}) => {
  const { isSchedulerOpen, openScheduler, closeScheduler } = useScheduler()

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-mh-hunter-green to-army-green hover:from-army-green hover:to-mh-hunter-green text-white'
      case 'secondary':
        return 'bg-army-gold hover:bg-yellow-500 text-army-black'
      case 'outline':
        return 'border-2 border-mh-hunter-green text-mh-hunter-green hover:bg-mh-hunter-green hover:text-white'
      case 'ghost':
        return 'text-mh-hunter-green hover:bg-mh-hunter-green/10'
      default:
        return 'bg-gradient-to-r from-mh-hunter-green to-army-green hover:from-army-green hover:to-mh-hunter-green text-white'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm'
      case 'md':
        return 'px-6 py-3 text-base'
      case 'lg':
        return 'px-8 py-4 text-lg'
      default:
        return 'px-6 py-3 text-base'
    }
  }

  const baseClasses = 'font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center'
  const widthClass = block ? 'w-full' : 'inline-flex'
  
  return (
    <>
      <button
        onClick={openScheduler}
        className={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${widthClass} ${className}`}
      >
        {showIcon && <Calendar size={20} className="mr-2" />}
        {children}
      </button>
      <CalendarScheduler isOpen={isSchedulerOpen} onClose={closeScheduler} />
    </>
  )
}

export default ScheduleButton