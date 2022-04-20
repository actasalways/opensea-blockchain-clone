import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '<projectId>',
  dataset: '<dataset name>',
  apiVersion: '2022-04-20',
  token:
    '<Token API>',
  useCdn: false,
})