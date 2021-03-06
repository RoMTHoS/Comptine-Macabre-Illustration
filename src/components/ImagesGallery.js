import React, { useContext, useEffect, useState } from "react";
import { IllustrationStoryContext } from "../contexts/illustrationStoryContext";
import FirebaseFirestore from "../FirebaseFirestore";

const Images = () => {
  const [stories, setStories] = useState([]);
  const { illustrationStory, setIllustrationStory } = useContext(
    IllustrationStoryContext
  );
  const {
    illustrationStoryContent,
    setIllustrationStoryContent,
    setShowIS,
    setIndex,
  } = useContext(IllustrationStoryContext);

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

  useEffect(() => {
    fetchStories()
      .then((fetchedStories) => {
        setStories(fetchedStories);
      })
      .catch((error) => {
        console.error(error.message);
        throw error;
      });
  }, []);

  setIllustrationStoryContent(stories);

  function handleImageClick(event) {
    setIllustrationStory(!illustrationStory);
    let x;
    for (x in illustrationStoryContent) {
      if (event.target.currentSrc === illustrationStoryContent[x].imageUrl) {
        setIndex(x);
        setShowIS(illustrationStoryContent[x]);
      }
    }
  }

  return (
    <>
      <div className="images">
        {stories.map((story) => {
          return (
            <div key={story.id}>
              {story.imageUrl ? (
                <img
                  draggable="false"
                  onClick={handleImageClick}
                  src={story.imageUrl}
                  alt={story.name}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Images;
