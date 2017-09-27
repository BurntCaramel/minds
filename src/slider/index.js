import nextFrame from 'react-organism/lib/nextFrame'

export const initial = () => ({
  loadedItems: null,
  currentIndex: 0,
  offsetFraction: 0
})

export const load = ({ items }, prevProps) => {
  if (!prevProps || items !== prevProps.items) {
    return { loadedItems: items }
  }
}

export const jumpPrevious = () => ({ currentIndex, loadedItems: { length } }) => ({
  currentIndex: (currentIndex - 1 + length) % length
})

export const jumpNext = () => ({ currentIndex, loadedItems: { length } }) => ({
  currentIndex: (currentIndex + 1) % length
})

export const offsetTo = (props, newOffset) => ({
  loadedItems: { length }
}) => {
  const offsetFraction = (newOffset + length) % length
  const currentIndex = Math.floor(offsetFraction + 0.5)
  return { offsetFraction, currentIndex }
}

export const next = ({ handlers: { offsetTo } }) => async ({ offsetFraction }) => {
  let offset = offsetFraction
  let change = 0
  do {
    change = Math.min(1.0, change + 0.07)
    await nextFrame()
    await offsetTo(offset + change)
  } while (change < 1.0)

  await offsetTo(Math.floor(offset + 0.5) + 1)
}

export const previous = ({ handlers: { offsetTo } }) => async ({ offsetFraction }) => {
  let offset = offsetFraction
  let change = 0
  do {
    change = Math.min(1.0, change + 0.07)
    await nextFrame()
    await offsetTo(offset - change)
  } while (change < 1.0)

  await offsetTo(Math.floor(offset + 0.5) - 1)
}
