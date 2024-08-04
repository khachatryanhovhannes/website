import { EDUCATION_ITEMS, EXPERIENCE_ITEMS } from "@/constants";
import classes from "./expertise.module.css";

function Expertise() {
  return (
    <main className={classes.expertise}>
      <section className={classes.expertiseContent}>
        <h2 className={classes.heading}>Expertise</h2>
        <h3 className={classes.subheading}>Experience</h3>
        <div className={classes.timelineItems}>
          {EXPERIENCE_ITEMS.map((item) => {
            return (
              <div className={classes.timelineItem} key={item.date}>
                <div className={classes.timelineDot}></div>
                <div className={classes.timelineFullContent}>
                  <div className={classes.timelineDate}>{item.date}</div>
                  <div className={classes.timelineContent}>
                    <div className={classes.timelineCompanyName}>
                      {item.company}
                    </div>
                    <h3>{item.position}</h3>
                    <p>{item.description.mainText}</p>
                    <div className={classes.descriptionList}>
                      {item.description.bulletPoints.map((listItem, index) => (
                        <li key={index}>{listItem}</li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className={classes.subheading}>Education</h3>
        <div className={classes.timelineItems}>
          {EDUCATION_ITEMS.map((item) => {
            return (
              <div className={classes.timelineItem} key={item.date}>
                <div className={classes.timelineDot}></div>
                <div className={classes.timelineFullContent}>
                  <div className={classes.timelineDate}>{item.date}</div>
                  <div className={classes.timelineContent}>
                    <div className={classes.timelineCompanyName}>
                      {item.company}
                    </div>
                    <h3>{item.position}</h3>
                    <p>{item.description.mainText}</p>
                    <div className={classes.descriptionList}>
                      {item.description.bulletPoints.map((listItem, index) => (
                        <li key={index}>{listItem}</li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Expertise;
