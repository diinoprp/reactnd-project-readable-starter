import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CategoriesDropdown from './CategoriesDropdown'

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={require('../reddit-logo.png')}
          className="d-inline-block align-top logo"
        />
        {'Reddit Clone'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <CategoriesDropdown />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu