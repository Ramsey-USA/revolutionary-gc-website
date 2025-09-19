import { NextRequest, NextResponse } from 'next/server'
import { exportConsultationData } from '../../../lib/dashboardAPI'

export async function GET(request: NextRequest) {
  try {
    const data = await exportConsultationData()
    
    return NextResponse.json({
      success: true,
      data: data
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to export data',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}