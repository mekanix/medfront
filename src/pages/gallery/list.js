import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
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
import { Link } from 'react-router-dom'
import Template from 'templates/default/detail'
import styles from './styles'


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
    console.log('here')
    this.closeCreateAlbum()
    this.setState({ name: '' })
  }

  albumChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    const { auth, gallery } = this.props.store
    const albumsView = gallery.list.data.map(album => (
      <Link to={`/gallery/${album.name}`} key={album.name}>
        <Card raised>
          <CardActionArea>
            <CardMedia
              image="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
              style={styles.album}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {album.name}
              </Typography>
            </CardContent>
          </CardActionArea>
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
