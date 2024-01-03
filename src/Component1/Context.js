import React, { createContext, useEffect, useState } from "react";

const mes = createContext()

const AppProvider = ({children}) =>{

    const [item ,setItem] = useState([])
    const [loading , setLoading] = useState(true)
    const [search , setSearch] = useState("iron_man")
      
    const getApi = async() =>{
        try{
            // const data = await fetch(`http://www.omdbapi.com/?apikey=ae2358d0&s=titanic`)
            const data = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`)
            const result = await data.json()
            console.log(result)
            if(result.Response === "True"){
                setItem(result.Search)
                setLoading(false)
            }
        }
        catch(error){console.log(error)}
    }
    useEffect(() => {
        const TimeOut = setTimeout(()=>{
            getApi()
        },2000)

        return () =>{clearTimeout(TimeOut)}
    }, [search])
    
    return <mes.Provider value={{item, setSearch ,loading}}>
        {children}
    </mes.Provider>
}
export {mes , AppProvider}


