"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-gradient-to-b from-background/50 to-transparent backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <span className="ml-2 text-2xl font-bold text-foreground">Neezs</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-lg">
              <Link href="#features" className="text-black font-bold hover:text-[#FFA500] transition-colors">
                ฟีเจอร์
              </Link>
              <Link href="#how-it-works" className="text-black font-bold hover:text-[#FFA500] transition-colors">
                เริ่มใช้งาน
              </Link>
              <Link href="#screens" className="text-black font-bold hover:text-[#FFA500] transition-colors">
                หน้าจอตัวอย่าง
              </Link>
              <Link href="#faq" className="text-black font-bold hover:text-[#FFA500] transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="lg"
              className="h-12 px-8 rounded-lg bg-[#FFA500] hover:bg-[#E69500] text-white font-medium text-lg md:text-xl"
              asChild
            >
              <Link href="#download">เข้าสู่ระบบ</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="เปิดเมนู"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link
                href="#features"
                className="block px-3 py-2 text-muted-foreground hover:text-[#FFA500] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ฟีเจอร์
              </Link>
              <Link
                href="#how-it-works"
                className="block px-3 py-2 text-muted-foreground hover:text-[#FFA500] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                เริ่มใช้งาน
              </Link>
              <Link
                href="#screens"
                className="block px-3 py-2 text-muted-foreground hover:text-[#FFA500] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                หน้าจอตัวอย่าง
              </Link>
              <Link
                href="#faq"
                className="block px-3 py-2 text-muted-foreground hover:text-[#FFA500] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <div className="px-3 py-2">
                <Button
                  size="lg"
                  className="h-12 w-full rounded-lg bg-[#FFA500] hover:bg-[#E69500] text-white font-medium text-lg"
                  asChild
                >
                  <Link href="#download">เข้าสู่ระบบ</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
