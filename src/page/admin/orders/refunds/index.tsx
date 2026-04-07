'use client'

import { motion } from 'motion/react'
import { AlertCircle } from 'lucide-react'

const refunds = [
  { id: 'REF-091', order: 'ORD-1890', user: '박수연', course: '영어 발음 교정', amount: 69000, reason: '강의 내용이 기대와 다름', requested: '2025-04-04', status: '검토중' },
  { id: 'REF-090', order: 'ORD-1887', user: '한소희', course: 'Business English Mastery', amount: 89000, reason: '중복 결제', requested: '2025-04-02', status: '환불완료' },
  { id: 'REF-089', order: 'ORD-1882', user: '오지원', course: 'IELTS 7.0+ 완전정복', amount: 119000, reason: '개인 사정', requested: '2025-03-29', status: '환불완료' },
]

export default function RefundsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-[#0B1B2F]">취소/환불 관리</h2>
        <p className="text-sm text-stone-500 mt-0.5">환불 요청을 검토하고 처리합니다</p>
      </div>

      {refunds.filter(r => r.status === '검토중').length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-xl p-4"
        >
          <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
          <div>
            <div className="text-sm font-semibold text-orange-700">처리 대기 중인 환불 요청이 있습니다</div>
            <div className="text-xs text-orange-600 mt-0.5">영업일 기준 3일 이내에 처리해주세요.</div>
          </div>
        </motion.div>
      )}

      <div className="space-y-4">
        {refunds.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-xl p-5 border border-stone-100"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-stone-400">{r.id}</span>
                  <span className="text-xs text-stone-300">·</span>
                  <span className="text-xs font-mono text-stone-400">{r.order}</span>
                </div>
                <div className="font-semibold text-[#0B1B2F]">{r.user}</div>
                <div className="text-sm text-stone-500 mt-0.5">{r.course}</div>
              </div>
              <span className={`text-[10px] px-2.5 py-1 rounded-full font-semibold ${r.status === '검토중' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-700'}`}>
                {r.status}
              </span>
            </div>
            <div className="bg-stone-50 rounded-lg p-3 mb-4">
              <div className="text-xs text-stone-500 mb-0.5">환불 사유</div>
              <div className="text-sm text-stone-700">{r.reason}</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-[#0B1B2F]">{r.amount.toLocaleString()}원</span>
                <span className="text-xs text-stone-400 ml-2">요청일: {r.requested}</span>
              </div>
              {r.status === '검토중' && (
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 text-xs border border-stone-200 text-stone-600 rounded-lg hover:bg-stone-50">거절</button>
                  <button className="px-4 py-1.5 text-xs bg-[#E8A43A] text-white font-semibold rounded-lg hover:bg-[#d4932a]">환불 승인</button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
