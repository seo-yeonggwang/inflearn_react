import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="파이썬" numOfPage={300} />
            <Book name="대한민국" numOfPage={350} />
            <Book name="국어" numOfPage={500} />
        </div>
    );
}

export default Library;