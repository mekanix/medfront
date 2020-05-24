import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import {
  NoPage,
  rest,
} from 'freenit'
import Gallery from 'pages/gallery'
import Landing from 'pages/landing'


const API_ROOT = '/api/v0'
window.rest = rest(API_ROOT)
window.rest.API_ROOT = API_ROOT


const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing.detail} />
      <Route exact path="/gallery" component={Gallery.detail} />
      <Route path="*" component={NoPage.detail} />
    </Switch>
  )
}


export default Routing
