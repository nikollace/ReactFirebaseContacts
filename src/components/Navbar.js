import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">LOGO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
        <Link to="/contacts">
            <li className="nav-item active">
                <a className="nav-link" href="#">Contacts <span className="sr-only">(current)</span></a>
            </li>
        </Link>
        <Link to="/avatars">
            <li className="nav-item">
                <a className="nav-link" href="#">Avatars</a>
            </li>
        </Link>
        <Link to="/contactUs">
            <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
            </li>
        </Link>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More actions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#" onClick={props.handleLogout}>Log Out</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar
