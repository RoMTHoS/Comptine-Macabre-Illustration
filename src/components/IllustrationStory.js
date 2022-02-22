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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <button className="btn-close" onClick={handleImageClick}>
          CLOSE
        </button>
        <div className="story">{showIS.title}</div>
        <button className="btn-last" onClick={ded}>
          LAST
        </button>
        <div className="illustration">
          <Image src={showIS.imageUrl} />
        </div>
        <button className="btn-next" onClick={add}>
          NEXT
        </button>
        <div className="story">{showIS.text}</div>
      </div>
    </div>
  );
};

export default IllustrationStory;
