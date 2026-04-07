'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { MessageCircle, CheckCircle, Clock, ChevronDown } from 'lucide-react'

const mockInquiries = [
  { id: '1', title: '결제 후 강의가 안 보여요', status: 'answered' as const, date: '2025-03-12', answer: '안녕하세요! 결제 후 마이페이지 > 내 강의실에서 확인하실 수 있습니다. 혹시 확인이 안 되신다면 고객센터로 다시 연락 주세요.' },
  { id: '2', title: '환불 신청하고 싶습니다', status: 'answered' as const, date: '2025-03-05', answer: '7일 이내, 진도율 10% 미만인 경우 전액 환불 처리 해드립니다. 확인 후 처리 완료 메일을 발송해 드렸습니다.' },
  { id: '3', title: '쿠폰 적용이 안 됩니다', status: 'pending' as const, date: '2025-03-14' },
]

export default function InquiryPage() {
  const [tab, setTab] = useState<'list' | 'write'>('list')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [form, setForm] = useState({ title: '', category: '', content: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <div className="bg-[#0B1B2F] text-white py-14">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-xs text-[#E8A43A] font-bold uppercase tracking-widest mb-3">Community</div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-[#E8A43A]" />
              <h1 className="text-3xl font-bold">1:1 문의</h1>
            </div>
            <p className="text-stone-400 mt-2 text-sm">문의 후 24시간 이내에 답변 드립니다</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Tabs */}
        <div className="flex gap-1 mb-8 border-b border-stone-200">
          {(['list', 'write'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                tab === t ? 'border-[#0B1B2F] text-[#0B1B2F]' : 'border-transparent text-stone-500 hover:text-[#0B1B2F]'
              }`}
            >
              {t === 'list' ? '문의 내역' : '문의하기'}
            </button>
          ))}
        </div>

        {tab === 'list' ? (
          <div className="space-y-3">
            {mockInquiries.map((inq, i) => (
              <motion.div
                key={inq.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl overflow-hidden border border-stone-100"
              >
                <button
                  onClick={() => setExpanded(expanded === inq.id ? null : inq.id)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-stone-50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#0B1B2F] text-sm">{inq.title}</h3>
                    <div className="text-xs text-stone-400 mt-1">{inq.date}</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
                      inq.status === 'answered'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-orange-50 text-orange-600'
                    }`}>
                      {inq.status === 'answered' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {inq.status === 'answered' ? '답변완료' : '답변대기'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${expanded === inq.id ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {expanded === inq.id && inq.answer && (
                  <div className="border-t border-stone-100 px-5 py-4 bg-stone-50">
                    <div className="text-xs font-semibold text-[#E8A43A] mb-1">답변</div>
                    <p className="text-sm text-stone-700 leading-relaxed">{inq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 text-center border border-stone-100"
              >
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-[#0B1B2F] mb-2">문의가 접수되었습니다</h2>
                <p className="text-stone-500 text-sm">24시간 이내에 답변 드리겠습니다.</p>
                <button
                  onClick={() => { setSubmitted(false); setTab('list') }}
                  className="mt-6 px-6 py-2.5 bg-[#0B1B2F] text-white text-sm font-medium rounded-lg hover:bg-[#162d4a] transition-colors"
                >
                  문의 내역 보기
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-stone-100 space-y-5">
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5">문의 유형</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    required
                    className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#0B1B2F]"
                  >
                    <option value="">선택하세요</option>
                    {['수강 문의', '결제/환불', '기술적 문제', '강의 내용', '기타'].map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5">제목</label>
                  <input
                    type="text"
                    placeholder="문의 제목을 입력하세요"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                    className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#0B1B2F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5">내용</label>
                  <textarea
                    rows={5}
                    placeholder="문의 내용을 자세히 작성해 주세요"
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    required
                    className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#0B1B2F] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0B1B2F] text-white font-semibold rounded-lg hover:bg-[#162d4a] transition-colors"
                >
                  문의 제출하기
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
