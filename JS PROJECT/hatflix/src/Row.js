import React from 'react'
import axios from './axios';
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

import './Row.css';
const base_url = "http://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    const opts = {
        height: "390",
        width: "100%",
        playerVars: { autoplay: 1, },
    };
    const handleClick = (movie) => {
        if (trailerUrl)
            setTrailerUrl("");
        else {
            movieTrailer(`${movie?.name}` || "")
                // http://api.themoviedb.org/3/movie/550/videos?api_key=7f1fe0c0eab2837e04e3e84cb52e1dc9
                .then(async function fetchyt() {
                    const urlParams = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=7f1fe0c0eab2837e04e3e84cb52e1dc9`);
                    console.table(urlParams.data.results);
                    console.table(movie)
                    let i = 0;
                    while (urlParams.data.results !== null) {
                        if (urlParams.data.results[i].type === "Trailer")
                            setTrailerUrl(urlParams.data.results[i].key);
                        i++;
                    }
                }).catch((error) => console.log(error));
        }
    };
    return (
        <div>
            <div className="row">
                <h2>{title}</h2>

                <div className="row__posters">{
                    movies.map(movie => (
                        <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            alt={movies.name} className={`row__poster ${isLargeRow && "row__posterLarge"}`} />
                    ))
                }

                </div>
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>

    )
}

export default Row
