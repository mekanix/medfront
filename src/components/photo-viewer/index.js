import React from 'react'
import {
  Button,
  Dialog,
  MobileStepper,
} from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import styles from './styles'


class PhotoViewer extends React.Component {
  state = {
    step: 0,
  }

  handleStep = (step) => {
    this.setState({ step })
  }

  prevPhoto = () => {
    if (this.state.step > 0) {
      this.setState({ step: this.state.step - 1 })
    }
  }

  nextPhoto = () => {
    if (this.state.step < this.props.images.length - 1) {
      this.setState({ step: this.state.step + 1 })
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
    const { step } = this.state
    const { images } = this.props
    return (
      <Dialog
        onClose={this.props.onClose}
        open={this.props.open}
        onKeyDown={this.handleKey}
        PaperProps={{ style: styles.dialog }}
      >
          <div style={styles.root}>
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
                <div key={index}>
                  {Math.abs(step - index) <= 2 ? (
                    <img style={styles.img} src={image.imgPath} alt={image.label} />
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
            <MobileStepper
              steps={images.length}
              position="static"
              variant="text"
              activeStep={step}
              nextButton={
                <Button size="small" onClick={this.nextPhoto} disabled={step === images.length - 1}>
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button size="small" onClick={this.prevPhoto} disabled={step === 0}>
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
            />
          </div>
      </Dialog>
    )
  }
}


export default PhotoViewer
