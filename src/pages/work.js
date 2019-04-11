import React from "react"
import Layout from "../components/Layout.js"
import { Helmet } from "react-helmet"
import PortfolioGallery from "../components/PortfolioGallery.js"

// import Project from "../components/Project.js"
// import imgProject from "../img/project.jpeg"

export default () => (
  <Layout>
    <Helmet>
      <title>Julia Kolesnikova - My work</title>
    </Helmet>

    <main id="work">
      <h1 className="lg-heading">
        My
        <span className="text-secondary"> Work</span>
      </h1>
      <h2 className="sm-heading">
        See my artworks done while working for Tablio
      </h2>

      {/* <div className="projects"> 
        <Project
          imgSrc={imgProject}
          projectText="Some Text"
          projectLink="#toProject"
          gitHubLink="#toGithub"
        />
        <Project
          imgSrc={imgProject}
          projectText="Some Text #2"
          projectLink="#toProject"
          gitHubLink="#toGithub"
        />
        <Project
          imgSrc={imgProject}
          projectText="Some Text #2"
          projectLink="#toProject"
          gitHubLink="#toGithub"
        />
      </div> */}
      <PortfolioGallery />
    </main>
  </Layout>
)
