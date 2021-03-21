import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="innerContainer">
        <p>
          All content &copy; 2021 by Jack Lyons Author, LLC. Website by{" "}
          <a className="linkUncolored" href="https://ericbutler555.github.io/resume-ng/" target="_blank">
            Eric Butler
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
