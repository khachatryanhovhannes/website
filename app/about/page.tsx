/* eslint-disable react/no-unescaped-entities */
import classes from "./about.module.css";

function About() {
  return (
    <main className={classes.about}>
      <section className={classes.aboutContent}>
        <h2 className={classes.heading}>About</h2>
        <p>
          Hello! I'm Hovhannes, a passionate and skilled software developer
          specializing in creating dynamic and user-centric web applications.
          With a strong background in both front-end and back-end development, I
          focus on delivering high-quality, scalable solutions tailored to meet
          the unique needs of each project.
        </p>
        <h2 className={classes.subheading}>My Journey</h2>
        <p>
          I embarked on my development journey with a solid foundation in HTML,
          CSS, and JavaScript, which I expanded through hands-on experience and
          formal education. Over the years, I have honed my skills in modern
          technologies such as React, Next.js, Node.js, and TypeScript, allowing
          me to build seamless and interactive web applications.
        </p>
        <h2 className={classes.subheading}>My Expertise</h2>
        <p>
          Currently, I am working as an Automation and Back-end Developer at
          MFMSoft, where I excel in designing and implementing efficient
          server-side solutions and automation workflows. My role involves
          managing RESTful APIs, integrating cloud services, and optimizing
          business processes through automation. In addition to my current role,
          my previous experiences as a Front-end Developer intern at PADC LLC
          and as a Frontend Developer during my education have provided me with
          a well-rounded skill set. I have developed web applications with
          responsive design principles, utilized modern libraries and
          frameworks, and applied internationalization practices for global
          reach.
        </p>
        <h2 className={classes.subheading}>What Drives Me</h2>
        <p>
          I am passionate about staying at the forefront of technology and
          continuously improving my skills. I thrive on solving complex
          problems, collaborating with teams, and delivering solutions that
          exceed expectations. Whether it's through innovative front-end designs
          or robust back-end architecture, I am dedicated to creating
          exceptional web experiences.
        </p>
      </section>
    </main>
  );
}

export default About;
