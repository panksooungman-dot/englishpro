'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Star, Users, Clock, Search, SlidersHorizontal } from 'lucide-react'
import { useCourse } from '@/state/course'

const categories = ['전체', 'Business', 'IELTS', 'Pronunciation', 'Conversation', 'Writing']
const levels = ['전체', 'Beginner', 'Intermediate', 'Advanced']

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [selectedLevel, setSelectedLevel] = useState('전체')
  const [search, setSearch] = useState('')
  const { items } = useCourse((s) => ({ items: s.items }))

  const filtered = items.filter((c) => {
    const matchCat = selectedCategory === '전체' || c.category === selectedCategory
    const matchLevel = selectedLevel === '전체' || c.level === selectedLevel
    const matchSearch =
      search === '' ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchLevel && matchSearch
  })

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      {/* Page Header */}
      <div className="bg-[#0B1B2F] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs text-[#E8A43A] font-bold uppercase tracking-widest mb-3">
              All Courses
            </div>
            <h1 className="text-4xl font-bold mb-3">전체 강의</h1>
            <p className="text-stone-400">목표에 맞는 영어 강의를 선택하세요</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="강의 검색..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors"
            />
          </div>

          {/* Level Filter */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-stone-500" />
            <div className="flex gap-1">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    selectedLevel === level
                      ? 'bg-[#0B1B2F] text-white'
                      : 'bg-white border border-stone-200 text-stone-600 hover:border-[#0B1B2F]'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#0B1B2F] text-white border-[#0B1B2F]'
                  : 'border-stone-200 bg-white text-stone-600 hover:border-[#0B1B2F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Result Count */}
        <div className="text-sm text-stone-500 mb-6">
          총 <strong className="text-[#0B1B2F]">{filtered.length}</strong>개 강의
        </div>

        {/* Course Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {filtered.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link href={`/courses/${course.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {course.isBestseller && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#E8A43A] text-white text-xs font-bold rounded">
                        BESTSELLER
                      </span>
                    )}
                    {course.isNew && !course.isBestseller && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#0B1B2F] text-white text-xs font-bold rounded">
                        NEW
                      </span>
                    )}
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 text-white text-xs rounded">
                      {course.level}
                    </div>
                  </div>
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
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-stone-400">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}
