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
      <form onSubmit={sendEmail}>
        <input name="name" type="text" placeholder="Nom" />
        <input name="email" type="email" placeholder="Email" />
        <input name="object" type="text" placeholder="Objet" />
        <input name="message" type="text" placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Contact;
