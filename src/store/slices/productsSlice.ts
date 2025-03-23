import { GetProductsAPI, Product } from '@/models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = GetProductsAPI['data'][number] & { quantity: number }

function totalCalculed(cartItems: Record<string, CartItem>) {
  let total = Object.values(cartItems).reduce(
    (total: number, item) => total + (item.price || 1) * item.quantity,
    0
  )

  return total
}
  
interface ProductsState {
  items: GetProductsAPI['data']
  metadata: GetProductsAPI['metadata']
  cartItems: Record<string, CartItem>
  total: number
  page: number
  limit: number
}

const initialState: ProductsState = {
  items: [],
  cartItems: {},
  total: 0,
  metadata: {
    count: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    limit: 0,
    page: 0,
    pageCount: 0,
  },
  page: 1,
  limit: 10,
}

const productsSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<GetProductsAPI['data']>) => {
      state.items = [...state.items, ...action.payload]
    },
    addMetadata: (state, action: PayloadAction<GetProductsAPI['metadata']>) => {
      state.metadata = action.payload
    },
    nextPage: (state) => {
      state.page += 1
    },
    resetPagination: (state) => {
      state.page = 1
    },
    addToCart: (
      state,
      action: PayloadAction<GetProductsAPI['data'][number]>
    ) => {
      const product = action.payload
      if (!!state.cartItems[product.id as number]) {
        state.cartItems[product.id as number].quantity += 1
      } else {
        state.cartItems[product.id as number] = { ...product, quantity: 1 }
      }
      state.total = totalCalculed(state.cartItems)
    },
    removeFromCart: (state, action: PayloadAction<number | undefined>) => {
      if (!action.payload) return
      delete state.cartItems[action.payload]

      state.total = totalCalculed(state.cartItems)
    },

    incrementQuantity: (state, action: PayloadAction<number | undefined>) => {
      const id = action.payload

      if (!id) return

      const item = state.cartItems[id]

      if (item && item.quantity < 99) {
        state.cartItems[id].quantity += 1
      }

      state.total = totalCalculed(state.cartItems)
    },
    decrementQuantity: (state, action: PayloadAction<number | undefined>) => {
      const id = action.payload

      if (!id) return

      const item = state.cartItems[id]

      if (item && item.quantity > 1) {
        state.cartItems[id].quantity -= 1
      }

      state.total = totalCalculed(state.cartItems)
    },
  },
})

export const {
  nextPage,
  resetPagination,
  addProducts,
  addMetadata,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = productsSlice.actions
export const productsReducer = productsSlice.reducer
