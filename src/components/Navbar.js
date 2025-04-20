import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <h2>{props.title1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.title2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.title3}</h2>
    </div>
  );
}

Navbar.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title1: 'on progress',
  title2: 'on progress',
  title3: 'on progress'
};