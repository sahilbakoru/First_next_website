// components/NavBar.js
import Link from 'next/link';
import styles from '/src/app/NavBar.module.css'
import ProjectClick from '/src/app/ProjectClick'
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
        <Link style={{ fontSize: "20px" }}  href="/">
        <button
    style={{
      border: "none",
      padding: "20px",
      background: "rgba(232, 232, 232, 0.61)",
      cursor: "pointer",
    }}
  >
    <div style={{ fontSize: "20px" }}>Sahilbakoru.in</div>
  </button>
         </Link>
          
           {/* <ProjectClick route={'/'} text={'Sahilbakoru.in'}/> */}
        </li>
       
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;