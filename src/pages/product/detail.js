import React from 'react'
import {
  Button,
  ListItem,
  ListItemText,
  TextField,
} from '@material-ui/core'
import Template from 'templates/default/detail'


class Med extends React.Component {
  render() {
    return (
      <Template>
        <h1 style={{ marginLeft: 50 }}>
          Med
        </h1>
        <div style={{ display: "flex", alignItems: "start", justifyContent: "flex-start" }}>
          <img alt="med" src="https://www.thehealthjournals.com/wp-content/uploads/2019/04/honey-878x1024.jpg" style={{ height: 300 }} />
          <div style={{ display: "inline-flex", flexDirection: "column" }}>
            <ListItem>
              <ListItemText primary="100kn" secondary="Cena izražena je za kilogram" />
            </ListItem>
            <div style={{ padding: 20, flexDirection: "column", display: "flex" }}>
              <TextField type="number" label="Količina" />
              <Button variant="outlined" style={{ marginTop: 20 }}>
                Kupi
              </Button>
            </div>
          </div>
        </div>
      </Template>
    )
  }
}


export default Med
