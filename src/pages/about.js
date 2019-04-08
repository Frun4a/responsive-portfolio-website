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
            Iuliia, 30, native Russian, has been working at Tablio since
            December 2018. Iuliia grew up in Khimki, Moscow Region. She’s been
            enjoying art since childhood and tried herself in a wide range of
            traditional arts such as watercolor painting, drawing, bead jewelry,
            and embroidery. She spent many weekends in Moscow art museums with
            her parents and surprisingly for a child, she wasn’t bored. Her
            favorite artists are Alphonse Mucha, Ivan Aivazovsky, Arkhip
            Kuindzhi, and Claude Monet. Her other passion is in information
            technology. She holds a bachelor’s degree in computer science from
            the Russian State University of Trade and Economics in 2011. Iuliia
            had been working as an IT technical support specialist for 6 years
            before she moved to the USA. Iuliia recently moved to Portland from
            Moscow, Russia, and decided to explore digital design as a
            profession. This new profession became a golden mean for Iuliia as
            the union of traditional art and digital technology. She thinks that
            the clue to the good design is in Harmony and the Balance.
          </p>
        </div>
      </div>
      <div className="jobs-container">
        <div className="job job-1">
          <h3>Tablio - Vancouver, WA</h3>
          <h4>Graphic Designer</h4>
          <p>2018 - now</p>
          <p>
            Tablio works with restaurants all over the United States and Canada,
            installing touch screen tablets to keep up with modern times of
            using technology in place of menus. Tablio's touch screen tablets are
            free for customers to use and provide guest entertainment, a look at
            the menu, and digital banners of surrounding local businesses.
            This way Tablio brinsg local residents, business owners, and restaurants
            together.
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
