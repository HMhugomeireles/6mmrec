import type { SanityClient } from 'next-sanity'
import {createClient, type QueryParams} from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// export function getClient(previewToken?: string): SanityClient {
//   return createClient({
//     projectId,
//     dataset,
//     apiVersion,
//     useCdn: !previewToken,
//     perspective: previewToken ? 'previewDrafts' : 'published',
//     stega: {
//       enabled: previewToken ? true : false,
//       studioUrl: '/studio',
//     },
//     token: previewToken
//   })
// }

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: string
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  })
}