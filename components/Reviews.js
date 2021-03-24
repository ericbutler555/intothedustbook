import styles from "./Reviews.module.css";

const reviews = [
  {
    body: "It gave me playa dreams for a month",
    byline: "Jessie Groth",
  },
];

export default function Reviews() {
  return (
    <aside className={styles.ReviewsContainer}>
      <div className="innerContainer">
        <h2>What Readers Are Saying</h2>
        <ul className={reviews.length < 2 ? styles.singleItem : ""}>
          {reviews.map((rev, i) => (
            <li key={i} className={styles.review}>
              <p>&ldquo;{rev.body}&rdquo;</p>
              <p className={styles.byline}>{rev.byline}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
