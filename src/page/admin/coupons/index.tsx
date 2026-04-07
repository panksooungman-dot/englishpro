'use client'

import { motion } from 'motion/react'
import { Plus, Copy, Tag } from 'lucide-react'

const coupons = [
  { id: 1, code: 'SPRING2025', name: '봄맞이 특가', type: '정액', discount: 10000, minOrder: 50000, used: 124, total: 500, expires: '2025-04-30', status: '활성' },
  { id: 2, code: 'NEWBIE20', name: '신규 가입 20% 할인', type: '정률', discount: 20, minOrder: 0, used: 89, total: 200, expires: '2025-12-31', status: '활성' },
  { id: 3, code: 'IELTS15', name: 'IELTS 강의 15% 할인', type: '정률', discount: 15, minOrder: 80000, used: 200, total: 200, expires: '2025-03-31', status: '소진' },
  { id: 4, code: 'VIP30', name: 'VIP 회원 30% 할인', type: '정률', discount: 30, minOrder: 0, used: 12, total: 50, expires: '2025-06-30', status: '활성' },
]

const statusColor: Record<string, string> = {
  '활성': 'bg-green-50 text-green-700',
  '소진': 'bg-stone-100 text-stone-500',
  '만료': 'bg-red-50 text-red-500',
}

export default function CouponsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">쿠폰/프로모션</h2>
          <p className="text-sm text-stone-500 mt-0.5">쿠폰 코드를 생성하고 관리합니다</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
          <Plus className="w-4 h-4" />
          쿠폰 생성
        </button>
      </div>

      <div className="grid gap-4">
        {coupons.map((coupon, i) => (
          <motion.div
            key={coupon.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-xl p-5 border border-stone-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#E8A43A]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Tag className="w-5 h-5 text-[#E8A43A]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-[#0B1B2F]">{coupon.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${statusColor[coupon.status]}`}>{coupon.status}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-sm font-mono font-bold text-[#E8A43A] bg-[#E8A43A]/10 px-2.5 py-0.5 rounded">{coupon.code}</code>
                    <button className="p-1 text-stone-400 hover:text-stone-600">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <span>
                      {coupon.type === '정액' ? `${coupon.discount.toLocaleString()}원 할인` : `${coupon.discount}% 할인`}
                    </span>
                    {coupon.minOrder > 0 && <span>최소 {coupon.minOrder.toLocaleString()}원</span>}
                    <span>만료: {coupon.expires}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-[#0B1B2F]">{coupon.used}/{coupon.total}</div>
                <div className="text-xs text-stone-400 mb-2">사용/발급</div>
                <div className="h-1.5 w-24 bg-stone-100 rounded-full">
                  <div
                    className="h-1.5 bg-[#E8A43A] rounded-full"
                    style={{ width: `${(coupon.used / coupon.total) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Create Form */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="bg-white rounded-xl p-6 border border-stone-100"
      >
        <h3 className="font-bold text-[#0B1B2F] mb-4">새 쿠폰 생성</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">쿠폰명 *</label>
            <input type="text" placeholder="예: 봄맞이 특가" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">쿠폰 코드 *</label>
            <input type="text" placeholder="예: SPRING2025" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">할인 유형 *</label>
            <select className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]">
              <option>정액 (원)</option>
              <option>정률 (%)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">할인값 *</label>
            <input type="number" placeholder="0" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">발급 수량</label>
            <input type="number" placeholder="무제한" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">만료일 *</label>
            <input type="date" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
          쿠폰 생성
        </button>
      </motion.div>
    </div>
  )
}
