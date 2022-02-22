import { createContext, useState } from "react";

export const IllustrationStoryContext = createContext();

function IllustrationStoryProvider({ children }) {
  const [illustrationStory, setIllustrationStory] = useState(false);
  const [illustrationStoryContent, setIllustrationStoryContent] = useState([]);
  const [showIS, setShowIS] = useState({});
  const [index, setIndex] = useState(0);

  return (
    <IllustrationStoryContext.Provider
      value={{
        illustrationStory,
        setIllustrationStory,
        illustrationStoryContent,
        setIllustrationStoryContent,
        showIS,
        setShowIS,
        index,
        setIndex,
      }}
    >
      {children}
    </IllustrationStoryContext.Provider>
  );
}

export default IllustrationStoryProvider;
