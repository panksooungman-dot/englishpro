import { createStateFactory } from '@/lib/state'
import type { CourseState, CourseActions } from './types'
import { createLoadActions } from './actions/load'
import { mockCourses, mockTestimonials, mockInstructor } from '@/api/_mock/courses'

export const [useCourse, useCourseContext] = createStateFactory<CourseState, CourseActions>({
  initialize: () => ({
    items: mockCourses,
    current: null,
    testimonials: mockTestimonials,
    instructor: mockInstructor,
    isLoading: false,
  }),

  actions: (set, get, context) => ({
    ...createLoadActions(set, get, context),
  }),
})
