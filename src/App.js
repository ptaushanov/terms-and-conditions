import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const [terms, setTerms] = useState("");

  useEffect(()=>{
    fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
    .then(res => {
      if(res.status === 200){
        return res.text();
      }
      throw new Error("Failed to fetch resource!")
    })
    .then(data => {
      setTerms(data)
    })
  },[])

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <Document title={"Terms and Conditions"} content={terms} />
      </div>
    </div>
  );
}

export default App;
