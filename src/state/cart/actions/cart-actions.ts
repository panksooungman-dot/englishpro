import type { StateSetFn, StateGetFn, StateContext } from '@/lib/state/types'
import type { CartState, CartActions } from '../types'
import type { Course } from '@/state/course'

type Actions = Omit<CartActions, 'isInCart' | 'isWishlisted' | 'getTotalPrice'>

export const createCartActions = (
  set: StateSetFn<CartState>,
  get: StateGetFn<CartState>,
  _context: StateContext
): Actions => ({
  addToCart: (course: Course) => {
    set((state) => {
      const exists = state.items.some((item) => item.id === course.id)
      if (!exists) {
        state.items.push({ ...course, addedAt: new Date().toISOString() })
      }
    })
  },

  removeFromCart: (id: string) => {
    set((state) => {
      state.items = state.items.filter((item) => item.id !== id)
    })
  },

  clearCart: () => {
    set((state) => {
      state.items = []
    })
  },

  toggleWishlist: (id: string) => {
    set((state) => {
      const idx = state.wishlist.indexOf(id)
      if (idx >= 0) {
        state.wishlist.splice(idx, 1)
      } else {
        state.wishlist.push(id)
      }
    })
  },
})

export const createCartReadActions = (
  _set: StateSetFn<CartState>,
  get: StateGetFn<CartState>,
  _context: StateContext
) => ({
  isInCart: (id: string) => get().items.some((item) => item.id === id),
  isWishlisted: (id: string) => get().wishlist.includes(id),
  getTotalPrice: () => get().items.reduce((sum, item) => sum + item.price, 0),
})
