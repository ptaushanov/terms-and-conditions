import { useState } from "react";

const Document = ({title, content}) => {
    const [wasRead, setWasRead] = useState(false)

    const handleScroll = (e) =>{
        const element = e.target
        if(element.scrollHeight - element.scrollTop === element.clientHeight) {
            setWasRead(true);
        } 
    }

    return ( 
        <div className="terms">
            <h1 className="title">{title}</h1>
            <p className="content" onScroll={handleScroll}>{content}</p>
            <button disabled={!wasRead}>I Agree</button>
        </div>
     );
}
 
export default Document;