'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Play, Clock, BookOpen, Award, ChevronRight } from 'lucide-react'
import { useCourse } from '@/state/course'

export default function MyCoursesPage() {
  const { items } = useCourse((s) => ({ items: s.items }))
  const purchasedCourses = items.slice(0, 3).map((c, i) => ({
    ...c,
    progress: [78, 34, 5][i],
    lastWatched: ['Business English Mastery 3강', 'IELTS Writing Task 2', '오리엔테이션'][i],
  }))

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      {/* Header */}
      <div className="bg-[#0B1B2F] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs text-[#E8A43A] font-bold uppercase tracking-widest mb-2">
              My Courses
            </div>
            <h1 className="text-3xl font-bold mb-1">내 강의실</h1>
            <p className="text-stone-400 text-sm">
              수강 중인 강의 {purchasedCourses.length}개
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {purchasedCourses.length > 0 ? (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { icon: BookOpen, label: '수강 중', value: '3개' },
                { icon: Award, label: '수료 완료', value: '1개' },
                { icon: Clock, label: '총 학습시간', value: '18h' },
                { icon: Play, label: '평균 진도율', value: '39%' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white rounded-xl p-5 border border-stone-100">
                  <Icon className="w-5 h-5 text-[#E8A43A] mb-2" />
                  <div className="text-lg font-bold text-[#0B1B2F]">{value}</div>
                  <div className="text-xs text-stone-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Course List */}
            <h2 className="text-lg font-bold text-[#0B1B2F] mb-5">수강 중인 강의</h2>
            <div className="space-y-4">
              {purchasedCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-stone-100 flex flex-col sm:flex-row gap-5"
                >
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full sm:w-40 h-28 object-cover rounded-xl"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#E8A43A] font-semibold mb-1">{course.category}</div>
                    <h3 className="font-bold text-[#0B1B2F] mb-1 text-lg">{course.title}</h3>
                    <p className="text-xs text-stone-500 mb-3">
                      마지막 수강: {course.lastWatched}
                    </p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-stone-500 mb-1.5">
                        <span>진도율</span>
                        <span className="font-semibold text-[#0B1B2F]">{course.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#E8A43A] rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href={`/courses/${course.id}`}
                        className="flex items-center gap-1.5 px-4 py-2 bg-[#0B1B2F] text-white text-sm font-semibold rounded-lg hover:bg-[#162d4a] transition-colors"
                      >
                        <Play className="w-3.5 h-3.5" />
                        이어 수강하기
                      </Link>
                      {course.progress === 100 && (
                        <button className="flex items-center gap-1.5 px-4 py-2 border border-[#E8A43A] text-[#E8A43A] text-sm font-semibold rounded-lg hover:bg-[#E8A43A]/5 transition-colors">
                          <Award className="w-3.5 h-3.5" />
                          수료증 발급
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* More courses CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1B2F] hover:text-[#E8A43A] transition-colors"
              >
                다른 강의 더 보기
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-stone-200" />
            <h2 className="text-xl font-bold text-[#0B1B2F] mb-2">아직 수강 중인 강의가 없어요</h2>
            <p className="text-stone-500 mb-6 text-sm">마음에 드는 강의를 찾아보세요</p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B1B2F] text-white font-semibold rounded-lg hover:bg-[#162d4a] transition-colors"
            >
              강의 둘러보기
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
