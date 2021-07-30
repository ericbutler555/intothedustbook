import styles from "./Reviews.module.css";
import { blurbs } from "../data/blurbs";

export default function Reviews() {
  return (
    <aside className={styles.ReviewsContainer}>
      <div className="innerContainer">
        <h2>What Readers Are Saying</h2>
        <ul className={blurbs.length < 2 ? styles.singleItem : ""}>
          {blurbs.map((blb, i) => (
            <li key={i} className={styles.review}>
              <p>&ldquo;{blb.body}&rdquo;</p>
              <p className={styles.byline}>{blb.byline}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
