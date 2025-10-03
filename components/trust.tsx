import { Shield, Zap, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Trust() {
  const trustPoints = [
    {
      icon: Shield,
      title: "ความเป็นส่วนตัว",
      description: "ข้อมูลของคุณปลอดภัย เราไม่แชร์ให้ใครโดยไม่ได้รับอนุญาต",
    },
    {
      icon: Zap,
      title: "สมัครไว แชทไว",
      description: "มีงานให้ตลอดตามทักษะ ไม่ว่าจะงานเสริม หรืองานประจำ",
    },
    {
      icon: MapPin,
      title: "โอกาสใกล้ตัว",
      description: "ค้นหางานใกล้บ้าน ประหยัดเวลาและค่าเดินทาง",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-[#FFA500]/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFE0B3] rounded-2xl mb-4">
                <point.icon className="h-8 w-8 text-[#FFA500]" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-pretty">{point.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
