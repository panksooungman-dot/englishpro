'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, GraduationCap, Menu, X, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/about', label: 'About' },
]

function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#0B1B2F] rounded flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-[#E8A43A]" />
          </div>
          <span className="font-bold text-[#0B1B2F] text-lg tracking-tight">
            EnglishPro
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-[#0B1B2F]'
                  : 'text-stone-500 hover:text-[#0B1B2F]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/my-courses"
            className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-[#0B1B2F] transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            내 강의실
          </Link>
          <Link
            href="/courses"
            className="px-4 py-2 bg-[#0B1B2F] text-white text-sm font-medium rounded hover:bg-[#162d4a] transition-colors"
          >
            강의 보기
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-stone-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-stone-700 hover:text-[#0B1B2F] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/my-courses"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-stone-700"
          >
            내 강의실
          </Link>
          <Link
            href="/courses"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-2 bg-[#0B1B2F] text-white text-sm font-medium rounded text-center"
          >
            강의 보기
          </Link>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0B1B2F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E8A43A] rounded flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#0B1B2F]" />
              </div>
              <span className="font-bold text-xl">EnglishPro</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              실전 영어를 가르치는 온라인 강의 플랫폼입니다. 비즈니스 영어부터 IELTS 준비, 발음 교정까지 — 목표에 맞는 강의를 만나보세요.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-stone-300 uppercase tracking-wider">강의</h4>
            <ul className="flex flex-col gap-2">
              {['Business English', 'IELTS/TOEFL', '발음 교정', '일상 회화', '영어 글쓰기'].map((item) => (
                <li key={item}>
                  <Link href="/courses" className="text-sm text-stone-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-stone-300 uppercase tracking-wider">정보</h4>
            <ul className="flex flex-col gap-2">
              {['강사 소개', '수강후기', 'FAQ', '이용약관', '개인정보처리방침'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-stone-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-xs">© 2025 EnglishPro. All rights reserved.</p>
          <div className="flex items-center gap-2 text-stone-500 text-xs">
            <span>결제 시스템</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#E8A43A]">토스페이먼츠</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  )
}
