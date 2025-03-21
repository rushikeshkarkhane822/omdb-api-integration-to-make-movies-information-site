import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import Search from './Search'
import Loading from './Loading'
import axios from 'axios'
function Results() {
  const { term, type } = useParams()
  const navigate = useNavigate()
  const [loading, setloading] = useState('loading')
  const [searchdata, setsearchdata] = useState(null)
  const getmoviesstart = async function (termm) {
    const getm = await axios.get('https://www.omdbapi.com/?apikey=[your api key]&s=' + termm + `${(type && type != '') ? `&type=${type}` : ''}`)
    if (getm) {
      setloading(false)
      setsearchdata(getm.data)
    }
    else {
      navigate("/")
    }
  }
  useEffect(() => {

    getmoviesstart(term)
  }, [term, type])
  return (
    <>
      <Search></Search>
      <div className="m-7">

        <div className="flex text-2xl font-bold">Results For : <p className="text-2xl font-medium ml-2"> {term}</p></div>
        {loading ? <Loading></Loading> :

          <>
            {searchdata.Response == "False" ? <p>No movies found</p> : <>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 m-5">
                {searchdata.Search.map((mo) => (<>
                  <div>
                    <Link to={'/movie/' + mo.imdbID}>

                      <img className="h-[60vh]  max-w-full rounded-lg" src={mo.Poster} alt="" />
                    </Link>
                  </div>

                </>))}

              </div>
            </>}
          </>}
      </div>

    </>

  )
}

export default Results