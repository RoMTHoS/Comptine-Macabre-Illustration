import Router from "./Router";
import "./style/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftSideProvider from "./contexts/leftSideContext";
import RightSideProvider from "./contexts/rightSideContext";
import { IllustrationStoryContext } from "./contexts/illustrationStoryContext";
import IllustrationStory from "./components/IllustrationStory";
import { useContext } from "react";

function App() {
  const { illustrationStory } = useContext(IllustrationStoryContext);
  return (
    <>
      <LeftSideProvider>
        <RightSideProvider>
          {illustrationStory ? (
            <IllustrationStory />
          ) : (
            <>
              <Header />
              <Router />
              <Footer />
            </>
          )}
        </RightSideProvider>
      </LeftSideProvider>
    </>
  );
}

export default App;
