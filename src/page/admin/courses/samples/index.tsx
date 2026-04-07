'use client'

import { motion } from 'motion/react'
import { Plus, Play, Edit2, Trash2, Eye } from 'lucide-react'

const samples = [
  { id: 1, course: 'Business English Mastery', title: '강의 소개 미리보기', duration: '05:20', views: 1243, status: '게시됨' },
  { id: 2, course: 'IELTS 7.0+ 완전정복', title: 'IELTS 시험 소개', duration: '07:15', views: 892, status: '게시됨' },
  { id: 3, course: '영어 발음 교정 완성', title: '발음 교정 체험 레슨', duration: '04:50', views: 2104, status: '게시됨' },
  { id: 4, course: 'English for Job Interviews', title: '면접 영어 미리보기', duration: '06:30', views: 654, status: '비게시' },
]

export default function SamplesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">샘플영상 관리</h2>
          <p className="text-sm text-stone-500 mt-0.5">강의별 무료 체험 영상을 관리합니다</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
          <Plus className="w-4 h-4" />
          샘플 추가
        </button>
      </div>

      <div className="grid gap-4">
        {samples.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-xl p-5 border border-stone-100 flex items-center gap-4"
          >
            <div className="w-16 h-12 bg-[#0B1B2F] rounded-lg flex items-center justify-center shrink-0">
              <Play className="w-5 h-5 text-[#E8A43A]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#E8A43A] font-semibold mb-0.5">{s.course}</div>
              <div className="font-semibold text-[#0B1B2F] text-sm">{s.title}</div>
              <div className="flex items-center gap-3 mt-1 text-xs text-stone-400">
                <span>{s.duration}</span>
                <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{s.views.toLocaleString()}회</span>
              </div>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${s.status === '게시됨' ? 'bg-green-50 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
              {s.status}
            </span>
            <div className="flex items-center gap-1">
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
    </div>
  )
}
