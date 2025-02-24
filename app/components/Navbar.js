import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <a href="#" className={styles.navLink}>Home</a>
        <a href="#" className={styles.navLink}>About</a>
        <a href="#" className={styles.navLink}>Hot tours</a>
        <a href="#" className={styles.navLink}>Contact</a>
      </div>
      <button className={styles.bookNow}>Book now</button>
    </nav>
  );
} 