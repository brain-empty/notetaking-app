import "./NewNote.css";
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Axios from "axios";
import ErrorDialogue from "../errorDialogue/ErrorDialogue";

const NewNote = (props) => {
    const navigate = useNavigate()

    const [noteContent, setNewContent] = useState("")
    const [noteContentHead, setNewContentHead] = useState("")
    const [errorMessage, setErrorMessage] = useState("")    // error message holds the message for the error
    const [noteHead, setNoteHead] = useState("")

    var noteId = ""

    const handleInputChange = (event) => {
        setNewContent(event.target.value)
    }    
    const handleInputChangeHead = (event) => {
        setNewContentHead(event.target.value)
    }    


    useEffect (()=>{
        if (props.id) {

             const requestString = "http://localhost:3001/note/" + props.id;

            Axios(requestString).then((res) => {
                setNewContentHead(res.data.head)
                setNewContent(res.data.body)
                setNoteHead (res.data.head)
            });
        }
    }, [])


    const addNote =  (event)=> {
        event.preventDefault();
        var data = {
            head: noteContentHead,
            body: noteContent,
        }

        if (props.id)
        {
            data.id = props.id
            Axios
                .put('http://localhost:3001/putNote', data)
                .then(function (response) 
                {
                    console.log(response);

                    if (response.data.name)
                    { //data.name is only returned when there is an error on the server side and it holds the name of the error
                        setErrorMessage(response.data.message)
                    } 
                    else
                    {
                        noteId = "/note/" + response.data._id
                        navigate(noteId)
                    }
                })
                .catch(function (error) {console.log(error);});
            
        } 
        else
        {
            Axios
                .post('http://localhost:3001/postNote', data)
                .then(function (response) {
                        console.log(response);
                        if (response.data.name) { //data.name is only returned when there is an error on the server side and it holds the name of the error
                            console.log("oh no")
                            setErrorMessage(response.data.message)
                        } else {
                            noteId = "/note/" + response.data._id
                            navigate(noteId)
                        }
                    })
                .catch(function (error) {console.log(error);});
        }
        
    }

    return (
        <div>
            {errorMessage != "" && <ErrorDialogue message = {errorMessage}/> /* if error message exists, then render errorDialogue componenet */} 
            {props.id && <h1>Editing: {noteHead} <i></i></h1>}
        <div class="new-note-container2">
            
            
            <div class="width-100">
                <h2>Head</h2>
                <div class="width-100 new-note-container3">
                <input type="text" maxLength="80" class="new-note-head" name="head" value={noteContentHead} onChange={handleInputChangeHead}/>
                </div>
                <h3>Body</h3>
                <div class="new-note-container3">
                <textarea class="new-note" name="body" value={noteContent} onChange={handleInputChange}/>
                </div>
                <button class="btn" onClick={addNote}>Submit</button>
            </div>
        </div>        
        </div>
    )
}

export default NewNote