import React from "react";

function Comments({user, comment}){


return(
    <div>
        <h4>{user}</h4>
        <div>{comment}</div>
    </div>
)
}

export default Comments;