import React from 'react'
import {
  Role,
} from 'freenit'
import Template from 'templates/default/detail'


class RoleList extends React.Component {
  render() {
    const List = Role.list
    return (
      <Template secure style={{}}>
        <List {...this.props} />
      </Template>
    )
  }
}


export default RoleList
