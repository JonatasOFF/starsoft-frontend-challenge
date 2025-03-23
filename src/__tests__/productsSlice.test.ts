// __tests__/productsSlice.test.ts
import {
  productsReducer,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  resetPagination,
  nextPage,
} from '@/store'
import { GetProductsAPI } from '@/models'

describe('productsSlice', () => {
  const initialState = {
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

  it('should return the initial state when passed an empty action', () => {
    expect(productsReducer(undefined, { type: '' })).toEqual(initialState)
  })

  it('should add a product to the cart', () => {
    const product: GetProductsAPI['data'][number] = {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: '',
    }
    const action = addToCart(product)
    const newState = productsReducer(initialState, action)

    expect(newState.cartItems).toEqual({
      1: { ...product, quantity: 1 },
    })
    expect(newState.total).toBe(100)
  })

  it('should remove a product from the cart', () => {
    const product: GetProductsAPI['data'][number] = {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: '',
    }
    const stateWithProduct = {
      ...initialState,
      cartItems: {
        1: { ...product, quantity: 1 },
      },
      total: 100,
    }

    const action = removeFromCart(1)
    const newState = productsReducer(stateWithProduct, action)

    expect(newState.cartItems).toEqual({})
    expect(newState.total).toBe(0)
  })

  it('should increment quantity of an item in the cart', () => {
    const product: GetProductsAPI['data'][number] = {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: '',
    }
    const stateWithProduct = {
      ...initialState,
      cartItems: {
        1: { ...product, quantity: 1 },
      },
      total: 100,
    }

    const action = incrementQuantity(1)
    const newState = productsReducer(stateWithProduct, action)

    expect(newState.cartItems[1].quantity).toBe(2)
    expect(newState.total).toBe(200)
  })

  it('should decrement quantity of an item in the cart', () => {
    const product: GetProductsAPI['data'][number] = {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: '',
    }
    const stateWithProduct = {
      ...initialState,
      cartItems: {
        1: { ...product, quantity: 2 },
      },
      total: 200,
    }

    const action = decrementQuantity(1)
    const newState = productsReducer(stateWithProduct, action)

    expect(newState.cartItems[1].quantity).toBe(1)
    expect(newState.total).toBe(100)
  })

  it('should reset pagination state', () => {
    const stateWithPage = {
      ...initialState,
      page: 5,
    }

    const action = resetPagination()
    const newState = productsReducer(stateWithPage, action)

    expect(newState.page).toBe(1)
  })

  it('should increment the page', () => {
    const stateWithPage = {
      ...initialState,
      page: 1,
    }

    const action = nextPage()
    const newState = productsReducer(stateWithPage, action)

    expect(newState.page).toBe(2)
  })
})
