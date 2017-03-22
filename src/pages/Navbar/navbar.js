import React, { PropTypes } from 'react'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchClicked: false,
      toggleNameAndSign: true
    }
    this.handleShowSearchInput = this.handleShowSearchInput.bind(this);
    this.handleReturnToNavFunc = this.handleReturnToNavFunc.bind(this);
    this.handleRenderNavFunc = this.handleRenderNavFunc.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleShowSearchInput() {
    this.setState({
      searchClicked: !this.state.searchClicked
    })
  }

  handleSignIn() {
    this.setState({
      toggleNameAndSign: !this.state.toggleNameAndSign
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
          handleSignIn={this.handleSignIn}
          toggleNameAndSign={this.state.toggleNameAndSign}
          />)
    return renderedNavComp
  }

  render () {
    const renderedNav = this.handleRenderNavFunc();
    return (
      <nav className="nav">
        <div className="nav-wrapper top-nav">
          {renderedNav}
        </div>
        <SubNav
          toggleNameAndSign={this.state.toggleNameAndSign}
        />
      </nav>
    )
  }
}

const SubNav = ({
  toggleNameAndSign
}) => {
  return (
    <div className="row sub-nav">
      <div className="col s12">
        <ul className="tabs tabs-nav">
          <li className="tab col s3"><a>Top Stories</a></li>
          <li className="tab col s3"><a>{`Editor's Pick`}</a></li>
          <li className="tab col s3"><a className="active">Sports</a></li>
          <li className="tab col s3"><a>Life</a></li>
          <li className="tab col s3"><a>Songs</a></li>
        </ul>
      </div>
    </div>
  )
}

const CompleteNavComp = ({
  handleShowSearchInput,
  handleSignIn,
  toggleNameAndSign
}) => {
  return (
    <div>
      <a href="#!" className="brand-logo"><i className="material-icons">speaker_notes</i>WriterSpace</a>
      <ul className="right hide-on-med-and-down right-nav-elements">
        <li onClick={handleShowSearchInput}><a><i className="material-icons">search</i></a></li>
        <li className="sign-in"
          onClick={handleSignIn}>
          {toggleNameAndSign ? (
              <a className="waves-effect waves-teal btn-flat">Sign In/Sign Up</a>
                ): (
              <a className="waves-effect waves-teal btn-flat">Welcome, Joshua</a>

                )
          }
        </li>
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
