import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.inner}>
        <span>Fuck your Burn.</span>
        <Link href="/#buy">
          <a className={styles.button}>BUY THE BOOK</a>
        </Link>
      </div>
    </header>
  );
}
