import React from 'react'
import {
  User,
} from 'freenit'
import Template from 'templates/default/detail'


class UserList extends React.Component {
  render() {
    const List = User.list
    return (
      <Template secure style={{}}>
        <List {...this.props} />
      </Template>
    )
  }
}


export default UserList
