'use client'

import { motion } from 'motion/react'
import { MessageCircle, CheckCircle } from 'lucide-react'

const inquiries = [
  { id: 1, user: '김지현', email: 'jihyeon@example.com', subject: '강의 자료 다운로드 방법 문의', content: '강의 자료 PDF를 어디서 다운로드 할 수 있나요?', date: '2025-04-05 14:30', status: '답변대기' },
  { id: 2, user: '이준혁', email: 'junhyuk@example.com', subject: '결제 후 강의가 보이지 않습니다', content: '결제 완료 문자를 받았는데 내 강의실에 강의가 없습니다.', date: '2025-04-04 09:15', status: '답변대기' },
  { id: 3, user: '박수연', email: 'suyeon@example.com', subject: '수강 기간 연장 가능한가요?', content: '개인 사정으로 수강을 못했는데 연장이 가능할까요?', date: '2025-04-02 16:45', status: '답변완료' },
  { id: 4, user: '최동현', email: 'donghyun@example.com', subject: '쿠폰 적용 오류', content: 'NEWBIE20 쿠폰을 입력했는데 적용이 안 됩니다.', date: '2025-04-01 11:20', status: '답변완료' },
]

export default function InquiriesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">1:1 문의</h2>
          <p className="text-sm text-stone-500 mt-0.5">
            답변 대기 <span className="text-orange-600 font-bold">{inquiries.filter(i => i.status === '답변대기').length}건</span>
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {inquiries.map((inquiry, i) => (
          <motion.div
            key={inquiry.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className={`bg-white rounded-xl p-5 border transition-colors ${inquiry.status === '답변대기' ? 'border-orange-100' : 'border-stone-100'}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${inquiry.status === '답변대기' ? 'bg-orange-50' : 'bg-stone-100'}`}>
                  {inquiry.status === '답변대기'
                    ? <MessageCircle className="w-4 h-4 text-orange-500" />
                    : <CheckCircle className="w-4 h-4 text-green-500" />}
                </div>
                <div>
                  <div className="font-semibold text-[#0B1B2F] text-sm">{inquiry.subject}</div>
                  <div className="text-xs text-stone-400 mt-0.5">{inquiry.user} · {inquiry.email}</div>
                </div>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ${inquiry.status === '답변대기' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-700'}`}>
                {inquiry.status}
              </span>
            </div>
            <p className="text-sm text-stone-600 mb-3 bg-stone-50 rounded-lg p-3">{inquiry.content}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-stone-400">{inquiry.date}</span>
              {inquiry.status === '답변대기' && (
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E8A43A] text-white text-xs font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
                  <MessageCircle className="w-3 h-3" />
                  답변하기
                </button>
              )}
            </div>
            {inquiry.status === '답변대기' && (
              <div className="mt-3">
                <textarea rows={2} placeholder="답변을 입력하세요..." className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] resize-none" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
