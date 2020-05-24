import React from 'react'
import {
  Button,
  MobileStepper,
  Paper,
  Typography,
} from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import styles from './styles'
import Template from 'templates/default/detail'


const steps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
]


class SwipeableTextMobileStepper extends React.Component {
  state = {
    step: 0,
  }

  handleNext = () => {
    this.setState({ step: this.state.step + 1 })
  }

  handleBack = () => {
    this.setState({ step: this.state.step - 1 })
  }

  handleStep = (step) => {
    this.setState({ step })
  }

  render() {
    const { step } = this.state
    return (
      <Template>
        <div style={styles.root}>
          <Paper square elevation={0} style={styles.header}>
            <Typography>{steps[step].label}</Typography>
          </Paper>
          <SwipeableViews
            index={step}
            onChangeIndex={this.handleStep}
            enableMouseEvents
          >
            {steps.map((image, index) => (
              <div key={image.label}>
                {Math.abs(step - index) <= 2 ? (
                  <img style={styles.img} src={image.imgPath} alt={image.label} />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            steps={steps.length}
            position="static"
            variant="text"
            activeStep={step}
            nextButton={
              <Button size="small" onClick={this.handleNext} disabled={step === steps.length - 1}>
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBack} disabled={step === 0}>
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </div>
      </Template>
    )
  }
}



export default SwipeableTextMobileStepper
