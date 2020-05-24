import React from 'react'
import {
  Paper,
  Card,
  CardHeader,
  CardMedia,
} from '@material-ui/core'
import Template from 'templates/default/detail'
import styles from './styles'


class Page extends React.Component {
  render() {
    return (
      <Template style={{}}>
        <div style={styles.root}>
          <div style={styles.message.main}>
            Direktno iz košnice
          </div>
          <div style={styles.message.sub}>
            Otkrite prirodna svojstva meda
          </div>
          <a href="#narucivanje">
            <Paper style={styles.order}>
              Naručite
            </Paper>
          </a>
        </div>
        <div style={styles.section}>
          <div style={styles.products}>
            Proizvodi
          </div>
          <div style={styles.cards}>
            <Card style={styles.card}>
              <CardHeader
                title="Med"
                subheader="livadski, bagremov, prirodni, vrcani ..."
              />
              <CardMedia
                image="https://as2.ftcdn.net/jpg/01/40/91/57/500_F_140915723_DPQA5uFOB4K23w0ljgcE8P0e4jSVIt1M.jpg"
                style={styles.media}
              />
            </Card>
            <Card style={styles.card}>
              <CardHeader
                title="Matična mleč"
                subheader="zdravlje na prvom mestu"
              />
              <CardMedia
                image="https://as2.ftcdn.net/jpg/01/40/91/57/500_F_140915723_DPQA5uFOB4K23w0ljgcE8P0e4jSVIt1M.jpg"
                style={styles.media}
              />
            </Card>
            <Card style={styles.card}>
              <CardHeader
                title="Propolis"
                subheader="samo najbolje što pčela daje"
              />
              <CardMedia
                image="https://as2.ftcdn.net/jpg/01/40/91/57/500_F_140915723_DPQA5uFOB4K23w0ljgcE8P0e4jSVIt1M.jpg"
                style={styles.media}
              />
            </Card>
          </div>
          <div style={styles.subtitle}>
            Sve je proizvedeno sa najvećom pažnjom
          </div>
          <div style={styles.center}>
            <a href="#narucivanje">
              <Paper style={styles.order}>
                naručite
              </Paper>
            </a>
          </div>
        </div>
        <div style={styles.info}>
          <div style={styles.info.title} id="narucivanje">
            Naručivanje
          </div>
          <p>
            Poručivanje putem telefona
          </p>
        </div>
      </Template>
    )
  }
}


export default Page
