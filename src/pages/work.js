import React from "react"
import Layout from "../components/Layout.js"
import { Helmet } from "react-helmet"
import PortfolioGallery from "../components/PortfolioGallery.js"

//import imgProject from "../img/project.jpeg"


export default () => (
  <Layout>
    <Helmet>
      <title>My work</title>
    </Helmet>

    <main id="work">
      <h1 className="lg-heading">
        My
        <span className="text-secondary"> Work</span>
      </h1>
      <h2 className="sm-heading">See my artworks done while working for Tablio</h2>

      <div className="projects">
        {/* <div className ="item">
          <a href="@!">
            <img src={imgProject} alt="Project" />
            <p>Some project text</p>
          </a> 
        </div> */}
      <PortfolioGallery />
      </div>
    </main>
  </Layout>
)
