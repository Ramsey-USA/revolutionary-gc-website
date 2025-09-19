import { NextRequest, NextResponse } from 'next/server'
import { getConsultationById } from '../../../../lib/dashboardAPI'

interface Params {
  id: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { id } = await params
    const consultation = await getConsultationById(id)
    
    if (!consultation) {
      return NextResponse.json({
        success: false,
        error: 'Consultation not found'
      }, { status: 404 })
    }
    
    return NextResponse.json({
      success: true,
      data: consultation
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch consultation',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}