import { toQueryParams } from '@/common/utils/toQueryParams'
import { GetProductsAPI } from '@/models'

export type BaseQuery<T> = {
  queryKey: readonly unknown[]
}

export type QueryProducts = {
  page?: number
  limit?: number
}

export const getProducts = async ({
  queryKey,
}: BaseQuery<QueryProducts>): Promise<GetProductsAPI> => {
  const [_, query] = queryKey as [string, QueryProducts]

  const url = toQueryParams(query)

  const response = await fetch(
    `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products${url}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data as GetProductsAPI
}
