import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Search() {
    const navigate = useNavigate()
    const [searchinput, setsearchinput] = useState('')
    const [dropdownvalue, setdropdownvalue] = useState('all')
    return (
        <>

            <div className="m-5">

                <form className="mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex">
                        <div className="relative">
                            <select id="countries" onChange={(e)=>{setdropdownvalue(e.target.value)}} class=" text-center absolute top-0 left-0 z-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-bl-lg rounded-tl-lg focus:ring-blue-500 focus:border-blue-500 block w-min py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Select Type
                                <option value="movie" selected>All</option>
                                <option value="movie" >Movie</option>
                                <option value="series">Series</option>
                                <option value="episode">Episode</option>
                            </select>
                        </div>
                        <div className="relative w-full">
                            <input type="search" onChange={(e) => setsearchinput(e.target.value)} id="search-dropdown" className=" pl-28 rounded-bl-lg rounded-tl-lg block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-slate-500" placeholder="Search Movies" required />
                            <button type="submit" onClick={() => navigate('/results/' + searchinput + `${dropdownvalue != 'all' ? '/' + dropdownvalue : ''  }` )} className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-slate-700 rounded-e-lg border border-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}

export default Search