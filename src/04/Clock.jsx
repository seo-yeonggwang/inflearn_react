import React from "react";

function Clock(props){
    return(
        <div>
            <h1>안녕, React!</h1>
            <h2>현재 시간: {new Date(),}</h2>
        </div>
    )
}