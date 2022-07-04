import { useState, useEffect } from 'react'
import Axios from "axios"
import { Link } from 'react-router-dom'

const Home = () => {
    const [list, setList] = useState ([])
    const [searchValue, setSearchValue] = useState("")    

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    var filterList = list.filter((list) => {
        var returnArr = list.head.includes(searchValue)
        return returnArr
    })
    

    useEffect (()=>{
        Axios.get("http://localhost:3001/getNotes").then((response) => {
            setList (response.data)
        })
    }, [])

    return (
        <div>
            <div>
                <div class="search-container search-bar">
                        <input type="text" placeholder="search notes..." value={searchValue} onChange={handleInputChange} />
                </div>
            </div>

            <div class="grid-container">
                {filterList.map((list) => {
                    return (
                        <div class="grid-item" key={list._id.toString()}>
                            <Link to={`/note/${list._id}`}>
                                <div>

                                    <h3 class="note-title">{list.head}</h3>

                                    <div>
                                        {list.body && <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Froundies-icons%2F32%2Fmore-512.png&f=1&nofb=1" width="10px"></img>}
                                    </div>

                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Home

