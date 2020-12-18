/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// CommentForm.js
import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  <form onSubmit={props.submitComment}>
    <input
      type="text"
      name="author"
      placeholder="Your name…"
      // eslint-disable-next-line react/destructuring-assignment
      value={props.author}
      // eslint-disable-next-line react/destructuring-assignment
      onChange={props.handleChangeText}
    />
    <input
      type="text"
      name="text"
      placeholder="Say something..."
      value={props.text}
      onChange={props.handleTextChange}
    />
    <button type="submit">Submit</button>
  </form>
);

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  text: PropTypes.string,
  author: PropTypes.string,
};

CommentForm.defaultProps = {
  text: '',
  author: '',
};

export default CommentForm;
