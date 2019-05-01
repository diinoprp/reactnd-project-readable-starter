import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import CategoriesDropdown from './CategoriesDropdown'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Menu = (props) => {
  const { pathname } = props.location
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
      {pathname === '/' ? <CategoriesDropdown /> : null}
    </Navbar>
  )
}

export default withRouter(Menu)