import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const [terms, setTerms] = useState("");

  useEffect(()=>{
    fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
    .then(response => {
      if(response.status === 200){
        return response.text();
      }
      throw new Error("Failed to fetch resource!")
    })
    .then(data => {
      setTerms(data)
    })
  },[])

  return (
    <div className="App">
      <div class="container is-fullhd">
          <Document title={"Terms and Conditions"} content={terms} />
      </div>
    </div>
  );
}

export default App;
