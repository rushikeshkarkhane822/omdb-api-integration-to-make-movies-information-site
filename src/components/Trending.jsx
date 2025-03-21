import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import modatasa from './movies.json'
import { Link } from 'react-router'
function Trending() {
    const [movies, setmovies] = useState('loading')
    const getm = async () => {
        const wordlist = [
            "Inception", "Titanic", "Avatar", "The Matrix", "Gladiator",
            "Shawshank Redemption", "The Dark Knight", "Interstellar", "The Godfather", "Forrest Gump"
        ];
        const getmo = await axios.get("https://www.omdbapi.com/?apikey=[your api key]&s=" + wordlist[Math.floor(Math.random() * wordlist.length)])
        if (getmo) {
            setmovies(getmo.data)
        }
        else {
            setmovies('loading')
        }
    }
    const getmosa = async () => {
        setmovies(modatasa)
    }
    useEffect(() => {
        //call from api
        getm()
        //this is function to test 
        //   getmosa()
    }, [])
    return (
        <>
            {movies != 'loading' ? <>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 m-5">
                    {movies.Search.map((mo) => (<>
                        <div>
                            <Link to={'/movie/' + mo.imdbID}>

                                <img className="h-[60vh]  max-w-full rounded-lg" src={mo.Poster} alt="" />
                            </Link>
                        </div>

                    </>))}

                </div>

            </> : <><Loading></Loading></>}
        </>
    )
}

export default Trending
