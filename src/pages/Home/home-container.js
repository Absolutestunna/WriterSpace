import React from 'react'
import { connect } from 'react-redux';
import { getInvite } from './home-actions';


function mapStateToProps(state) {
  console.log('state', state);
  const { invite } = state;
  return {
    invite
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInvite: () => dispatch(getInvite()),
  };
}




class HomeContainer extends React.Component {
  componentDidMount() {
    console.log('this.props', this.props);
    this.props.onGetInvite();
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
