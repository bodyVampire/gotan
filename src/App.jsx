import Album from "./album";
import PrimarySearchAppBar from "./serchbar";

import "./App.css";
import MultiActionAreaCard from "./card";
import Footer from "./footer";

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <Album />
      <MultiActionAreaCard />
      <Footer />
    </>
  );
}

export default App;
