import styles from "./Contact.module.css";

export default function Reviews() {
  return (
    <section className={styles.contact}>
      <div className="innerContainer">
        <h2>Contact Jack</h2>
        <p style={{ textAlign: "center" }}>
          Enjoyed the book?
          <br />
          Want to interview Jack on your blog, podcast or stream?
          <br />
          Just want to talk about Burning Man?
          <br />
          Send him a message below.
        </p>
        <div className={styles.formContainer}>
          <form name="contactForm" method="post" data-netlify="true">
            <div className={styles.formField}>
              <label for="emailAddress">Your Email</label>
              <input type="email" name="emailAddress" id="emailAddress" placeholder="your@email.com" />
              <span className={styles.validationMessage}>Enter a valid email</span>
            </div>
            <div className={styles.formField}>
              <label for="message">Message</label>
              <textarea name="message" id="message" placeholder="Say something"></textarea>
              <span className={styles.validationMessage}>Can't be blank</span>
            </div>
            <button type="submit" className={styles.submitButton}>
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
