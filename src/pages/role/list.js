import React from 'react'
import {
  Role,
} from 'freenit'
import Template from 'templates/default/detail'


class RoleList extends React.Component {
  render() {
    return (
      <Template secure style={{}}>
        <Role.List {...this.props} />
      </Template>
    )
  }
}


export default RoleList
