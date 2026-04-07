'use client'

import { motion } from 'motion/react'
import { Save } from 'lucide-react'

export default function PrivacySettingsPage() {
  return (
    <div className="space-y-5 max-w-3xl">
      <div>
        <h2 className="text-lg font-bold text-[#0B1B2F]">개인정보처리방침</h2>
        <p className="text-sm text-stone-500 mt-0.5">개인정보처리방침을 관리합니다</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 border border-stone-100"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-[#0B1B2F]">개인정보처리방침</h3>
          <span className="text-xs text-stone-400">최종 수정: 2025-01-01</span>
        </div>
        <textarea
          rows={12}
          defaultValue={`(주)잉글리시프로(이하 "회사")는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.

1. 개인정보의 처리 목적
회사는 다음의 목적을 위하여 개인정보를 처리합니다.
- 회원 가입 및 관리
- 서비스 제공 및 결제 처리
- 마케팅 및 광고에의 활용 (동의한 경우)

2. 개인정보의 처리 및 보유기간
회원 탈퇴 후 5년간 보유합니다 (관련 법령에 따름).

3. 개인정보의 제3자 제공
회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.`}
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
