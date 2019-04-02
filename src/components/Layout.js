import React from "react"
import Header from "../components/Header.js"
import { Helmet } from "react-helmet"
import "../sass/main.scss"
import "../js/main.js"

export default ({ children }) => (
  <div id="layout">
    <Helmet>
      <title>My Title</title>
      <body id="bg-img" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
    </Helmet>
    <Header />
    {children}
  </div>
)
