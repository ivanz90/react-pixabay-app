import React from 'react'
import { Card, CardImg } from './styles'

const GalleryCard = ({ webformatURL, previewURL }) => {
  return ( 
    <Card>
      <div>
        <CardImg src={webformatURL} />
      </div>
    </Card>
  )
}
 
export default React.memo(GalleryCard)