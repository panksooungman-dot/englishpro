'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Star, Users, BookOpen, Award } from 'lucide-react'
import { useCourse } from '@/state/course'

export function InstructorSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { instructor } = useCourse((s) => ({ instructor: s.instructor }))

  const stats = [
    { icon: Users, value: `${instructor?.students.toLocaleString() ?? ''}+`, label: '수강생' },
    { icon: BookOpen, value: `${instructor?.courses ?? ''}개`, label: '강의' },
    { icon: Star, value: instructor?.rating.toString() ?? '', label: '평점' },
    { icon: Award, value: 'TESOL', label: '공인 자격' },
  ]

  return (
    <section className="py-24 bg-[#0B1B2F] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
                  alt={instructor?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E8A43A]/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#E8A43A]/10 rounded-xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="text-xs font-bold text-[#E8A43A] uppercase tracking-widest mb-3">
              Instructor
            </div>
            <h2 className="text-4xl font-bold mb-2">{instructor?.name}</h2>
            <div className="text-[#E8A43A] font-medium mb-6">{instructor?.title}</div>

            <p className="text-stone-300 leading-relaxed mb-8 text-sm">
              {instructor?.bio}
            </p>

            {/* Specialties */}
            <div className="flex flex-wrap gap-2 mb-10">
              {instructor?.specialties.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-white/10 text-stone-300 text-xs rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl"
                >
                  <div className="w-9 h-9 bg-[#E8A43A]/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#E8A43A]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">{value}</div>
                    <div className="text-xs text-stone-400">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
