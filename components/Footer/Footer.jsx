import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainDiv}>
        <Link href="/">
          <img
            src="/logo_rvce.jpg"
            alt="RVCE Logo"
            width={80} // Explicit width
            height={80} // Explicit height
            className={styles.logo}
          />
        </Link>
        <div className={styles.centerImage}>
            <img
              src="https://i.ibb.co/dBDxKQt/GO-CHANGE-THE-WORLD.png"
              alt="GO-CHANGE-THE-WORLD"
            />
        </div>
        <div className={styles.collegeInfo}>
          <h1>RV College of Engineering</h1>
          <h2>RV Vidyanikethan Post, Mysuru Road Bengaluru - 560059</h2>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; 2022
            {new Date().getFullYear() > 2022
              ? `-${new Date().getFullYear()}`
              : ''}{' '}
            IEEE RVCE
          </p>
          <p className={styles.developedBy}>
            Developed by{' '}
            <Link
              target="_blank"
              href="https://ieee-rvce.org/#/devs"
              rel="noreferrer"
              className={styles.devLink}
            >
              IEEE RVCE SE Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
