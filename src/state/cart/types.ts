import type { Course } from '@/state/course'

export type CartItem = Course & { addedAt: string }

export type CartState = {
  items: CartItem[]
  wishlist: string[]
}

export type CartActions = {
  addToCart: (course: Course) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  toggleWishlist: (id: string) => void
  isInCart: (id: string) => boolean
  isWishlisted: (id: string) => boolean
  getTotalPrice: () => number
}
