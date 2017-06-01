import React from 'react'

const CompleteNavComp = ({
  handleShowSearchInput,
  handleSignIn,
  toggleNameAndSign,
  writeStoryFunc
}) => {
  return (
    <div>
      <a href="#!" className="brand-logo"><i className="material-icons">speaker_notes</i>WriterSpace</a>
      <ul className="right hide-on-med-and-down right-nav-elements">
        <li onClick={handleShowSearchInput}><a><i className="material-icons">search</i></a></li>
        <li className="story-write" onClick={writeStoryFunc}><a>Write a Story</a></li>
        <li className="sign-in"
          onClick={handleSignIn}>
          { toggleNameAndSign ? (
              <h5 style={{fontSize: '1rem', margin: '1.6rem 0 .656rem 0'}}>Sign In/Sign Up</h5>
                ): (
              <a className="waves-effect waves-teal btn-flat">Welcome, Joshua</a>

                )
          }
        </li>
      </ul>
    </div>

  )
}

export default CompleteNavComp;
