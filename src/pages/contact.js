import React from "react"
import Layout from "../components/Layout.js"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
      <title>Julia Kolesnikova - Contact Me</title>
    </Helmet>

    <main id="contact">
      <h1 className="lg-heading">
        Contact
        <span className="text-secondary"> Me</span>
      </h1>
      <h2 className="sm-heading">How you can contact me</h2>

      <div className="boxes">
        <div>
          <span className="text-secondary">Email: </span>
          email@email.com
        </div>
        <div>
          <span className="text-secondary">Phone: </span>
          (123) 123-4567
        </div>
        <div>
          <span className="text-secondary">Address: </span>
          2345 Main St Portland, OR, 97211
        </div>
      </div>
    </main>
  </Layout>
)
