'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useCommunity } from '@/state/community'

const categories = ['전체', '수강', '결제', '환불', '쿠폰', '수료증', '문의']

export default function FaqPage() {
  const [selectedCat, setSelectedCat] = useState('전체')
  const [openId, setOpenId] = useState<string | null>('1')
  const { faqs } = useCommunity((s) => ({ faqs: s.faqs }))

  const filtered = faqs.filter(
    (f) => selectedCat === '전체' || f.category === selectedCat
  )

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <div className="bg-[#0B1B2F] text-white py-14">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-xs text-[#E8A43A] font-bold uppercase tracking-widest mb-3">Community</div>
            <div className="flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-[#E8A43A]" />
              <h1 className="text-3xl font-bold">자주 묻는 질문 (FAQ)</h1>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                selectedCat === cat ? 'bg-[#0B1B2F] text-white border-[#0B1B2F]' : 'border-stone-200 bg-white text-stone-600 hover:border-[#0B1B2F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {filtered.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl overflow-hidden border border-stone-100"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-stone-50 transition-colors"
              >
                <span className="text-[#E8A43A] font-bold text-sm shrink-0">Q.</span>
                <span className="flex-1 font-semibold text-[#0B1B2F] text-sm">{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform shrink-0 ${openId === faq.id ? 'rotate-180' : ''}`} />
              </button>

              {openId === faq.id && (
                <div className="px-5 pb-5 border-t border-stone-100 pt-4 flex gap-4">
                  <span className="text-stone-400 font-bold text-sm shrink-0">A.</span>
                  <p className="text-sm text-stone-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 문의 CTA */}
        <div className="mt-10 bg-[#0B1B2F] rounded-2xl p-8 text-white text-center">
          <h3 className="font-bold text-lg mb-2">원하는 답변을 찾지 못했나요?</h3>
          <p className="text-stone-400 text-sm mb-5">1:1 문의를 남겨주시면 24시간 이내에 답변드립니다.</p>
          <a
            href="/community/inquiry"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors"
          >
            1:1 문의하기
          </a>
        </div>
      </div>
    </div>
  )
}
