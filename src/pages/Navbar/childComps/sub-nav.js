import React, { PropTypes } from 'react'
import { Link, withRouter } from 'react-router';


const SubNav = ({
  toggleNameAndSign,
  handleShowSportStoriesFunc,
  handleShowLifeStoriesFunc,
  handleShowMusicStoriesFunc
}) => {
  return (
    <div className="row sub-nav">
      <div className="col s12">
        <ul className="tabs tabs-nav">
          <li className="tab col s3"><a className="active">{`Editor's Pick`}</a></li>
          <li className="tab col s3" onClick={handleShowSportStoriesFunc}><a>Sports</a></li>
          <li className="tab col s3" onClick={handleShowLifeStoriesFunc}><a>Life</a></li>
          <li className="tab col s3" onClick={handleShowMusicStoriesFunc}><a>Music</a></li>
        </ul>
      </div>
    </div>
  )
}

export default withRouter(SubNav);
