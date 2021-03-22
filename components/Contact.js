import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import Head from "next/head";
import styles from "./Contact.module.css";

const FORMSPARK_FORM_ID = "kU4CIIsX";

export default function Contact() {
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });
  const [formSuccess, setFormSuccess] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await submit({ emailAddress, message });
    setFormSuccess(true);
  };

  return (
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>
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
          {formSuccess ? (
            <div className={styles.formContainer}>
              <div className={styles.successContainer}>
                <h3>THANK YOU</h3>
                <p>Your message has been sent.</p>
              </div>
            </div>
          ) : (
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} name="contactForm" method="post">
                <div className={styles.formField}>
                  <label htmlFor="emailAddress">Your Email</label>
                  <input type="email" name="emailAddress" id="emailAddress" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="your@email.com" required />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="message">Your Message</label>
                  <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Say something" required></textarea>
                </div>
                <div className={styles.formField}>
                  <div class="g-recaptcha" data-sitekey="6LdYaIkaAAAAAEPPrUSQC-6gHX6OUUGccLkFLFMG"></div>
                </div>
                <button type="submit" className={styles.submitButton}>
                  SEND
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
