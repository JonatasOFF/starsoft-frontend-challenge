import {
  productsReducer,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  resetPagination,
  nextPage,
  addProducts,
  addMetadata,
  addToDetail,
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
    productDetail: {
      id: 0,
      name: '',
      description: '',
      price: 0,
      image: '',
      createdAt: '',
    },
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

  it('should add products to the state without duplicates', () => {
    const product: GetProductsAPI['data'][number] = {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: '',
    }
    const product2: GetProductsAPI['data'][number] = {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: '',
    }
    const action = addProducts([product, product2])
    const newState = productsReducer(initialState, action)

    expect(newState.items).toEqual([product, product2])
  })

  it('should not add duplicate products to the state', () => {
    const product: GetProductsAPI['data'][number] = {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: '',
    }
  
    const firstProduct = addProducts([product])
    const secondProduct = addProducts([product])
    
    productsReducer(initialState, firstProduct)

    const newState = productsReducer(initialState, secondProduct)
  
    expect(newState.items).toEqual([product]) 
  })
  

  it('should set product detail', () => {
    const product: GetProductsAPI['data'][number] = {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: '',
    }

    const action = addToDetail(product)
    const newState = productsReducer(initialState, action)

    expect(newState.productDetail).toEqual(product)
  })

  it('should add metadata', () => {
    const metadata = {
      count: 10,
      hasNextPage: true,
      hasPreviousPage: false,
      limit: 10,
      page: 1,
      pageCount: 1,
    }

    const action = addMetadata(metadata)
    const newState = productsReducer(initialState, action)

    expect(newState.metadata).toEqual(metadata)
  })
})
