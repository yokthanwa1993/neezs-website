import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, QrCode, MessageCircle, MapPin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-background.jpg)" }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-7xl font-bold text-foreground leading-tight text-balance">
              <span className="block">สมัครงานได้ใน</span>
              <span className="block"><span className="text-[#FFA500]">ไม่กี่คลิก</span></span>
              <span className="block">ดาวน์โหลดแอพ</span>
              <span className="block">แล้วเริ่มกันเลย</span>
            </h1>

            <p className="mt-6 text-3xl text-muted-foreground text-pretty">
              แอพสมัครงานที่ใช้งานง่าย สมัครไว แชทกับผู้ว่าจ้างได้ทันที เหมาะสำหรับงานพาร์ทไทม์ รายวัน และงานบริการ
            </p>

            {/* Download Buttons */}
            <div id="download" className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#appstore" aria-label="ดาวน์โหลดจาก App Store" className="inline-block">
                <img
                  src="/images/app-store-badge.png"
                  alt="Download on the App Store"
                  className="h-14 w-48 object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="#googleplay" aria-label="ดาวน์โหลดจาก Google Play" className="inline-block">
                <img
                  src="/images/google-play-badge-new.png"
                  alt="Get it on Google Play"
                  className="h-14 w-48 object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>

            {/* QR Code Link */}
            <div className="mt-6">
              <Link
                href="#qr"
                className="inline-flex items-center text-[#FFA500] hover:text-[#E69500] transition-colors"
              >
                <QrCode className="mr-2 h-4 w-4" />
                สแกน QR เพื่อดาวน์โหลด
              </Link>
            </div>

            {/* Key Points */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-center lg:justify-start">
                <Check className="h-5 w-5 text-[#FFA500] mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">สร้างโปรไฟล์หน้าเดียว ใช้เวลาแค่ 2 นาที</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Check className="h-5 w-5 text-[#FFA500] mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">แชทกับนายจ้างได้ทันทีหลังสมัคร</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Check className="h-5 w-5 text-[#FFA500] mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">แจ้งเตือนงานใกล้บ้านอัตโนมัติ</span>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Card className="w-80 h-[34rem] bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-3xl p-6 shadow-2xl">
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-6 h-6 bg-[#FFA500] rounded-full"></div>
                    <div className="text-lg font-medium text-gray-600">งานใกล้คุณ</div>
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>

                  {/* Job Cards */}
                  <div className="space-y-3 flex-1">
                    <Card className="p-4 bg-white border border-gray-200 rounded-xl">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg">พนักงานร้านกาแฟ</h3>
                          <p className="text-base text-gray-600 mt-1">Starbucks • เซ็นทรัลเวิลด์</p>
                          <div className="flex items-center mt-2">
                            <MapPin className="h-3 w-3 text-[#FFA500] mr-1" />
                            <span className="text-base text-gray-500">0.5 กม.</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#FFA500]">฿350/วัน</div>
                          <Button
                            size="sm"
                            className="mt-2 bg-[#FFA500] hover:bg-[#E69500] text-white text-base px-3 py-1"
                          >
                            สมัคร
                          </Button>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white border border-gray-200 rounded-xl">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg">พนักงานส่งอาหาร</h3>
                          <p className="text-base text-gray-600 mt-1">Grab Food • ทั่วกรุงเทพ</p>
                          <div className="flex items-center mt-2">
                            <MessageCircle className="h-3 w-3 text-green-500 mr-1" />
                            <span className="text-base text-green-600">แชทได้ทันที</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#FFA500]">฿25/ออเดอร์</div>
                          <Button
                            size="sm"
                            className="mt-2 bg-[#FFA500] hover:bg-[#E69500] text-white text-base px-3 py-1"
                          >
                            สมัคร
                          </Button>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white border border-gray-200 rounded-xl">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg">พนักงานขาย</h3>
                          <p className="text-base text-gray-600 mt-1">7-Eleven • สาขาใกล้บ้าน</p>
                          <div className="flex items-center mt-2">
                            <MapPin className="h-3 w-3 text-[#FFA500] mr-1" />
                            <span className="text-base text-gray-500">1.2 กม.</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#FFA500]">฿400/วัน</div>
                          <Button
                            size="sm"
                            className="mt-2 bg-[#FFA500] hover:bg-[#E69500] text-white text-base px-3 py-1"
                          >
                            สมัคร
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
