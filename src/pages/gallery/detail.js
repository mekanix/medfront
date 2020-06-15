import React from 'react'
import {
  Fab,
} from '@material-ui/core'
import { withStore } from 'freenit'
import AddIcon from '@material-ui/icons/Add'

import Template from 'templates/default/detail'
import PhotoViewer from 'components/photo-viewer'
import UploadPhoto from 'components/upload-photo'

import styles from './styles'


const images = [
  { imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60' },
  { imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60' },
  { imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80' },
  { imgPath: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60' },
  { imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60' },
]


class GalleryDetail extends React.Component {
  state = {
    upload: false,
    view: false,
  }

  openViewer = (step) => () => {
    this.props.store.gallery.step(step)
    this.setState({ view: true })
  }

  closeViewer = () => {
    this.setState({ view: false })
  }

  showUpload = () => {
    this.setState({ upload: true })
  }

  hideUpload = () => {
    this.setState({ upload: false })
  }

  render() {
    const { auth } = this.props.store
    const uploadButton = auth.detail.ok
      ? (
        <Fab color="primary" onClick={this.showUpload} style={styles.add}>
          <AddIcon />
        </Fab>
      ) : null
    const imagesView = images.map((img, step) => (
      <div
        key={img.imgPath}
        onClick={this.openViewer(step)}
        style={{ ...styles.image, backgroundImage: `url("${img.imgPath}")` }}
      />
    ))
    return (
      <Template>
        {uploadButton}
        <div style={styles.grid}>
          {imagesView}
        </div>
        <UploadPhoto open={this.state.upload} onClose={this.hideUpload} />
        <PhotoViewer
          images={images}
          open={this.state.view}
          onClose={this.closeViewer}
        />
      </Template>
    )
  }
}


export default withStore(GalleryDetail)
