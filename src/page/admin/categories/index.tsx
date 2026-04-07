'use client'

import { motion } from 'motion/react'
import { Plus, Edit2, Trash2, GripVertical } from 'lucide-react'

const categories = [
  { id: 1, name: '비즈니스', slug: 'business', courses: 2, color: '#3B82F6', desc: '비즈니스 영어, 이메일, 프레젠테이션' },
  { id: 2, name: '시험대비', slug: 'exam', courses: 2, color: '#8B5CF6', desc: 'IELTS, TOEIC, TOEFL 시험 준비' },
  { id: 3, name: '회화', slug: 'speaking', courses: 1, color: '#10B981', desc: '일상 영어, 여행 영어, 프리토킹' },
  { id: 4, name: '발음/스피킹', slug: 'pronunciation', courses: 1, color: '#EF4444', desc: '발음 교정, 억양, 리듬' },
  { id: 5, name: '문법', slug: 'grammar', courses: 0, color: '#F59E0B', desc: '영어 문법 기초부터 심화까지' },
]

export default function CategoriesPage() {
  return (
    <div className="space-y-5 max-w-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">카테고리 관리</h2>
          <p className="text-sm text-stone-500 mt-0.5">강의 분류 카테고리를 관리합니다</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
          <Plus className="w-4 h-4" />
          카테고리 추가
        </button>
      </div>

      <div className="space-y-2">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-white rounded-xl p-4 border border-stone-100 flex items-center gap-4"
          >
            <GripVertical className="w-4 h-4 text-stone-300 cursor-grab shrink-0" />
            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#0B1B2F]">{cat.name}</span>
                <span className="text-xs text-stone-400">/{cat.slug}</span>
              </div>
              <div className="text-xs text-stone-400 mt-0.5">{cat.desc}</div>
            </div>
            <div className="text-xs text-stone-500 shrink-0">
              강의 <span className="font-bold text-[#0B1B2F]">{cat.courses}</span>개
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-stone-400 hover:text-[#E8A43A] hover:bg-orange-50 rounded-md transition-colors">
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button className={`p-1.5 rounded-md transition-colors ${cat.courses > 0 ? 'text-stone-200 cursor-not-allowed' : 'text-stone-400 hover:text-red-500 hover:bg-red-50'}`}>
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Form */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-5 border border-stone-100"
      >
        <h3 className="font-bold text-[#0B1B2F] mb-4">새 카테고리 추가</h3>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">카테고리명 *</label>
            <input type="text" placeholder="예: 문법" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">슬러그 *</label>
            <input type="text" placeholder="예: grammar" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">설명</label>
          <input type="text" placeholder="카테고리 설명" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
        </div>
        <button className="px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
          추가하기
        </button>
      </motion.div>
    </div>
  )
}
