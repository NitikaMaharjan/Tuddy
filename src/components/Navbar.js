import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <p>{props.title1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.title2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.title3}</p>
    </div>
  );
}

Navbar.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title1: 'ghar',
  title2: 'saman',
  title3: 'photo'
};