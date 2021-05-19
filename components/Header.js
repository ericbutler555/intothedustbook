import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.inner}>
        <Link href="/#get">
          <a className={styles.button}>GET THE BOOK</a>
        </Link>
      </div>
    </header>
  );
}
