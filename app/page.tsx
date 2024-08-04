/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import classes from "./home.module.css";
import Image from "next/image";
import hero from "../public/hero.png";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

export default function Home() {
  return (
    <main className={classes.home}>
      <section className={classes.homeContent}>
        <h1>
          Hi, It's <span>Hovhannes</span>
        </h1>
        <h3 className={classes.textAnimation}>
          I'm a <span></span>
        </h3>
        <p>
          As a detail-oriented Software Developer proficient in React and
          Node.js, I bring a wealth of experience and dedication to every
          project. With a passion for problem-solving and a drive to deliver
          impactful solutions, I thrive in dynamic team environments. I am
          committed to continuous learning and growth, always seeking to expand
          my knowledge and skills in software development.
        </p>

        <div className={classes.socialIcons}>
          <Link
            href="https://www.linkedin.com/in/khachatryan-hovhannes/"
            target="_blank"
          >
            <IoLogoLinkedin />
          </Link>
          <Link href="https://github.com/khachatryanhovhannes" target="_blank">
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
        </div>

        <div className={classes.btnGroup}>
          <Link className={classes.btn} href="/Hovhannes Khachatryan-CV.pdf" target="_blank">
            Hire
          </Link>
          <Link className={classes.btn} href="/contact">
            Contact
          </Link>
        </div>
      </section>
      <div className={classes.homeImage}>
        <Image src={hero} alt="hero" />
      </div>
    </main>
  );
}
