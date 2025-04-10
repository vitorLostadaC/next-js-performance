'use client'

import { getDogDataQueryOptions } from '@/requests/config'
import { useQuery } from '@tanstack/react-query'

export default function DogPage() {
  'use client'

  const { data, isPending } = useQuery(getDogDataQueryOptions)

  return (
    <div>
      <p>query result: {data}</p>
      <p style={{ color: isPending ? 'red' : 'green' }}>
        is loading: {isPending ? 'true' : 'false'}
      </p>
    </div>
  )
}
