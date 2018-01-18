import React from 'react'
import PropTypes from 'prop-types';
import addMessageForm from './addMessageForm.css'

const AddMessageForm = ({onSubmit, handleText, handleVisibility, text, visibility}) => (
  <form className="add-message" onSubmit={onSubmit}>
      <label>
        <textarea
          value={text}
          onChange={handleText}
          id="text"
          placeholder="Message" />
      </label>
      <div className="end-form">
        <label>
          Visibility:
            <a onClick={handleVisibility}> {visibility ? 'private' : 'public'}</a>
        </label>
        <input className="btn" type="submit" value="Add message" />
      </div>
    </form>
)

AddMessageForm.propTypes = {
  text: PropTypes.string,
  visibility: PropTypes.bool
}

export default AddMessageForm
