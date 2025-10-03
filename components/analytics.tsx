"use client"

import { useEffect } from "react"

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  return null
}
