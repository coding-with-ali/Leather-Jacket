export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-06-21'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk6nbiAyYhxOeycH5QkGUFAOdIM4yVPvi7q6DfHvzOUetLzO3fvY7UTQ5awsNlQwxOXUUf7d4qVRM9JkwWt7Ke2yFScbcBwzYNtnEkFjqHaADloDxPvRfroeNfWhf52Ucytw3wnxfhnuynpRGa1ur8ofZos5LUWewcsuPNvcoXYtrLsAIlXS",
  'Missing environment variable: SANITY_API_TOKEN'
)



function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }


  return v
}
