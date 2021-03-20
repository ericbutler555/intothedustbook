import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.inner}>
        <span>Fuck your Burn.</span>
        <a className={styles.button} href="#buy">
          BUY THE BOOK
        </a>
      </div>
    </header>
  );
}
