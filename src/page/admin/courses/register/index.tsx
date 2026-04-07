'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft, Upload, Plus, X } from 'lucide-react'

export default function CourseRegisterPage() {
  return (
    <div className="space-y-5 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/admin/courses" className="p-1.5 text-stone-400 hover:text-[#0B1B2F] hover:bg-stone-100 rounded-lg transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">강의 등록</h2>
          <p className="text-sm text-stone-500 mt-0.5">새 강의를 등록합니다</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-5">
          {/* Basic Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 border border-stone-100"
          >
            <h3 className="font-bold text-[#0B1B2F] mb-4">기본 정보</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1.5">강의 제목 *</label>
                <input
                  type="text"
                  placeholder="강의 제목을 입력하세요"
                  className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1.5">강의 설명 *</label>
                <textarea
                  rows={4}
                  placeholder="강의에 대한 설명을 입력하세요"
                  className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">카테고리 *</label>
                  <select className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]">
                    <option value="">카테고리 선택</option>
                    <option>비즈니스</option>
                    <option>시험대비</option>
                    <option>회화</option>
                    <option>발음/스피킹</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">난이도 *</label>
                  <select className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]">
                    <option value="">난이도 선택</option>
                    <option>입문</option>
                    <option>초급</option>
                    <option>중급</option>
                    <option>고급</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">정가 (원) *</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">할인가 (원)</label>
                  <input
                    type="number"
                    placeholder="할인 없음"
                    className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* What you learn */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl p-6 border border-stone-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#0B1B2F]">수강 후 배울 내용</h3>
              <button className="flex items-center gap-1 text-xs text-[#E8A43A] font-semibold">
                <Plus className="w-3.5 h-3.5" />
                추가
              </button>
            </div>
            <div className="space-y-2">
              {['', '', ''].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={`학습 목표 ${i + 1}`}
                    className="flex-1 px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]"
                  />
                  <button className="p-1 text-stone-300 hover:text-red-400 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="bg-white rounded-xl p-6 border border-stone-100"
          >
            <h3 className="font-bold text-[#0B1B2F] mb-4">태그</h3>
            <input
              type="text"
              placeholder="태그 입력 후 Enter (예: 영어회화, 비즈니스, IELTS)"
              className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {['영어회화', '비즈니스영어', 'IELTS'].map((tag) => (
                <span key={tag} className="flex items-center gap-1 px-2.5 py-1 bg-[#E8A43A]/10 text-[#E8A43A] text-xs rounded-full font-semibold">
                  {tag}
                  <button><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Thumbnail */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="bg-white rounded-xl p-6 border border-stone-100"
          >
            <h3 className="font-bold text-[#0B1B2F] mb-4">썸네일 이미지</h3>
            <div className="border-2 border-dashed border-stone-200 rounded-xl p-6 text-center hover:border-[#E8A43A] transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-stone-300 mx-auto mb-2" />
              <p className="text-xs text-stone-400">이미지를 드래그하거나 클릭하여 업로드</p>
              <p className="text-[10px] text-stone-300 mt-1">PNG, JPG (최대 2MB)</p>
            </div>
          </motion.div>

          {/* Sample Video */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl p-6 border border-stone-100"
          >
            <h3 className="font-bold text-[#0B1B2F] mb-4">샘플 영상</h3>
            <input
              type="text"
              placeholder="YouTube URL 또는 영상 업로드"
              className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]"
            />
          </motion.div>

          {/* Publish Settings */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="bg-white rounded-xl p-6 border border-stone-100"
          >
            <h3 className="font-bold text-[#0B1B2F] mb-4">공개 설정</h3>
            <div className="space-y-3">
              {['판매중', '비공개', '준비중'].map((status) => (
                <label key={status} className="flex items-center gap-2.5 cursor-pointer">
                  <input type="radio" name="status" value={status} defaultChecked={status === '비공개'} className="accent-[#E8A43A]" />
                  <span className="text-sm text-stone-700">{status}</span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <div className="space-y-2">
            <button className="w-full py-2.5 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
              강의 등록
            </button>
            <button className="w-full py-2.5 border border-stone-200 text-stone-600 text-sm rounded-lg hover:bg-stone-50 transition-colors">
              임시 저장
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
