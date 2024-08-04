import classes from "./contact.module.css";

function Contact() {
  return (
    <main className={classes.contact}>
      <section className={classes.contactContent}>
        <h2 className={classes.heading}>
          Contact <span>Me</span>
        </h2>
        <form action="">
          <div className={classes.inputGroup}>
            <div className={classes.inputBox}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className={classes.inputBox}>
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <div className={classes.inputGroup2}>
              <textarea name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;
