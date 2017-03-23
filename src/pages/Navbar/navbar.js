import React, { PropTypes } from 'react'
import SearchInputComp from './childComps/searchInput';
import SubNav from './childComps/sub-nav';
import CompleteNavComp from './childComps/complete-nav';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return dispatch
}





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
    this.handleShowSportStoriesFunc = this.handleShowSportStoriesFunc.bind(this);
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

  handleShowSportStoriesFunc() {
    console.log('im here');
    console.log('this', this);
    let { history } = this.props;
    console.log('history', history);
    history.push('/sports')
  }

  render () {
    const renderedNav = this.handleRenderNavFunc();
    let { toggleNameAndSign } = this.state;
    return (
      <nav className="nav">
        <div className="nav-wrapper top-nav">
          {renderedNav}
        </div>
        <SubNav
          toggleNameAndSign={toggleNameAndSign}
          handleShowSportStoriesFunc={this.handleShowSportStoriesFunc}
        />
      </nav>
    )
  }
}

NavBar.propTypes = {
  handleShowSearchInput: PropTypes.func,
  handleReturnToNavFunc: PropTypes.func,
  handleRenderNavFunc: PropTypes.func,
  searchClicked: PropTypes.string,
  renderedNavComp: PropTypes.object,
}



export default connect(null, null)(NavBar);
