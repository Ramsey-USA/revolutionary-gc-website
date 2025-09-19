import { NextRequest, NextResponse } from 'next/server'
import { getConsultationRequests, getDashboardStats } from '../../../lib/dashboardAPI'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    const status = searchParams.get('status') || undefined

    const consultations = await getConsultationRequests(limit, status)
    
    return NextResponse.json({
      success: true,
      data: consultations,
      count: consultations.length
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch consultations',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}