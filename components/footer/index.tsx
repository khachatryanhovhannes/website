import Link from "next/link";
import classes from "./footer.module.css";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";
import { IoLogoMedium } from "react-icons/io5";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div>
          <p> About Me</p>
          <Link href="/about" className={classes.link}>
            My Journey
          </Link>
          <Link href="/about" className={classes.link}>
            My Expertise
          </Link>
          <Link href="/about" className={classes.link}>
            What Drives Me
          </Link>
        </div>
        <div>
          <p> Expertise</p>
          <Link href="/expertise" className={classes.link}>
            Experience
          </Link>
          <Link href="/expertise" className={classes.link}>
            Education
          </Link>
        </div>
        <div>
          <p>Services</p>
          <Link href="/services" className={classes.link}>
            Skills
          </Link>
          <Link href="/services" className={classes.link}>
            Soft Skills
          </Link>
        </div>
        <div className={classes.social}>
          <p>Follow me</p>
          <div className={classes.socialIcons}>
            <Link
              href="https://www.linkedin.com/in/khachatryan-hovhannes/"
              target="_blank"
            >
              <IoLogoLinkedin />
            </Link>
            <Link
              href="https://github.com/khachatryanhovhannes"
              target="_blank"
            >
              <IoLogoGithub />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100011098380942"
              target="_blank"
            >
              <IoLogoFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/hovhannes_khachatrian/"
              target="_blank"
            >
              <IoLogoInstagram />
            </Link>
            <Link
              href="https://khachatryanhovhannes02.medium.com/"
              target="_blank"
            >
              <IoLogoMedium />
            </Link>
          </div>
        </div>
      </div>
      <p className={classes.copy}>
        &copy; {new Date().getFullYear()} Khachatryan Hovhannes. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
