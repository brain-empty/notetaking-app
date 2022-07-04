//components
import NewNote from '../components/NewNote/NewNote'
import React from 'react'
import { useParams }from 'react-router-dom';

const EditNote = () => {
    const id = useParams().id
    return (  
        <div>
            <NewNote id={id} />
        </div>
    )
}

export default EditNote