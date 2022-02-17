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
    <form onSubmit={handleIllustrationStorySubmit}>
      {existingStory ? (
        <h2>Update the Illustration Story</h2>
      ) : (
        <h2>Add a new Illustration Story</h2>
      )}
      <div>
        <div className="image-box">
          Story Illustration
          <AddImage
            basePath="stories"
            existingImageUrl={imageUrl}
            handleUploadFinish={(downloadUrl) => setImageUrl(downloadUrl)}
            handleUploadCancel={() => setImageUrl("")}
          ></AddImage>
        </div>
        <label>
          Title :
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Story :
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </label>
      </div>
      <div>
        <button type="submit">
          {" "}
          {existingStory ? "Update Story" : "Add Story"}{" "}
        </button>
        {existingStory ? (
          <>
            <button type="button" onClick={handleEditStoryCancel}>
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleDeleteStory(existingStory.id)}
            >
              Delete
            </button>
          </>
        ) : null}
      </div>
    </form>
  );
};

export default AddStory;
