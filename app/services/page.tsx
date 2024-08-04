import { SERVICES_ITEMS, SKILLS_ITEMS } from "@/constants";
import classes from "./services.module.css";
import Image from "next/image";

function Services() {
  return (
    <main className={classes.services}>
      <section className={classes.servicesContent}>
        <h2 className={classes.heading}>Services</h2>

        <div className={classes.servicesContainer}>
          {SERVICES_ITEMS.map((item) => {
            return (
              <div className={classes.serviceBox} key={item.title}>
                <div className={classes.serviceInfo}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <h2 className={classes.subheading}>Skills</h2>
        <div className={classes.skills}>
          {SKILLS_ITEMS.technologies.map((item) => {
            return (
              <div className={classes.skill} key={item.name}>
                <div className={classes.skillImage}>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={classes.skillContent}>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <h2 className={classes.subheading}>Soft Skills</h2>
        <div className={classes.skills}>
          {SKILLS_ITEMS.softSkills.map((item) => {
            return (
              <div className={classes.skill} key={item.name}>
                <div className={classes.skillImage}>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={classes.skillContent}>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Services;
