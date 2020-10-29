import React from 'react'
import {
  Role,
} from 'freenit'
import Template from 'templates/default/detail'


class RoleDetail extends React.Component {
  render() {
    const Detail = Role.detal
    return (
      <Template secure style={{}}>
        <Detail {...this.props} />
      </Template>
    )
  }
}


export default RoleDetail
