'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import {
  Users,
  BookOpen,
  ShoppingBag,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Circle,
} from 'lucide-react'

const statCards = [
  {
    label: '이번달 매출',
    value: '₩12,840,000',
    change: '+18.2%',
    up: true,
    icon: TrendingUp,
    color: '#E8A43A',
    bg: '#FEF3C7',
  },
  {
    label: '총 회원 수',
    value: '5,284',
    change: '+124명',
    up: true,
    icon: Users,
    color: '#3B82F6',
    bg: '#EFF6FF',
  },
  {
    label: '수강 중인 강의',
    value: '8',
    change: '+1 신규',
    up: true,
    icon: BookOpen,
    color: '#10B981',
    bg: '#ECFDF5',
  },
  {
    label: '이번달 주문',
    value: '342',
    change: '-3.1%',
    up: false,
    icon: ShoppingBag,
    color: '#8B5CF6',
    bg: '#F5F3FF',
  },
]

const recentOrders = [
  { id: 'ORD-1892', user: '김지현', course: 'Business English Mastery', amount: 89000, status: '결제완료', date: '2025-04-05' },
  { id: 'ORD-1891', user: '이준혁', course: 'IELTS 7.0+ 완전정복', amount: 119000, status: '결제완료', date: '2025-04-05' },
  { id: 'ORD-1890', user: '박수연', course: '영어 발음 교정', amount: 69000, status: '환불요청', date: '2025-04-04' },
  { id: 'ORD-1889', user: '최동현', course: 'English for Job Interviews', amount: 99000, status: '결제완료', date: '2025-04-04' },
  { id: 'ORD-1888', user: '정혜린', course: '일상 영어 회화', amount: 59000, status: '처리중', date: '2025-04-03' },
]

const recentMembers = [
  { name: '한소희', email: 'sohee@example.com', joined: '2025-04-05', courses: 2 },
  { name: '윤태양', email: 'taeyang@example.com', joined: '2025-04-04', courses: 1 },
  { name: '강민준', email: 'minjun@example.com', joined: '2025-04-04', courses: 3 },
  { name: '오지원', email: 'jiwon@example.com', joined: '2025-04-03', courses: 1 },
]

const statusColor: Record<string, string> = {
  '결제완료': 'bg-green-50 text-green-700',
  '환불요청': 'bg-red-50 text-red-600',
  '처리중': 'bg-orange-50 text-orange-600',
}

// Simple bar chart using divs
const weeklyData = [
  { day: '월', amount: 840000, orders: 28 },
  { day: '화', amount: 1200000, orders: 41 },
  { day: '수', amount: 980000, orders: 32 },
  { day: '목', amount: 1560000, orders: 52 },
  { day: '금', amount: 2100000, orders: 70 },
  { day: '토', amount: 1800000, orders: 60 },
  { day: '일', amount: 1340000, orders: 44 },
]
const maxAmount = Math.max(...weeklyData.map((d) => d.amount))

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, i) => {
          const Icon = card.icon
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 border border-stone-100"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: card.bg }}
                >
                  <Icon className="w-4 h-4" style={{ color: card.color }} />
                </div>
                <span
                  className={`flex items-center gap-0.5 text-xs font-semibold ${card.up ? 'text-green-600' : 'text-red-500'}`}
                >
                  {card.up ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  {card.change}
                </span>
              </div>
              <div className="text-xl font-bold text-[#0B1B2F]">{card.value}</div>
              <div className="text-xs text-stone-500 mt-0.5">{card.label}</div>
            </motion.div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Weekly Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="lg:col-span-2 bg-white rounded-xl p-6 border border-stone-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-[#0B1B2F]">주간 매출 현황</h3>
            <span className="text-xs text-stone-400">이번 주</span>
          </div>
          <div className="flex items-end gap-3 h-36">
            {weeklyData.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full flex items-end" style={{ height: '112px' }}>
                  <div
                    className="w-full bg-[#E8A43A] rounded-t-md opacity-80 hover:opacity-100 transition-opacity cursor-default"
                    style={{ height: `${(d.amount / maxAmount) * 100}%` }}
                    title={`${d.amount.toLocaleString()}원`}
                  />
                </div>
                <span className="text-[10px] text-stone-400">{d.day}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-stone-50 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-sm font-bold text-[#0B1B2F]">₩9,820,000</div>
              <div className="text-[10px] text-stone-400">주간 매출</div>
            </div>
            <div>
              <div className="text-sm font-bold text-[#0B1B2F]">327건</div>
              <div className="text-[10px] text-stone-400">주문 수</div>
            </div>
            <div>
              <div className="text-sm font-bold text-green-600">+12.4%</div>
              <div className="text-[10px] text-stone-400">전주 대비</div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white rounded-xl p-6 border border-stone-100"
        >
          <h3 className="font-bold text-[#0B1B2F] mb-5">빠른 작업</h3>
          <div className="space-y-2">
            {[
              { label: '강의 등록', href: '/admin/courses/register', color: '#E8A43A' },
              { label: '공지사항 작성', href: '/admin/board/notices', color: '#3B82F6' },
              { label: '쿠폰 생성', href: '/admin/coupons', color: '#10B981' },
              { label: '환불 처리', href: '/admin/orders/refunds', color: '#EF4444' },
              { label: '통계 보기', href: '/admin/stats', color: '#8B5CF6' },
            ].map(({ label, href, color }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors group"
              >
                <Circle className="w-2 h-2 shrink-0" style={{ color }} />
                <span className="text-sm text-stone-700 group-hover:text-[#0B1B2F]">{label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-300 ml-auto" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="lg:col-span-2 bg-white rounded-xl border border-stone-100 overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-50">
            <h3 className="font-bold text-[#0B1B2F]">최근 주문</h3>
            <Link href="/admin/orders" className="text-xs text-[#E8A43A] hover:text-[#d4932a] font-semibold">
              전체 보기 →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-50">
                  {['주문번호', '회원', '강의', '금액', '상태', '날짜'].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-stone-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-3 text-xs font-mono text-stone-500">{order.id}</td>
                    <td className="px-5 py-3 font-medium text-[#0B1B2F] text-xs">{order.user}</td>
                    <td className="px-5 py-3 text-xs text-stone-600 max-w-[140px] truncate">{order.course}</td>
                    <td className="px-5 py-3 text-xs font-semibold text-[#0B1B2F]">{order.amount.toLocaleString()}원</td>
                    <td className="px-5 py-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${statusColor[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-xs text-stone-400">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recent Members */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-white rounded-xl border border-stone-100 overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-50">
            <h3 className="font-bold text-[#0B1B2F]">신규 회원</h3>
            <Link href="/admin/members" className="text-xs text-[#E8A43A] hover:text-[#d4932a] font-semibold">
              전체 →
            </Link>
          </div>
          <div className="divide-y divide-stone-50">
            {recentMembers.map((m) => (
              <div key={m.email} className="flex items-center gap-3 px-5 py-3">
                <div className="w-8 h-8 bg-[#E8A43A]/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#E8A43A] text-xs font-bold">{m.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-[#0B1B2F]">{m.name}</div>
                  <div className="text-xs text-stone-400 truncate">{m.email}</div>
                </div>
                <div className="text-xs text-stone-400 shrink-0">{m.joined}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
