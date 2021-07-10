import React from 'react'
import axios from './axios';
import { useState ,useEffect} from 'react';
function Row({title}) {
 const [movies, setMovies] = useState([]);
 useEffect(() => {
     async function fetchData(){
         const request=await axios.get(fetchUrl);
         console.log(request);
         return request;
     }
     fetchData();
 }, [movies]);
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row
