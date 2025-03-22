export type Product = Partial<{
  createdAt: string
  description: string
  id: number
  image: string
  name: string
  price: number
}>

export type Metadata = {
  count: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  limit: number
  page: number
  pageCount: number
}

export type GetProductsAPI = {
  data: Product[]
  metadata: Metadata
}
