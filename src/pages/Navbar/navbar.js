import React, { PropTypes } from 'react'
import SearchInputComp from './childComps/searchInput';
import SubNav from './childComps/sub-nav';
import CompleteNavComp from './childComps/complete-nav';
import { withRouter } from 'react-router'; //Link

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchClicked: false,
      toggleNameAndSign: true,
    }
    this.handleShowSearchInput = this.handleShowSearchInput.bind(this);
    this.handleReturnToNavFunc = this.handleReturnToNavFunc.bind(this);
    this.handleRenderNavFunc = this.handleRenderNavFunc.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleShowSportStoriesFunc = this.handleShowSportStoriesFunc.bind(this);
    this.handleShowLifeStoriesFunc = this.handleShowLifeStoriesFunc.bind(this);
    this.handleShowMusicStoriesFunc = this.handleShowMusicStoriesFunc.bind(this);
    this.writeStoryFunc=this.writeStoryFunc.bind(this);
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
    let { router } = this.props;
    router.push('/sports')
  }
  handleShowLifeStoriesFunc() {
    let { router } = this.props;
    router.push('/life')
  }
  handleShowMusicStoriesFunc() {
    let { router } = this.props;
    router.push('/music')
  }

  writeStoryFunc() {
    let { router } = this.props;
    router.push('/write')
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
          handleShowLifeStoriesFunc={this.handleShowLifeStoriesFunc}
          handleShowMusicStoriesFunc={this.handleShowMusicStoriesFunc}
          writeStoryFunc={this.writeStoryFunc}
        />
      </nav>
    )
  }
}

NavBar.propTypes = {
  handleShowSearchInput: PropTypes.func,
  handleReturnToNavFunc: PropTypes.func,
  writeStoryFunc: PropTypes.func,
  handleRenderNavFunc: PropTypes.func,
  searchClicked: PropTypes.string,
  renderedNavComp: PropTypes.object,
}



export default withRouter(NavBar);
