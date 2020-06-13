import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import { withStore } from 'freenit'
// import styles from './styles'


class UploadPhoto extends React.Component {
  upload = () => {
    console.log('uploading')
  }

  render() {
    return (
      <Dialog
        onClose={this.props.onClose}
        open={this.props.open}
      >
        <DialogTitle>Upload images</DialogTitle>
        <DialogContent>
          Cvrc
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={this.upload}>
            Upload
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.props.onClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}


export default withStore(UploadPhoto)
