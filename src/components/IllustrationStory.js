import { useContext, useEffect, useState } from "react";
import { IllustrationStoryContext } from "../contexts/illustrationStoryContext";

const IllustrationStory = () => {
  const { illustrationStory, setIllustrationStory } = useContext(
    IllustrationStoryContext
  );
  const { illustrationStoryContent, imageUrl } = useContext(
    IllustrationStoryContext
  );
  let x;

  function handleImageClick(event) {
    setIllustrationStory(!illustrationStory);
    console.log(illustrationStoryContent);
    console.log(imageUrl);
  }

  function showIllustrationStory(imageUrl) {
    for (x in illustrationStoryContent) {
      if (imageUrl === illustrationStoryContent[x].imageUrl) {
        console.log(illustrationStoryContent[x]);
        return x;
      }
    }
  }

  function addX() {
    console.log(x);
    parseInt(x);
    x++;
    console.log(typeof x);
    console.log(x);
  }
  function dedX(x) {
    x--;
  }

  //showIS =
  showIllustrationStory(imageUrl);
  console.log(typeof x);

  return (
    <div className="illustration-story">
      <div className="overlay">
        <button onClick={handleImageClick}>CLOSE</button>
        <div className="story">{illustrationStoryContent[x].title}</div>
        <div className="story">{illustrationStoryContent[x].text}</div>
        <div className="illustration">
          <img src={illustrationStoryContent[x].imageUrl} alt="" />
        </div>
        <button onClick={(x) => dedX(x)}>LAST</button>
        <button onClick={(x) => addX(x)}>NEXT</button>
      </div>
    </div>
  );
};

export default IllustrationStory;
