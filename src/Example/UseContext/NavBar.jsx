import React, { useContext } from 'react'
import Styles from './NavBar.module.css';
import { MyContext } from './Manger';

const NavBar = () => {
  const {darkmode ,setdarkmode} = useContext(MyContext)
  const changedarkmode = () => {
       setdarkmode((Previous) => !Previous)
       console.log(darkmode)
  }
    return (
        <div>
        <nav className={ darkmode ? Styles.navbar_lightmode : Styles.navbar}>
        <ul className={Styles.navList}>
        <li className={ darkmode ? Styles.navItem_lightmode :Styles.navItem}><a href="/">Home</a></li>
        <li className={ darkmode ? Styles.navItem_lightmode :Styles.navItem}><a href="/about">About</a></li>
        <li className={ darkmode ? Styles.navItem_lightmode :Styles.navItem}><a href="/contact">Contact</a></li>
        <li className={ darkmode ? Styles.navItem_lightmode :Styles.navItem}><a href="/register">Register</a></li>
        <li className={ darkmode ? Styles.navItem_lightmode :Styles.navItem}>
            <button onClick={changedarkmode}  className={Styles.toggleButton}>
            {darkmode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button></li>
      </ul>
    </nav>
        </div>
    )
}

export default NavBar