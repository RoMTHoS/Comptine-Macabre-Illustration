import Router from "./Router";
import "./style/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftSideProvider from "./contexts/leftSideContext";
import RightSideProvider from "./contexts/rightSideContext";
import firebase from "./FirebaseConfig";

function App() {
  return (
    <>
      <LeftSideProvider>
        <RightSideProvider>
          <Header />
          <Router />
          <Footer />
        </RightSideProvider>
      </LeftSideProvider>
    </>
  );
}

export default App;
