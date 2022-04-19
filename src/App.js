import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import GalleryPage from "./components/GalleryPage";
import Header from "./components/Header";
import ItemPage from "./components/ItemPage";


function App() {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route exact path="/" element={<GalleryPage/>}/>
       <Route exact path="/about" element={<AboutPage />}/>
       <Route exact path="/item/:id" element={<ItemPage />}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
