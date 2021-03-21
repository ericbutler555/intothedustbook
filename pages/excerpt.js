import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Chapter1 from "@components/Chapter1";
import Chapter9 from "@components/Chapter9";
import styles from "@styles/excerpt.module.css";
import bookStyles from "@styles/book3d.module.css";
import buttons from "@styles/buttons.module.css";

export default function Home() {
  const [activeChapter, setActiveChapter] = useState("ch9");

  return (
    <>
      <Head>
        <title>Excerpt of Into the Dust: The Virgin - A Burning Man Story by Jack Lyons</title>
        <meta name="description" content="Read two FREE chapters from Jack Lyons's new novel about the intense, life-changing experiences a woman has on her first trip to Burning Man." />
      </Head>
      <Header />
      <main className="pageContent">
        <div className="innerContainer whiteContainer">
          <div className={styles.introContainer}>
            <div className={styles.introCover}>
              <div className={bookStyles.bookContainer}>
                <div className={bookStyles.book}>
                  <Image src="/cover-into-the-dust.jpg" alt="Front cover of Into the Dust: The Virgin, A Burning Man Story by Jack Lyons" width={225} height={338} />
                </div>
              </div>
            </div>
            <h1 className="title">Book Excerpts</h1>
            <p>
              Here you can read two free chapters from <em>Into the Dust: The Virgin</em>, a novel by Jack Lyons, published in April 2021.
            </p>
            <Link href="/#buy">
              <a className={buttons.linkButton}>GET THE BOOK</a>
            </Link>
          </div>
          <ul className={styles.tabs}>
            <li>
              {activeChapter === "ch1" ? (
                <a href="#ch1" className={styles.isActive} onClick={() => setActiveChapter("ch1")}>
                  Read Chapter 1
                </a>
              ) : (
                <a href="#ch1" onClick={() => setActiveChapter("ch1")}>
                  Read Chapter 1
                </a>
              )}
            </li>
            <li>
              {activeChapter === "ch9" ? (
                <a href="#ch9" className={styles.isActive} onClick={() => setActiveChapter("ch9")}>
                  Read Chapter 9
                </a>
              ) : (
                <a href="#ch9" onClick={() => setActiveChapter("ch9")}>
                  Read Chapter 9
                </a>
              )}
            </li>
          </ul>
          {activeChapter === "ch1" && <Chapter1 />}
          {activeChapter === "ch9" && <Chapter9 />}
          <div className={styles.bottomCta}>
            <p>
              <strong>End of chapter.</strong> Want to keep reading?
            </p>
            <Link href="/#buy">
              <a className={buttons.linkButton}>GET THE BOOK</a>
            </Link>
          </div>
          <aside className={styles.disclaimerContainer}>
            <h2>DISCLAIMER</h2>
            <p>
              <em>Into the Dust: The Virgin, A Burning Man Story</em> is a work of fiction. Names, characters, places, and incidents either are products of the author&rsquo;s imagination or are used under licensed agreement. Any resemblance to actual events or locales or persons, living or dead, is entirely coincidental except that with permission.
            </p>
            <p>All text on this page is copyright &copy; 2021 by Jack Lyons. All rights are reserved. No part of this text may be reproduced or transmitted in any form or by any means, electronic or mechanical, without explicit permission in writing from Jack Lyons or his assigns.</p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
