export const initial = () => ({
  data: null
})

export function * load(
  { url },
  prevProps
) {
  if (!prevProps || url !== prevProps.url) {
    yield { loading: true }
    yield fetch(url).then(res => res.json())
    yield { loading: false }
  }
}
