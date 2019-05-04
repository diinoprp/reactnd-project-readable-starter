import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import CategoriesDropdown from './CategoriesDropdown'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

const Menu = (props) => {
  const { pathname } = props.location
  const { categories } = props
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
      {pathname === '/' ? <CategoriesDropdown categories={categories}/> : null}
    </Navbar>
  )
}

function mapStateToProps({ categoriesReducer }) {
  const { categories } = categoriesReducer
  return {
    categories
  }
}

export default withRouter(connect(mapStateToProps)(Menu))