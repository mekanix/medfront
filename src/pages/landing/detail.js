import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Card,
  CardHeader,
  CardMedia,
} from '@material-ui/core'


class Page extends React.Component {
  render() {
    return (
      <div style={{ minHeight: "calc(100vh - 4px - 48px - 5px)" }}>
        <AppBar position="sticky" style={{ backgroundColor: "#372b2b" }}>
          <Toolbar>
            <Typography variant="h6">
              Gazdinstvo Grbić
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ minHeight: "calc(100vh - 40px - 60px)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 20, backgroundImage: "url(\"https://as2.ftcdn.net/jpg/01/40/91/57/500_F_140915723_DPQA5uFOB4K23w0ljgcE8P0e4jSVIt1M.jpg\")", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>
            Direktno iz košnice
          </div>
          <div style={{ color: "#333", fontSize: 24, marginBottom: 20 }}>
            Otkrite prirodna svojstva meda
          </div>
          <a href="#narucivanje">
            <Paper style={{ height: 60, width: 150, display: "flex", alignItems: "center", justifyContent: "center", textTransform: "uppercase", fontSize: 24, fontWeight: "bold", color: "white", backgroundColor: "#372b2b" }}>
              naručite
            </Paper>
          </a>
        </div>
        <div style={{ padding: 20, paddingTop: 70, minHeight: "calc(100vh - 90px)" }}>
          <div style={{ fontSize: 48, textAlign: "center" }}>
            Proizvodi
          </div>
          <div style={{ display: "flex", alignItems: "stretch", justifyContent: "space-between", marginTop: 20 }}>
            <Card style={{ width: "30%" }}>
              <CardHeader title="Med" subheader="livadski, bagremov, prirodni, vrcani ..." />
              <CardMedia image="https://as2.ftcdn.net/jpg/01/40/91/57/500_F_140915723_DPQA5uFOB4K23w0ljgcE8P0e4jSVIt1M.jpg" style={{ height: 120 }} />
            </Card>
            <Card style={{ width: "30%" }}>
              <CardHeader title="Matična mleč" subheader="zdravlje na prvom mestu" />
              <CardMedia image="https://as2.ftcdn.net/jpg/01/40/91/57/500_F_140915723_DPQA5uFOB4K23w0ljgcE8P0e4jSVIt1M.jpg" style={{ height: 120 }} />
            </Card>
            <Card style={{ width: "30%" }}>
              <CardHeader title="Propolis" subheader="samo najbolje što pčela daje" />
              <CardMedia image="https://as2.ftcdn.net/jpg/01/40/91/57/500_F_140915723_DPQA5uFOB4K23w0ljgcE8P0e4jSVIt1M.jpg" style={{ height: 120 }} />
            </Card>
          </div>
          <div style={{ marginTop: 50, textAlign: "center", fontSize: 24, color: "#555", marginBottom: 50 }}>
            Sve je proizvedeno sa najvećom pažnjom
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <a href="#narucivanje">
              <Paper style={{ height: 60, width: 150, display: "flex", alignItems: "center", justifyContent: "center", textTransform: "uppercase", fontSize: 24, fontWeight: "bold", color: "white", backgroundColor: "#372b2b" }}>
                naručite
              </Paper>
            </a>
          </div>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ fontSize: 48, textAlign: "center", marginBottom: 50 }} id="narucivanje">
            Naručivanje
          </div>
          <p>
            Poručivanje putem telefona
          </p>
        </div>
      </div>
    )
  }
}


export default Page
