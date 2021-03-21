import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <aside className={styles.ReviewsContainer}>
      <div className="innerContainer">
        <h2>What Readers Are Saying</h2>
        <ul>
          <li className={styles.review}>
            <p>&ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ab quidem vel illum facere, nemo deleniti dolorem quae cum voluptas nulla quia architecto possimus ea eligendi tenetur beatae quaerat eaque!&rdquo;</p>
            <p className={styles.byline}>Person Something, Burning Man Representative</p>
          </li>
          <li className={styles.review}>
            <p>&ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ab quidem vel illum facere.&rdquo;</p>
            <p className={styles.byline}>Cindy X, Oregon, via Amazon</p>
          </li>
          <li className={styles.review}>
            <p>&ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit.&rdquo;</p>
            <p className={styles.byline}>Another Person, Some Title</p>
          </li>
          <li className={styles.review}>
            <p>&ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ab quidem vel illum facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa rem inventore at suscipit consectetur, nostrum, placeat ad quo hic eaque alias possimus eveniet velit, impedit fugiat voluptatem a repellat.&rdquo;</p>
            <p className={styles.byline}>Une autre personne, France</p>
          </li>
          <li className={styles.review}>
            <p>&ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ab quidem vel illum facere, nemo deleniti dolorem quae cum voluptas nulla quia architecto possimus ea eligendi tenetur beatae quaerat eaque!&rdquo;</p>
            <p className={styles.byline}>Person Something, Burning Man Representative</p>
          </li>
          <li className={styles.review}>
            <p>&ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ab quidem vel illum facere.&rdquo;</p>
            <p className={styles.byline}>Cindy X, Oregon, via Amazon</p>
          </li>
        </ul>
      </div>
    </aside>
  );
}
