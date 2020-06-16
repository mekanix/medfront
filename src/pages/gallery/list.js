import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  TextField,
  Typography,
} from '@material-ui/core'
import { withStore } from 'freenit'

import AddIcon from '@material-ui/icons/Add'
import AlbumIcon from '@material-ui/icons/LinkedCamera'
import Template from 'templates/default/detail'
import getStyles from './styles'


class GalleryList extends React.Component {
  state = {
    name: '',
    show: false,
  }

  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { gallery, notification } = this.props.store
    const response = await gallery.fetchAll()
    if (!response.ok) {
      notification.show('Failed fetching album list')
    }
  }

  showCreateAlbum = () => {
    this.setState({ show: true })
  }

  closeCreateAlbum = () => {
    this.setState({ show: false })
  }

  createAlbum = async () => {
    const { gallery, notification } = this.props.store
    const response = await gallery.create({ name: this.state.name })
    if (!response.ok) {
      notification.show('Error creating album')
    }
    this.closeCreateAlbum()
    this.setState({ name: '' })
  }

  albumChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    const { auth, gallery, resolution } = this.props.store
    const styles = getStyles(resolution.detail)
    const albumsView = gallery.list.data.map(album => (
      <Link to={`/gallery/${album.name}`} key={album.name}>
        <Card raised>
          <CardActionArea style={styles.album}>
            <AlbumIcon style={styles.album.icon} />
          </CardActionArea>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {album.name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    ))
    const createAlbum = auth.detail.ok
      ? (
        <Fab color="primary" onClick={this.showCreateAlbum} style={styles.add}>
          <AddIcon />
        </Fab>
      ) : null
    return (
      <Template>
        <Dialog onClose={this.closeCreateAlbum} open={this.state.show}>
          <DialogTitle>Create new album</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              onChange={this.albumChange}
              value={this.state.name}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.createAlbum}
            >
              Create
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.closeCreateAlbum}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        {createAlbum}
        <div style={styles.content}>
          {albumsView}
        </div>
      </Template>
    )
  }
}


export default withStore(GalleryList)
