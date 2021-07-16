import { React, useEffect, useState } from 'react';
import './Banner.css'
import axios from './axios';
import requests from './requests';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const opts = {
        padding: "200",
        height: "500",
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
            <header className="banner" style={
                {
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center center",

                }
            }>
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}

                    </h1>
                    <div className="banner__buttons">
                        <button className="banner__button" onClick={() => handleClick(movie)} > Play Trailer</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">
                        {truncate(movie?.overview, 150)}

                    </h1>
                </div>
                <div className="banner--fadeBottom"></div>

            </header >
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} </div>
    )
}

export default Banner
