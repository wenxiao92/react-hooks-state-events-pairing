import React, {useState} from "react";

function Votes({upVotes, downVotes}){
const [upVote, setUpVote] = useState(upVotes)
const [downVote, setDownVote] = useState(downVotes)

function incrementUp(){
    setUpVote((currentCount) => currentCount + 1)
}
function incrementDown(){
    setDownVote((currentCount) => currentCount + 1)
}


return(
    <h3>
    <button onClick={incrementUp}>{upVote} 👍</button>

    <button onClick={incrementDown}>{downVote} 👎</button>
    </h3>
)


}

export default Votes