import { createStateFactory } from '@/lib/state'
import type { CommunityState, CommunityActions } from './types'
import { mockNotices, mockFaqs, mockCommunityReviews, mockEvents } from './data'

export const [useCommunity, useCommunityContext] = createStateFactory<
  CommunityState,
  CommunityActions
>({
  initialize: () => ({
    notices: mockNotices,
    faqs: mockFaqs,
    reviews: mockCommunityReviews,
    events: mockEvents,
  }),
  actions: () => ({}),
})
