'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Star, PlayCircle, ChevronRight } from 'lucide-react'
import { useCourse } from '@/state/course'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
  }),
}

export function HeroSection() {
  const course = useCourse((s) => ({ instructor: s.instructor }))
  const instructor = course.instructor

  return (
    <section className="relative min-h-[92vh] bg-[#F9F7F4] overflow-hidden flex items-center">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,164,58,0.08)_0%,_transparent_60%)]" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#0B1B2F] clip-diagonal hidden lg:block"
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8A43A]/10 border border-[#E8A43A]/30 rounded-full mb-6"
            >
              <Star className="w-3.5 h-3.5 text-[#E8A43A] fill-[#E8A43A]" />
              <span className="text-xs font-semibold text-[#C8821A] uppercase tracking-wider">
                5,200명이 선택한 No.1 영어 강의
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold text-[#0B1B2F] leading-[1.1] mb-6"
            >
              영어로 열리는
              <br />
              <span className="text-[#E8A43A]">더 넓은 세계</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-stone-600 leading-relaxed mb-8 max-w-md"
            >
              비즈니스 영어부터 IELTS, 발음 교정까지 — 실전에서 바로 쓸 수 있는 영어를
              TESOL 공인 강사 Sarah Mitchell과 함께 배워보세요.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link
                href="/courses"
                className="flex items-center gap-2 px-6 py-3 bg-[#0B1B2F] text-white font-semibold rounded hover:bg-[#162d4a] transition-colors"
              >
                전체 강의 보기
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/courses/1"
                className="flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-700 font-medium rounded hover:border-[#0B1B2F] transition-colors"
              >
                <PlayCircle className="w-4 h-4 text-[#E8A43A]" />
                무료 미리보기
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex gap-8"
            >
              {[
                { value: '5,200+', label: '누적 수강생' },
                { value: '4.9', label: '평균 평점' },
                { value: '8개', label: '전문 강좌' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#0B1B2F]">{stat.value}</div>
                  <div className="text-sm text-stone-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Instructor card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={instructor?.photo ?? ''}
                  alt={instructor?.name ?? ''}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2F]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-bold text-lg">{instructor?.name}</div>
                  <div className="text-[#E8A43A] text-sm">{instructor?.title}</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#E8A43A] text-white rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-white" />
                  ))}
                </div>
                <div className="text-xs font-bold">4.9 / 5.0</div>
              </div>

              {/* Recent student badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-stone-100">
                <div className="text-xs text-stone-500">최근 등록</div>
                <div className="text-sm font-bold text-[#0B1B2F]">+47명 이번주</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
