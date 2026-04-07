'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Star, ThumbsUp, MessageSquare } from 'lucide-react'
import { useCommunity } from '@/state/community'

const ratingDistribution = [
  { stars: 5, count: 1280, pct: 78 },
  { stars: 4, count: 310, pct: 19 },
  { stars: 3, count: 48, pct: 3 },
  { stars: 2, count: 0, pct: 0 },
  { stars: 1, count: 0, pct: 0 },
]

export default function ReviewsPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { reviews } = useCommunity((s) => ({ reviews: s.reviews }))

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <div className="bg-[#0B1B2F] text-white py-14">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-xs text-[#E8A43A] font-bold uppercase tracking-widest mb-3">Community</div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-7 h-7 text-[#E8A43A]" />
              <h1 className="text-3xl font-bold">수강 후기</h1>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 mb-10 border border-stone-100"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Overall */}
            <div className="text-center">
              <div className="text-7xl font-bold text-[#0B1B2F] mb-3">4.9</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-[#E8A43A] fill-[#E8A43A]" />
                ))}
              </div>
              <div className="text-sm text-stone-500">1,638개 평점</div>
            </div>

            {/* Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map(({ stars, count, pct }) => (
                <div key={stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5 w-14 shrink-0">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-[#E8A43A] fill-[#E8A43A]" />
                    ))}
                  </div>
                  <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#E8A43A] rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-stone-500 w-12 text-right shrink-0">{count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-stone-100"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-[#E8A43A] fill-[#E8A43A]" />
                  ))}
                </div>
                <span className="text-xs px-2 py-0.5 bg-stone-100 text-stone-500 rounded-full">
                  {review.course.length > 16 ? review.course.slice(0, 16) + '...' : review.course}
                </span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">{review.comment}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={review.avatar} alt={review.name} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-[#0B1B2F]">{review.name}</div>
                    <div className="text-xs text-stone-400">{review.date}</div>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-xs text-stone-400 hover:text-[#E8A43A] transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  {review.helpful}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
