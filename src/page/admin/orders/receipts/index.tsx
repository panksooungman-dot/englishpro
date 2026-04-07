'use client'

import { motion } from 'motion/react'
import { Download, Search } from 'lucide-react'

const receipts = [
  { id: 'RCP-1892', user: '김지현', email: 'jihyeon@example.com', course: 'Business English Mastery', amount: 89000, tax: 8091, date: '2025-04-05', pgTxId: 'toss_1234abcd' },
  { id: 'RCP-1891', user: '이준혁', email: 'junhyuk@example.com', course: 'IELTS 7.0+ 완전정복', amount: 119000, tax: 10818, date: '2025-04-05', pgTxId: 'toss_5678efgh' },
  { id: 'RCP-1889', user: '최동현', email: 'donghyun@example.com', course: 'English for Job Interviews', amount: 99000, tax: 9000, date: '2025-04-04', pgTxId: 'toss_3456mnop' },
]

export default function ReceiptsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-[#0B1B2F]">영수증/거래 조회</h2>
        <p className="text-sm text-stone-500 mt-0.5">결제 영수증 및 거래 내역을 조회합니다</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-4 border border-stone-100 flex gap-3"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input type="text" placeholder="영수증번호, 회원명, 거래ID 검색..." className="w-full pl-9 pr-4 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
        </div>
        <input type="date" className="px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] text-stone-600" />
        <input type="date" className="px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] text-stone-600" />
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
                {['영수증번호', '회원', '강의', '결제금액', '부가세', '거래ID', '결제일', '발행'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-stone-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {receipts.map((r, i) => (
                <motion.tr
                  key={r.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-stone-50 hover:bg-stone-50/60 transition-colors"
                >
                  <td className="px-4 py-3 text-xs font-mono text-stone-500">{r.id}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-[#0B1B2F] text-xs">{r.user}</div>
                    <div className="text-[10px] text-stone-400">{r.email}</div>
                  </td>
                  <td className="px-4 py-3 text-xs text-stone-600 max-w-[140px] truncate">{r.course}</td>
                  <td className="px-4 py-3 text-xs font-semibold text-[#0B1B2F]">{r.amount.toLocaleString()}원</td>
                  <td className="px-4 py-3 text-xs text-stone-500">{r.tax.toLocaleString()}원</td>
                  <td className="px-4 py-3 text-xs font-mono text-stone-400">{r.pgTxId}</td>
                  <td className="px-4 py-3 text-xs text-stone-400">{r.date}</td>
                  <td className="px-4 py-3">
                    <button className="flex items-center gap-1 text-[10px] px-2 py-1 border border-stone-200 rounded-md text-stone-500 hover:bg-stone-50">
                      <Download className="w-3 h-3" />
                      PDF
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
