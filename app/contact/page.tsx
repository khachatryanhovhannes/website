"use client";
import { useForm } from "react-hook-form";
import classes from "./contact.module.css";
import emailjs from "@emailjs/browser";

interface IData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  phoneNumber: string;
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>();

  const onSubmit = (data: IData) => {
    const formData: Record<string, unknown> = {
      fullName: data.fullName,
      email: data.email,
      subject: data.subject,
      message: data.message,
      phoneNumber: data.phoneNumber,
    };

    emailjs
      .send(
        "service_x9d252n",
        "template_vfiuht9",
        formData,
        "5-Tj1b1xzIQ-shfC9"
      )
      .then(
        () => {
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <main className={classes.contact}>
      <section className={classes.contactContent}>
        <h2 className={classes.heading}>
          Contact <span>Me</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.inputGroup}>
            <div className={classes.inputBox}>
              <div className={classes.inputWrapper}>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                />
                {errors.fullName && (
                  <span className={classes.error}>
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className={classes.inputWrapper}>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className={classes.error}>{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className={classes.inputBox}>
              <div className={classes.inputWrapper}>
                <input
                  type="number"
                  placeholder="Phone Number"
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                  })}
                />
                {errors.phoneNumber && (
                  <span className={classes.error}>
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
              <div className={classes.inputWrapper}>
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <span className={classes.error}>
                    {errors.subject.message}
                  </span>
                )}
              </div>
            </div>
            <div className={classes.inputGroup2}>
              <div className={classes.inputWrapper}>
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <span className={classes.error}>
                    {errors.message.message}
                  </span>
                )}
              </div>
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;
