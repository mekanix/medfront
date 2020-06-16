import React from 'react'
import {
  Fab,
} from '@material-ui/core'
import { withStore } from 'freenit'
import AddIcon from '@material-ui/icons/Add'

import Template from 'templates/default/detail'
import PhotoViewer from 'components/photo-viewer'
import UploadPhoto from 'components/upload-photo'

import getStyles from './styles'


class GalleryDetail extends React.Component {
  state = {
    upload: false,
    view: false,
  }

  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { album } = this.props.match.params
    const { gallery, notification } = this.props.store
    const response = await gallery.fetch(album)
    if (!response.ok) {
      notification.show('Failed fetching images')
    }
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

  addUploaded = (files) => {
    const { gallery } = this.props.store
    const data = [
      ...gallery.detail.files.data,
      ...files,
    ]
    gallery.setDetail({
      ...gallery.detail,
      files: {
        ...gallery.detail.files,
        data,
      }
    })
  }

  render() {
    const { album } = this.props.match.params
    const { auth, gallery, resolution } = this.props.store
    const { prefix, files } = gallery.detail
    const styles = getStyles(resolution.detail)
    const uploadButton = auth.detail.ok
      ? (
        <Fab color="primary" onClick={this.showUpload} style={styles.add}>
          <AddIcon />
        </Fab>
      ) : null
    const images = files.data.map(picture => ({
      src: picture.src
        ? picture.src
        : `${prefix}/${album}/${picture.filename}`,
      height: styles.picture.height,
      width: styles.picture.width,
    }))
    const imagesView = images.map((img, step) => (
      <div
        key={img.src}
        onClick={this.openViewer(step)}
        style={{ ...styles.image, backgroundImage: `url("${img.src}")` }}
      />
    ))
    return (
      <Template>
        {uploadButton}
        <div style={styles.grid}>
          {imagesView}
        </div>
        <UploadPhoto
          open={this.state.upload}
          onClose={this.hideUpload}
          onSuccess={this.addUploaded}
          target={`${window.rest.API_ROOT}/gallery/album/${album}`}
        />
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
