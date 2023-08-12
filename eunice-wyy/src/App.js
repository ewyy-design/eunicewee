import React from "react"

// My components
import Home from "./components/Home"
import PhotoCollage from "./components/PhotoCollage"
import About from "./components/About"
import Experience from "./components/Experience"
import Work from "./components/Work"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div>
      <Home />
      <PhotoCollage/>
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  )
}

export default App
