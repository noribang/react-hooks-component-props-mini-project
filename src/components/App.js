import React from "react";
import Header from "./Header";
import About from "./About";
import blogData from "../data/blog";


function App() {
  // console.log("blogData: ", blogData)
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name = {blogData.name} />
      <About image = {blogData.image} about = {blogData.about}/>
    </div>
  );
}

export default App;
