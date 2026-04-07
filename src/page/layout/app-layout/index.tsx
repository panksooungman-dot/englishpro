'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpen,
  GraduationCap,
  Menu,
  X,
  ChevronRight,
  ShoppingCart,
  User,
  Bell,
  ChevronDown,
  Search,
} from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/state/cart'

// ── Nav Structure ──────────────────────────────────────────────
const courseLinks = [
  { href: '/courses', label: '전체 강의' },
  { href: '/courses?filter=popular', label: '인기 강의' },
  { href: '/courses?filter=new', label: '신규 강의' },
  { href: '/courses?category=Business', label: 'Business English' },
  { href: '/courses?category=IELTS', label: 'IELTS / TOEFL' },
  { href: '/courses?category=Pronunciation', label: '발음 교정' },
  { href: '/courses?category=Conversation', label: '일상 회화' },
]

const communityLinks = [
  { href: '/community/notice', label: '공지사항' },
  { href: '/community/faq', label: 'FAQ' },
  { href: '/community/reviews', label: '수강 후기' },
  { href: '/community/inquiry', label: '1:1 문의' },
]

const mypageLinks = [
  { href: '/mypage', label: '내 정보' },
  { href: '/mypage?tab=orders', label: '주문/결제 내역' },
  { href: '/mypage?tab=coupon', label: '쿠폰/포인트' },
  { href: '/mypage?tab=wishlist', label: '찜한 강의' },
  { href: '/mypage?tab=inquiries', label: '문의 내역' },
]

// ── Dropdown Component ─────────────────────────────────────────
function Dropdown({
  label,
  links,
  active,
}: {
  label: string
  links: { href: string; label: string }[]
  active: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors py-1 ${
          active ? 'text-[#0B1B2F]' : 'text-stone-500 hover:text-[#0B1B2F]'
        }`}
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-stone-100 rounded-xl shadow-xl py-2 min-w-44 z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-sm text-stone-600 hover:text-[#0B1B2F] hover:bg-stone-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Header ─────────────────────────────────────────────────────
function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const { items } = useCart((s) => ({ items: s.items }))
  const cartCount = items.length

  const isActive = (prefix: string) => pathname.startsWith(prefix)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-[#0B1B2F] rounded flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-[#E8A43A]" />
          </div>
          <span className="font-bold text-[#0B1B2F] text-lg tracking-tight">EnglishPro</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Dropdown
            label="강의"
            links={courseLinks}
            active={isActive('/courses')}
          />
          <Link
            href="/instructor"
            className={`text-sm font-medium transition-colors ${
              pathname === '/instructor' ? 'text-[#0B1B2F]' : 'text-stone-500 hover:text-[#0B1B2F]'
            }`}
          >
            강사 소개
          </Link>
          <Link
            href="/events"
            className={`text-sm font-medium transition-colors ${
              pathname === '/events' ? 'text-[#0B1B2F]' : 'text-stone-500 hover:text-[#0B1B2F]'
            }`}
          >
            이벤트
          </Link>
          <Dropdown
            label="커뮤니티"
            links={communityLinks}
            active={isActive('/community')}
          />
        </nav>

        {/* Search + Icons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/courses"
            className="p-2 text-stone-500 hover:text-[#0B1B2F] transition-colors"
          >
            <Search className="w-4 h-4" />
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 text-stone-500 hover:text-[#0B1B2F] transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#E8A43A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* My Page dropdown */}
          <Dropdown
            label=""
            links={[
              { href: '/my-courses', label: '내 강의실' },
              ...mypageLinks,
              { href: '/sign-in', label: '로그인' },
            ]}
            active={isActive('/mypage') || isActive('/my-courses')}
          />
          <div className="flex items-center">
            <Link
              href="/mypage"
              className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-[#0B1B2F] transition-colors"
            >
              <User className="w-4 h-4" />
              마이페이지
            </Link>
          </div>

          <Link
            href="/courses"
            className="px-4 py-2 bg-[#0B1B2F] text-white text-sm font-medium rounded hover:bg-[#162d4a] transition-colors"
          >
            강의 보기
          </Link>
        </div>

        {/* Mobile: Cart + Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <Link href="/cart" className="relative p-2 text-stone-600">
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#E8A43A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="p-2 text-stone-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {/* 강의 */}
            <button
              onClick={() => setMobileSection(mobileSection === 'courses' ? null : 'courses')}
              className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-stone-700"
            >
              강의
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'courses' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSection === 'courses' && (
              <div className="pl-4 space-y-1">
                {courseLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-stone-500 hover:text-[#0B1B2F]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {['강사 소개:/instructor', '이벤트:/events'].map((item) => {
              const [label, href] = item.split(':')
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm font-medium text-stone-700"
                >
                  {label}
                </Link>
              )
            })}

            {/* 커뮤니티 */}
            <button
              onClick={() => setMobileSection(mobileSection === 'community' ? null : 'community')}
              className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-stone-700"
            >
              커뮤니티
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'community' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSection === 'community' && (
              <div className="pl-4 space-y-1">
                {communityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-stone-500 hover:text-[#0B1B2F]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="pt-2 border-t border-stone-100 mt-2 space-y-1">
              <Link href="/my-courses" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 py-2.5 text-sm font-medium text-stone-700">
                <BookOpen className="w-4 h-4" /> 내 강의실
              </Link>
              <Link href="/mypage" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 py-2.5 text-sm font-medium text-stone-700">
                <User className="w-4 h-4" /> 마이페이지
              </Link>
              <Link href="/sign-in" onClick={() => setMobileOpen(false)} className="block py-2 px-4 bg-[#0B1B2F] text-white text-sm font-medium rounded text-center mt-2">
                로그인 / 회원가입
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// ── Footer ─────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0B1B2F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E8A43A] rounded flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#0B1B2F]" />
              </div>
              <span className="font-bold text-xl">EnglishPro</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              실전 영어를 가르치는 온라인 강의 플랫폼. 비즈니스 영어부터 IELTS, 발음 교정까지 — 목표에 맞는 강의를 만나보세요.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-stone-300 uppercase tracking-wider">강의</h4>
            <ul className="flex flex-col gap-2">
              {courseLinks.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-stone-300 uppercase tracking-wider">안내</h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/instructor', label: '강사 소개' },
                { href: '/events', label: '이벤트/프로모션' },
                { href: '/community/notice', label: '공지사항' },
                { href: '/community/faq', label: 'FAQ' },
                { href: '/community/inquiry', label: '1:1 문의' },
                { href: '/terms', label: '이용약관' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-stone-500 text-xs space-x-4">
            <Link href="/terms" className="hover:text-stone-300 transition-colors">이용약관</Link>
            <Link href="/terms?tab=privacy" className="hover:text-stone-300 transition-colors">개인정보처리방침</Link>
          </div>
          <p className="text-stone-500 text-xs">© 2025 EnglishPro. All rights reserved.</p>
          <div className="flex items-center gap-2 text-stone-500 text-xs">
            <Bell className="w-3 h-3" />
            <span>결제: </span>
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
