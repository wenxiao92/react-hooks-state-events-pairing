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
let hiding



function handleClick(){
    setToggle((toggleComment) => !toggleComment)
    hiding = toggleComment ? {display:"block"} : {display:"none"}
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