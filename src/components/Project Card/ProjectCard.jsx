import React from 'react'

import styles from './projectcard.module.css'

const ProjectCard = (props) => {
  return (
    <div className={styles.containers}>
      <div className={styles.card} style={{ backgroundImage: `url(${props.image})` }}>
        <h3>{props.name}</h3>
        <span>{props.details}</span>
      </div>

    </div>
  )
}

export default ProjectCard