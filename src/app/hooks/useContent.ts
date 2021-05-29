import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import content from '../../content'

const useContent = () => {
  const items = useSelector(content.selectors.items)
  const loading = useSelector(content.selectors.loading)
  const hasNextPage = useSelector(content.selectors.hasNextPage)

  const fetchContent = bindActionCreators(
    content.actions.fetchContent,
    useDispatch(),
  )

  return { content: items, loading, hasNextPage, fetchContent }
}

export default useContent
