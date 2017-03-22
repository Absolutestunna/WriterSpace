import React, { PropTypes } from 'react'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchClicked: false
    }
    this.handleShowSearchInput = this.handleShowSearchInput.bind(this);
    this.handleReturnToNavFunc = this.handleReturnToNavFunc.bind(this);
    this.handleRenderNavFunc = this.handleRenderNavFunc.bind(this);
  }

  handleShowSearchInput() {
    this.setState({
      searchClicked: !this.state.searchClicked
    })
  }

  handleReturnToNavFunc() {
    this.setState({
      searchClicked: !this.state.searchClicked
    })
  }

  handleRenderNavFunc() {
    let { searchClicked } = this.state;
    const renderedNavComp = searchClicked ?
        (<SearchInputComp
          handleReturnToNavFunc={this.handleReturnToNavFunc}
          />) :
        (<CompleteNavComp
          handleShowSearchInput={this.handleShowSearchInput}
          />)
    return renderedNavComp
  }

  render () {
    const renderedNav = this.handleRenderNavFunc();
    return (
      <nav className="top-nav">
        <div className="nav-wrapper">
          {renderedNav}
        </div>
        <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s3"><a href="#personal-stories">Your stories</a></li>
                <li className="tab col s3"><a className="active" href="#sports">Sports</a></li>
                <li className="tab col s3"><a href="#life">Life</a></li>
                <li className="tab col s3"><a href="#songs">Songs</a></li>
              </ul>
            </div>
            <div id="personal-stories" className="col s12">Your stories</div>
            <div id="sports" className="col s12">Sports</div>
            <div id="life" className="col s12">Life</div>
            <div id="songs" className="col s12">Songs</div>
          </div>
      </nav>
    )
  }
}

const CompleteNavComp = ({
  handleShowSearchInput
}) => {
  return (
    <div>
      <a href="#!" className="brand-logo"><i className="material-icons">speaker_notes</i>WriterSpace</a>
      <ul className="right hide-on-med-and-down right-nav-elements">
        <li onClick={handleShowSearchInput}><a><i className="material-icons">search</i></a></li>
        <li><a href="mobile.html"><i className="material-icons">perm_identity</i></a></li>
      </ul>
    </div>

  )
}

const SearchInputComp = ({
  handleReturnToNavFunc
}) => {
  return (
    <form className="search-form-wrapper">
      <div className="input-field">
        <input id="search" type="search" required autoFocus placeholder="Search for stories"/>
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
        <i
          className="material-icons"
          onClick={handleReturnToNavFunc}>close</i>
      </div>
    </form>
  )
}

NavBar.propTypes = {
  handleShowSearchInput: PropTypes.func,
  handleReturnToNavFunc: PropTypes.func,
  handleRenderNavFunc: PropTypes.func,
  searchClicked: PropTypes.string,
  renderedNavComp: PropTypes.object,
}

export default NavBar;
