import React from "react";
import './App.css'
import SectionOne from "./Containers/SectionOne";
import SectionTwo from "./Containers/SectionTwo";
import SectionThree from "./Containers/SectionThree";

const App = () => {

  // useEffect(() => {
  //   fetch('https://api.jikan.moe/v3/top/anime/1')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // })

  return (
    <div className="app">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}

export default App;