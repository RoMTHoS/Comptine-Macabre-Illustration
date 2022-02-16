import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { LeftSideContext } from "../contexts/leftSideContext";
import { RightSideContext } from "../contexts/rightSideContext";

const Contact = () => {
  const { setRightSide } = useContext(RightSideContext);
  const { setLeftSide } = useContext(LeftSideContext);

  setRightSide("Accueil");
  setLeftSide("Oeuvres");
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
      <Formik initialValues={{ name: "", email: "", object: "", text: "" }}>
        <Form>
          <Field name="name" type="text" placeholder="Nom" />
          <Field name="email" type="email" placeholder="Email" />
          <Field name="object" type="text" placeholder="Objet" />
          <Field name="text" type="text" placeholder="Texte" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </main>
  );
};

export default Contact;
