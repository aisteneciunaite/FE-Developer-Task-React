import { ChangeEvent, useCallback, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import content from '../../content'

const useSearch = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const search = bindActionCreators(content.actions.search, dispatch)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (value !== '') search(value)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [search, value])

  return { value, handleChange }
}

export default useSearch
