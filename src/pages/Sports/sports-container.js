import React, { PropTypes, Component } from 'react'
import SportsPresenter from './sports-presentation';
import { StoryCard } from './../../utils/components/story-card';


class SportsContainer extends Component {
  render () {
    return (
      <div>
        <StoryCard />
        <StoryCard />
      </div>
    )
  }
}

SportsContainer.propTypes = {

}

export default SportsContainer;
