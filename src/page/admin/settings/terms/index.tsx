'use client'

import { motion } from 'motion/react'
import { Save } from 'lucide-react'

export default function TermsSettingsPage() {
  return (
    <div className="space-y-5 max-w-3xl">
      <div>
        <h2 className="text-lg font-bold text-[#0B1B2F]">약관 관리</h2>
        <p className="text-sm text-stone-500 mt-0.5">이용약관을 관리합니다</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 border border-stone-100"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-[#0B1B2F]">서비스 이용약관</h3>
          <span className="text-xs text-stone-400">최종 수정: 2025-01-01</span>
        </div>
        <textarea
          rows={12}
          defaultValue={`제1조 (목적)
이 약관은 (주)잉글리시프로(이하 "회사")가 운영하는 EnglishPro 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.

제2조 (정의)
1. "서비스"란 회사가 제공하는 온라인 영어 교육 강의 서비스를 말합니다.
2. "회원"이란 회사와 서비스 이용 계약을 체결한 자를 말합니다.
3. "유료 서비스"란 회원이 결제 후 이용할 수 있는 강의 콘텐츠를 말합니다.

제3조 (약관의 효력 및 변경)
회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항에 게시함으로써 효력을 발생합니다.`}
          className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] resize-none font-mono"
        />
        <div className="flex justify-end mt-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a]">
            <Save className="w-4 h-4" />
            저장
          </button>
        </div>
      </motion.div>
    </div>
  )
}
