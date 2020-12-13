import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'
import homeStyle from '../styles/home.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <div className={homeStyle.outlineCode}>
        <h1>
          [visitor@flisan ~]
          <span className={homeStyle.userTypeChar}>$ </span>
          <span className={homeStyle.cursor} />
        </h1>
      </div>
      <h2>Inspect what Flisan look like</h2>
    </div>
  </>
)
