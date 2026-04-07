'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Search, Filter } from 'lucide-react'

const orders = [
  { id: 'ORD-1892', user: '김지현', course: 'Business English Mastery', amount: 89000, method: '카드', status: '결제완료', date: '2025-04-05' },
  { id: 'ORD-1891', user: '이준혁', course: 'IELTS 7.0+ 완전정복', amount: 119000, method: '카드', status: '결제완료', date: '2025-04-05' },
  { id: 'ORD-1890', user: '박수연', course: '영어 발음 교정', amount: 69000, method: '카드', status: '환불요청', date: '2025-04-04' },
  { id: 'ORD-1889', user: '최동현', course: 'English for Job Interviews', amount: 99000, method: '간편결제', status: '결제완료', date: '2025-04-04' },
  { id: 'ORD-1888', user: '정혜린', course: '일상 영어 회화', amount: 59000, method: '계좌이체', status: '처리중', date: '2025-04-03' },
  { id: 'ORD-1887', user: '한소희', course: 'Business English Mastery', amount: 89000, method: '카드', status: '환불완료', date: '2025-04-02' },
]

const statusColor: Record<string, string> = {
  '결제완료': 'bg-green-50 text-green-700',
  '환불요청': 'bg-red-50 text-red-600',
  '환불완료': 'bg-stone-100 text-stone-500',
  '처리중': 'bg-orange-50 text-orange-600',
}

export default function OrdersPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">주문 목록</h2>
          <p className="text-sm text-stone-500 mt-0.5">총 342건 (이번달)</p>
        </div>
        <div className="flex gap-2 text-xs">
          {[
            { label: '환불요청', href: '/admin/orders/refunds', color: 'bg-red-50 text-red-600 border-red-100' },
          ].map(({ label, href, color }) => (
            <Link key={href} href={href} className={`px-3 py-1.5 rounded-lg border font-semibold ${color}`}>{label} 1건</Link>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-4 border border-stone-100 flex gap-3"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input type="text" placeholder="주문번호 또는 회원명 검색..." className="w-full pl-9 pr-4 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
        </div>
        <select className="px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] text-stone-600">
          <option>전체 상태</option>
          <option>결제완료</option>
          <option>처리중</option>
          <option>환불요청</option>
          <option>환불완료</option>
        </select>
        <button className="flex items-center gap-1.5 px-3 py-2 border border-stone-200 rounded-lg text-sm text-stone-600 hover:bg-stone-50">
          <Filter className="w-4 h-4" />
          날짜
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl border border-stone-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50/60">
                {['주문번호', '회원', '강의', '결제금액', '결제수단', '상태', '날짜'].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-stone-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <motion.tr
                  key={o.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-stone-50 hover:bg-stone-50/60 transition-colors"
                >
                  <td className="px-5 py-3.5 text-xs font-mono text-stone-500">{o.id}</td>
                  <td className="px-5 py-3.5 font-medium text-[#0B1B2F] text-xs">{o.user}</td>
                  <td className="px-5 py-3.5 text-xs text-stone-600 max-w-[150px] truncate">{o.course}</td>
                  <td className="px-5 py-3.5 text-xs font-semibold text-[#0B1B2F]">{o.amount.toLocaleString()}원</td>
                  <td className="px-5 py-3.5 text-xs text-stone-500">{o.method}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${statusColor[o.status]}`}>{o.status}</span>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-stone-400">{o.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-stone-50 flex items-center justify-between">
          <span className="text-xs text-stone-400">{orders.length}건 표시 중</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((p) => (
              <button key={p} className={`w-7 h-7 text-xs rounded-md ${p === 1 ? 'bg-[#0B1B2F] text-white' : 'text-stone-500 hover:bg-stone-100'}`}>{p}</button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
