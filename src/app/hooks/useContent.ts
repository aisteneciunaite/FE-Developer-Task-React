import { useCallback, useState, useEffect } from 'react'
import unsplash from '../../unsplash'
import { Basic } from 'unsplash-js/dist/methods/photos/types'

const useContent = () => {
  const [content, setContent] = useState([] as Basic[])
  const [loading, setLoading] = useState(false)

  const fetchContent = useCallback(async () => {
    setLoading(true)
    try {
      const res = await unsplash.search.getPhotos({
        query: 'featured',
        page: 1,
        perPage: 10,
        orientation: 'landscape',
      })
      if (res.status !== 200) throw new Error('server error')
      setContent(res.response?.results || [])
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchContent()
  }, [fetchContent])

  return { content, loading }
}

export default useContent
