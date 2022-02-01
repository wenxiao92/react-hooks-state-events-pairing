import React, {useState} from "react";
import Comments from "./Comments.js";

function CommentArea({comments}){

const displayComments = comments.map((eachComment)=>(
    <Comments
    key={eachComment.id}
    user={eachComment.user}
    comment={eachComment.comment}
    
    />
))

const [toggleComment, setToggle] = useState(false)
const hideUnhideComment = (toggleComment ? "" : `${comments.length} Comments`)

//handles the displaying of the whole div that controls the comments and the objects
let hiding = toggleComment ? {display:"none"} : {display:"block"}



function handleClick(){
    
    setToggle((toggleComment) => !toggleComment)
    
}

return(
    <div>
        <button onClick={handleClick}>{toggleComment ? "Show Comments" : "Hide Comments"} </button>
        <hr></hr>
        <div id="commentBox" style={hiding}>
        <h3>{hideUnhideComment}</h3>
        {displayComments}
        </div>
    </div>
)
}

export default CommentArea