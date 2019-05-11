import React, { Component } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class CategoriesDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = { dropdownTitle: 'Categories' }
  }

  handleCategoryClick(categoryName) {
    this.props.history.push(`/categories/${categoryName}`)
    this.setState({ dropdownTitle: categoryName })
  }

  render() {
    const { categories } = this.props
    const { dropdownTitle } = this.state
    return (
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title={dropdownTitle} id="collasible-nav-dropdown">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <NavDropdown.Item>
                All
              </NavDropdown.Item>
            </Link>

            {(categories && categories.length) &&
              categories.map((category) => (
                <NavDropdown.Item
                  key={category.name}
                  onClick={() => { this.handleCategoryClick(category.name) }}>
                  {category.name}
                </NavDropdown.Item>
              ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    )
  }
}

function mapStateToProps({ categoriesReducer }) {
  const { categories } = categoriesReducer
  return {
    categories
  }
}

export default withRouter(connect(mapStateToProps)(CategoriesDropdown))