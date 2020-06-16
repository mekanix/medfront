import React from 'react'
import {
  Button,
  Dialog,
  MobileStepper,
} from '@material-ui/core'
import { withStore } from 'freenit'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import getStyles from './styles'


class PhotoViewer extends React.Component {
  handleStep = (step) => {
    this.props.store.gallery.step(step)
  }

  prevPhoto = () => {
    const { gallery } = this.props.store
    if (gallery.detail.step > 0) {
      gallery.step(gallery.detail.step - 1)
    }
  }

  nextPhoto = () => {
    const { gallery } = this.props.store
    if (gallery.detail.step < this.props.images.length - 1) {
      gallery.step(gallery.detail.step + 1)
    }
  }

  handleKey = (event) => {
    if (event.key === 'ArrowRight') {
      this.nextPhoto()
    } else if (event.key === 'ArrowLeft') {
      this.prevPhoto()
    } else if (event.key === 'Escape') {
      this.props.onClose()
    }
  }

  render() {
    const { gallery, resolution } = this.props.store
    const { step } = gallery.detail
    const { images } = this.props
    const styles = getStyles(resolution.detail)
    return (
      <Dialog
        fullWidth
        maxWidth={false}
        onClose={this.props.onClose}
        open={this.props.open}
        onKeyDown={this.handleKey}
        PaperProps={{ style: styles.dialog }}
      >
          <div
            style={styles.close}
            onClick={this.props.onClose}
          >
            x
          </div>
          <SwipeableViews
            index={step}
            onChangeIndex={this.handleStep}
            enableMouseEvents
          >
            {images.map((image, index) => (
              <div style={styles.container}>
                <img
                  key={image.src}
                  src={image.src}
                  style={styles.img}
                  alt={image.label}
                />
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            steps={images.length}
            variant="text"
            activeStep={step}
            nextButton={
              <Button
                size="small"
                onClick={this.nextPhoto}
                disabled={step === images.length - 1}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={this.prevPhoto}
                disabled={step === 0}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
      </Dialog>
    )
  }
}


export default withStore(PhotoViewer)
