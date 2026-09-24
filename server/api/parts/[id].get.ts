import { parts } from '#server/data/mock-parts'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  const part = parts.find((part) => part.id === id)

  if (!part) {
    throw createError({
      status: 404,
      statusText: 'Part not found',
    })
  }

  return part
})