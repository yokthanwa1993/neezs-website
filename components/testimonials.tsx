import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "สมชาย ใจดี",
      role: "พนักงานส่งอาหาร",
      content: "ใช้ Neezs หางานได้ง่ายมาก สมัครเสร็จแล้วนายจ้างแชทมาทันที ได้งานในวันเดียว!",
      rating: 5,
    },
    {
      name: "นิดา สวยงาม",
      role: "พนักงานร้านกาแฟ",
      content: "แอพใช้งานง่าย หางานใกล้บ้านได้ ไม่ต้องเดินทางไกล ประหยัดเวลาและเงิน",
      rating: 5,
    },
    {
      name: "วิชัย ขยันทำงาน",
      role: "พนักงานขาย",
      content: "ชอบที่สามารถแชทกับนายจ้างได้ทันที ได้รู้รายละเอียดงานก่อนไปสัมภาษณ์",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">คำชมจากผู้ใช้งานจริง</h2>
          <p className="text-xl text-muted-foreground text-pretty">ฟังเสียงจากคนที่ได้งานผ่าน Neezs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#FFA500] fill-current" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</blockquote>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
