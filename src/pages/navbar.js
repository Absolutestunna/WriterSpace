import React, { PropTypes } from 'react'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchClicked: false
    }
    this.handleShowSearchInput = this.handleShowSearchInput.bind(this);
    this.handleReturnToNavFunc = this.handleReturnToNavFunc.bind(this);
  }
  handleShowSearchInput() {
    this.setState({
      searchClicked: !this.state.searchClicked
    })
  }
  handleReturnToNavFunc() {
    console.log('somethings');
    this.setState({
      searchClicked: !this.state.searchClicked
    })
  }
  render () {
    let { searchClicked } = this.state;
    const renderedNav = searchClicked ?
        (<SearchInput
          handleReturnToNavFunc={this.handleReturnToNavFunc}
          />) :
        (<NavStuff
          handleShowSearchInput={this.handleShowSearchInput}
          />)
    return (
      <nav>
        <div className="nav-wrapper">
          {renderedNav}
        </div>
      </nav>
    )
  }
}

const NavStuff = ({
  handleShowSearchInput
}) => {
  return (
    <div>
      <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
      <ul className="right hide-on-med-and-down">
        <li onClick={handleShowSearchInput}><a><i className="material-icons">search</i></a></li>
        <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
        <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
        <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
      </ul>
    </div>

  )
}

const SearchInput = ({
  handleReturnToNavFunc
}) => {
  return (
    <form className="search-form-wrapper">
      <div className="input-field">
        <input id="search" type="search" required autoFocus />
        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
        <i
          className="material-icons"
          onClick={handleReturnToNavFunc}>close</i>
      </div>
    </form>
  )
}

export default NavBar;
