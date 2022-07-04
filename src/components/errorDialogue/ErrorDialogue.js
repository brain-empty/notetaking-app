import React from "react";
import "./errorDialogue.css"

const ErrorDialogue = (props) => {
    return (
        <div class="new-note-container">
            <div class="error-Dialogue"> 
            <div>
                ERROR: {props.message}
             </div>
            </div>
        </div>
    )
}  

export default ErrorDialogue