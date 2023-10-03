// components/NavBar.js
import Link from 'next/link';
import styles from '/src/app/NavBar.module.css'
import ProjectClick from '/src/app/ProjectClick'
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          {/* <Link href="/">Home</Link>
           */}
           <ProjectClick route={'/'} text={'Home'}/>
        </li>
       
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;