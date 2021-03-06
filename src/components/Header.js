import React, { Component } from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li className={"nav-item " + props.menuClass}>
    <Link to={props.to} className="nav-link" activeClassName="current">
      {props.children}
    </Link>
  </li>
)

class Header extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: false,
      btnClass: '',
      menuClass: ''
    }
  }

  toggleMenu = () => {
    this.setState((prevState) => {
      if (prevState.showMenu) {
        return {
          showMenu: false,
          btnClass: '',
          menuClass: ''
          }
        }
        else {
          return {
          showMenu: true,
          btnClass: 'close',
          menuClass: 'show'
          }
        }
    })
  }

  render() { 
    return (
      <header>
        <div className={'menu-btn ' + this.state.btnClass} onClick={this.toggleMenu}>
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className={"menu " +  this.state.menuClass}>
          <div className={"menu-branding " +  this.state.menuClass}>
            <div className="portrait" />
          </div>
          <ul className={"menu-nav " +  this.state.menuClass}>
            <ListLink to="/" menuClass={this.state.menuClass}>HOME</ListLink>
            <ListLink to="/about/" menuClass={this.state.menuClass}>ABOUT ME</ListLink>
            <ListLink to="/work/" menuClass={this.state.menuClass}>MY WORK</ListLink>
            <ListLink to="/contact/" menuClass={this.state.menuClass}>CONTACT ME</ListLink>
          </ul>
        </nav>
    </header>
    )
  }
}
export default Header
