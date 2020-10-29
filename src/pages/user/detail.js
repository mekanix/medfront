import React from 'react'
import {
  User,
} from 'freenit'
import Template from 'templates/default/detail'


class UserDetail extends React.Component {
  render() {
    const Detail = User.detail
    return (
      <Template secure style={{}}>
        <Detail {...this.props} />
      </Template>
    )
  }
}


export default UserDetail
