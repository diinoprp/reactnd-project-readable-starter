import React, { Component } from 'react';
import { connect } from 'react-redux'
import { DropdownButton, Dropdown } from 'react-bootstrap'

class SortingOptions extends Component {

  handleSortByDate() {
    const { list, sortByDate } = this.props
    sortByDate(list)
  }

  handleSortByScore() {
    const { list, sortByScore } = this.props
    sortByScore(list)
  }

  render() {
    return (
      <div style={{position: "relative", height: "50px"}}>
        <DropdownButton
          bg="dark" variant="dark"
          title="Sort by"
          id="dropdown-menu-align-right"
          style={{position:"absolute", top: 0, right: 0}}
        >
          <Dropdown.Item eventKey="1" onClick={() => this.handleSortByDate()}>Date</Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => this.handleSortByScore()}>Score</Dropdown.Item>
        </DropdownButton>
      </div>
    )
  }
}


export default connect()(SortingOptions);
