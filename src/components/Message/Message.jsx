import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text }) => {
  return <div>{text}</div>;
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
