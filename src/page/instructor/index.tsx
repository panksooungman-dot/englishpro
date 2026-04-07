'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Link from 'next/link'
import { Star, Users, BookOpen, Award, ChevronRight, CheckCircle } from 'lucide-react'
import { useCourse } from '@/state/course'

const achievements = [
  'TESOL 공인 자격증 취득 (Trinity College London)',
  '영국 Cambridge 대학교 Applied Linguistics 석사',
  '외국계 글로벌 기업 임원 영어 코칭 경력 5년',
  'IELTS, TOEFL 시험관 출신 — 채점 기준 완벽 이해',
  'Forbes 아시아 30 Under 30 선정 (교육 부문)',
  'YouTube 구독자 50만+ 영어 교육 채널 운영',
]

const mediaFeatures = [
  { name: 'KBS', logo: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100&q=60' },
  { name: 'SBS', logo: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100&q=60' },
  { name: 'MBC', logo: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100&q=60' },
]

export default function InstructorPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { instructor, items } = useCourse((s) => ({
    instructor: s.instructor,
    items: s.items,
  }))

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      {/* Hero */}
      <div className="bg-[#0B1B2F] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs text-[#E8A43A] font-bold uppercase tracking-widest mb-3">
                Instructor
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {instructor?.name ?? 'Sarah Mitchell'}
              </h1>
              <div className="text-[#E8A43A] text-lg font-medium mb-6">
                {instructor?.title ?? 'TESOL Certified English Coach'}
              </div>
              <p className="text-stone-300 leading-relaxed mb-8">
                {instructor?.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                {instructor?.specialties.map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-white/10 text-stone-300 text-sm rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-72 h-80 rounded-2xl overflow-hidden">
                  <img
                    src={instructor?.photo ?? ''}
                    alt={instructor?.name ?? ''}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#E8A43A] text-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">{instructor?.students.toLocaleString()}+</div>
                  <div className="text-xs opacity-80">누적 수강생</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: `${instructor?.students.toLocaleString()}+`, label: '누적 수강생' },
              { value: `${instructor?.courses}개`, label: '강의 수' },
              { value: `${instructor?.rating}/5.0`, label: '평균 평점' },
              { value: '10년+', label: '교육 경력' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#0B1B2F] mb-1">{stat.value}</div>
                <div className="text-sm text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div ref={ref} className="lg:col-span-2 space-y-10">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#0B1B2F] mb-6">주요 이력</h2>
              <div className="space-y-3">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#E8A43A] mt-0.5 shrink-0" />
                    <span className="text-stone-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Teaching Style */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1B2F] mb-6">강의 철학</h2>
              <div className="bg-white rounded-2xl p-8 border border-stone-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#E8A43A]" />
                <blockquote className="text-stone-700 text-lg leading-relaxed italic pl-4">
                  &ldquo;영어는 외우는 것이 아닙니다. 패턴을 이해하고 반복하면 누구나 유창하게 말할 수 있습니다. 저는 수강생 한 분 한 분이 자신감 있게 영어를 사용하는 날까지 함께하겠습니다.&rdquo;
                </blockquote>
                <div className="mt-4 pl-4 text-sm text-stone-500">— {instructor?.name}</div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rating Summary */}
            <div className="bg-white rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-[#0B1B2F] mb-4">강사 평점</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-[#0B1B2F]">{instructor?.rating}</div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-[#E8A43A] fill-[#E8A43A]" />
                    ))}
                  </div>
                  <div className="text-xs text-stone-500">강사 평점</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <Users className="w-4 h-4" />
                {instructor?.students.toLocaleString()}명의 수강생
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0B1B2F] rounded-2xl p-6 text-white">
              <BookOpen className="w-8 h-8 text-[#E8A43A] mb-3" />
              <h3 className="font-bold mb-2">Sarah의 강의 시작하기</h3>
              <p className="text-stone-400 text-sm mb-4">무료 미리보기로 강의 스타일을 먼저 확인하세요</p>
              <Link
                href="/courses"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors"
              >
                전체 강의 보기
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Courses by this instructor */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#0B1B2F] mb-8">개설 강의</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 3).map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`} className="group bg-white rounded-xl overflow-hidden border border-stone-100 hover:shadow-md transition-shadow">
                <img src={course.thumbnail} alt={course.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <div className="text-xs text-[#E8A43A] font-semibold mb-1">{course.category}</div>
                  <h3 className="font-bold text-[#0B1B2F] text-sm leading-tight mb-2 line-clamp-2">{course.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-stone-500">
                      <Star className="w-3 h-3 text-[#E8A43A] fill-[#E8A43A]" />
                      {course.rating}
                    </div>
                    <span className="text-sm font-bold text-[#0B1B2F]">{course.price.toLocaleString()}원</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
