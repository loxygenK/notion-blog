import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <div className="outlineCode">
        <h1>
          [visitor@flisan ~]
          <span className="userTypeChar">$ </span>
          <span className="cursor" />
        </h1>
      </div>
      <h2>Inspect what Flisan look like</h2>
    </div>
  </>
)
