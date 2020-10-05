import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { searchSelectors } from '../../redux/ducks/search'
import GalleryCard from './GalleryCard'
import Masonry from './Masonry/Masonry'
import { GalleryWrap, GallerySection } from './styles'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
}

const Gallery = () => {
  const hits = useSelector((state) => searchSelectors.selectHits(state), shallowEqual)

  return (
    <GallerySection>
      <GalleryWrap>
        {hits.length === '0' && <p>Nont found</p>}
        {hits.length > 0 && (
          <Masonry breakpointCols={breakpointColumnsObj} gutter={14}>
            {hits.map((hit) => {
              return <GalleryCard {...hit} key={hit.id} />
            })}
          </Masonry>
        )}
      </GalleryWrap>
    </GallerySection>
  )
}

export default Gallery