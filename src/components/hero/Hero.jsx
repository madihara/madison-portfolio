import React from "react"
import { Link } from 'gatsby'
import github from '../../images/github-image.svg';
import twitter from '../../images/twitter.svg';

import styles from "./hero.module.css"

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Madison Haradine</h1>
          <h2 className={styles.subTitle}>I am a web developer specializing in working with the JavaScript language primarily in React.  I have an intrest in data visualization with D3js and learning more about serverless computing. </h2>
          <h2 className={styles.subTitle}>I am available for hire.</h2>
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
