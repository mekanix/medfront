import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { withStore, EmptyTemplate } from 'freenit'

// Components
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  ListItemIcon,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'

// Icons
import CloseIcon from '@material-ui/icons/Clear'
import DashboardIcon from '@material-ui/icons/Dashboard'
import GalleryIcon from '@material-ui/icons/LinkedCamera'
import LoginIcon from '@material-ui/icons/Input'
import LogoutIcon from '@material-ui/icons/PowerSettingsNew'
import MenuIcon from '@material-ui/icons/Menu'
import ProfileIcon from '@material-ui/icons/AccountCircle'
import RoleIcon from '@material-ui/icons/People'
import UserIcon from '@material-ui/icons/PeopleOutline'

import styles from './styles'


class DefaultTemplate extends React.Component {
  state = {
    showMenu: false,
  }

  handleLogout = async () => {
    const { auth  } = this.props.store
    const response = await auth.logout()
    if (response.ok === undefined) {
      this.props.history.push('/')
    }
  }

  handleMenuOpen = () => {
    this.setState({ showMenu: true })
  }

  handleMenuClose = () => {
    this.setState({ showMenu: false })
  }

  render() {
    const { auth, profile, resolution } = this.props.store
    const AnonButton = (
      <Link to="/login" style={styles.login}>
        <IconButton color="inherit">
          <LoginIcon />
        </IconButton>
      </Link>
    )
    const LoggedinButton = (
      <IconButton color="inherit" onClick={this.handleLogout}>
        <LogoutIcon />
      </IconButton>
    )
    const AuthButton = auth.detail.ok ? LoggedinButton : AnonButton
    const AdminMenu = profile.detail.admin
      ? [
        (
          <Link to="/dashboard" key="dashboard">
            <MenuItem>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              Dashboard
            </MenuItem>
          </Link>
        ),
        (
          <Link to="/users" key="users">
            <MenuItem>
              <ListItemIcon>
                <UserIcon />
              </ListItemIcon>
              Users
            </MenuItem>
          </Link>
        ),
        (
          <Link to="/roles" key="roles">
            <MenuItem>
              <ListItemIcon>
                <RoleIcon />
              </ListItemIcon>
              Roles
            </MenuItem>
          </Link>
        ),
      ] : []
    const LoggingMenu = auth.detail.ok
      ? (
        <MenuItem onClick={this.handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Logout
        </MenuItem>
      ) : (
        <Link to="/login">
          <MenuItem>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            Login
          </MenuItem>
        </Link>
      )
    const AuthMenu = auth.detail.ok
      ? [
        (
          <Link to="/profile" key="profile">
            <MenuItem>
              <ListItemIcon>
                <ProfileIcon />
              </ListItemIcon>
              Profile
            </MenuItem>
          </Link>
        ),
        ...AdminMenu,
      ]
      : null
    const PublicMenu = [
      (
        <Link to="/gallery" key="gallery">
          <MenuItem>
            <ListItemIcon>
              <GalleryIcon />
            </ListItemIcon>
            Galerija
          </MenuItem>
        </Link>
      ),
    ]
    const BarLinks = resolution.detail.width > 410
      ? (
        <div>
          {AuthButton}
        </div>
      ) : null
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={this.handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit" style={styles.flex}>
              <Link to="/" data-id="app">
                Gospodarstvo Grbić
              </Link>
            </Typography>
            <Link to="/gallery">
              <Button color="inherit">Galerija</Button>
            </Link>
            {BarLinks}
          </Toolbar>
        </AppBar>
        <EmptyTemplate.Detail secure={this.props.secure} style={this.props.style}>
          {this.props.children}
          <Drawer open={this.state.showMenu} onClose={this.handleMenuClose}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h5" color="inherit" style={styles.flex}>
                  &nbsp;
                </Typography>
                <IconButton color="inherit" onClick={this.handleMenuClose}>
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <div
              role="button"
              onClick={this.handleMenuClose}
              style={styles.menu}
              tabIndex={0}
              onKeyDown={this.handleMenuClose}
            >
              {AuthMenu}
              {PublicMenu}
              {LoggingMenu}
            </div>
          </Drawer>
        </EmptyTemplate.Detail>
      </div>
    )
  }
}


DefaultTemplate.propTypes = {
  children: PropTypes.node,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  secure: PropTypes.bool,
  style: PropTypes.shape({}),
  title: PropTypes.string,
}


export default withRouter(withStore(DefaultTemplate))
