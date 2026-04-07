'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Link from 'next/link'
import { ChevronRight, Shield, RefreshCw, Headphones } from 'lucide-react'

const guarantees = [
  { icon: Shield, text: '7일 환불 보장' },
  { icon: RefreshCw, text: '평생 수강 가능' },
  { icon: Headphones, text: '1:1 질문 응답' },
]

export function CtaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 30% 50%, rgba(232,164,58,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(11,27,47,0.04) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-bold text-[#E8A43A] uppercase tracking-widest mb-4">
            Start Today
          </div>
          <h2 className="text-5xl font-bold text-[#0B1B2F] mb-5 leading-tight">
            영어 실력, 지금 바꿔드립니다
          </h2>
          <p className="text-stone-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            무료 미리보기로 강의 퀄리티를 먼저 확인하세요.
            만족스럽지 않으면 7일 이내 전액 환불해 드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/courses"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#E8A43A] text-white font-bold rounded-lg hover:bg-[#d4932a] transition-colors text-lg shadow-lg shadow-[#E8A43A]/20"
            >
              지금 시작하기
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/courses/1"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0B1B2F] text-[#0B1B2F] font-bold rounded-lg hover:bg-[#0B1B2F] hover:text-white transition-colors text-lg"
            >
              무료 강의 체험하기
            </Link>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center gap-6">
            {guarantees.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-stone-500 text-sm">
                <Icon className="w-4 h-4 text-[#E8A43A]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
