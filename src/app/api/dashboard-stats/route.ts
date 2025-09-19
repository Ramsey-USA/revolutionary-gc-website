import { NextRequest, NextResponse } from 'next/server'
import { getDashboardStats } from '../../../lib/dashboardAPI'

export async function GET(request: NextRequest) {
  try {
    const stats = await getDashboardStats()
    
    return NextResponse.json({
      success: true,
      data: stats
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch dashboard stats',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}