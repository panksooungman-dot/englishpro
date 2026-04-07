'use client'

import { motion } from 'motion/react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FileText } from 'lucide-react'

type Tab = 'terms' | 'privacy'

const termsContent = `제1조 (목적)
본 약관은 EnglishPro(이하 "회사")가 제공하는 온라인 영어 강의 서비스(이하 "서비스")의 이용에 관한 조건 및 절차, 회사와 회원의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.

제2조 (정의)
① "서비스"란 회사가 운영하는 온라인 플랫폼을 통해 제공하는 영어 강의 콘텐츠 및 관련 서비스를 말합니다.
② "회원"이란 본 약관에 동의하고 회원가입을 완료한 자를 말합니다.
③ "콘텐츠"란 회사가 제공하는 강의 영상, 교재, 자료 등 디지털 자료를 말합니다.

제3조 (서비스 이용)
① 회원은 결제 완료 후 즉시 강의를 수강할 수 있습니다.
② 결제 후 7일 이내, 수강 진도율 10% 미만인 경우 전액 환불이 가능합니다.
③ 수강 기간은 결제 후 평생으로 합니다.

제4조 (저작권)
제공되는 모든 콘텐츠의 저작권은 회사에 귀속되며, 회원은 콘텐츠를 무단으로 복제·배포·공유할 수 없습니다.`

const privacyContent = `개인정보처리방침

EnglishPro는 개인정보보호법에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.

1. 수집하는 개인정보 항목
- 필수항목: 이름, 이메일, 비밀번호, 연락처
- 결제 정보: 카드번호, 계좌번호 (토스페이먼츠를 통해 암호화 처리)
- 서비스 이용 기록: 강의 수강 이력, 접속 기록

2. 개인정보 수집 및 이용 목적
- 회원가입 및 관리
- 강의 서비스 제공
- 결제 및 환불 처리
- 공지사항 전달

3. 개인정보 보유 및 이용 기간
- 회원 탈퇴 시 즉시 삭제 (단, 관련 법령에 따라 일부 정보는 보관)
- 전자상거래 관련: 5년 보관

4. 개인정보의 제3자 제공
- 원칙적으로 외부에 제공하지 않습니다.
- 결제 처리를 위해 토스페이먼츠에 최소한의 정보를 제공합니다.`

export default function TermsPage() {
  const searchParams = useSearchParams()
  const currentTab = (searchParams.get('tab') as Tab) ?? 'terms'

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <div className="bg-[#0B1B2F] text-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#E8A43A]" />
              <h1 className="text-2xl font-bold">약관 및 정책</h1>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex gap-1 mb-8 border-b border-stone-200">
          {[
            { id: 'terms' as Tab, label: '이용약관' },
            { id: 'privacy' as Tab, label: '개인정보처리방침' },
          ].map(({ id, label }) => (
            <Link
              key={id}
              href={id === 'terms' ? '/terms' : '/terms?tab=privacy'}
              className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                currentTab === id ? 'border-[#0B1B2F] text-[#0B1B2F]' : 'border-transparent text-stone-500'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-stone-100">
          <h2 className="text-xl font-bold text-[#0B1B2F] mb-6">
            {currentTab === 'terms' ? '이용약관' : '개인정보처리방침'}
          </h2>
          <div className="prose prose-sm max-w-none text-stone-600 whitespace-pre-line leading-relaxed text-sm">
            {currentTab === 'terms' ? termsContent : privacyContent}
          </div>
          <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-400">
            시행일: 2025년 1월 1일 | EnglishPro
          </div>
        </div>
      </div>
    </div>
  )
}
