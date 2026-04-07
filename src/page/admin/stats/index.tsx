'use client'

import { motion } from 'motion/react'
import { TrendingUp, Users, BookOpen, ShoppingBag } from 'lucide-react'

const monthlyData = [
  { month: '11월', revenue: 8200000, orders: 280, members: 210 },
  { month: '12월', revenue: 9800000, orders: 334, members: 245 },
  { month: '1월', revenue: 7600000, orders: 258, members: 189 },
  { month: '2월', revenue: 8900000, orders: 302, members: 224 },
  { month: '3월', revenue: 10900000, orders: 369, members: 278 },
  { month: '4월', revenue: 12840000, orders: 342, members: 124 },
]
const maxRevenue = Math.max(...monthlyData.map(d => d.revenue))

const topCourses = [
  { title: '일상 영어 회화 완성', revenue: 3218000, students: 3218, percent: 25 },
  { title: 'IELTS 7.0+ 완전정복', revenue: 2856000, students: 892, percent: 22 },
  { title: 'Business English Mastery', revenue: 2492000, students: 1243, percent: 19 },
  { title: 'English for Job Interviews', revenue: 2079000, students: 654, percent: 16 },
  { title: 'TOEIC 900점 완성', revenue: 1482000, students: 1876, percent: 12 },
]

export default function StatsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#0B1B2F]">통계/리포트</h2>
        <p className="text-sm text-stone-500 mt-0.5">사이트 운영 현황을 분석합니다</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: '이번달 매출', value: '₩12,840,000', change: '+18.2%', up: true, icon: TrendingUp, color: '#E8A43A', bg: '#FEF3C7' },
          { label: '이번달 주문', value: '342건', change: '-3.1%', up: false, icon: ShoppingBag, color: '#8B5CF6', bg: '#F5F3FF' },
          { label: '신규 회원', value: '124명', change: '+12.4%', up: true, icon: Users, color: '#3B82F6', bg: '#EFF6FF' },
          { label: '활성 강의', value: '5개', change: '+1', up: true, icon: BookOpen, color: '#10B981', bg: '#ECFDF5' },
        ].map((card, i) => {
          const Icon = card.icon
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-white rounded-xl p-5 border border-stone-100"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: card.bg }}>
                  <Icon className="w-4 h-4" style={{ color: card.color }} />
                </div>
                <span className={`text-xs font-semibold ${card.up ? 'text-green-600' : 'text-red-500'}`}>{card.change}</span>
              </div>
              <div className="text-xl font-bold text-[#0B1B2F]">{card.value}</div>
              <div className="text-xs text-stone-500 mt-0.5">{card.label}</div>
            </motion.div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Monthly Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3 bg-white rounded-xl p-6 border border-stone-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-[#0B1B2F]">월별 매출 추이</h3>
            <span className="text-xs text-stone-400">최근 6개월</span>
          </div>
          <div className="flex items-end gap-3 h-40">
            {monthlyData.map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full flex items-end" style={{ height: '120px' }}>
                  <div
                    className="w-full bg-[#E8A43A] rounded-t-md opacity-80 hover:opacity-100 transition-opacity cursor-default"
                    style={{ height: `${(d.revenue / maxRevenue) * 100}%` }}
                    title={`${(d.revenue / 10000).toFixed(0)}만원`}
                  />
                </div>
                <span className="text-[10px] text-stone-400">{d.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-stone-50 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-sm font-bold text-[#0B1B2F]">₩58,240,000</div>
              <div className="text-[10px] text-stone-400">6개월 누적</div>
            </div>
            <div>
              <div className="text-sm font-bold text-[#0B1B2F]">1,885건</div>
              <div className="text-[10px] text-stone-400">총 주문</div>
            </div>
            <div>
              <div className="text-sm font-bold text-green-600">+17.8%</div>
              <div className="text-[10px] text-stone-400">전기 대비 성장</div>
            </div>
          </div>
        </motion.div>

        {/* Top Courses */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="lg:col-span-2 bg-white rounded-xl p-6 border border-stone-100"
        >
          <h3 className="font-bold text-[#0B1B2F] mb-5">강의별 매출 비중</h3>
          <div className="space-y-4">
            {topCourses.map((course, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-stone-600 truncate max-w-[140px]">{course.title}</span>
                  <span className="text-xs font-semibold text-[#0B1B2F] shrink-0">{course.percent}%</span>
                </div>
                <div className="h-1.5 bg-stone-100 rounded-full">
                  <div
                    className="h-1.5 bg-[#E8A43A] rounded-full"
                    style={{ width: `${course.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Member & Order Stats */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 border border-stone-100"
        >
          <h3 className="font-bold text-[#0B1B2F] mb-5">회원 현황</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: '총 회원', value: '5,284명' },
              { label: '이번달 신규', value: '124명' },
              { label: '유료 수강생', value: '3,891명' },
              { label: '재구매율', value: '68.4%' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-stone-50 rounded-xl p-4">
                <div className="text-lg font-bold text-[#0B1B2F]">{value}</div>
                <div className="text-xs text-stone-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="bg-white rounded-xl p-6 border border-stone-100"
        >
          <h3 className="font-bold text-[#0B1B2F] mb-5">결제 수단 비중</h3>
          <div className="space-y-3">
            {[
              { method: '신용카드', percent: 62 },
              { method: '간편결제', percent: 28 },
              { method: '계좌이체', percent: 10 },
            ].map(({ method, percent }) => (
              <div key={method}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-stone-600">{method}</span>
                  <span className="text-sm font-semibold text-[#0B1B2F]">{percent}%</span>
                </div>
                <div className="h-2 bg-stone-100 rounded-full">
                  <div className="h-2 bg-[#E8A43A] rounded-full" style={{ width: `${percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
