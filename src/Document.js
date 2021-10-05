const Document = ({title, content}) => {
    return ( 
        <div className="Document">
            <div className="title">{title}</div>
            <div className="content"
                style = {{overflowY:"scroll"}}
            >{content}</div>
            <button>I Agree</button>
        </div>
     );
}
 
export default Document;