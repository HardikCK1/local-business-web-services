import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // In a real application, you would save this to a database
    // For now, we'll just return success
    // The frontend will handle storing in localStorage

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry! We will get back to you within 24 hours.",
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to submit enquiry. Please try again." },
      { status: 500 },
    )
  }
}
