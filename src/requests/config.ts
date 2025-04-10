import { queryOptions } from '@tanstack/react-query'
import { getData } from './get-data'

export const getDogDataQueryOptions = queryOptions({
  queryKey: ['dog'],
  queryFn: () => getData('dog')
})

export const getCatDataQueryOptions = queryOptions({
  queryKey: ['cat'],
  queryFn: () => getData('cat')
})
