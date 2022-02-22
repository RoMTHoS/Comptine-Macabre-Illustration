import { useContext, useEffect } from "react";
import { IllustrationStoryContext } from "../contexts/illustrationStoryContext";
import Image from "./Image";

const IllustrationStory = () => {
  const {
    illustrationStory,
    setIllustrationStory,
    illustrationStoryContent,
    showIS,
    setShowIS,
    index,
    setIndex,
  } = useContext(IllustrationStoryContext);

  function handleImageClick() {
    setIllustrationStory(!illustrationStory);
  }

  useEffect(() => {
    setShowIS(illustrationStoryContent[index]);
  }, [index]);

  function add() {
    if (index < illustrationStoryContent.length - 1) {
      setIndex(parseInt(index) + 1);
    } else {
      setIndex(0);
    }
  }
  function ded() {
    if (index > 0) {
      setIndex(parseInt(index) - 1);
    } else {
      setIndex(illustrationStoryContent.length - 1);
    }
  }

  return (
    <div className="illustration-story">
      <div className="overlay">
        <button onClick={handleImageClick}>CLOSE</button>
        <div className="story">{showIS.title}</div>
        <div className="illustration">
          <Image src={showIS.imageUrl} />
        </div>
        <div className="story">{showIS.text}</div>
        <button onClick={ded}>LAST</button>
        <button onClick={add}>NEXT</button>
      </div>
    </div>
  );
};

export default IllustrationStory;
