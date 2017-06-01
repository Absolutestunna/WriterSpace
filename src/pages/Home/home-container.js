import React from 'react'
import { connect } from 'react-redux';
import { getStories } from './home-actions';


function mapStateToProps(state) {
  console.log('state', state);
  const { getStoriesReducer: { storiesList } } = state;
  return {
    storiesList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetStories: () => dispatch(getStories()),
  };
}


class HomeContainer extends React.Component {
  componentDidMount() {
    console.log('this.props', this.props);
    this.props.onGetStories();
  }

  componentWillReceiveProps(props){
    console.log('props', props);
  }
  render () {
    return (
      <div>
        Home
      </div>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
