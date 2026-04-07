'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Link from 'next/link'
import { ChevronRight, Clock, Tag, Flame } from 'lucide-react'
import { useCommunity } from '@/state/community'

export default function EventsPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { events } = useCommunity((s) => ({ events: s.events }))

  const hot = events.filter((e) => e.isHot)
  const rest = events.filter((e) => !e.isHot)

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      {/* Header */}
      <div className="bg-[#0B1B2F] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs text-[#E8A43A] font-bold uppercase tracking-widest mb-3">
              Events & Promotions
            </div>
            <h1 className="text-4xl font-bold mb-3">이벤트 / 프로모션</h1>
            <p className="text-stone-400">놓치면 후회할 특별 혜택을 확인하세요</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hot Events */}
        {hot.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-bold text-[#0B1B2F]">지금 핫한 이벤트</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {hot.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold"
                      style={{ backgroundColor: event.badgeColor }}
                    >
                      {event.badge}
                    </div>
                    {event.discountRate > 0 && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        최대 {event.discountRate}% OFF
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#0B1B2F] text-lg mb-2">{event.title}</h3>
                    <p className="text-sm text-stone-500 mb-3">{event.subtitle}</p>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-stone-400">
                        <Clock className="w-3.5 h-3.5" />
                        마감: {event.endDate}
                      </div>
                      <Link
                        href="/courses"
                        className="flex items-center gap-1 text-sm font-semibold text-[#E8A43A] hover:text-[#d4932a] transition-colors"
                      >
                        지금 참여
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other Events */}
        <div ref={ref}>
          <div className="flex items-center gap-2 mb-6">
            <Tag className="w-5 h-5 text-[#E8A43A]" />
            <h2 className="text-xl font-bold text-[#0B1B2F]">전체 혜택</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-stone-100 hover:shadow-md transition-shadow flex gap-5"
              >
                <div
                  className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: event.badgeColor }}
                >
                  {event.badge}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#0B1B2F] mb-1 text-sm">{event.title}</h3>
                  <p className="text-xs text-stone-500 mb-3 line-clamp-2">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-stone-400">
                      <Clock className="w-3 h-3" />
                      {event.endDate}
                    </div>
                    <Link href="/courses" className="text-xs font-semibold text-[#E8A43A] hover:text-[#d4932a] transition-colors">
                      자세히 →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
