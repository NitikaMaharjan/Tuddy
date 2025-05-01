import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="" style={{color:props.mode==='light'?'black':'white'}}>{props.title1}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="" style={{color:props.mode==='light'?'black':'white'}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" style={{color:props.mode==='light'?'black':'white'}}>{props.title2}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" style={{color:props.mode==='light'?'black':'white'}}>{props.title3}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:props.mode==='light'?'black':'white'}}>
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="">Action</a></li>
                  <li><a className="dropdown-item" href="">Another action</a></li>
                  <li><a className="dropdown-item" href="">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode==="light"?"black":"white"}`}>{/*if bg is white make the text black, if bg is black, make the text white*/}
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="switchCheckDefault"/>{/*on click, toggle function is called*/}
            <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode==="light"?"Enable dark Mode":"Enable light Mode"}</label>{/*if bg is white, text is 'enable black mode', if bg is black, text is 'enable white mode'*/}
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