'use client'

import { motion } from 'motion/react'
import { Plus, Edit2, Trash2 } from 'lucide-react'

const faqs = [
  { id: 1, category: '수강', question: '강의는 언제까지 수강할 수 있나요?', answer: '결제일로부터 1년간 수강하실 수 있습니다. 만료 전 연장도 가능합니다.', views: 1243, status: '게시' },
  { id: 2, category: '결제', question: '어떤 결제 수단을 이용할 수 있나요?', answer: '신용카드, 체크카드, 간편결제(카카오페이, 네이버페이), 계좌이체를 지원합니다.', views: 987, status: '게시' },
  { id: 3, category: '환불', question: '환불은 어떻게 신청하나요?', answer: '마이페이지 > 주문/결제 내역에서 환불 신청이 가능합니다. 수강 시작 후 7일 이내, 전체 강의의 10% 미만 수강 시 환불 가능합니다.', views: 854, status: '게시' },
  { id: 4, category: '강의', question: '모바일에서도 수강이 가능한가요?', answer: '네, 모바일 브라우저를 통해 PC와 동일하게 수강하실 수 있습니다.', views: 623, status: '게시' },
]

export default function FaqPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">FAQ</h2>
          <p className="text-sm text-stone-500 mt-0.5">자주 묻는 질문을 관리합니다</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
          <Plus className="w-4 h-4" />
          FAQ 추가
        </button>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-xl p-5 border border-stone-100"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <span className="text-xs px-2 py-0.5 bg-[#E8A43A]/10 text-[#E8A43A] rounded font-semibold shrink-0 mt-0.5">{faq.category}</span>
                <div>
                  <div className="font-semibold text-[#0B1B2F] text-sm">{faq.question}</div>
                  <div className="text-xs text-stone-400 mt-1">{faq.answer}</div>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0 ml-4">
                <button className="p-1.5 text-stone-400 hover:text-[#E8A43A] hover:bg-orange-50 rounded-md transition-colors">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button className="p-1.5 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-stone-400">
              <span>조회 {faq.views.toLocaleString()}</span>
              <span className={`px-1.5 py-0.5 rounded font-semibold ${faq.status === '게시' ? 'bg-green-50 text-green-700' : 'bg-stone-100 text-stone-500'}`}>{faq.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
