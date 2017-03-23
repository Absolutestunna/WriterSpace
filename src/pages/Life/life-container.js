import React, { PropTypes, Component } from 'react'
import { StoryCard } from './../../utils/components/story-card';

class LifeContainer extends Component {
  render () {
    console.log('this in Sports', this);
    return (
      <div>
        <p>Life</p>
        <StoryCard />
      </div>
    )
  }
}

export default LifeContainer;
