import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import GalleryPage from "./components/GalleryPage";


function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<GalleryPage/>}/>
       <Route exact path="/about" element={<AboutPage />}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
