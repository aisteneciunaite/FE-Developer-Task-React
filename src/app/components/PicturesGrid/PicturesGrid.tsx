import React from 'react'
import PictureCard from '../PictureCard'
import './PicturesGrid.scss'
import useContent from '../../hooks/useContent'
import InfiniteScroll from 'react-infinite-scroller'

export default function PicturesGrid() {
  const { content, hasNextPage, fetchContent, loading } = useContent()

  const loadMore = async (page: number) => {
    !loading && (await fetchContent(page))
  }

  return (
    <InfiniteScroll
      className="PicturesGrid"
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasNextPage}
      initialLoad={true}
      // TODO add nicer loader component
      loader={<div key={0}>Loading ...</div>}
    >
      {content.map((i, index) => {
        const { user } = i
        const author = `${user?.first_name || ''} ${user?.last_name || ''}`
        return (
          <PictureCard
            url={i.urls.small}
            author={author}
            alt_text={i.alt_description}
            name={i.description || i.alt_description}
            key={index}
          />
        )
      })}
    </InfiniteScroll>
  )
}
