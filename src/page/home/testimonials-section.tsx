'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import { useCourse } from '@/state/course'

export function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { testimonials } = useCourse((s) => ({ testimonials: s.testimonials }))

  return (
    <section className="py-24 bg-[#F9F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold text-[#E8A43A] uppercase tracking-widest mb-3">
            Reviews
          </div>
          <h2 className="text-4xl font-bold text-[#0B1B2F] mb-3">수강생 후기</h2>
          <p className="text-stone-500">실제 수강생들의 생생한 변화를 확인하세요</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-7 rounded-2xl relative"
            >
              <Quote className="w-8 h-8 text-[#E8A43A]/30 absolute top-5 right-6" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#E8A43A] fill-[#E8A43A]" />
                ))}
              </div>

              <p className="text-stone-700 leading-relaxed text-sm mb-5">{review.comment}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm text-[#0B1B2F]">{review.name}</div>
                    <div className="text-xs text-stone-500">{review.job}</div>
                  </div>
                </div>
                <div className="text-xs px-2.5 py-1 bg-stone-100 text-stone-600 rounded-full">
                  {review.course.length > 18 ? review.course.slice(0, 18) + '...' : review.course}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl font-bold text-[#0B1B2F]">4.9</div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-[#E8A43A] fill-[#E8A43A]" />
                ))}
              </div>
              <div className="text-xs text-stone-500">1,980+ 수강생 평점</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
