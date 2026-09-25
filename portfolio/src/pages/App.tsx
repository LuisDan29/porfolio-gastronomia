//import Hero from "../components/Hero/Hero";
import NewHero from "../components/NewHero/NewHero";
import ImageGallery from "../components/ImageGallery/ImageGallery";

import "./App.css";

import { galleries } from "../data/galleries";

function App() {
  return (
    <>
      <NewHero />
      <ImageGallery gallery={galleries[3]} />
      <ImageGallery gallery={galleries[2]} />
      <ImageGallery gallery={galleries[1]} />
      <ImageGallery gallery={galleries[0]} />
    </>
  )
}

export default App;
