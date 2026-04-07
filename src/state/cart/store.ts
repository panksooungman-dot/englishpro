import { createStateFactory } from '@/lib/state'
import type { CartState, CartActions } from './types'
import { createCartActions, createCartReadActions } from './actions/cart-actions'

export const [useCart, useCartContext] = createStateFactory<CartState, CartActions>({
  initialize: () => ({
    items: [],
    wishlist: [],
  }),

  actions: (set, get, context) => ({
    ...createCartActions(set, get, context),
    ...createCartReadActions(set, get, context),
  }),
})
