import React, { useEffect, useState } from "react";
import { useParams ,Link, useNavigate } from "react-router-dom";
import "./Component1.css"

const SingleMovie = (props) =>{
const {id}=useParams()
const [movie , setMovie] = useState("") 
const navigate = useNavigate()
const [loading , setLoading] = useState(true)

const getMovie = async() =>{
    try{
        const a = await fetch(`http://www.omdbapi.com/?apikey=ae2358d0&i=${id}`)
        const result = await a.json()
        console.log(result)
        if(result.Response === "True"){
            setMovie(result)
            setLoading(false)
        }
    }
    catch(error){
        console.log(error)
    }
}
useEffect(()=>{getMovie()}, [])
if(loading){
    return <div>
        <h3>Loading ....</h3>
    </div>
}

    return(
        <>
            <h2>Movie - {id}</h2>
            <br/>
            <div>
                {
                    <div className="sm_card">
                        <div className="poster">
                            <img src={movie.Poster} alt={movie.Poster}></img>
                        </div>
                        <div className="m_detail">
                            <h3>Name : <span>{movie.Title}</span></h3>
                            <h4>Year :<span>{movie.Year}</span></h4>
                            <h4>Relised : <span>{movie.Released}</span></h4>
                            <h4>Country : <span>{movie.Country}</span></h4>
                            <h4>Type : <span>{movie.Genre}</span></h4>
                            <h4>Rating : <span>{movie.imdbRating}</span></h4>
                            <button onClick={()=>navigate("/")}>Go Back</button>
                            
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default SingleMovie;