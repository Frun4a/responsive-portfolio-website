import React from "react"
import styles from "./Project.module.scss" 

const Project = props => (
  <div className={styles.project}>
    <a href="#!">
      <img className={styles.projectImage} src={props.imgSrc} alt="Project"/>
      <p className={styles.projectText}>{props.projectText}</p>
    </a>

    <a href={props.projectLink} className={styles.btnLight}>
      <i className="fas fa-eye fa-fw"></i>
      Project
    </a>

    <a href={props.gitHubLink} className={styles.btnDark}>
      <i className="fab fa-github  fa-fw"></i>
      Github
    </a>
  </div>
)

export default Project 
