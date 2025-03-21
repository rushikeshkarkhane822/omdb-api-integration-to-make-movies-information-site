import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Search from './Search'
import Loading from './Loading'
import axios from 'axios'
function MovieDetails() {
  const [resdata, setresdata] = useState('')
  const [loading, setloading] = useState('loading')
  const { title } = useParams()
  const getmoviedetails = async function (termm) {
    const getm = await axios.get('https://www.omdbapi.com/?apikey=[your api key]&i=' + termm)
    if (getm) {
      setloading(false)
      setresdata(getm.data)
    }
    else {
      navigate("/")
    }
  }
  useEffect(() => {
    getmoviedetails(title)
  }, [title])
  return (
    <>
      <Search></Search>
      {loading != 'loading' ? <>

        <div className="m-7">

          <div className="flex">
            <div>
              <img className="h-[75vh] w-[50vw]  rounded-lg" src={resdata.Poster} alt="" />
            </div>
            <div className="details px-3 h-[75vh] overflow-y-scroll scrollbar-hidden">
              <div className="max-w-3xl mx-auto p-6 bg-slate-50 dark:bg-slate-900 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">{resdata.Title}</h1>
                    <div className="flex flex-wrap gap-3 items-center text-slate-600 dark:text-slate-400">
                      <p className="text-xl font-semibold">{resdata.Year}</p>
                      <span className="text-slate-400">•</span>
                      <p className="text-lg">{resdata.Runtime}</p>
                      <span className="text-slate-400">•</span>
                      <p className="text-lg">{resdata.Genre}</p>
                    </div>
                  </div>

                  <div className="text-slate-800 dark:text-slate-200">
                    <p className="text-lg">Released: <span className="font-medium">{resdata.Released}</span></p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Plot</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{resdata.Plot}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Cast</h2>
                      <p className="text-slate-700 dark:text-slate-300">{resdata.Actors}</p>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Director & Writers</h2>
                      <p className="text-slate-700 dark:text-slate-300">Directed by {resdata.Director}</p>
                      <p className="text-slate-700 dark:text-slate-300">Written by {resdata.Writer}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Language</h3>
                      <p>{resdata.Language}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Country</h3>
                      <p>{resdata.Country}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Box Office</h3>
                      <p>{resdata.BoxOffice}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Ratings</h2>
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-200 dark:bg-slate-700 px-3 py-2 rounded">
                        <p className="text-slate-900 dark:text-slate-100 font-medium">IMDb: {resdata.imdbRating}/10</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">({resdata.imdbVotes} votes)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h1 className="text-4xl font-bold dark:text-slate-300">{resdata.Title}</h1>
          <p className="text-xl font-semibold dark:text-slate-300">Year : {resdata.Year}</p>
          <p className="text-xxl font-light dark:text-slate-200">Released : {resdata.Released}</p> */}
            </div>
          </div>
        </div>
      </> : <><Loading></Loading></>}
    </>
  )
}

export default MovieDetails