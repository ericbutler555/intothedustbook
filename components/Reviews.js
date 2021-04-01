import styles from "./Reviews.module.css";

const reviews = [
  {
    body: "Wondrous things unfold with every turn of the page and thanks to the magic of playa one never knows what to expect!",
    byline: "hawk hrdly",
  },
  {
    body: "It gave me playa dreams for a month",
    byline: "Jessie Groth",
  },
  {
    body: "It really makes you feel like you are on the playa! I could totally relate to all of the experiences. Overall it’s an entertaining story with great characters whether you’ve been to the burn or not.. a must read. if you plan to go.",
    byline: "MissAlicious"
  }
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
