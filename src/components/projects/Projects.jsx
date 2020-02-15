import React from 'react'
import ProjectCard from '../Project Card/ProjectCard'


import styles from './projects.module.css'

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <ProjectCard name="Wind + James" image='' />
        <ProjectCard name="JPC" image='' />
        <ProjectCard name="Todo App" image='' />
      </div>
    </>
  )
}

export default Projects