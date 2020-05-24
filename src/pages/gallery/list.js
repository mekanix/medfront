import React from 'react'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import Template from 'templates/default/detail'
import styles from './styles'


class GalleryList extends React.Component {
  render() {
    return (
      <Template>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", columnGap: 10, rowGap: 10 }}>
          <Link to="/gallery/album1">
            <Card raised>
              <CardActionArea>
                <CardMedia
                  image="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                  style={styles.album}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Album 1
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="/gallery/album2">
            <Card raised>
              <CardActionArea>
                <CardMedia
                  image="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                  style={styles.album}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Album 2
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="/gallery/album3">
            <Card raised>
              <CardActionArea>
                <CardMedia
                  image="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                  style={styles.album}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Album 3
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="/gallery/album4">
            <Card raised>
              <CardActionArea>
                <CardMedia
                  image="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                  style={styles.album}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Album 4
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="/gallery/album5">
            <Card raised>
              <CardActionArea>
                <CardMedia
                  image="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                  style={styles.album}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Album 5
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      </Template>
    )
  }
}


export default GalleryList
