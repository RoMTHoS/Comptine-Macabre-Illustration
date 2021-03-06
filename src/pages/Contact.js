import React, { useContext } from "react";
import { LeftSideContext } from "../contexts/leftSideContext";
import { RightSideContext } from "../contexts/rightSideContext";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { setRightSide } = useContext(RightSideContext);
  const { setLeftSide } = useContext(LeftSideContext);

  setRightSide("Accueil");
  setLeftSide("Oeuvres");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "comptines_macabre",
        "template_macabre",
        e.target,
        "user_1mYh2zHSBH7fO9mC2HsZO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(
      "Votre message à bien été envoyé. Merci pour votre attention, exelente journée à vous !"
    );
  };

  return (
    <main className="contact">
      <div className="presentation">
        <img src="./images/0.jpg" alt="profil" />
        <p>
          {" "}
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="contact-form">
        <h2>Contact</h2>
        <form onSubmit={sendEmail}>
          <div className="person-info">
            <label>
              Nom :<br />
              <input
                name="name"
                type="text"
                placeholder="Nom"
                required="required"
              />
            </label>
            <label>
              Email :<br />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required="required"
              />
            </label>
            <label>
              Objet <br />
              <input
                name="object"
                type="text"
                placeholder="Objet"
                required="required"
              />
            </label>
          </div>
          <div className="message">
            <label>
              Message :<br />
              <textarea
                name="message"
                type="text"
                placeholder="Message"
                required="required"
              ></textarea>
            </label>
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
