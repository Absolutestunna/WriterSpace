import React, { PropTypes, Component } from 'react'
import SportsPresenter from './sports-presentation';
import { StoryCard } from './../../utils/components/story-card';


class SportsContainer extends Component {
  render () {
    console.log('this in Sports', this);
    return (
      <div>
        <p>Sports</p>
        <StoryCard />
        <StoryCard />
      </div>
    )
  }
}

SportsContainer.propTypes = {

}

export default SportsContainer;
