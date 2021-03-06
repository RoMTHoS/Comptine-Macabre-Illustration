import { Field, Form, Formik } from "formik";
import FirebaseAuthService from "../FirebaseAuthService";
import AddStory from "../components/AddStory";
import { useContext, useEffect, useState } from "react";
import FirebaseFirestore from "../FirebaseFirestore";
import { Link } from "react-router-dom";
import { RightSideContext } from "../contexts/rightSideContext";
import { LeftSideContext } from "../contexts/leftSideContext";

const Admin = ({ existingAdmin }) => {
  const [admin, setAdmin] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [currentStory, setCurrentStory] = useState(null);

  const [stories, setStories] = useState([]);

  const { setRightSide } = useContext(RightSideContext);

  const { setLeftSide } = useContext(LeftSideContext);

  setRightSide("ADMIN AREA");
  setLeftSide("ADMIN AREA");

  useEffect(() => {
    fetchStories()
      .then((fetchedStories) => {
        setStories(fetchedStories);
      })
      .catch((error) => {
        console.error(error.message);
        throw error;
      });
  }, [admin]);

  //Function pour récupérer les données du Firestore
  async function fetchStories() {
    let fetchedStories = [];

    try {
      const response = await FirebaseFirestore.readDocuments("stories");

      const newStories = response.docs.map((storyDoc) => {
        const id = storyDoc.id;
        const data = storyDoc.data();

        return { ...data, id };
      });

      fetchedStories = [...newStories];
    } catch (error) {
      console.error(error.message);
      throw error;
    }

    return fetchedStories;
  }

  async function handleFetchStories() {
    try {
      const fetchedStories = await fetchStories();

      setStories(fetchedStories);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  FirebaseAuthService.subscribeToAuthChanges(setAdmin);
  existingAdmin = admin;
  //Function pour se connecter
  async function handleSubmit(event) {
    console.log(event);
    event.preventDefault();

    try {
      await FirebaseAuthService.loginAdmin(name, password);
      setName("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  }
  //Function pour se deconnecter
  function handleLogout() {
    FirebaseAuthService.logoutAdmin();
  }
  //Function pour ajouter une nouvelle histoire dans BD
  async function handleAdd(newContent) {
    try {
      const response = await FirebaseFirestore.createDocument(
        "stories",
        newContent
      );

      handleFetchStories();

      alert(`succesfully created a story with an ID = ${response.id}`);
    } catch (error) {
      alert(error.message);
    }
  }
  //Function pour modifier les histoires
  async function handleUpdateStory(newStory, storyId) {
    try {
      await FirebaseFirestore.updateDocument("stories", storyId, newStory);

      handleFetchStories();

      alert(`succesfully updated a story with an ID = ${storyId}`);
      setCurrentStory(null);
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }
  //Function pour supprimer les histoires
  async function handleDeleteStory(storyId) {
    const deleteConfirmation = window.confirm(
      "Are you sure you want to delete this Story ?"
    );

    if (deleteConfirmation) {
      try {
        await FirebaseFirestore.deleteDocument("stories", storyId);

        handleFetchStories();
        setCurrentStory(null);

        window.scrollTo(0, 0);

        alert(`succesfully deleted a story with an ID = ${storyId}`);
      } catch (error) {
        alert(error.message);
        throw error;
      }
    }
  }
  //Function pour éditer les histoires
  function handleEditStoryClick(storyId) {
    const selectedStory = stories.find((story) => {
      return story.id === storyId;
    });

    if (selectedStory) {
      setCurrentStory(selectedStory);
      window.scrollTo(0, 0);
    }
  }

  function handleEditStoryCancel() {
    setCurrentStory(null);
  }

  return (
    <div className="admin">
      {existingAdmin ? (
        <div>
          <div className="top-barre">
            <button type="button" onClick={handleLogout}>
              Deconnexion
            </button>
            <h3>Bienvenue, {existingAdmin.email}</h3>
            <Link to="/">Acceuil</Link>
          </div>
          <div className="add-container">
            <AddStory
              existingStory={currentStory}
              handleAdd={handleAdd}
              handleUpdateStory={handleUpdateStory}
              handleDeleteStory={handleDeleteStory}
              handleEditStoryCancel={handleEditStoryCancel}
            ></AddStory>
          </div>
          <div>
            {stories && stories.length > 0 ? (
              <div className="illustration-story-page">
                {stories.map((story) => {
                  return (
                    <div key={story.id} className="illustration-story-content">
                      {story.imageUrl ? (
                        <img
                          src={story.imageUrl}
                          alt={story.name}
                          className="image"
                        />
                      ) : null}
                      <div className="text-content">
                        <div>
                          <h2>{story.title}</h2>
                        </div>
                        <div>{story.text}</div>
                        <div>
                          <button
                            type="button"
                            onClick={() => handleEditStoryClick(story.id)}
                          >
                            Modifier
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <Link to="/">Acceuil</Link>
          <Formik initialValues={{ email: "", password: "" }}>
            <Form onSubmit={handleSubmit}>
              <label htmlFor="email">
                Email :
                <Field
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                Password :
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit">Login</button>
            </Form>
          </Formik>
        </>
      )}
    </div>
  );
};

export default Admin;
