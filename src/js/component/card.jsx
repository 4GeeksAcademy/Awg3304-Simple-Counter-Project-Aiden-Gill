import React from "react";

export const Card = ({message,color,textColor}) => {
return(
    <div className={"card col-4 mx-2 g-2 " + color + " " + textColor}>
        <h1>{message}</h1>
    </div>
)
}