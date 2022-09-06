import Head from "next/head";
import Link from "next/link";
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
        <title>Into the Dust: The Virgin, A Burning Man Story by Jack Lyons</title>
        <meta name="description" content="In Jack Lyons's new novel, a woman spends two intense, life-changing weeks at Burning Man, adapting to the festival's alternative lifestyle and having unimaginable new experiences." />
      </Head>
      <main id="homePage" className="pageContent">
        <div className={styles.hero}>
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
            <section id="get" className={styles.bookTitleContainer}>
              <h1>
                <span className={styles.title}>INTO THE DUST </span>
                <span className={styles.subtitle1}>— The Virgin</span>
              </h1>
              <h2>
                <span className={styles.subtitle2}>A Burning Man Story </span>
                <span className={styles.author}>by Jack Lyons</span>
              </h2>
            </section>
            <div className={styles.buyButtonsContainer}>
              <a id="buyPaperback" className={buttons.buyButton + " " + buttons.paperbackLink} href="https://www.amazon.com/Into-Dust-Virgin-Burning-Story/dp/B09ZZRG6DM" title="Get paperback from Amazon">
                BUY PAPERBACK
                <img src="/amazon.svg" width="20" alt="" />
              </a>
              <a id="buyEbook" className={buttons.buyButton + " " + buttons.ebookLink} href="https://www.amazon.com/Into-Dust-Virgin-Burning-Story-ebook/dp/B09ZY2CLFK" title="Get e-book for Kindle">
                BUY E-BOOK
                <img src="/amazon.svg" width="20" alt="" />
              </a>
              <a id="buyAudiobook" className={buttons.buyButton + " " + buttons.audiobookLink} href="https://www.amazon.com/Into-Dust-Virgin-Burning-Story/dp/B09JQGLD9S" title="Get audiobook for Audible">
                BUY AUDIOBOOK
                <img src="/amazon.svg" width="20" alt="" />
              </a>
              <p className={styles.wholesaleMessage}>
                For bulk or wholesale orders, send Jack a message in the{" "}
                <a href="#contactJack" className="linkUncolored">
                  form below
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="innerContainer">
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
        <Reviews />
        <aside className={styles.burningManContainer}>
          <div className={"innerContainer " + styles.inner}>
            <h2>WHAT IS BURNING MAN?</h2>
            <p className={styles.callout}>A place made sacred by people who need a sacred place.</p>
            <p style={{ marginBottom: "0" }}>Why are people drawn to Burning Man, and what brings them back again and again? What actually happens at the maligned, misunderstood, iconic event staged in the middle of a Nevada desert? More importantly, what happens to the people who go?</p>
          </div>
        </aside>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
