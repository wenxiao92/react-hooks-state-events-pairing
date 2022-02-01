import React from "react";

function Header({prop}){
console.log(prop)

return(
<div>
    <h2>{prop.title}</h2>
    <div>{prop.views} | uploaded {prop.createdAt}</div>

</div>

)
}

export default Header;