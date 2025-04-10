'use server'

export async function getData(type: 'dog' | 'cat') {
  await new Promise((resolve) => setTimeout(resolve, 5 * 1000))

  if (type === 'dog') return 'dog'

  return 'cat'
}
