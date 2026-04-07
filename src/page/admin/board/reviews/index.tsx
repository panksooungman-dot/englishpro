'use client'

import { motion } from 'motion/react'
import { Star, Trash2, MessageSquare } from 'lucide-react'

const reviews = [
  { id: 1, user: '김지현', course: 'Business English Mastery', rating: 5, content: '정말 도움이 많이 됐어요. 비즈니스 이메일 쓸 때 이제 자신감이 생겼습니다!', date: '2025-04-04', status: '게시' },
  { id: 2, user: '이준혁', course: 'IELTS 7.0+ 완전정복', rating: 4, content: '체계적인 커리큘럼이 인상적입니다. 조금 더 많은 연습 문제가 있으면 좋겠어요.', date: '2025-04-03', status: '게시' },
  { id: 3, user: '박수연', course: '영어 발음 교정', rating: 3, content: '내용은 좋은데 영상 화질이 아쉬웠습니다.', date: '2025-04-02', status: '숨김' },
  { id: 4, user: '최동현', course: 'English for Job Interviews', rating: 5, content: '면접 통과했어요!! 정말 감사합니다 :)', date: '2025-03-30', status: '게시' },
]

export default function ReviewsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">리뷰 관리</h2>
          <p className="text-sm text-stone-500 mt-0.5">수강생 리뷰를 관리합니다</p>
        </div>
        <div className="flex gap-2 text-xs">
          <div className="px-3 py-1.5 bg-stone-100 rounded-lg text-stone-600 font-semibold">전체 {reviews.length}</div>
          <div className="px-3 py-1.5 bg-green-50 rounded-lg text-green-700 font-semibold">게시 {reviews.filter(r => r.status === '게시').length}</div>
          <div className="px-3 py-1.5 bg-stone-50 rounded-lg text-stone-500 font-semibold">숨김 {reviews.filter(r => r.status === '숨김').length}</div>
        </div>
      </div>

      <div className="space-y-3">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-xl p-5 border border-stone-100"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E8A43A]/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#E8A43A] text-xs font-bold">{review.user[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0B1B2F] text-sm">{review.user}</div>
                  <div className="text-xs text-stone-400">{review.course}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${review.status === '게시' ? 'bg-green-50 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
                  {review.status}
                </span>
                <button className="p-1.5 text-stone-400 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors">
                  <MessageSquare className="w-3.5 h-3.5" />
                </button>
                <button className="p-1.5 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="flex gap-0.5 mb-2">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? 'text-[#E8A43A] fill-[#E8A43A]' : 'text-stone-200 fill-stone-200'}`} />
              ))}
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">{review.content}</p>
            <div className="text-xs text-stone-400 mt-2">{review.date}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
