//components
import NewNote from '../components/NewNote/NewNote'
import { useState, useEffect } from 'react'
import Axios from "axios";

const NewNotePage = () => {
    return (  
        <div>
            <NewNote />
        </div>
    )
}

export default NewNotePage