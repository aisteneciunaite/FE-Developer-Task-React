import { useCallback, useState } from 'react'
import unsplash from '../../unsplash'
import { Basic } from 'unsplash-js/dist/methods/photos/types'

const useContent = () => {
  const [content, setContent] = useState([] as Basic[])
  const [loading, setLoading] = useState(false)
  const [hasNextPage, setHasNextPage] = useState(true)

  const fetchContent = useCallback(async (page) => {
    setLoading(true)
    setTimeout(async () => {
      try {
        const res = await unsplash.search.getPhotos({
          query: 'featured',
          page,
          perPage: 30,
          orientation: 'landscape',
        })
        if (res.status !== 200 || !res.response)
          throw new Error('response error')
        setContent((content) => [...content, ...res.response.results])
        setHasNextPage(res.response.total_pages > page)
      } catch (error) {
        setHasNextPage(false)
        alert(error.message)
      } finally {
        setLoading(false)
      }
    }, 500)
  }, [])

  return { content, loading, hasNextPage, fetchContent }
}

export default useContent
