import React from 'react'
import ProjectCard from '../Project Card/ProjectCard'



import jpc from '../../images/jpc.png'
import wj from '../../images/wj.png'


import styles from './projects.module.css'

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <ProjectCard name="Wind + James" image={wj} />
        <ProjectCard name="JPC" image={jpc} />
        <ProjectCard name="Todo App" image='' />
      </div>
    </>
  )
}

export default Projects