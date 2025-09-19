import { NextRequest, NextResponse } from 'next/server'
import { getTeamNotifications } from '../../../lib/dashboardAPI'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '20')
    const unreadOnly = searchParams.get('unreadOnly') === 'true'

    const notifications = await getTeamNotifications(limit, unreadOnly)
    
    return NextResponse.json({
      success: true,
      data: notifications,
      count: notifications.length
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch notifications',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}