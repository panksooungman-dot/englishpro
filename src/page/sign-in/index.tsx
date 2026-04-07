'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap, Eye, EyeOff } from 'lucide-react'

export default function SignInPage() {
  const [showPw, setShowPw] = useState(false)

  return (
    <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-[#0B1B2F] rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-[#E8A43A]" />
            </div>
            <span className="font-bold text-[#0B1B2F] text-xl">EnglishPro</span>
          </Link>
          <h1 className="text-2xl font-bold text-[#0B1B2F] mt-4">로그인</h1>
          <p className="text-stone-500 text-sm mt-1">강의를 시작하세요</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1.5">이메일</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1.5">비밀번호</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  placeholder="비밀번호 입력"
                  className="w-full px-4 py-3 pr-12 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-stone-500 cursor-pointer">
                <input type="checkbox" className="rounded" />
                로그인 상태 유지
              </label>
              <Link href="/find-account" className="text-stone-500 hover:text-[#0B1B2F] transition-colors">
                아이디/비밀번호 찾기
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#0B1B2F] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-colors"
            >
              로그인
            </button>
          </form>

          <div className="mt-5">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-100" />
              </div>
              <div className="relative text-center">
                <span className="px-3 bg-white text-xs text-stone-400">또는 소셜 로그인</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <button className="flex items-center justify-center gap-2 py-2.5 border border-stone-200 rounded-xl text-sm font-medium text-stone-600 hover:bg-stone-50 transition-colors">
                <div className="w-5 h-5 bg-[#FEE500] rounded-sm flex items-center justify-center text-[10px] font-black text-[#3A1D1D]">K</div>
                카카오
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 border border-stone-200 rounded-xl text-sm font-medium text-stone-600 hover:bg-stone-50 transition-colors">
                <div className="w-5 h-5 bg-[#03C75A] rounded-sm flex items-center justify-center text-[10px] font-black text-white">N</div>
                네이버
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-stone-500 mt-6">
          아직 회원이 아니신가요?{' '}
          <Link href="/sign-up" className="text-[#0B1B2F] font-semibold hover:text-[#E8A43A] transition-colors">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  )
}
