import { useCallback, useState, useEffect } from 'react'

interface Picture {
  description?: string
  alt_description?: string
  urls: {
    full: string
    regular: string
    small: string
    thumb: string
  }
  user: {
    first_name?: string
    last_name?: string
    username: string
  }
}

const useContent = () => {
  const [content, setContent] = useState([] as Picture[])
  const [loading, setLoading] = useState(false)

  const fetchContent = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(
        'https://api.unsplash.com/search/photos?query=featured&per_page=16&page=1&orientation=landscape',
        {
          headers: {
            Authorization: `Client-ID ${process.env['REACT_APP_UNSPLASH_KEY']}`,
          },
        },
      )
      if (!res.ok) throw new Error('server error')
      const data = await res.json()
      setContent(data.results as Picture[])
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
