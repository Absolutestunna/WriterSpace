import React from 'react'

const UserInfoMetaData= ({
  avatar,
  author,
  dateTime,
  date,
}) => {
  return (
    <div className="story-metadata">
      <img className="profile-pic"
        src={ avatar || "https://as.ftcdn.net/r/v1/pics/009875490184a0133558445e00a7d22734723b9b/home/showcased_artists/jacoblund.jpg"} alt="user avatar" />
      <div className="user_metadata">
        <a className="link link-accent">{author || `Joshua Abu`}</a>
        <div className="story-date">
          <time dateTime={dateTime || "2017-03-13T01:16:58.224Z"}>
            {date || `March 13`}
          </time></div>
      </div>
    </div>
  )
}

export default UserInfoMetaData;
