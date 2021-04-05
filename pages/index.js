import Head from "next/head";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Reviews from "@components/Reviews";
import Contact from "@components/Contact";
import styles from "@styles/home.module.css";
import bookStyles from "@styles/book3d.module.css";
import buttons from "@styles/buttons.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Into the Dust: The Virgin - A Burning Man Story by Jack Lyons</title>
        <meta name="description" content="Available in paperback, hardcover and e-book, read Jack Lyons's new novel about the intense, life-changing experiences a woman has on her first trip to Burning Man." />
      </Head>
      <Header />
      <main className="pageContent">
        <div className="innerContainer">
          <section className={styles.bookGraphic}>
            <div dangerouslySetInnerHTML={{ __html: "<!-- Cover effect attribution: https://github.com/scastiel/book-cover-3d -->" }}></div>
            <div className={bookStyles.bookContainer}>
              <div className={bookStyles.book}>
                <img src="/IntoTheDust-FrontCover.jpg" alt="Front cover of Into the Dust: The Virgin, A Burning Man Story by Jack Lyons" width="300" height="450" />
              </div>
            </div>
            <div className={styles.specs}>Published April 2021 &bull; 352 pages &bull; 6&times;9" &bull; General Fiction</div>
          </section>
          <section className={styles.bookTitleContainer}>
            <h1>
              <span className={styles.title}>INTO THE DUST</span>
              <span className={styles.subtitle1}>The Virgin</span>
              <span className={styles.subtitle2}>A Burning Man Story</span>
              <span className={styles.author}>by Jack Lyons</span>
            </h1>
          </section>
          <div id="buy" className={styles.buyButtonsContainer}>
            <a id="buyPaperback" className={buttons.buyButton + " " + buttons.ebookLink} href="https://www.amazon.com/dp/1953058175" title="Buy paperback from Amazon">
              BUY PAPERBACK
              <img src="/amazon.svg" width="20" alt="" />
            </a>
            {/* <a id="buyHardcover" className={buttons.buyButton + " " + buttons.hardcoverLink} href="https://www.butlerbooks.com/into-the-dust.html" title="Buy hardcover from Butler Books">
              BUY HARDCOVER
              <img src="/ButlerBooks-logo-alt.svg" width="25" alt="" />
            </a> */}
            <a id="buyEbook" className={buttons.buyButton + " " + buttons.paperbackLink} href="https://www.amazon.com/dp/B091PH68PG" title="Buy ebook for Kindle">
              BUY E-BOOK
              <img src="/amazon.svg" width="20" alt="" />
            </a>
          </div>
          <article className={styles.summaryContainer}>
            <p>Burning Man is just a hedonistic music festival, a decadent party for burnouts, druggies, and hippies. Or so Diane believes, until an unexpected invitation from her closest friend opens a door to unknown possibilities.</p>
            <p>Leaving her carefully ordered life behind, Diane accepts her friend&rsquo;s invitation and immerses herself in the harsh, unfamiliar environment of Burning Man. After an intense, life-changing two weeks of unimaginable experiences, she emerges into a reality more extraordinary and rewarding than she ever could have hoped for or imagined.</p>
            <p>Diane&rsquo;s world will never be the same.</p>
            <div className={styles.excerptLink}>
              <Link href="/excerpt">
                <a className={buttons.linkButton}>READ AN EXCERPT &rarr;</a>
              </Link>
            </div>
          </article>
        </div>
        <aside className={styles.burningManContainer}>
          <div className={"innerContainer " + styles.inner}>
            <h2>WHAT IS BURNING MAN?</h2>
            <p className={styles.callout}>A place made sacred by people who need a sacred place.</p>
            <p style={{ marginBottom: "0" }}>Why are people drawn to Burning Man, and what brings them back again and again? What actually happens at the maligned, misunderstood, iconic event staged in the middle of a Nevada desert? More importantly, what happens to the people who go?</p>
          </div>
        </aside>
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
