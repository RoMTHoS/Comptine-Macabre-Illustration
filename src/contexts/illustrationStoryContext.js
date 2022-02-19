import { createContext, useState } from "react";

export const IllustrationStoryContext = createContext();

function IllustrationStoryProvider({ children }) {
  const [illustrationStory, setIllustrationStory] = useState(false);
  const [illustrationStoryContent, setIllustrationStoryContent] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  return (
    <IllustrationStoryContext.Provider
      value={{
        illustrationStory,
        setIllustrationStory,
        illustrationStoryContent,
        setIllustrationStoryContent,
        imageUrl,
        setImageUrl,
      }}
    >
      {children}
    </IllustrationStoryContext.Provider>
  );
}

export default IllustrationStoryProvider;
