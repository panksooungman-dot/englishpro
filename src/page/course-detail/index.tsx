'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import {
  Star,
  Users,
  Clock,
  BookOpen,
  ChevronDown,
  Play,
  Lock,
  Award,
  CheckCircle,
  ShoppingCart,
  Heart,
  Share2,
} from 'lucide-react'
import { useCourse } from '@/state/course'

export default function CourseDetailPage({ id }: { id: string }) {
  const { items, instructor } = useCourse((s) => ({ items: s.items, instructor: s.instructor }))
  const course = items.find((c) => c.id === id) ?? items[0]
  const [openSection, setOpenSection] = useState<number | null>(0)

  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  )

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      {/* Hero Banner */}
      <div className="bg-[#0B1B2F] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 bg-[#E8A43A]/20 text-[#E8A43A] rounded font-semibold">
                    {course.category}
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-white/10 text-stone-300 rounded">
                    {course.level}
                  </span>
                  {course.isBestseller && (
                    <span className="text-xs px-2.5 py-1 bg-[#E8A43A] text-white rounded font-bold">
                      BESTSELLER
                    </span>
                  )}
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight">{course.title}</h1>
                <p className="text-stone-300 mb-5 leading-relaxed">{course.subtitle}</p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-[#E8A43A] fill-[#E8A43A]" />
                    <span className="font-bold text-[#E8A43A]">{course.rating}</span>
                    <span className="text-stone-400">({course.reviews.toLocaleString()}개 평점)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-400">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()}명 수강
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-400">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-400">
                    <BookOpen className="w-4 h-4" />
                    {course.lessons}강
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={instructor?.photo ?? ''}
                    alt={instructor?.name ?? ''}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-stone-300">
                    강사:{' '}
                    <span className="text-white font-medium">{course.instructor}</span>
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: Purchase Card (desktop) */}
            <div className="hidden lg:block">
              <PurchaseCard course={course} discount={discount} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* What you'll learn */}
            <div className="bg-white rounded-2xl p-7 border border-stone-100">
              <h2 className="text-xl font-bold text-[#0B1B2F] mb-5">이런 것을 배워요</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.tags.concat(['실전 자신감 향상', '원어민 피드백 스타일', '체계적 학습법']).map(
                  (tag) => (
                    <div key={tag} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#E8A43A] mt-0.5 shrink-0" />
                      <span className="text-sm text-stone-700">{tag}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-xl font-bold text-[#0B1B2F] mb-5">커리큘럼</h2>
              <div className="space-y-2">
                {course.curriculum.map((section, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-xl overflow-hidden border border-stone-100">
                    <button
                      onClick={() => setOpenSection(openSection === sIdx ? null : sIdx)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors"
                    >
                      <div>
                        <span className="font-semibold text-[#0B1B2F] text-sm">
                          {section.title}
                        </span>
                        <span className="text-xs text-stone-400 ml-2">
                          {section.lessons.length}강
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 transition-transform ${openSection === sIdx ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {openSection === sIdx && (
                      <div className="border-t border-stone-100 divide-y divide-stone-50">
                        {section.lessons.map((lesson, lIdx) => (
                          <div key={lIdx} className="flex items-center justify-between px-5 py-3">
                            <div className="flex items-center gap-3">
                              {lesson.isFree ? (
                                <Play className="w-4 h-4 text-[#E8A43A]" />
                              ) : (
                                <Lock className="w-4 h-4 text-stone-300" />
                              )}
                              <span className="text-sm text-stone-700">{lesson.title}</span>
                              {lesson.isFree && (
                                <span className="text-xs px-1.5 py-0.5 bg-[#E8A43A]/10 text-[#C8821A] rounded font-medium">
                                  무료
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-stone-400">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-2xl p-7 border border-stone-100">
              <h2 className="text-xl font-bold text-[#0B1B2F] mb-5">강사 소개</h2>
              <div className="flex gap-5">
                <img
                  src={instructor?.photo ?? ''}
                  alt={instructor?.name ?? ''}
                  className="w-20 h-20 rounded-full object-cover shrink-0"
                />
                <div>
                  <div className="font-bold text-[#0B1B2F] text-lg">{instructor?.name}</div>
                  <div className="text-[#E8A43A] text-sm mb-2">{instructor?.title}</div>
                  <div className="flex flex-wrap gap-3 text-xs text-stone-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#E8A43A] fill-[#E8A43A]" />
                      {instructor?.rating} 평점
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {instructor?.students.toLocaleString()}명 수강생
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {instructor?.courses}개 강의
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{instructor?.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Purchase Card (mobile + desktop sticky) */}
          <div className="lg:hidden">
            <PurchaseCard course={course} discount={discount} />
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <PurchaseCard course={course} discount={discount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Course } from '@/state/course'

function PurchaseCard({
  course,
  discount,
}: {
  course: Course
  discount: number
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-44 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-colors">
            <Play className="w-5 h-5 text-[#0B1B2F] ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/60 px-2 py-1 rounded">
          미리보기 재생
        </div>
      </div>

      <div className="p-5">
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-bold text-[#0B1B2F]">
            {course.price.toLocaleString()}원
          </span>
          <span className="text-base text-stone-400 line-through">
            {course.originalPrice.toLocaleString()}원
          </span>
        </div>
        <div className="text-red-500 text-sm font-bold mb-4">{discount}% 할인</div>

        {/* CTA */}
        <Link
          href={`/checkout?courseId=${course.id}`}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#E8A43A] text-white font-bold rounded-lg hover:bg-[#d4932a] transition-colors mb-3 shadow-md shadow-[#E8A43A]/20"
        >
          <ShoppingCart className="w-4 h-4" />
          지금 수강 신청
        </Link>

        <div className="flex gap-2">
          <button className="flex-1 py-2.5 border border-stone-200 text-stone-600 text-sm font-medium rounded-lg hover:border-[#0B1B2F] transition-colors flex items-center justify-center gap-1.5">
            <Heart className="w-4 h-4" />
            위시리스트
          </button>
          <button className="py-2.5 px-3 border border-stone-200 text-stone-600 rounded-lg hover:border-[#0B1B2F] transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Perks */}
        <div className="mt-5 space-y-2 border-t border-stone-100 pt-5">
          {[
            { icon: Award, text: '수료증 발급' },
            { icon: Clock, text: '평생 수강 가능' },
            { icon: BookOpen, text: `총 ${course.lessons}강 · ${course.duration}` },
            { icon: CheckCircle, text: '7일 환불 보장' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-stone-600">
              <Icon className="w-4 h-4 text-[#E8A43A]" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
