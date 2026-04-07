import type { StateSetFn, StateGetFn, StateContext } from '@/lib/state/types'
import type { CourseState, CourseActions } from '../types'
import { mockCourses, mockTestimonials, mockInstructor } from '@/api/_mock/courses'

type LoadActions = Pick<CourseActions, 'loadAll' | 'loadOne' | 'loadTestimonials' | 'loadInstructor'>

export const createLoadActions = (
  set: StateSetFn<CourseState>,
  _get: StateGetFn<CourseState>,
  _context: StateContext
): LoadActions => ({
  loadAll: () => {
    set((state) => {
      state.items = mockCourses
    })
  },

  loadOne: (id: string) => {
    set((state) => {
      state.current = mockCourses.find((c) => c.id === id) ?? null
    })
  },

  loadTestimonials: () => {
    set((state) => {
      state.testimonials = mockTestimonials
    })
  },

  loadInstructor: () => {
    set((state) => {
      state.instructor = mockInstructor
    })
  },
})
