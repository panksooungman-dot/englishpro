'use client'

import { motion } from 'motion/react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Play, Clock, BookOpen, Award, ChevronRight, History } from 'lucide-react'
import { useCourse } from '@/state/course'

type Tab = 'ongoing' | 'completed' | 'recent'

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'ongoing', label: '수강중 강의', icon: Play },
  { id: 'completed', label: '수강완료 강의', icon: Award },
  { id: 'recent', label: '최근 시청 강의', icon: History },
]

const ongoingMock = [
  { id: '1', progress: 78, lastWatched: 'Business English 3강 — 프레젠테이션 영어' },
  { id: '2', progress: 34, lastWatched: 'IELTS Writing Task 2 전략' },
  { id: '3', progress: 5, lastWatched: '오리엔테이션' },
]

const completedMock = [{ id: '4', completedDate: '2025-02-10', progress: 100 }]

const recentMock = [
  { id: '1', watchedAt: '오늘 오전 10:23' },
  { id: '2', watchedAt: '어제' },
  { id: '3', watchedAt: '3일 전' },
]

export default function MyCoursesPage() {
  const searchParams = useSearchParams()
  const currentTab = (searchParams.get('tab') as Tab) ?? 'ongoing'
  const { items } = useCourse((s) => ({ items: s.items }))

  const ongoing = ongoingMock.map((m) => ({ ...m, course: items.find((c) => c.id === m.id) })).filter((m) => m.course)
  const completed = completedMock.map((m) => ({ ...m, course: items.find((c) => c.id === m.id) })).filter((m) => m.course)
  const recent = recentMock.map((m) => ({ ...m, course: items.find((c) => c.id === m.id) })).filter((m) => m.course)

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      {/* Header */}
      <div className="bg-[#0B1B2F] text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-xs text-[#E8A43A] font-bold uppercase tracking-widest mb-2">My Classroom</div>
            <h1 className="text-3xl font-bold mb-1">내 강의실</h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: Play, label: '수강중', value: `${ongoing.length}개` },
            { icon: Award, label: '수강완료', value: `${completed.length}개` },
            { icon: Clock, label: '총 학습시간', value: '21h' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-xl p-5 border border-stone-100 text-center">
              <Icon className="w-5 h-5 text-[#E8A43A] mx-auto mb-2" />
              <div className="text-xl font-bold text-[#0B1B2F]">{value}</div>
              <div className="text-xs text-stone-500">{label}</div>
            </div>
          ))}
        </div>

        {/* Tab Nav */}
        <div className="flex gap-1 mb-6 border-b border-stone-200">
          {tabs.map(({ id, label, icon: Icon }) => (
            <Link
              key={id}
              href={id === 'ongoing' ? '/my-courses' : `/my-courses?tab=${id}`}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                currentTab === id ? 'border-[#0B1B2F] text-[#0B1B2F]' : 'border-transparent text-stone-500 hover:text-[#0B1B2F]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </div>

        {/* Tab Content */}
        {currentTab === 'ongoing' && (
          <div className="space-y-4">
            {ongoing.length > 0 ? ongoing.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-stone-100 flex flex-col sm:flex-row gap-5"
              >
                <img src={item.course!.thumbnail} alt={item.course!.title} className="w-full sm:w-40 h-28 object-cover rounded-xl shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#E8A43A] font-semibold mb-1">{item.course!.category}</div>
                  <h3 className="font-bold text-[#0B1B2F] mb-1 text-lg">{item.course!.title}</h3>
                  <p className="text-xs text-stone-500 mb-3">마지막 수강: {item.lastWatched}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-stone-500 mb-1.5">
                      <span>진도율</span>
                      <span className="font-semibold text-[#0B1B2F]">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#E8A43A] rounded-full" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                  <Link href={`/courses/${item.id}`} className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0B1B2F] text-white text-sm font-semibold rounded-lg hover:bg-[#162d4a] transition-colors">
                    <Play className="w-3.5 h-3.5" /> 이어 수강하기
                  </Link>
                </div>
              </motion.div>
            )) : (
              <div className="text-center py-16 text-stone-400">
                <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm">수강 중인 강의가 없습니다.</p>
              </div>
            )}
          </div>
        )}

        {currentTab === 'completed' && (
          <div className="space-y-4">
            {completed.length > 0 ? completed.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-stone-100 flex flex-col sm:flex-row gap-5 items-center"
              >
                <img src={item.course!.thumbnail} alt={item.course!.title} className="w-full sm:w-40 h-28 object-cover rounded-xl shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#E8A43A] font-semibold mb-1">{item.course!.category}</div>
                  <h3 className="font-bold text-[#0B1B2F] mb-1">{item.course!.title}</h3>
                  <p className="text-xs text-stone-500 mb-3">완강일: {item.completedDate}</p>
                  <button className="flex items-center gap-1.5 px-4 py-2 border border-[#E8A43A] text-[#E8A43A] text-sm font-semibold rounded-lg hover:bg-[#E8A43A]/5 transition-colors">
                    <Award className="w-3.5 h-3.5" /> 수료증 발급
                  </button>
                </div>
              </motion.div>
            )) : (
              <div className="text-center py-16 text-stone-400">
                <Award className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm">수강 완료한 강의가 없습니다.</p>
              </div>
            )}
          </div>
        )}

        {currentTab === 'recent' && (
          <div className="space-y-3">
            {recent.map((item, i) => (
              <motion.div key={`${item.id}-${i}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-4 border border-stone-100 flex gap-4 items-center"
              >
                <img src={item.course!.thumbnail} alt={item.course!.title} className="w-20 h-14 object-cover rounded-lg shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#0B1B2F] text-sm line-clamp-1">{item.course!.title}</h3>
                  <p className="text-xs text-stone-400 mt-0.5">{item.watchedAt}</p>
                </div>
                <Link href={`/courses/${item.id}`} className="flex items-center gap-1 text-sm text-[#E8A43A] font-semibold hover:text-[#d4932a] shrink-0">
                  재생 <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* More courses CTA */}
        <div className="mt-10 text-center">
          <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1B2F] hover:text-[#E8A43A] transition-colors">
            다른 강의 더 보기 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
