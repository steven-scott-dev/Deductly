import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!SUPABASE_URL || !SUPABASE_KEY) {
      console.error('Missing Supabase env vars')
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
      console.error('Supabase insert failed:', text)
      return NextResponse.json({ error: 'Insert failed' }, { status: 500 })
    }

    console.log('✅ Email saved to waitlist')
    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('❌ Subscribe route error:', err)
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 })
  }
}
