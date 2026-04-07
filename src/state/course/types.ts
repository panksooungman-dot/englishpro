import type { Course, Testimonial, Instructor } from '@/api/_mock/courses'

export type { Course, Testimonial, Instructor }

export type CourseState = {
  items: Course[]
  current: Course | null
  testimonials: Testimonial[]
  instructor: Instructor | null
  isLoading: boolean
}

export type CourseActions = {
  loadAll: () => void
  loadOne: (id: string) => void
  loadTestimonials: () => void
  loadInstructor: () => void
}
