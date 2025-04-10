import { getDogDataQueryOptions } from '@/requests/config'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(getDogDataQueryOptions)

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  )
}
