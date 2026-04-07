'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap, Eye, EyeOff, CheckCircle } from 'lucide-react'

export default function SignUpPage() {
  const [showPw, setShowPw] = useState(false)
  const [agreed, setAgreed] = useState({ terms: false, privacy: false, marketing: false })

  const allRequired = agreed.terms && agreed.privacy

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
          <h1 className="text-2xl font-bold text-[#0B1B2F] mt-4">회원가입</h1>
          <p className="text-stone-500 text-sm mt-1">지금 가입하면 20% 할인 쿠폰 즉시 지급!</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
          {/* Coupon badge */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#E8A43A]/10 border border-[#E8A43A]/30 rounded-xl mb-5">
            <CheckCircle className="w-4 h-4 text-[#E8A43A]" />
            <span className="text-xs font-semibold text-[#C8821A]">회원가입 시 20% 할인 쿠폰 즉시 지급</span>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1.5">이름</label>
                <input type="text" placeholder="홍길동" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1.5">연락처</label>
                <input type="tel" placeholder="010-0000-0000" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1.5">이메일</label>
              <input type="email" placeholder="example@email.com" className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1.5">비밀번호</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  placeholder="8자 이상, 영문+숫자+특수문자"
                  className="w-full px-4 py-3 pr-12 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Agreements */}
            <div className="space-y-2.5 pt-2">
              {[
                { key: 'terms' as const, label: '이용약관 동의', required: true, link: '/terms' },
                { key: 'privacy' as const, label: '개인정보처리방침 동의', required: true, link: '/terms?tab=privacy' },
                { key: 'marketing' as const, label: '마케팅 정보 수신 동의 (선택)', required: false, link: null },
              ].map(({ key, label, required, link }) => (
                <label key={key} className="flex items-center gap-2.5 cursor-pointer">
                  <div
                    onClick={() => setAgreed({ ...agreed, [key]: !agreed[key] })}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0 ${agreed[key] ? 'bg-[#0B1B2F] border-[#0B1B2F]' : 'border-stone-300'}`}
                  >
                    {agreed[key] && <CheckCircle className="w-3.5 h-3.5 text-white fill-white" />}
                  </div>
                  <span className="text-sm text-stone-600">{label}</span>
                  {required && <span className="text-[#E8A43A] text-xs">(필수)</span>}
                  {link && (
                    <Link href={link} className="text-xs text-stone-400 underline ml-auto hover:text-stone-600">보기</Link>
                  )}
                </label>
              ))}
            </div>

            <button
              type="submit"
              disabled={!allRequired}
              className="w-full py-3.5 bg-[#0B1B2F] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              가입 완료
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-stone-500 mt-6">
          이미 회원이신가요?{' '}
          <Link href="/sign-in" className="text-[#0B1B2F] font-semibold hover:text-[#E8A43A] transition-colors">
            로그인
          </Link>
        </p>
      </div>
    </div>
  )
}
