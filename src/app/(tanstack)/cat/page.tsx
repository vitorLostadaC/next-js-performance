'use client'

import { getCatDataQueryOptions } from '@/requests/config'
import { useQuery } from '@tanstack/react-query'

export default function CatPage() {
  const { data, isPending } = useQuery(getCatDataQueryOptions)

  return (
    <div>
      <p>query result: {data}</p>
      <p style={{ color: isPending ? 'red' : 'green' }}>
        is loading: {isPending ? 'true' : 'false'}
      </p>
    </div>
  )
}
