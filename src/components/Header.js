import React, { Component } from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li className={"nav-item " + props.menuClass}>
    <Link to={props.to} className="nav-link">
      {props.children}
    </Link>
  </li>
)

class Header extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: false,
      btnClass: 'close',
      menuClass: 'show'
    }
  }

  toggleMenu = () => {
    console.log('Toggled')
    this.setState((prevState) => {
      console.log(`${prevState} becomes `)
      if (!prevState.showMenu) {
        return {
          showMenu: true,
          btnClass: '',
          menuClass: ''
          }
        }
        else {
          return {
          showMenu: false,
          btnClass: 'close',
          menuClass: 'show'
          }
        }
    })
    console.log(this.state)
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
