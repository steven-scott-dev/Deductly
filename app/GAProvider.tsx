'use client'
import Script from 'next/script'
import { useEffect } from 'react'

export default function GAProvider() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    console.log('GAProvider mounted; GA_ID =', GA_ID)
  }, [GA_ID])

  if (!GA_ID) return <div style={{display:"none"}} id="ga-status">No GA_ID</div>

  return (
    <>
      <div style={{display:"none"}} id="ga-status">GA Active</div>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
