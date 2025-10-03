"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Neezs ฟรีใช่ไหม?",
      answer: "ใช่ครับ Neezs ฟรี 100% สำหรับผู้หางาน ไม่มีค่าใช้จ่ายใด ๆ ในการดาวน์โหลด สมัครสมาชิก หรือสมัครงาน",
    },
    {
      question: "สมัครงานผ่าน Neezs ปลอดภัยไหม?",
      answer: "ปลอดภัยครับ เราตรวจสอบนายจ้างทุกรายก่อนให้ลงประกาศ และมีระบบรายงานปัญหาหากพบความผิดปกติ",
    },
    {
      question: "ใช้เวลานานไหมในการสร้างโปรไฟล์?",
      answer: "ไม่นานเลยครับ ใช้เวลาแค่ 2-3 นาทีในการกรอกข้อมูลพื้นฐาน อัปโหลดรูป และเลือกประเภทงานที่สนใจ",
    },
    {
      question: "สามารถแชทกับนายจ้างได้ทันทีหรือไม่?",
      answer: "ได้ครับ หลังจากสมัครงานแล้ว คุณสามารถแชทกับนายจ้างได้ทันทีเพื่อสอบถามรายละเอียดเพิ่มเติม",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">คำถามที่พบบ่อย</h2>
          <p className="text-xl text-muted-foreground text-pretty">คำตอบสำหรับคำถามที่ผู้ใช้งานถามบ่อย ๆ</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#FFA500] flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground text-pretty">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
