import React, { PropTypes } from 'react';
import UserInfoMetaData from './user-info';

export const StoryCard = ({
  avatar,
  author,
  dateTime,
  story,
  date
}) => {
  return (
    <div className="card-panel white card-story">
      <UserInfoMetaData
        avatar={avatar}
        author={author}
        dateTime={dateTime}
        date={date}
        />
      <div className="story-content">
        <a>
          <h3 className="story-title">I have a story for you.</h3>
          <h4 className="story-sub-title">True Story.</h4>
        </a>
      </div>
      <div className="story-snippet">
        <span>{story || `I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.`}
        </span>
      </div>

      <div className="article-readMore">
        <a>
          <p>Read More..</p>
        </a>
      </div>
    </div>
  )
}


StoryCard.propTypes = {
  avatar: PropTypes.string,
  author: PropTypes.string,
  dateTime: PropTypes.string,
  story: PropTypes.string
}
