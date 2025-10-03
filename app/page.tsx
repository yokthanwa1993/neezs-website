import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Trust } from "@/components/trust"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Screens } from "@/components/screens"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Analytics } from "@/components/analytics"

export const metadata: Metadata = {
  title: "Neezs — สมัครงานไว ดาวน์โหลดแอพแล้วเริ่มเลย",
  description:
    "Neezs แอพสมัครงานสไตล์คล้าย JobToday สมัครไว แชทนายจ้างทันที เหมาะกับงานพาร์ทไทม์ รายวัน บริการ ดาวน์โหลดบน iOS และ Android",
  keywords: ["สมัครงาน", "งานพาร์ทไทม์", "หางานรายวัน", "หางานใกล้บ้าน", "Neezs", "JobToday style"],
  alternates: {
    canonical: "https://neezs.app",
  },
  openGraph: {
    title: "Neezs — สมัครงานไว ดาวน์โหลดแอพแล้วเริ่มเลย",
    description:
      "Neezs แอพสมัครงานสไตล์คล้าย JobToday สมัครไว แชทนายจ้างทันที เหมาะกับงานพาร์ทไทม์ รายวัน บริการ ดาวน์โหลดบน iOS และ Android",
    url: "https://neezs.app",
    siteName: "Neezs",
    images: [
      {
        url: "/og-neezs.jpg",
        width: 1200,
        height: 630,
        alt: "Neezs - แอพสมัครงานไว",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neezs — สมัครงานไว ดาวน์โหลดแอพแล้วเริ่มเลย",
    description:
      "Neezs แอพสมัครงานสไตล์คล้าย JobToday สมัครไว แชทนายจ้างทันที เหมาะกับงานพาร์ทไทม์ รายวัน บริการ ดาวน์โหลดบน iOS และ Android",
    images: ["/og-neezs.jpg"],
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Features />
        <HowItWorks />
        <Screens />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <Analytics />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Neezs",
            applicationCategory: "BusinessApplication",
            operatingSystem: "iOS, Android",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "THB",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1245",
            },
            url: "https://neezs.app",
            description: "แอพสมัครงานที่ช่วยให้คุณสมัครงานได้ไวและแชทกับนายจ้างได้ทันที",
          }),
        }}
      />
    </>
  )
}
