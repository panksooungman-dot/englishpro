'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Link from 'next/link'
import { Star, Users, Clock, ChevronRight } from 'lucide-react'
import { useCourse } from '@/state/course'

const categories = ['전체', 'Business', 'IELTS', 'Pronunciation', 'Conversation', 'Writing']

import type { Course } from '@/state/course'

function CourseCard({ course, index }: { course: Course; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/courses/${course.id}`} className="group block">
        <div className="overflow-hidden rounded-lg mb-3">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {(course.isBestseller || course.isNew) && (
            <div className="absolute top-3 left-3">
              {course.isBestseller && (
                <span className="px-2 py-0.5 bg-[#E8A43A] text-white text-xs font-bold rounded">
                  BESTSELLER
                </span>
              )}
              {course.isNew && !course.isBestseller && (
                <span className="px-2 py-0.5 bg-[#0B1B2F] text-white text-xs font-bold rounded">
                  NEW
                </span>
              )}
            </div>
          )}
        </div>
        <div className="relative">
          {(course.isBestseller || course.isNew) && (
            <span
              className={`absolute -top-11 left-3 px-2 py-0.5 text-white text-xs font-bold rounded ${course.isBestseller ? 'bg-[#E8A43A]' : 'bg-[#0B1B2F]'}`}
            >
              {course.isBestseller ? 'BESTSELLER' : 'NEW'}
            </span>
          )}
          <div className="text-xs text-[#E8A43A] font-semibold mb-1 uppercase tracking-wide">
            {course.category}
          </div>
          <h3 className="font-bold text-[#0B1B2F] mb-1 leading-tight group-hover:text-[#E8A43A] transition-colors line-clamp-2">
            {course.title}
          </h3>
          <p className="text-xs text-stone-500 mb-2 line-clamp-1">{course.subtitle}</p>
          <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-[#E8A43A] fill-[#E8A43A]" />
              <span className="font-semibold text-stone-700">{course.rating}</span>
              ({course.reviews.toLocaleString()})
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {course.students.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {course.duration}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#0B1B2F]">
              {course.price.toLocaleString()}원
            </span>
            <span className="text-sm text-stone-400 line-through">
              {course.originalPrice.toLocaleString()}원
            </span>
            <span className="text-xs text-red-500 font-semibold">
              {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function FeaturedCoursesSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const { items } = useCourse((s) => ({ items: s.items }))

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        >
          <div>
            <div className="text-xs font-bold text-[#E8A43A] uppercase tracking-widest mb-2">
              Courses
            </div>
            <h2 className="text-4xl font-bold text-[#0B1B2F]">인기 강의</h2>
            <p className="text-stone-500 mt-2">목표에 맞는 강의를 찾아보세요</p>
          </div>
          <Link
            href="/courses"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#0B1B2F] hover:text-[#E8A43A] transition-colors"
          >
            전체 강의 보기
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                i === 0
                  ? 'bg-[#0B1B2F] text-white border-[#0B1B2F]'
                  : 'border-stone-200 text-stone-600 hover:border-[#0B1B2F] hover:text-[#0B1B2F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {items.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
