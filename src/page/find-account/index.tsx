'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

type Tab = 'id' | 'password'

export default function FindAccountPage() {
  const [tab, setTab] = useState<Tab>('id')

  return (
    <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-[#0B1B2F] rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-[#E8A43A]" />
            </div>
            <span className="font-bold text-[#0B1B2F] text-xl">EnglishPro</span>
          </Link>
          <h1 className="text-2xl font-bold text-[#0B1B2F] mt-4">아이디/비밀번호 찾기</h1>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
          {/* Tabs */}
          <div className="flex mb-6 border-b border-stone-100">
            {(['id', 'password'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                  tab === t ? 'border-[#0B1B2F] text-[#0B1B2F]' : 'border-transparent text-stone-400'
                }`}
              >
                {t === 'id' ? '아이디(이메일) 찾기' : '비밀번호 재설정'}
              </button>
            ))}
          </div>

          {tab === 'id' ? (
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1.5">이름</label>
                <input type="text" placeholder="가입 시 입력한 이름" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1.5">연락처</label>
                <input type="tel" placeholder="010-0000-0000" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors" />
              </div>
              <button type="submit" className="w-full py-3.5 bg-[#0B1B2F] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-colors">
                아이디 찾기
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1.5">이메일</label>
                <input type="email" placeholder="가입 시 사용한 이메일" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors" />
              </div>
              <p className="text-xs text-stone-400">입력한 이메일로 비밀번호 재설정 링크를 발송합니다.</p>
              <button type="submit" className="w-full py-3.5 bg-[#0B1B2F] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-colors">
                재설정 링크 발송
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-stone-500 mt-6">
          <Link href="/sign-in" className="text-[#0B1B2F] font-semibold hover:text-[#E8A43A] transition-colors">← 로그인으로 돌아가기</Link>
        </p>
      </div>
    </div>
  )
}
