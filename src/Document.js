import { useState } from "react";

const Document = ({title, content}) => {
    const [wasRead, setWasRead] = useState(false)

    const handleScroll = ({target}) =>{
        let scrolledToEnd = target.scrollHeight - Math.abs(target.scrollTop) === target.clientHeight
        if(scrolledToEnd) {
            setWasRead(true);
        } 
    }

    return ( 
        <div className="Document">
            <div className="title">{title}</div>
            <div className="content"
                style = {{
                    overflowY:"scroll",
                    width: "30rem",
                    height: "30rem"
                }}
                onScroll={handleScroll}
            >{content}</div>
            <button disabled={!wasRead}>I Agree</button>
        </div>
     );
}
 
export default Document;