import React, { Component } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import { handleReceivePostsByCategory, handleReceivePosts } from '../actions'

class CategoriesDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = { dropdownTitle: 'Categories' }
  }

  handleCategoryClick(categoryName) {
    categoryName === 'Categories' ?
      this.props.dispatch(handleReceivePosts()) :
      this.props.dispatch(handleReceivePostsByCategory(categoryName))

    this.setState({ dropdownTitle: categoryName })
  }

  render() {
    const { categories } = this.props
    const { dropdownTitle } = this.state
    return (
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title={dropdownTitle} id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={() => { this.handleCategoryClick('Categories') }}>
              All
            </NavDropdown.Item>
            
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
  console.log(categoriesReducer)
  const { categories } = categoriesReducer
  return {
    categories
  }
}

export default connect(mapStateToProps)(CategoriesDropdown)