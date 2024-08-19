import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <>
      <nav className={`${styles.navigation} container`}>
        <div className="logo">
          <img src="images/Frame 2 1.png" alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation