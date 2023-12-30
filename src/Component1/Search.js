import React, { useContext} from "react";
import "./Component1.css";
import { mes } from "./Context";

const Search = () =>{

    const {search , setSearch} = useContext(mes)

    const change = (e) => {
        e.preventDefault()
        console.log(search)
    }

    return(
        <>
        {/* <h2>Search</h2> */}
        <form className="search_fm" onSubmit={change}>
            <input type="text" value={search} placeholder="Search ?" onChange={(e)=>setSearch(e.target.value)}></input>
        </form>
        </>
    )
}

export default Search;