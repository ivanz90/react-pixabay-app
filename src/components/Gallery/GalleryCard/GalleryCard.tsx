import React from 'react'
import { Card, CardImg } from './styles'

const GalleryCard: React.FC<{ webformatURL: string }> = ({ webformatURL }) => {
  return ( 
    <Card>
      <div>
        <CardImg src={webformatURL} />
      </div>
    </Card>
  )
}
 
export default React.memo(GalleryCard)