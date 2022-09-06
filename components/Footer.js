import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="innerContainer">
        <p>
          All content &copy; 2021&ndash;<span class="currentYear">{currentYear}</span> by Jack Lyons Author, LLC. <br className={styles.mobileBreak} />
          Website by{" "}
          <a className="linkUncolored" href="https://ericbutler555.com/" target="_blank">
            Eric Butler
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
