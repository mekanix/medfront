import React from 'react'
import {
  RoleList,
  UserList,
} from 'freenit'

import styles from './styles'


class AdminDashboard extends React.Component {
  render() {
    return (
      <div style={styles.content}>
        <UserList />
        <RoleList />
      </div>
    )
  }
}


export default AdminDashboard
