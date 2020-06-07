import React from 'react'
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  Paper,
} from '@material-ui/core'
import {
  withStore,
} from 'freenit'
import Template from 'templates/default/detail'
import getStyles from './styles'


class Landing extends React.Component {
  render() {
    const { resolution } = this.props.store
    const styles = getStyles(resolution.detail)
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
        </div>
        <div style={styles.boro}>
          <div style={styles.boro.title}>Pčelar</div>
          <div style={styles.boro.content}>
            <Avatar variant="rounded" style={styles.boro.avatar} />
            <div style={styles.boro.info}>
              <p>
                Ratione vero beatae dolorem ipsam. Voluptas itaque mollitia
                perferendis sint culpa. Eius fuga praesentium voluptatem ipsum
                dolore at dolor.
              </p>
              <p>
                Quisquam quasi non illum natus. Laudantium eum maiores
                repellendus porro recusandae inventore quo voluptates. Eaque
                expedita illum expedita consectetur et sit.
              </p>
              <p>
                Odit nemo quis error molestiae enim dolorem sint. Perferendis
                laboriosam earum debitis soluta nobis temporibus in. Recusandae
                et deleniti quo recusandae.
              </p>
              <p>
                Praesentium fuga rerum eos. Eveniet maxime non enim omnis
                tenetur. Esse non labore dolor. Et vel facere commodi minima
                quibusdam rem corporis. Sunt error est quo id necessitatibus
                quam molestiae consectetur.
              </p>
              <p>
                Ut libero quis atque. Minus quis architecto cupiditate ratione
                blanditiis. Praesentium suscipit omnis quos sed. Impedit rerum
                placeat omnis dignissimos laboriosam.
              </p>
            </div>
          </div>
        </div>
        <div style={styles.about}>
          <div style={styles.about.title} id="narucivanje">
            Naručivanje
          </div>
          <div style={styles.about.content}>
            <div style={styles.about.info}>
              <div style={styles.about.right}>
                Adresa
              </div>
              <div>
                Trg Republike Hrvatske 3/21, Vukovar
              </div>
              <div style={styles.about.right}>
                Telefon
              </div>
              <div>
                098270803
              </div>
              <div />
              <div>
                098346178
              </div>
            </div>
            <div style={styles.about.map}>
              <iframe
                title="map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=18.999052047729496%2C45.34991911662757%2C19.00665879249573%2C45.352316772920815&amp;layer=mapnik&amp;marker=45.35111795747069%2C19.00285542011261"
              >
              </iframe>
              <br/>
              <small>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.openstreetmap.org/?mlat=45.35112&amp;mlon=19.00286#map=19/45.35112/19.00286"
                >
                  View Larger Map
                </a>
              </small>
            </div>
          </div>
        </div>
        <Paper style={styles.footer}>
          Registrovano 2005
        </Paper>
      </Template>
    )
  }
}


export default withStore(Landing)
