import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const [terms, setTerms] = useState("");

  useEffect(()=>{
    (async() => {
      const response = await fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt");
      const data = await response.text();
      setTerms(data)
    })();
  },[])

  return (
    <Document title={"Terms and Conditions"} content={terms} />
  );
}

export default App;
