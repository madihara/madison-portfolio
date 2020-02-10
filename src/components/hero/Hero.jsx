import React from "react"
import SEO from "../seo"
import image from "../image"

import styles from "./hero.module.css"

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Madison Haradine</h1>
          <h2 className={styles.subTitle}>I am a React Developer</h2>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
