import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <strong><Link className="navbar-brand" to="/" style={{color:props.mode==='light'?'black':'white'}}>{props.title1}</Link></strong>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{color:props.mode==='light'?'black':'white'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color:props.mode==='light'?'black':'white'}}>{props.title2}</Link>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode==="light"?"black":"white"}`}>{/*if bg is white make the text black, if bg is black, make the text white*/}
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="switchCheckDefault"/>{/*on click, toggle function is called*/}
            <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode==="light"?"Enable dark mode":"Enable light mode"}</label>{/*if bg is white, text is 'enable black mode', if bg is black, text is 'enable white mode'*/}
          </div>
        </div>
      </nav>
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