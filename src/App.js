import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import FeedBackPage from "./Pages/FeedBackPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="feedback" element={<FeedBackPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
