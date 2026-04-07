'use client'

import { motion } from 'motion/react'
import { Save, ShieldCheck } from 'lucide-react'

export default function PgSettingsPage() {
  return (
    <div className="space-y-5 max-w-2xl">
      <div>
        <h2 className="text-lg font-bold text-[#0B1B2F]">PG/알림 설정</h2>
        <p className="text-sm text-stone-500 mt-0.5">결제 및 알림 연동을 설정합니다</p>
      </div>

      {/* Toss Payments */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 border border-stone-100"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <div>
            <h3 className="font-bold text-[#0B1B2F]">Toss Payments</h3>
            <div className="flex items-center gap-1 mt-0.5">
              <ShieldCheck className="w-3 h-3 text-green-500" />
              <span className="text-xs text-green-600 font-semibold">연동됨</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">클라이언트 키</label>
            <input type="text" defaultValue="test_ck_..." className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] font-mono" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">시크릿 키</label>
            <input type="password" defaultValue="test_sk_..." className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] font-mono" />
          </div>
          <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-[#E8A43A]" defaultChecked />
              <span className="text-sm text-stone-700">테스트 모드 (실제 결제 미발생)</span>
            </label>
          </div>
        </div>
      </motion.div>

      {/* Email Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl p-6 border border-stone-100"
      >
        <h3 className="font-bold text-[#0B1B2F] mb-4">이메일 알림 설정</h3>
        <div className="space-y-3">
          {[
            { label: '신규 주문 알림', desc: '결제 완료 시 관리자 이메일 발송' },
            { label: '환불 요청 알림', desc: '환불 요청 접수 시 즉시 알림' },
            { label: '신규 문의 알림', desc: '1:1 문의 접수 시 알림' },
            { label: '신규 회원 알림', desc: '일별 신규 가입자 요약 리포트' },
          ].map(({ label, desc }) => (
            <div key={label} className="flex items-start justify-between py-2 border-b border-stone-50 last:border-0">
              <div>
                <div className="text-sm font-medium text-[#0B1B2F]">{label}</div>
                <div className="text-xs text-stone-400 mt-0.5">{desc}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-9 h-5 bg-stone-200 peer-checked:bg-[#E8A43A] rounded-full transition-colors" />
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-4 transition-transform" />
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">알림 수신 이메일</label>
          <input type="email" defaultValue="admin@englishpro.kr" className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
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
