import React, { PropTypes, Component } from 'react'
import { Navbar } from 'react-materialize';


class NavBar extends Component {
  render () {
    return (
      <Row>
        <Col s={6}>
          <Button waves='light'>Add<Icon right>add</Icon></Button>
        </Col>
        <Col s={6}>
          <Button waves='light'>Remove<Icon right>remove</Icon></Button>
        </Col>
      </Row>
    )
  }
}

export default NavBar;
