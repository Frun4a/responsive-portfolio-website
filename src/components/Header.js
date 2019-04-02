import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li className="nav-item">
    <Link to={props.to} className="nav-link">
      {props.children}
    </Link>
  </li>
)

const Header = () => (
  <header>
    <div className="menu-btn">
      <div className="btn-line" />
      <div className="btn-line" />
      <div className="btn-line" />
    </div>

    <nav className="menu">
      <div className="menu-branding">
        <div className="portrait" />
      </div>
      <ul className="menu-nav">
        <ListLink to="/">HOME</ListLink>
        <ListLink to="/about/">ABOUT ME</ListLink>
        <ListLink to="/work/">MY WORK</ListLink>
        <ListLink to="/contact/">CONTACT ME</ListLink>
      </ul>
    </nav>
  </header>
)

export default Header
