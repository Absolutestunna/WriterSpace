import React, { Component } from 'react'
import { StoryCard } from './../../utils/components/story-card';

class MusicContainer extends Component {
  render () {
    return (
      <div>
        <p>Music</p>
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    )
  }
}

export default MusicContainer;
