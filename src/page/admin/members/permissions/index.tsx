'use client'

import { motion } from 'motion/react'
import { ShieldCheck, ShieldOff, AlertTriangle } from 'lucide-react'

const members = [
  { id: 1, name: '김지현', email: 'jihyeon@example.com', role: '일반회원', status: '정상', warned: false },
  { id: 2, name: '한소희', email: 'sohee@example.com', role: '일반회원', status: '정지', warned: true, reason: '결제 분쟁 반복' },
  { id: 3, name: '윤태양', email: 'taeyang@example.com', role: '일반회원', status: '경고', warned: true, reason: '부적절한 댓글' },
  { id: 4, name: '강민준', email: 'minjun@example.com', role: 'VIP', status: '정상', warned: false },
]

export default function PermissionsPage() {
  return (
    <div className="space-y-5 max-w-3xl">
      <div>
        <h2 className="text-lg font-bold text-[#0B1B2F]">제재/권한 관리</h2>
        <p className="text-sm text-stone-500 mt-0.5">회원 제재 및 권한을 관리합니다</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: '정상 회원', value: 5280, color: 'text-green-600', bg: 'bg-green-50', icon: ShieldCheck },
          { label: '경고 회원', value: 3, color: 'text-orange-600', bg: 'bg-orange-50', icon: AlertTriangle },
          { label: '정지 회원', value: 1, color: 'text-red-600', bg: 'bg-red-50', icon: ShieldOff },
        ].map(({ label, value, color, bg, icon: Icon }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${bg} rounded-xl p-4 border border-stone-100`}
          >
            <Icon className={`w-5 h-5 ${color} mb-2`} />
            <div className={`text-2xl font-bold ${color}`}>{value.toLocaleString()}</div>
            <div className="text-xs text-stone-500 mt-0.5">{label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl border border-stone-100 overflow-hidden"
      >
        <div className="px-5 py-4 border-b border-stone-50">
          <h3 className="font-bold text-[#0B1B2F]">제재 대상 회원</h3>
        </div>
        <div className="divide-y divide-stone-50">
          {members.filter(m => m.status !== '정상').map((m) => (
            <div key={m.id} className="flex items-center gap-4 px-5 py-4">
              <div className="w-9 h-9 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-stone-500 text-sm font-bold">{m.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[#0B1B2F] text-sm">{m.name}</div>
                <div className="text-xs text-stone-400">{m.email}</div>
                {m.reason && <div className="text-xs text-red-500 mt-0.5">사유: {m.reason}</div>}
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${m.status === '정지' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'}`}>
                {m.status}
              </span>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs border border-stone-200 rounded-lg hover:bg-stone-50 text-stone-600">해제</button>
                {m.status === '경고' && (
                  <button className="px-3 py-1.5 text-xs bg-red-500 text-white rounded-lg hover:bg-red-600">정지</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
