import React from "react";
import styles from "./Contact.module.scss";
import { contactInfo } from "../../constants/contactInfo";

const Contact: React.FC = () => {
  return (
    <section id="contactPage" className={styles.contactPage}>
      <div className={styles["contact-info"]}>
        <span className={styles["title-span"]}>
          <title>{contactInfo.title}</title>
        </span>
        <span className={styles["address-span"]}>
          {contactInfo.adress}
        </span>
        <span className={styles["phone-span"]}>{contactInfo.phone}</span>
        <span className={styles["email-span"]}>{contactInfo.email}</span>
        <span className={styles["hours-span"]}>
          {contactInfo.schedule.daysOpen} <time>{contactInfo.schedule.timeOpen}</time>
        </span>
        <span className={styles["map-span"]}>
          <iframe
            className={styles["map"]}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.496040125108!2d23.354057776124307!3d42.65084267116751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85dd073b761d%3A0xb07ffaa5822541bc!2sUrban%20Tattoo%20Sofia!5e0!3m2!1sbg!2sbg!4v1693149289937!5m2!1sbg!2sbg"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="google-maps"
          >  
          </iframe>
        </span>
      </div>
    </section>
  );
};

export default Contact;
