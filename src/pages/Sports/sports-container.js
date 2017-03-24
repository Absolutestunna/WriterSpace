import React, { PropTypes, Component } from 'react'
import SportsPresenter from './sports-presentation';
import { StoryCard } from './../../utils/components/story-card';


class SportsContainer extends Component {
  render () {
    return (
      <div>
        <p>Sports</p>
        <StoryCard
          title={'I have a story that I want to tell you but nope Im not telling you.'}
          />
        <StoryCard />
      </div>
    )
  }
}

SportsContainer.propTypes = {

}

export default SportsContainer;
