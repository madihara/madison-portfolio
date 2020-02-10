import React from "react"
import { Link } from 'gatsby'


import styles from "./hero.module.css"

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Madison Haradine</h1>
          <h2 className={styles.subTitle}>I am a web developer experienced working with JavaScript technologies such as React and __. </h2>
          <h2 className={styles.subTitle}>I am available for hire.<br></br><br></br>Full site coming soon.</h2>
        </div>
      </div>
      <div className={styles.iconBox}>
        <Link className={styles.icon}>github</Link>
        <Link className={styles.icon}>twitter</Link>
        <Link className={styles.icon}>email</Link>
      </div>
    </>
  )
}

export default Hero
