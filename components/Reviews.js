import Link from "next/link";
import styles from "./Reviews.module.css";
import buttons from "@styles/buttons.module.css";
import { blurbs } from "../data/blurbs";

export default function Reviews() {
  return (
    <aside className={styles.ReviewsContainer}>
      <div className={"innerContainer " + styles.inner}>
        <h2>What Readers Are Saying</h2>
        <ul className={blurbs.length < 2 ? styles.singleItem : ""}>
          {blurbs.map((blb, i) => (
            <li key={i} className={styles.review}>
              <p>&ldquo;{blb.body}&rdquo;</p>
              <p className={styles.byline}>{blb.byline}</p>
            </li>
          ))}
        </ul>
        <div style={{textAlign: 'center'}}>
          <Link href="/#get">
            <a className={buttons.linkButton}>GET THE BOOK</a>
          </Link>
        </div>
      </div>
    </aside>
  );
}
