import { useState, useEffect } from 'react'
import Axios from "axios"
import { useParams, useNavigate } from 'react-router-dom';
import "./ViewNote.css"

const ViewNote = () => {

    const navigate = useNavigate()
    const id = useParams().id;
    const reqeustString = "http://localhost:3001/note/" + id;
    console.log(reqeustString)
    
    const [note, setNote] = useState({})

    useEffect (()=>{
        Axios(reqeustString).then((res) => {
            setNote ( {
                id: res.data._id,
                head : res.data.head,
                body : res.data.body
            } )
        });
    }, [])

    const deleteNote = (event) => {
        const deleteString = "http://localhost:3001/delete/" + id;
        Axios.delete(deleteString).then((res) => {
            navigate('/')
        })
        
    }
    

    return (
        <div >
            <div class="view-note">
                <h1 class="new-note-container">{note.head}</h1>
                <p class="new-note-container">{note.body}</p>
            </div>
            
            <div class="new-note-container">
                
                <a href={`/edit/${note.id}`} class="btn">Edit</a>
                <button onClick={deleteNote} class="btn">Delete</button>
            </div>
        </div>
    )
}

export default ViewNote