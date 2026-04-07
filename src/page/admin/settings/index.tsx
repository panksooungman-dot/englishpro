'use client'

import { motion } from 'motion/react'
import { Save } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-5 max-w-2xl">
      <div>
        <h2 className="text-lg font-bold text-[#0B1B2F]">사이트 기본정보</h2>
        <p className="text-sm text-stone-500 mt-0.5">사이트 기본 설정을 관리합니다</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 border border-stone-100"
      >
        <h3 className="font-bold text-[#0B1B2F] mb-4">브랜드 정보</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">사이트명</label>
            <input type="text" defaultValue="EnglishPro" className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">슬로건</label>
            <input type="text" defaultValue="영어 실력, 지금 바로 시작하세요" className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">사이트 설명 (SEO)</label>
            <textarea rows={3} defaultValue="Sarah Mitchell의 영어 강의 플랫폼. IELTS, 비즈니스 영어, 회화 등 다양한 강의를 만나보세요." className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] resize-none" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl p-6 border border-stone-100"
      >
        <h3 className="font-bold text-[#0B1B2F] mb-4">회사 정보</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5">상호명</label>
              <input type="text" defaultValue="(주)잉글리시프로" className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5">사업자등록번호</label>
              <input type="text" defaultValue="123-45-67890" className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5">대표자명</label>
              <input type="text" defaultValue="Sarah Mitchell" className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5">대표 이메일</label>
              <input type="email" defaultValue="admin@englishpro.kr" className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">사업장 주소</label>
            <input type="text" defaultValue="서울특별시 강남구 테헤란로 123, 10층" className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">고객센터 번호</label>
            <input type="text" defaultValue="02-1234-5678" className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-6 border border-stone-100"
      >
        <h3 className="font-bold text-[#0B1B2F] mb-4">환불 정책</h3>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5">환불 가능 기간 (일)</label>
              <input type="number" defaultValue={7} className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5">환불 가능 수강률 (%)</label>
              <input type="number" defaultValue={10} className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
          <Save className="w-4 h-4" />
          설정 저장
        </button>
      </div>
    </div>
  )
}
