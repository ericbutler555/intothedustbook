import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "@components/Footer";
import Chapter1 from "@components/Chapter1";
import Chapter10 from "@components/Chapter10";
import styles from "@styles/excerpt.module.css";
import bookStyles from "@styles/book3d.module.css";
import buttons from "@styles/buttons.module.css";

export default function Excerpt() {
  const [activeChapter, setActiveChapter] = useState("ch10");

  return (
    <>
      <Head>
        <title>Excerpt of Into the Dust: The Virgin - A Burning Man Story by Jack Lyons</title>
        <meta name="description" content="Read two FREE chapters from Jack Lyons's new novel about the intense, life-changing experiences a woman has on her first trip to Burning Man." />
      </Head>
      <main id="excerptPage" className="pageContent">
        <div className="innerContainer whiteContainer">
          <div className={styles.introContainer}>
            <div className={styles.introCover}>
              <div className={bookStyles.bookContainer}>
                <div className={bookStyles.book}>
                  <img src="/IntoTheDust-FrontCover.jpg" alt="Front cover of Into the Dust: The Virgin, A Burning Man Story by Jack Lyons" width="225" height="338" />
                </div>
              </div>
            </div>
            <h1 className="title">Book Excerpts</h1>
            <p>
              Here you can read two free chapters from <em>Into the Dust: The Virgin</em>, a novel by Jack Lyons, published in April 2021.
            </p>
            <Link href="/#get">
              <a className={buttons.linkButton}>GET THE BOOK</a>
            </Link>
          </div>
          <ul className={styles.tabs}>
            <li>
              <a id="readCh1" href="#ch1" className={activeChapter === "ch1" ? styles.isActive : ""} onClick={() => setActiveChapter("ch1")}>
                Read Chapter 1
              </a>
            </li>
            <li>
              <a id="readCh10" href="#ch10" className={activeChapter === "ch10" ? styles.isActive : ""} onClick={() => setActiveChapter("ch10")}>
                Read Chapter 10
              </a>
            </li>
          </ul>
          {activeChapter === "ch1" && <Chapter1 />}
          {activeChapter === "ch10" && <Chapter10 />}
          <div className={styles.bottomCta}>
            <p>
              <strong>End of chapter.</strong> Want to keep reading?
            </p>
            <Link href="/#get">
              <a className={buttons.linkButton}>GET THE BOOK</a>
            </Link>
          </div>
          <aside className={styles.disclaimerContainer}>
            <h2>DISCLAIMER</h2>
            <p>
              <em>Into the Dust: The Virgin, A Burning Man Story</em> is a work of fiction. Names, characters, places, and incidents do not depict any actual person, place, or event unless used by licensed agreement.
            </p>
            <p>All text on this page is copyright &copy; 2021 by Jack Lyons Author, LLC. All rights are reserved. No part of this text may be reproduced or transmitted in any form or by any means, electronic or mechanical, without explicit permission in writing from Jack Lyons or his assigns.</p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
