import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import GalleryPage from "./components/GalleryPage";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route exact path="/" element={<GalleryPage/>}/>
       <Route exact path="/about" element={<AboutPage />}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
