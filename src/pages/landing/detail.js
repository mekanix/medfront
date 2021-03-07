import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/proizvod/med" style={styles.card}>
              <Card>
                <CardHeader
                  title="Med"
                  subheader="livadski, bagremov, prirodni, vrcani ..."
                />
                <CardMedia
                  image="https://as2.ftcdn.net/jpg/01/40/91/57/500_F_140915723_DPQA5uFOB4K23w0ljgcE8P0e4jSVIt1M.jpg"
                  style={styles.media}
                />
              </Card>
            </Link>
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
          <div style={styles.boro.title}>Od ideje do 120 košnica</div>
          <div style={styles.boro.content}>
            <Avatar variant="rounded" style={styles.boro.avatar} />
            <div style={styles.boro.info}>
              <p>
                Sadnja 70 voćaka  pokrenula je ideju o nekoliko košnica za
                oprašivanje. Hobistički. Nekoliko, pretvorilo se u više od 120
                tijekom 17 godina. Otvaranje OPG-a normalan je slijed. 2005
                godine stiglo je rješenje i pod brojem 000155993 upisan sam u
                upisnik regstrovanih poljoprivrednih gospodarstava. 2009 godine
                registrirao sam objekat za punjenje i pakovanje pčelinjih
                proizvoda na obiteljskom poljoprivrednom gospodarstvu.
                Pčelarenje polako postaje zanimanje pretvara se u zanat.
                Povećanjem broja košnica povećava se i interes za proizvodnjom
                matica pčela. 2006 godine postajem član udruge uzgajivača
                matica pčela hrvatske. Danas, sa 400 oplodnjaka proizvedem
                900-1000 selekcioniranih matica pčela.
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
