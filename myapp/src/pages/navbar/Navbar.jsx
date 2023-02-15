import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navBlock} >
        <NavLink to='/page1' className={styles.pagesLink}>Page1</NavLink>
        <NavLink to='/page2' className={styles.pagesLink}>Page2</NavLink>
        <NavLink to='/page3' className={styles.pagesLink}>Page3</NavLink>
    </div>
  )
}

export default Navbar