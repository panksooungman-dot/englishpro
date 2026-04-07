'use client'

import { motion } from 'motion/react'
import { ChevronDown, Plus, Edit2, Trash2, GripVertical, Play } from 'lucide-react'

const chapters = [
  {
    id: 1, title: '오리엔테이션', lessons: [
      { id: 1, title: '강의 소개 및 학습 방법', duration: '05:20', free: true },
      { id: 2, title: '학습 자료 안내', duration: '03:10', free: false },
    ]
  },
  {
    id: 2, title: '기초 발음 마스터', lessons: [
      { id: 3, title: '영어 모음 발음 완전 정복', duration: '12:45', free: false },
      { id: 4, title: '영어 자음 발음 완전 정복', duration: '11:30', free: false },
      { id: 5, title: '연음 규칙 이해', duration: '09:15', free: false },
    ]
  },
  {
    id: 3, title: '핵심 문장 패턴', lessons: [
      { id: 6, title: '현재 시제 핵심 패턴 10가지', duration: '15:20', free: false },
      { id: 7, title: '과거 시제 핵심 패턴 10가지', duration: '14:50', free: false },
    ]
  },
]

export default function ChaptersPage() {
  return (
    <div className="space-y-5 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">챕터/레슨 관리</h2>
          <p className="text-sm text-stone-500 mt-0.5">강의 커리큘럼을 구성합니다</p>
        </div>
        <div className="flex gap-2">
          <select className="px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] text-stone-600">
            <option>Business English Mastery</option>
            <option>IELTS 7.0+ 완전정복</option>
            <option>영어 발음 교정</option>
          </select>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
            <Plus className="w-4 h-4" />
            챕터 추가
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {chapters.map((chapter, ci) => (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.07 }}
            className="bg-white rounded-xl border border-stone-100 overflow-hidden"
          >
            {/* Chapter Header */}
            <div className="flex items-center gap-3 px-5 py-3.5 bg-stone-50/60 border-b border-stone-100">
              <GripVertical className="w-4 h-4 text-stone-300 cursor-grab" />
              <ChevronDown className="w-4 h-4 text-stone-400" />
              <span className="text-xs font-bold text-stone-400">CHAPTER {ci + 1}</span>
              <span className="font-semibold text-[#0B1B2F] flex-1">{chapter.title}</span>
              <span className="text-xs text-stone-400">{chapter.lessons.length}개 레슨</span>
              <button className="p-1 text-stone-400 hover:text-[#E8A43A]">
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button className="p-1 text-stone-400 hover:text-red-500">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Lessons */}
            <div className="divide-y divide-stone-50">
              {chapter.lessons.map((lesson) => (
                <div key={lesson.id} className="flex items-center gap-3 px-5 py-3">
                  <GripVertical className="w-4 h-4 text-stone-200 cursor-grab" />
                  <div className="w-7 h-7 bg-[#E8A43A]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Play className="w-3 h-3 text-[#E8A43A]" />
                  </div>
                  <span className="flex-1 text-sm text-stone-700">{lesson.title}</span>
                  <span className="text-xs text-stone-400">{lesson.duration}</span>
                  {lesson.free && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-green-50 text-green-600 rounded font-semibold">무료</span>
                  )}
                  <button className="p-1 text-stone-400 hover:text-[#E8A43A]">
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1 text-stone-400 hover:text-red-500">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              <button className="w-full flex items-center gap-2 px-5 py-3 text-xs text-[#E8A43A] font-semibold hover:bg-orange-50 transition-colors">
                <Plus className="w-3.5 h-3.5" />
                레슨 추가
              </button>
            </div>
          </motion.div>
        ))}

        <button className="w-full py-3 border-2 border-dashed border-stone-200 rounded-xl text-sm text-stone-400 font-semibold hover:border-[#E8A43A] hover:text-[#E8A43A] transition-colors flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          챕터 추가
        </button>
      </div>
    </div>
  )
}
