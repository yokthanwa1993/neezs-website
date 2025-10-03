import { Card } from "@/components/ui/card"
import { User, Search, MessageSquare } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: User,
      title: "สร้างโปรไฟล์ใน 2 นาที",
      description: "กรอกข้อมูลพื้นฐาน อัปโหลดรูป และเลือกประเภทงานที่สนใจ ง่ายและรวดเร็ว",
    },
    {
      icon: Search,
      title: "ค้นหางานตรงใจ",
      description: "ระบบแนะนำงานอัจฉริยะด้วย AI ช่วยหางานที่คุณถนัด และเหมาะกับคุณ",
    },
    {
      icon: MessageSquare,
      title: "สมัครไว แชทไว",
      description: "สมัครงานด้วยการกดเพียงครั้งเดียว แชทกับนายจ้างได้ทันทีเพื่อสอบถามรายละเอียด",
    },
  ]

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Soft background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/images/hero-background.jpg)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">ฟีเจอร์ที่ทำให้การหางานง่ายขึ้น</h2>
          <p className="text-3xl text-muted-foreground text-pretty">ทุกอย่างที่คุณต้องการในการหางาน รวมอยู่ในแอพเดียว</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-[#FFA500]/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFE0B3] rounded-2xl mb-6">
                <feature.icon className="h-8 w-8 text-[#FFA500]" />
              </div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-xl text-muted-foreground text-pretty">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
