import styles from "./Reviews.module.css";

const reviews = [
  {
    body: "Jack Lyons’ book was a treat and a delight in awakening my memories of all of the shenanigans, mishaps and adventures that I have stumbled into through the dust. The book seeped into my consciousness and I caught myself reminiscing and dreaming of the desert and the magic found there.",
    byline: "J. C. Pellerin via Amazon"
  },
  {
    body: "This novel gives us an insider's view of the activities, and more importantly, the characters involved in this colossal event. Jack Lyons is a very talented writer who provides a knowing look at the festival and the people in a remarkable fictional setting. Characters are varied and unique, and the Burning Man setting is interesting at every turn.",
    byline: "Barry Chilton via Amazon"
  },
  {
    body: "It really makes you feel like you are on the playa! I could totally relate to all of the experiences. Overall it’s an entertaining story with great characters whether you’ve been to the burn or not... a must read if you plan to go.",
    byline: "MissAlicious"
  },
  {
    body: "This past week has left me heavy of heart and soul for various reasons. Reading the book, I realized I had found a dusty escape. Helps put my head in a better place when I need it most.",
    byline: "Angela"
  },
  {
    body: "It gave me playa dreams for a month.",
    byline: "Jessie Groth",
  },
  {
    body: "Wondrous things unfold with every turn of the page and thanks to the magic of playa one never knows what to expect!",
    byline: "hawk hrdly",
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
