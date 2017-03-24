import React, { PropTypes } from 'react';
import UserInfoMetaData from './user-info';
import { Link } from 'react-router';

export const StoryCard = ({
  avatar,
  author,
  dateTime,
  story,
  date,
  title
}) => {
  console.log('title', title);
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
          <h3 className="story-title">{title}</h3>
          <h4 className="story-sub-title">True Story.</h4>
        </a>
      </div>
      <div className="story-snippet">
        <span>{story || `I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.`}
        </span>
      </div>

      <div className="article-readMore">
        <Link to={{ pathname: '/story', query: { title }}} className="readMore-link">
          <p>Read More..</p>
        </Link>
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
