import { Card } from "@/components/ui/card"

export function Screens() {
  const screens = [
    {
      title: "หน้าค้นหางาน",
      description: "ค้นหางานตามสถานที่ ประเภทงาน และเงินเดือนที่ต้องการ",
      image: "/job-search-mobile-app-screen.jpg",
    },
    {
      title: "หน้าแชท",
      description: "แชทกับนายจ้างได้ทันทีหลังสมัคร สอบถามรายละเอียดงานได้เลย",
      image: "/chat-interface-mobile-app-screen.jpg",
    },
    {
      title: "หน้าโปรไฟล์",
      description: "จัดการข้อมูลส่วนตัว ประวัติการสมัครงาน และการตั้งค่า",
      image: "/user-profile-mobile-app-screen.jpg",
    },
  ]

  return (
    <section id="screens" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">หน้าจอตัวอย่างแอพ</h2>
          <p className="text-xl text-muted-foreground text-pretty">ดูตัวอย่างการใช้งานจริงของแอพ Neezs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src={screen.image || "/placeholder.svg"}
                  alt={screen.title}
                  className="w-48 h-80 mx-auto rounded-2xl shadow-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{screen.title}</h3>
              <p className="text-muted-foreground text-pretty">{screen.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
