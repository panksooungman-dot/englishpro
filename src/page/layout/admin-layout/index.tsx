'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  LayoutDashboard,
  BookOpen,
  Users,
  ShoppingBag,
  Tag,
  MessageSquare,
  BarChart3,
  Settings,
  ChevronDown,
  GraduationCap,
  Menu,
  X,
  Bell,
  LogOut,
  FolderOpen,
  Image,
  ChevronRight,
} from 'lucide-react'

// ── Nav Structure ──────────────────────────────────────────────
const navItems = [
  {
    id: 'dashboard',
    label: '대시보드',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    id: 'courses',
    label: '강의 관리',
    icon: BookOpen,
    children: [
      { label: '강의 목록', href: '/admin/courses' },
      { label: '강의 등록', href: '/admin/courses/register' },
      { label: '챕터/레슨 관리', href: '/admin/courses/chapters' },
      { label: '샘플영상 관리', href: '/admin/courses/samples' },
    ],
  },
  {
    id: 'categories',
    label: '카테고리 관리',
    href: '/admin/categories',
    icon: FolderOpen,
  },
  {
    id: 'members',
    label: '회원 관리',
    icon: Users,
    children: [
      { label: '회원 목록', href: '/admin/members' },
      { label: '수강 현황', href: '/admin/members/enrollments' },
      { label: '제재/권한 관리', href: '/admin/members/permissions' },
    ],
  },
  {
    id: 'orders',
    label: '주문/결제 관리',
    icon: ShoppingBag,
    children: [
      { label: '주문 목록', href: '/admin/orders' },
      { label: '결제 상태 관리', href: '/admin/orders/payments' },
      { label: '취소/환불 관리', href: '/admin/orders/refunds' },
      { label: '영수증/거래 조회', href: '/admin/orders/receipts' },
    ],
  },
  {
    id: 'coupons',
    label: '쿠폰/프로모션',
    href: '/admin/coupons',
    icon: Tag,
  },
  {
    id: 'board',
    label: '게시판 관리',
    icon: MessageSquare,
    children: [
      { label: '공지사항', href: '/admin/board/notices' },
      { label: 'FAQ', href: '/admin/board/faq' },
      { label: '리뷰 관리', href: '/admin/board/reviews' },
      { label: '1:1 문의', href: '/admin/board/inquiries' },
    ],
  },
  {
    id: 'banners',
    label: '배너/팝업 관리',
    href: '/admin/banners',
    icon: Image,
  },
  {
    id: 'stats',
    label: '통계/리포트',
    href: '/admin/stats',
    icon: BarChart3,
  },
  {
    id: 'settings',
    label: '운영 설정',
    icon: Settings,
    children: [
      { label: '사이트 기본정보', href: '/admin/settings' },
      { label: '약관 관리', href: '/admin/settings/terms' },
      { label: '개인정보처리방침', href: '/admin/settings/privacy' },
      { label: 'PG/알림 설정', href: '/admin/settings/pg' },
    ],
  },
]

// ── Sidebar ────────────────────────────────────────────────────
function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState<string[]>(() => {
    // Auto-expand section that matches current path
    return navItems
      .filter((item) => item.children?.some((c) => pathname.startsWith(c.href)))
      .map((item) => item.id)
  })

  const toggle = (id: string) =>
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )

  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href)

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-[#0B1B2F] z-40 flex flex-col transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-2.5 px-5 border-b border-white/10">
          <div className="w-7 h-7 bg-[#E8A43A] rounded flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-[#0B1B2F]" />
          </div>
          <span className="font-bold text-white text-base">EnglishPro</span>
          <span className="ml-1 text-[10px] px-1.5 py-0.5 bg-[#E8A43A]/20 text-[#E8A43A] rounded font-bold">ADMIN</span>
          <button onClick={onClose} className="ml-auto text-stone-400 lg:hidden">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3">
          {navItems.map((item) => {
            const Icon = item.icon

            if (!item.children) {
              return (
                <Link
                  key={item.id}
                  href={item.href!}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${
                    isActive(item.href!)
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-stone-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </Link>
              )
            }

            const isExpanded = expanded.includes(item.id)
            const hasActiveChild = item.children.some((c) => isActive(c.href))

            return (
              <div key={item.id}>
                <button
                  onClick={() => toggle(item.id)}
                  className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${
                    hasActiveChild
                      ? 'text-white'
                      : 'text-stone-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="flex-1 text-left">{item.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>

                {isExpanded && (
                  <div className="ml-11 border-l border-white/10 pl-3 py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className={`flex items-center gap-1.5 py-1.5 text-xs transition-colors ${
                          isActive(child.href)
                            ? 'text-[#E8A43A] font-semibold'
                            : 'text-stone-400 hover:text-white'
                        }`}
                      >
                        {isActive(child.href) && <ChevronRight className="w-3 h-3" />}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-[#E8A43A]/20 rounded-full flex items-center justify-center">
              <span className="text-[#E8A43A] text-xs font-bold">관</span>
            </div>
            <div>
              <div className="text-white text-xs font-semibold">관리자</div>
              <div className="text-stone-500 text-[10px]">admin@englishpro.kr</div>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-stone-400 hover:text-white transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            사이트로 이동
          </Link>
        </div>
      </aside>
    </>
  )
}

// ── Top Header ─────────────────────────────────────────────────
function TopHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname()

  const getTitle = () => {
    if (pathname === '/admin') return '대시보드'
    for (const item of navItems) {
      if (item.children) {
        const child = item.children.find((c) => pathname.startsWith(c.href))
        if (child) return child.label
      } else if (item.href && pathname.startsWith(item.href) && item.href !== '/admin') {
        return item.label
      }
    }
    return 'Admin'
  }

  return (
    <header className="h-16 bg-white border-b border-stone-100 flex items-center px-6 gap-4">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-stone-500 hover:text-[#0B1B2F]"
      >
        <Menu className="w-5 h-5" />
      </button>
      <h1 className="font-semibold text-[#0B1B2F] text-base">{getTitle()}</h1>
      <div className="ml-auto flex items-center gap-3">
        <button className="relative p-2 text-stone-400 hover:text-[#0B1B2F] transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>
        <div className="w-8 h-8 bg-[#E8A43A]/10 rounded-full flex items-center justify-center">
          <span className="text-[#E8A43A] text-xs font-bold">관</span>
        </div>
      </div>
    </header>
  )
}

// ── Admin Layout ───────────────────────────────────────────────
export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F4F6FA]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:ml-60 flex flex-col min-h-screen">
        <TopHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
