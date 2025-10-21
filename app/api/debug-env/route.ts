export async function GET() {
  return Response.json({
    GA_ID: process.env.NEXT_PUBLIC_GA_ID || null,
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || null,
    ENV: process.env.NODE_ENV,
  })
}
