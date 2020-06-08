import React from 'react'
import Template from 'templates/default/detail'

import PhotoViewer from 'components/photo-viewer'


const images = [
  { imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60' },
  { imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60' },
  { imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80' },
  { imgPath: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60' },
  { imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60' },
]


class GalleryDetail extends React.Component {
  state = {
    view: true,
  }

  openViewer = () => {
    this.setState({ view: true })
  }

  closeViewer = () => {
    this.setState({ view: false })
  }

  render() {
    return (
      <Template>
        <PhotoViewer
          images={images}
          open={this.state.view}
          onClose={this.closeViewer}
        />
      </Template>
    )
  }
}


export default GalleryDetail
