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

export function * next() {
  let stop = false
  do {
    yield ({
      offsetFraction,
      loadedItems: { length }
    }) => {
      let newOffset = (offsetFraction + 0.06)
      stop = Math.floor(newOffset) > Math.floor(offsetFraction)
      if (stop) {
        newOffset = Math.floor(newOffset)
      }
      newOffset = (newOffset + length) % length
      return { offsetFraction: newOffset }
    }
  } while (!stop)
}

export function * previous({ offsetFraction }) {
  let stop = false
  do {
    yield ({
      offsetFraction,
      loadedItems: { length }
    }) => {
      let newOffset = (offsetFraction - 0.06)
      stop = Math.ceil(newOffset) < Math.ceil(offsetFraction)
      if (stop) {
        newOffset = Math.ceil(newOffset)
      }
      newOffset = (newOffset + length) % length
      return { offsetFraction: newOffset }
    }
  } while (!stop)
}
