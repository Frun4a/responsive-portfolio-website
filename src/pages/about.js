import React from "react"
import Layout from "../components/Layout.js"

import portrait from "../img/portrait.jpg"
export default () => (
  <Layout>
    <main id="about">
      <h1 className="lg-heading">
        About
        <span className="text-secondary"> Me</span>
      </h1>
      <h2 className="sm-heading">Info about me</h2>

      <div className="about-info">
        <div className="bio-image-container">
          <img src={portrait} alt="John Doe" className="bio-image" />
        </div>
        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic a
            illo distinctio, eos deleniti iste. Molestias consectetur possimus,
            nisi excepturi animi eos esse ex aperiam, repellat illum, non
            facere. Porro suscipit ex perferendis ab delectus explicabo
            voluptates quisquam voluptatem, minima doloribus, dignissimos
            molestias at, vel magni! Molestiae doloribus aspernatur id
            accusantium! Quae molestias sunt at voluptatem illo obcaecati quis?
            Laboriosam delectus odit, sapiente nostrum accusamus recusandae
            officiis, totam molestiae, quod quo at mollitia. Itaque facere
            mollitia dolorum ea minima voluptatum minus veritatis. Ex inventore,
            sunt adipisci enim autem eius.
          </p>
        </div>
      </div>
      <div className="jobs-container">
        <div className="job job-1">
          <h3>Designer Company</h3>
          <h4>Designer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            perspiciatis aspernatur saepe corrupti quaerat nesciunt quisquam,
            accusantium deserunt cumque et rerum consequuntur minima, maiores,
            ducimus alias laboriosam tempore. Est, eveniet?Expedita, ad ullam!
            Quos quis optio similique eveniet nam voluptatibus in cum alias rem
            voluptatum! Tempore saepe, illum optio necessitatibus beatae omnis
            similique veniam sed inventore natus quia quae deleniti!
          </p>
        </div>
        <div className="job job-2">
          <h3>Administration</h3>
          <h4>Girl</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            perspiciatis aspernatur saepe corrupti quaerat nesciunt quisquam,
            accusantium deserunt cumque et rerum consequuntur minima, maiores,
            ducimus alias laboriosam tempore. Est, eveniet?Expedita, ad ullam!
            Quos quis optio similique eveniet nam voluptatibus in cum alias rem
            voluptatum! Tempore saepe, illum optio necessitatibus beatae omnis
            similique veniam sed inventore natus quia quae deleniti!
          </p>
        </div>
      </div>
    </main>
  </Layout>
)
