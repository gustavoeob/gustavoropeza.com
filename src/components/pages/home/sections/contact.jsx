import React, { useRef} from "react";
import "./contact.scss";
import Arrow from "../../../../assets/icons/arrow.svg";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {

  const [t] = useTranslation("global"); 

  const form = useRef();
  const userName = useRef();
  const userSurname = useRef();
  const userEmail = useRef();
  const userMessage = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        "template_pv8vhdk",
        form.current,
        "pJtsb7fOW7X2WWIFd"
      )
      .then(
        (result) => {
          alert("Email sent ✅");
        },
        (error) => {
            alert("Try again ❌");
        }
        );
        userName.current.value = "";
        userSurname.current.value = "";
        userEmail.current.value = "";
        userMessage.current.value = "";
  };

  return (
    <section className="main-container contact-container" id="contact">
      <div className="contact-box">
        <h2 className="section-title">{t("appbar.contact")}</h2>
        <div className="contact-layout">
          <form
            action="submit"
            className="contact-form"
            id="contact-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              required
              type="text"
              placeholder={t("placeholder.name")}
              className="name-input"
              id="from_name"
              name="user_name"
              ref={userName}
            />
            <input
              required
              type="text"
              placeholder={t("placeholder.surname")}
              className="surname-input"
              id="from_surname"
              name="user_surname"
              ref={userSurname}

            />
            <input
              required
              type="email"
              placeholder={t("placeholder.email")}
              className="email-input"
              id="email_id"
              name="user_email"
              ref={userEmail}

            />
            <textarea
              type="text"
              placeholder={t("placeholder.message")}
              className="message-input"
              id="message"
              name="message"
              ref={userMessage}

            />
            <button
              type="submit"
              className="send-button"
              id="button"
              value="send"
            >
              {t("send.text")}
              <img src={Arrow} alt="send icon arrow" className="arrow-icon" />{" "}
            </button>
          </form>
          <div className="contact-right-container">
            <h2>{t("contact.text")}</h2>
            <div className="email-link-container">
              <a
                href="mailto:gustavooropezadev@gmail.com"
                className="email-link"
              >
                gustavo oropeza
                dev @gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
