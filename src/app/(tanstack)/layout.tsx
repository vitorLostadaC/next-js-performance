import {
  getCatDataQueryOptions,
  getDogDataQueryOptions
} from '@/requests/config'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

export const dynamic = 'force-dynamic'

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  await Promise.all([
    queryClient.prefetchQuery(getDogDataQueryOptions),
    queryClient.prefetchQuery(getCatDataQueryOptions)
  ])

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  )
}
