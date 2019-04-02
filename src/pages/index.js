import React from "react"
import Layout from "../components/Layout.js"

export default () => (
  <Layout>
    <main id="home">
      <h1 className="lg-heading">
        Julia <span className="text-secondary">Kolesnikova</span>
      </h1>
      <h2 className="sm-heading">Graphic Designer</h2>
      <div className="icons">
        <a href="#!">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="#!">
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a href="#!">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="#!">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
    </main>
  </Layout>
)
