import React, { Component } from 'react'
// import SportsPresenter from './sports-presentation';
import { StoryCard } from './../../utils/components/story-card';


class SportsContainer extends Component {
  render () {
    return (
      <div>
        <p>Sports</p>
        <StoryCard
          title={'I have a story that I want to tell you but nope Im not telling you.'}
          />
        <StoryCard
          title={"Someone is in trouble"}
          />
      </div>
    )
  }
}

// SportsContainer.propTypes = {
//
// }

export default SportsContainer;
