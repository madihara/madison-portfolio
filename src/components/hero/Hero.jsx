import React from "react"
import Typical from 'react-typical'



import styles from "./hero.module.css"

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Typical
            steps={['', 800, 'Madison Haradine', 800]}

            wrapper="h1"
            className={styles.title}
          />
          <h2 className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </h2>
          <h2 className={styles.subTitle}><br></br><br></br>Full site and mobile version coming soon.</h2>
        </div>

      </div>

      <div className={styles.iconBox}>
        <a href="https://github.com/madihara" target="_blank" className={styles.icon}>github</a>
        <a href="https://twitter.com/madisonharadine" target="_blank" className={styles.icon}>twitter</a>
        <a href="mailto:madisonharadine@gmail.com" target="_blank" className={styles.icon}>email</a>
      </div>
    </>
  )
}

export default Hero
