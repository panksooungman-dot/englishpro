'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { Pin, ChevronRight, Bell } from 'lucide-react'
import { useCommunity } from '@/state/community'

const categories = ['전체', '공지', '시스템', '강의', '이벤트']

export default function NoticePage() {
  const [selectedCat, setSelectedCat] = useState('전체')
  const [expanded, setExpanded] = useState<string | null>(null)
  const { notices } = useCommunity((s) => ({ notices: s.notices }))

  const filtered = notices.filter(
    (n) => selectedCat === '전체' || n.category === selectedCat
  )

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <div className="bg-[#0B1B2F] text-white py-14">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-xs text-[#E8A43A] font-bold uppercase tracking-widest mb-3">Community</div>
            <div className="flex items-center gap-3">
              <Bell className="w-7 h-7 text-[#E8A43A]" />
              <h1 className="text-3xl font-bold">공지사항</h1>
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

        {/* List */}
        <div className="space-y-2">
          {filtered.map((notice, i) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl overflow-hidden border border-stone-100"
            >
              <button
                onClick={() => setExpanded(expanded === notice.id ? null : notice.id)}
                className="w-full flex items-start gap-4 p-5 text-left hover:bg-stone-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    {notice.isPinned && <Pin className="w-3.5 h-3.5 text-[#E8A43A]" />}
                    <span
                      className="text-xs px-2 py-0.5 rounded font-medium"
                      style={{ backgroundColor: notice.isPinned ? '#FEF3C7' : '#F3F4F6', color: notice.isPinned ? '#92400E' : '#6B7280' }}
                    >
                      {notice.category}
                    </span>
                  </div>
                  <h3 className={`font-semibold text-sm leading-tight ${notice.isPinned ? 'text-[#0B1B2F]' : 'text-stone-700'}`}>
                    {notice.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-stone-400">{notice.date}</span>
                  <ChevronRight className={`w-4 h-4 text-stone-400 transition-transform ${expanded === notice.id ? 'rotate-90' : ''}`} />
                </div>
              </button>

              {expanded === notice.id && (
                <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                  {notice.content}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
