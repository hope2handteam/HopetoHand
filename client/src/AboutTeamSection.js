import styles from "./css/AboutTeamSection.module.css"

const AboutTeamSection = () => {
  return (
    <section className={styles.aboutTeamSection} id="AboutTeamSection">
      <div className={styles.aboutTeamDiv}>
        <h4 className={styles.theWebDeveloperTeamBehind}>
          The Web Developer Team behind Hope2Hand!
        </h4>
      </div>
      <div className={styles.picturesDiv}>
        <img className={styles.felixIcon} alt="" src="../felix@2x.png" />
        <img className={styles.waisIcon} alt="" src="../wais@2x.png" />
        <img className={styles.felixIcon} alt="" src="../paul@2x.png" />
        <img className={styles.carlosIcon} alt="" src="../carlos@2x.png" />
        <img className={styles.gerald1Icon} alt="" src="../gerald@2x.png" />
      </div>
      <div className={styles.textDiv}>
        <p className={styles.felixP}>
          <div className={styles.felixChirinosBackendEngine}>
            <p className={styles.felixChirinosP}>Felix Chirinos</p>
            <p className={styles.felixChirinosP}>&nbsp;</p>
            <p className={styles.backendEngineerP}>Backend Engineer</p>
          </div>
        </p>
        <p className={styles.felixP}>
          <div className={styles.felixChirinosBackendEngine}>
            <p className={styles.felixChirinosP}>Wais Nazari</p>
            <p className={styles.felixChirinosP}>&nbsp;</p>
            <p className={styles.felixChirinosP}>Project Manager</p>
            <p className={styles.felixChirinosP}>Frontend Engineer</p>
            <p className={styles.backendEngineerP}>UI/UX Prototyper</p>
          </div>
        </p>
        <p className={styles.felixP}>
          <div className={styles.felixChirinosBackendEngine}>
            <p className={styles.felixChirinosP}>Paul Desbats</p>
            <p className={styles.felixChirinosP}>&nbsp;</p>
            <p className={styles.felixChirinosP}>Project Manager</p>
            <p className={styles.felixChirinosP}>Frontend Engineer</p>
            <p className={styles.backendEngineerP}>UI/UX Prototyper</p>
          </div>
        </p>
        <p className={styles.felixP}>
          <div className={styles.felixChirinosBackendEngine}>
            <p className={styles.felixChirinosP}>Carlos Pereira</p>
            <p className={styles.felixChirinosP}>&nbsp;</p>
            <p className={styles.backendEngineerP}>Backend Engineer</p>
          </div>
        </p>
        <p className={styles.felixP}>
          <div className={styles.felixChirinosBackendEngine}>
            <p className={styles.felixChirinosP}>Gerald Ehidom</p>
            <p className={styles.felixChirinosP}>&nbsp;</p>
            <p className={styles.backendEngineerP}>Frontend Engineer</p>
          </div>
        </p>
      </div>
      <div className={styles.infoDiv}>
        <p className={styles.visitOurTeamOrganizationAt}>
          Visit Our Team Organization at https://github.com/hope2handteam
        </p>
        <img className={styles.qRh2hIcon} alt="" src="../QRh2h@2x.png" />
      </div>
    </section>
  );
};

export default AboutTeamSection;