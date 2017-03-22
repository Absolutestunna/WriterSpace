import React, { PropTypes } from 'react'

export const StoryCard = ({
  avatar,
  author,
  dateTime
}) => {
  return (
    <div className="card-panel white card-story">
      <div className="story-metadata">
        <img className="profile-pic"
          src={ avatar || "https://as.ftcdn.net/r/v1/pics/009875490184a0133558445e00a7d22734723b9b/home/showcased_artists/jacoblund.jpg"} alt="user avatar" />
        <div className="user_metadata">
          <a className="link link-accent">{author || `Joshua Abu`}</a>
          <div className="story-date">
            <time dateTime={dateTime || "2017-03-20T01:16:58.224Z"}>
              {`March 13`}
            </time></div>
        </div>
      </div>
      <div className="story-title">

      </div>



      <span>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
      </span>
    </div>
  )
}
