'use client'

import { motion } from 'motion/react'
import { CreditCard, Smartphone, Building } from 'lucide-react'

const payments = [
  { id: 'PAY-3821', order: 'ORD-1892', user: '김지현', amount: 89000, method: '신용카드', card: 'KB국민 ****1234', pgTxId: 'toss_1234abcd', status: '승인완료', date: '2025-04-05 14:22' },
  { id: 'PAY-3820', order: 'ORD-1891', user: '이준혁', amount: 119000, method: '신용카드', card: '신한 ****5678', pgTxId: 'toss_5678efgh', status: '승인완료', date: '2025-04-05 11:15' },
  { id: 'PAY-3819', order: 'ORD-1890', user: '박수연', amount: 69000, method: '간편결제', card: '카카오페이', pgTxId: 'toss_9012ijkl', status: '환불요청', date: '2025-04-04 18:33' },
  { id: 'PAY-3818', order: 'ORD-1889', user: '최동현', amount: 99000, method: '신용카드', card: '현대 ****9012', pgTxId: 'toss_3456mnop', status: '승인완료', date: '2025-04-04 09:55' },
]

const methodIcons: Record<string, React.ReactNode> = {
  '신용카드': <CreditCard className="w-3.5 h-3.5" />,
  '간편결제': <Smartphone className="w-3.5 h-3.5" />,
  '계좌이체': <Building className="w-3.5 h-3.5" />,
}

export default function PaymentsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-[#0B1B2F]">결제 상태 관리</h2>
        <p className="text-sm text-stone-500 mt-0.5">PG사 결제 내역을 확인합니다</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: '오늘 결제 승인', value: '₩1,208,000', sub: '14건', color: 'text-green-600' },
          { label: '처리 대기', value: '3건', sub: '확인 필요', color: 'text-orange-600' },
          { label: '환불 요청', value: '1건', sub: '₩69,000', color: 'text-red-600' },
        ].map(({ label, value, sub, color }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-5 border border-stone-100"
          >
            <div className={`text-xl font-bold ${color} mb-1`}>{value}</div>
            <div className="text-xs font-semibold text-stone-500">{label}</div>
            <div className="text-xs text-stone-400 mt-0.5">{sub}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl border border-stone-100 overflow-hidden"
      >
        <div className="px-5 py-4 border-b border-stone-50">
          <h3 className="font-bold text-[#0B1B2F]">최근 결제 내역</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50/60">
                {['결제ID', '주문번호', '회원', '금액', '결제수단', 'PG거래ID', '상태', '일시'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-stone-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <motion.tr
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-stone-50 hover:bg-stone-50/60 transition-colors"
                >
                  <td className="px-4 py-3 text-xs font-mono text-stone-500">{p.id}</td>
                  <td className="px-4 py-3 text-xs font-mono text-stone-400">{p.order}</td>
                  <td className="px-4 py-3 font-medium text-[#0B1B2F] text-xs">{p.user}</td>
                  <td className="px-4 py-3 text-xs font-semibold text-[#0B1B2F]">{p.amount.toLocaleString()}원</td>
                  <td className="px-4 py-3 text-xs text-stone-500">
                    <div className="flex items-center gap-1">
                      {methodIcons[p.method]}
                      <span>{p.card}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-stone-400">{p.pgTxId}</td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${p.status === '승인완료' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-stone-400">{p.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
