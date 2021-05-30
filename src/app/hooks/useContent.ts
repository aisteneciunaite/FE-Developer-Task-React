import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import content from '../../content'

const useContent = () => {
  const items = useSelector(content.selectors.items)
  const loading = useSelector(content.selectors.loading)
  const hasNextPage = useSelector(content.selectors.hasNextPage)
  const favorites = useSelector(content.selectors.favorites)
  const dispatch = useDispatch()

  const isFavoriteById = (id: string) => favorites.includes(id)

  const fetchContent = bindActionCreators(
    content.actions.fetchContent,
    dispatch,
  )

  const toggleFavoriteById = bindActionCreators(
    content.actions.toggleFavoriteById,
    dispatch,
  )

  return {
    content: items,
    loading,
    hasNextPage,
    fetchContent,
    isFavoriteById,
    toggleFavoriteById,
  }
}

export default useContent
