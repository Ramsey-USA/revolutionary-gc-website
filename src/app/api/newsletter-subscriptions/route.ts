import { NextRequest, NextResponse } from 'next/server'
import { getNewsletterSubscriptions } from '../../../lib/dashboardAPI'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    const activeOnly = searchParams.get('activeOnly') === 'true'

    const subscriptions = await getNewsletterSubscriptions(limit, activeOnly)
    
    return NextResponse.json({
      success: true,
      data: subscriptions,
      count: subscriptions.length
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch newsletter subscriptions',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}