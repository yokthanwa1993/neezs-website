import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, UserPlus, Send, QrCode } from "lucide-react"
import Link from "next/link"

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Download,
      title: "ดาวน์โหลดแอพ",
      description: "ดาวน์โหลด Neezs จาก App Store หรือ Google Play Store ฟรี",
    },
    {
      number: "2",
      icon: UserPlus,
      title: "สร้างโปรไฟล์",
      description: "กรอกข้อมูลพื้นฐาน อัปโหลดรูป และเลือกประเภทงานที่สนใจ",
    },
    {
      number: "3",
      icon: Send,
      title: "กดสมัคร & แชท",
      description: "เลือกงานที่ชอบ กดสมัคร และเริ่มแชทกับนายจ้างได้ทันที",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">เริ่มใช้งานง่าย ๆ ใน 3 ขั้นตอน</h2>
          <p className="text-2xl text-muted-foreground text-pretty">ไม่ซับซ้อน ไม่ยุ่งยาก เริ่มหางานได้ในไม่กี่นาที</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#FFE0B3] z-0"
                  style={{ transform: "translateX(50%)" }}
                />
              )}

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFA500] text-white rounded-2xl mb-6 font-bold text-2xl">
                  {step.number}
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFE0B3] rounded-xl mb-4 -mt-2">
                  <step.icon className="h-6 w-6 text-[#FFA500]" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-white">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-left">
                <h3 className="text-3xl font-bold mb-2">พร้อมเริ่มต้นแล้วใช่ไหม?</h3>
                <p className="text-white/90">ดาวน์โหลดแอพและเริ่มหางานวันนี้</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#FFA500] hover:bg-gray-100 font-medium"
                  asChild
                >
                  <Link href="#appstore">ดาวน์โหลดเลย</Link>
                </Button>
                <div className="flex items-center gap-2 text-white/90">
                  <QrCode className="h-5 w-5" />
                  <span className="text-base">หรือสแกน QR</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
