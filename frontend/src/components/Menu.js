import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import CategoriesDropdown from './CategoriesDropdown'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Route } from "react-router-dom";

const Menu = (props) => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Link to='/'>
        <Navbar.Brand>
          <img
            alt=""
            src={require('../reddit-logo.png')}
            className="d-inline-block align-top logo"
          />
          {'Reddit Clone'}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Route exact path={["/", "/:category"]} component={CategoriesDropdown} />
    </Navbar>
  )
}

export default withRouter(Menu)