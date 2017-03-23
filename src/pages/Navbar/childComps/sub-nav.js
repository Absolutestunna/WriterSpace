import React, { PropTypes } from 'react'

const SubNav = ({
  toggleNameAndSign,
  handleShowSportStoriesFunc
}) => {
  return (
    <div className="row sub-nav">
      <div className="col s12">
        <ul className="tabs tabs-nav">
          <li className="tab col s3"><a>{`Editor's Pick`}</a></li>
          <li className="tab col s3" onClick={handleShowSportStoriesFunc}><a className="active">Sports</a></li>
          <li className="tab col s3"><a>Life</a></li>
          <li className="tab col s3"><a>Music</a></li>
        </ul>
      </div>
    </div>
  )
}

export default SubNav;
