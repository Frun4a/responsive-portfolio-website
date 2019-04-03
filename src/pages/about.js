import React from "react"
import Layout from "../components/Layout.js"

export default () => (
  	<Layout>
	    {/* <h1>About me</h1>
		<p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p> */}
		<main style={{display: "flex",
					  'flex-flow': 'column',
					  height: '100vh',
					  alignItems: "center",
					  justifyContent: "flex-start"}}>

			<div id="1" style={{flex: "0 1 40%", border: "3px solid red"}}>
				<p>1</p>
				<p>1</p>
			</div>
			<div id="2"  style={{flex: "0 1 40%", border: "3px solid red"}}>
				2
			</div>
		</main>
	</Layout>

)