import React, {Component} from "react"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import { Helmet } from "react-helmet"
import "../sass/main.scss"
import "../js/main.js"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const bodyId = this.props.bodyId
    return(
    <div id="layout">
    <Helmet>
      <title>Julia Kolesnikova - Portfolio</title>
      <body id={bodyId} />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
    </Helmet>
    <Header />

    {this.props.children}

    {(this.props.page != "home") ? <Footer /> : null}
  </div>
    )
  }
}

export default Layout
