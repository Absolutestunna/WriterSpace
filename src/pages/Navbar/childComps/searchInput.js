import React from 'react'


const SearchInputComp = ({
  handleReturnToNavFunc
}) => {
  return (
    <form className="search-form-wrapper">
      <div className="input-field">
        <input id="search" type="search" required autoFocus placeholder="Search for stories"/>
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
        <i
          className="material-icons"
          onClick={handleReturnToNavFunc}>close</i>
      </div>
    </form>
  )
}

export default SearchInputComp;
