'use client'

import { motion } from 'motion/react'
import { Plus, Edit2, Trash2, Pin } from 'lucide-react'

const notices = [
  { id: 1, title: '[필독] 4월 업데이트 안내 — 새 강의 추가 및 UI 개선', pinned: true, views: 2341, date: '2025-04-05', status: '게시' },
  { id: 2, title: '시스템 점검 안내 (4/10 새벽 2시~4시)', pinned: true, views: 1892, date: '2025-04-03', status: '게시' },
  { id: 3, title: '수강료 환불 정책 변경 안내', pinned: false, views: 954, date: '2025-03-28', status: '게시' },
  { id: 4, title: '모바일 앱 출시 예정 안내', pinned: false, views: 1203, date: '2025-03-20', status: '게시' },
  { id: 5, title: '2025년 1분기 이벤트 안내', pinned: false, views: 3421, date: '2025-01-05', status: '비게시' },
]

export default function NoticesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">공지사항</h2>
          <p className="text-sm text-stone-500 mt-0.5">총 {notices.length}개 공지</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
          <Plus className="w-4 h-4" />
          공지 작성
        </button>
      </div>

      {/* Write Form */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 border border-stone-100"
      >
        <h3 className="font-bold text-[#0B1B2F] mb-4">새 공지 작성</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input type="text" placeholder="공지 제목" className="flex-1 px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
            <label className="flex items-center gap-2 text-sm text-stone-600 cursor-pointer shrink-0">
              <input type="checkbox" className="accent-[#E8A43A]" />
              상단 고정
            </label>
          </div>
          <textarea rows={4} placeholder="공지 내용을 입력하세요" className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] resize-none" />
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a]">게시</button>
            <button className="px-4 py-2 border border-stone-200 text-stone-600 text-sm rounded-lg hover:bg-stone-50">임시저장</button>
          </div>
        </div>
      </motion.div>

      {/* List */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl border border-stone-100 overflow-hidden"
      >
        <div className="divide-y divide-stone-50">
          {notices.map((notice, i) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-4 px-5 py-4 hover:bg-stone-50/60 transition-colors"
            >
              {notice.pinned && <Pin className="w-3.5 h-3.5 text-[#E8A43A] shrink-0" />}
              {!notice.pinned && <div className="w-3.5 shrink-0" />}
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium ${notice.status === '비게시' ? 'text-stone-400' : 'text-[#0B1B2F]'} truncate`}>{notice.title}</div>
                <div className="text-xs text-stone-400 mt-0.5">{notice.date} · 조회 {notice.views.toLocaleString()}</div>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ${notice.status === '게시' ? 'bg-green-50 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
                {notice.status}
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button className="p-1.5 text-stone-400 hover:text-[#E8A43A] hover:bg-orange-50 rounded-md transition-colors">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button className="p-1.5 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
