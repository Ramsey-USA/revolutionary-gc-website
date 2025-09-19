'use client'

import { useState } from 'react'

export const useScheduler = () => {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false)

  const openScheduler = () => {
    setIsSchedulerOpen(true)
  }

  const closeScheduler = () => {
    setIsSchedulerOpen(false)
  }

  return {
    isSchedulerOpen,
    openScheduler,
    closeScheduler
  }
}

export default useScheduler