import styles from "./css/RegistrationFormSection.module.css"

export const RegistrationFormSection = () => {
  return (
    <section className={styles.registrationFormSection}>
      <div className={styles.descriptionDiv}>
        <h2 className={styles.findSupportH2}>Find Support</h2>
        <p className={styles.youWantToStayWithPrivate}>
          <p className={styles.youWantTo}>
            Are you needing accomodation at a private volunteer's place in
            Berlin? Register now and we will try to find a suitable possibility
            for you as quick as possible.
          </p>
          <p className={styles.youWantTo}>&nbsp;</p>
          <p className={styles.youWantTo}>
            Our accommodations are safe and verified
          </p>
          <p className={styles.afterYouRegister}>
            After registration, we and our partner organisations can start the
            search for a suitable accommodation.
          </p>
        </p>
      </div>
    </section>
  )
}
