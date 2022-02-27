import { useEffect, useState } from "react";
import AddImage from "./AddImage";

const AddStory = ({
  existingStory,
  handleAdd,
  handleUpdateStory,
  handleDeleteStory,
  handleEditStoryCancel,
}) => {
  useEffect(() => {
    if (existingStory) {
      setTitle(existingStory.title);
      setText(existingStory.text);
      setImageUrl(existingStory.imageUrl);
    } else {
      resetForm();
    }
  }, [existingStory]);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  function handleIllustrationStorySubmit(e) {
    e.preventDefault();

    if (title.length === 0) {
      alert("Title cannot be empty");
      return;
    }

    if (text.length === 0) {
      alert("Text cannot be empty");
      return;
    }

    if (!imageUrl) {
      alert("Missing story image");
      return;
    }

    const newStory = {
      title,
      text,
      imageUrl,
    };

    if (existingStory) {
      handleUpdateStory(newStory, existingStory.id);
    } else {
      handleAdd(newStory);
    }

    resetForm();
  }

  function resetForm() {
    setTitle("");
    setText("");
    setImageUrl("");
  }

  return (
    <div className="form-new-content">
      <form onSubmit={handleIllustrationStorySubmit}>
        {existingStory ? (
          <h2>Mettre à jour l'oeuvre</h2>
        ) : (
          <h2>Ajouter une nouvelle oeuvre</h2>
        )}
        <div className="box">
          <div className="image-box">
            Illustration
            <AddImage
              basePath="stories"
              existingImageUrl={imageUrl}
              handleUploadFinish={(downloadUrl) => setImageUrl(downloadUrl)}
              handleUploadCancel={() => setImageUrl("")}
            ></AddImage>
          </div>
          <div className="text-box">
            <label>
              Titre :
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Histoire :
              <textarea
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </label>
          </div>
        </div>
        <div className="btn-post">
          <button type="submit">
            {" "}
            {existingStory ? "Mettre à jour" : "Ajouter"}{" "}
          </button>
          {existingStory ? (
            <>
              <button type="button" onClick={handleEditStoryCancel}>
                Annuler
              </button>
              <button
                type="button"
                onClick={() => handleDeleteStory(existingStory.id)}
              >
                Supprimer
              </button>
            </>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default AddStory;
