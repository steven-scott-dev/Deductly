import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // ✅ Save to Supabase waitlist table
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!SUPABASE_URL || !SUPABASE_KEY) {
      console.error('❌ Missing Supabase environment variables')
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({ email }),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('❌ Supabase error:', text)
      return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
    }

    // ✅ Success
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('❌ Error in subscribe route:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
