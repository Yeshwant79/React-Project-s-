import React, {useContext } from "react";
import { mes } from "./Context";
import "./Component1.css";
import { Link } from "react-router-dom";

const Movie = () =>{

    const {item,loading} = useContext(mes)

    if(loading){
        return <div>
            <h3>Loading ....</h3>
        </div>
    }
    // const navigate = useNavigate()
    return(
        <>
            {/* <h2>Movie</h2> */}
            
            <div className="body">
                {/* turnary operate start */}
                {item ?
                    // item.map((value , id)=>{return<div className="card" key={value.imdbId} onClick={()=>{navigate(`/movie/:id`)}}>
                    item.map((value , i)=>{
                        return (
                        <Link to={`/movie/${value.imdbID}`}>
                        <div className="card" key={value.imdbId}>
                            <div className="poster">
                                <img src={value.Poster} alt={value.Poster}></img>
                            </div>
                            <div><h3>{value.Title}</h3></div>
                        </div>
                    </Link> 
                        )
                    })   :"Not found"}
                 {/* turnary operate end */}
            </div>   
        </>
    )
}

export default Movie;