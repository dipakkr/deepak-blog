export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: 'bwl6gsbo',
  useCdn: process.env.NODE_ENV !== 'production',
  apiVersion: '2021-03-25'
};
