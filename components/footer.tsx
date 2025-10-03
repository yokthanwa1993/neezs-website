import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">Neezs</span>
            </div>
            <p className="text-muted-foreground">© {currentYear} Neezs Co., Ltd. สงวนลิขสิทธิ์</p>
          </div>

          {/* Right - Links */}
          <div className="text-center md:text-right">
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Link href="#privacy" className="text-muted-foreground hover:text-[#FFA500] transition-colors">
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link href="#terms" className="text-muted-foreground hover:text-[#FFA500] transition-colors">
                เงื่อนไขการใช้งาน
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-[#FFA500] transition-colors">
                ติดต่อเรา
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
