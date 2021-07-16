import React from 'react'
import axios from './axios';
import { useState, useEffect } from 'react';

import './Row.css';
const base_url = "http://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    console.table(movies);
    return (
        <div>
            <div className="row">
                <h3>{title}</h3>

                <div className="row__posters">{
                    movies.map(movie => (
                        <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            key={movie.id} alt={movies.name} className={`row__poster ${isLargeRow && "row__posterLarge"}`} />
                    ))
                }

                </div>
            </div>
        </div>
    )
}

export default Row
