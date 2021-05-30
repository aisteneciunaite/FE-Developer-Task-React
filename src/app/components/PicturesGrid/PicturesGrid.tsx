import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import PictureCard from '../PictureCard'
import Loader from '../Loader'
import useContent from '../../hooks/useContent'
import './PicturesGrid.scss'

export default function PicturesGrid() {
  const {
    content,
    hasNextPage,
    fetchContent,
    loading,
    isFavoriteById,
    toggleFavoriteById,
  } = useContent()

  const loadMore = async () => {
    !loading && (await fetchContent())
  }

  return (
    <InfiniteScroll
      className="PicturesGrid"
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasNextPage}
      initialLoad={true}
      loader={<Loader key={0} className="PicturesGrid__loader" />}
    >
      {content.map((i) => {
        const { user } = i
        const author = `${user.first_name} ${user?.last_name || ''}`
        return (
          <PictureCard
            url={i.urls.small}
            author={author}
            alt_text={i.alt_description}
            name={i.description || i.alt_description}
            key={i.id}
            favorite={isFavoriteById(i.id)}
            toggleFavorite={() => toggleFavoriteById(i.id)}
            link={i.user.links.html}
          />
        )
      })}
    </InfiniteScroll>
  )
}
