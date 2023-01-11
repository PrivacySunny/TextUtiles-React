import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            {/* <a className="nav-link active" aria-current="page" to="/">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            {/* <a className="nav-link" to="/about">{props.aboutText}</a> */}
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><a className="dropdown-item" href='/'>check</a></li>
                                <li><a className="dropdown-item" href="/">Something elsewhere here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href='/'>Disabled</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="bg-primary mx-2" onClick = {()=>{props.toggleMode('primary')}}style={{height: '30px', width: '30px', borderRadius: '50%'}}></div>
                        <div className="bg-secondary mx-2" onClick = {()=>{props.toggleMode('secondary')}}style={{height: '30px', width: '30px', borderRadius: '50%'}}></div>
                        <div className="bg-danger mx-2" onClick = {()=>{props.toggleMode('danger')}}style={{height: '30px', width: '30px', borderRadius: '50%'}}></div>
                        <div className="bg-success mx-2" onClick = {()=>{props.toggleMode('success')}}style={{height: '30px', width: '30px', borderRadius: '50%'}}></div>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                        <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" /> 
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'About'
}