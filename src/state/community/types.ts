import type { Notice, FaqItem, Review, Event } from './data'

export type { Notice, FaqItem, Review, Event }

export type CommunityState = {
  notices: Notice[]
  faqs: FaqItem[]
  reviews: Review[]
  events: Event[]
}

export type CommunityActions = Record<string, never>
